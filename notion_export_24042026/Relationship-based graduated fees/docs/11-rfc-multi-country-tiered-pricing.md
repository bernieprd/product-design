# RFC: Multi-Country Tiered Pricing for Alternative Monetization

**URL:** https://roverdotcom.atlassian.net/wiki/spaces/TECH/pages/5941166099  
**Author:** Dan Neciu | **Last modified:** Apr 29, 2026

---

**Author(s):** Dan Neciu

**Date:** April 7, 2026

**Reviewers / Impacted Team(s):**

* [Sitter Experience](https://roverdotcom.atlassian.net/people/team/14d4ab25-0734-4b83-8e0d-8c2f9d89097c-74) (Dan Neciu, Alessio Romano, Alexandra Donchenko, Anna Gruszka, Bernardo Prudêncio, Claudiu Burdun, Danilo Gómez, Gilat Blumberger, Igor Kuznietsov, Javier Medina Diaz, Joshua Ferriday, Luca Barone, Marius Macean, Mégane Martinez, Paolo Brandi)

## Summary

Move the tiered pricing configuration from a hardcoded Python constant to a database model keyed by country code, enabling different tier thresholds and rates per country.

Also moving the public-facing "Long Term Relationships on Rover" page to a new URL with country-prefix (`/{country_code}/long-term-relationships-on-rover/`) with a new per-country API endpoint.

## Links

* Design spec: `docs/different-tiers-per-country/2026-04-07-multi-country-tiered-pricing-design.md`
* Current tiers constant: `src/aplaceforrover/conversations/take_rates/constants.py`
* Current gate logic: `src/aplaceforrover/services/utils.py` (`is_rollout_alt_monetisation`)
* Public page: `src/frontend/react-lib/src/pages/long-term-relationships-on-rover/LongTermRelationshipsOnRover.tsx`
* Jira epic new EPIC: https://roverdotcom.atlassian.net/browse/DEV-146068
* Jira old epic: https://roverdotcom.atlassian.net/browse/DEV-136407
* Previous RFC: https://roverdotcom.atlassian.net/wiki/spaces/TECH/pages/5604704369
* 1 Pager: https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5044109324
* Previous Backend Exploration: https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5347541036
* **POC PR:** https://github.com/roverdotcom/web/pull/92457

## Overview

### Purpose & Goals

The alternative monetization system (tiered take rates based on cumulative GBV within provider-client relationships) is currently hardcoded for Canada only.

This work moves tier configuration to the database to decouple it from hardcoded constants and provider groups, making future multi-country expansion straightforward.

* **P0:** Tier thresholds and rates configurable per country via Django admin, without code deploys
* **P0:** Public "Long Term Relationships" page shows country-appropriate tier values
* **P0:** Existing Canada tiered pricing continues to work identically
* **P0:** Support multiple tier configurations per country via provider group overrides — We keep the provider group as a gate to make sure we don't leak the experiment outside of our control
* **P1:** Clean separation between tier eligibility (Statsig flag + provider group) and tier values (country-based DB config)

### Background

**Current state:** Three tiers are defined as a Python constant tuple in `conversations/take_rates/constants.py`:

| Tier | GBV Range | Take Rate |
| --- | --- | --- |
| Tier 1 | $0 – $499 | 30% |
| Tier 2 | $499 – $999 | 15% |
| Tier 3 | $999+ | 10% |

These values are imported in 13 production files and ~10 test files across the backend: conversation managers, task processors, notification builders, browser notification builders, provider profile views, API views, serializers, mappers, and admin.

**Eligibility is gated by:**

1. Provider must be in the `alternative-monetization-2026-canada` provider group
2. Statsig gate `rollout_alt_monetisation` must be active for the provider's postal code

**Problem 1 — No multi-country support:** Adding a second country requires either duplicating the constant or parameterizing all 23 import sites (13 production + ~10 test). The constant approach doesn't scale.

**Problem 2 — Tier values need to vary by country.** Different countries will have different tier thresholds and rates (different currencies, different market dynamics). The current single constant has no concept of country — it's one set of values used everywhere.

**Problem 3 — Public page shows Canada tiers to everyone.** The `GET /api/v7/tiers/` endpoint defaults to CAD for unauthenticated users. There's no mechanism to show country-appropriate tiers on the public page.

**Key terms:**

* **GBV** — Gross Booking Value
* **Take rate** — Rover's fee percentage on a booking
* **Tier** — A GBV bracket with an associated take rate
* **Alternative monetization** — The tiered pricing model where take rates decrease as cumulative GBV increases within a provider-client relationship

## High-Level Design Proposal

### Data Model

Two new models in the `conversations` app:

`TierConfiguration` — one or more rows per country:

* `country_code` (CharField, indexed, NOT unique) — ISO country code. Multiple configs per country allowed.
* `provider_group` (FK to ProviderGroup) — no longer optional provider group override. We need this to make sure we are not leaking the experiment to other people
* `is_active` (BooleanField) — enable/disable without deleting
* `name` (CharField) — human-readable label
* `slug` (CharField) — configuration identifier (e.g., "50_percent_tiers")

**Custom manager:** `TierConfiguration.objects` uses a custom manager that defaults to `is_active=True` filtering, following the `CouponEligibilityManager` pattern in `promos/managers.py`. This ensures no code path accidentally queries inactive configs.

Use `TierConfiguration.objects.include_inactive()` for admin, cache invalidation, and migrations that require inactive records.

The **default** tier configuration for a country is designated in the corresponding `CountryConfigurationX` class via a `default_tier_configuration` slug attribute (e.g., `CountryConfigurationCA.default_tier_configuration = "canada_default_tiers"`). This follows the same pattern used for `default_provider_group` and ensures consistency with how other country-level defaults are managed.

---

`TierThreshold` — one row per tier within a configuration:

* `tier_configuration` (FK) — parent configuration
* `slug` (CharField) — tier identifier (e.g., "ca_tier_1")
* `tier_name` (CharField) — translatable display name
* `start` (DecimalField) — GBV range start (inclusive)
* `end` (DecimalField, nullable) — GBV range end (exclusive), null = infinity
* `rate` (DecimalField) — take rate as decimal
* `sort_order` (PositiveSmallIntegerField) — ordering

---

`ConversationTakeRateBreakdownItem` - modify to add a new column

* tierConfiguration (ForeignKey) – to our new tier configuration model. We need to backfill past take rates.
* Deprecate tier_slug as it was using a hardcoded string

A `get_tiers()` method on `TierConfiguration` converts DB rows into the existing `TakeRateTier` dataclass tuples, so `TieredFeeCalculator` requires zero changes.

*Currently, the start of the last tier is showing +1 on the frontend. For example, we set 999 on the tier, but we should set 1000+ on the clients. We need to keep this logic across all tiers, or include an optional checkbox for when to do it.

### Tier Resolution

A helper function with a two-level resolution strategy:

`get_tiers_for_person(person)` — used in all authenticated/booking contexts:

1. Get the person's country via `person.country_configuration.country_code`
2. If the person has a provider profile, check for an active `TierConfiguration` matching (country, `person.provider_profile.provider_group`)
3. If none return None, this person should not see the tiers

Cache results with 12 hours TTL keyed by `tier_config:{country_code}:{provider_group_id or 'default'}`, invalidated on model save of both `TierConfiguration` and `TierThreshold`. On save, invalidate all cache keys for the config's country_code (both group-specific and default) to avoid stale fallthrough.

All 13 production files that currently import the `tiers` constant will instead call `get_tiers_for_person(person)`. Currency is not stored on the model — it is derived at serialization time via `get_country_configuration(country_code).currency_code`.

**Why two levels?** We want an extra gate to prevent the tiers from leaking outside the experiment. So the combo of country + provider group will allow for multiple tiers per country, but also make sure that a specific provider group gets the tiers.

This will also help us maintain the current take rate for some provider groups, such as those in California or old Dog Buddy provider groups.

### Eligibility Gate (Updated)

`is_rollout_alt_monetisation(person)` controls whether a provider uses tiered pricing. It now checks:

1. Provider has a provider profile (User is a sitter)
2. An active `TierConfiguration` exists for the provider's country (via `has_active_tier_config(country_code)`) – **we want to keep the provider group check as an extra gate, so the experiment does not leak out**
3. Statsig gate `rollout_alt_monetisation` is active for the provider's postal code (As we will still run the experiment in a few cities to start with)

The provider group slug check needs to include the new provider group for usa as well. Eligibility is now determined by the presence of tier configuration data in the database — if a country has an active TierConfiguration, providers in that Tier Configuration are eligible (subject to the Statsig gate).

The `has_active_tier_config(country_code)` helper checks whether the country's `CountryConfiguration` has a `default_tier_configuration` attribute and whether the referenced `TierConfiguration` exists and is active. The result is cached for 12 hours, invalidated on `TierConfiguration` save via the same `post_save` signal used for tier data caching.

### API Changes

**Existing endpoint (unchanged contract):**

* `GET /api/v7/tiers/` — for authenticated users, resolves country from `request.user.person.country_configuration.country_code`

We need to change the current endpoint from public to auth-protected, check the person's country, and return the tiers assigned to that person.

Return status 204 if the person's country and provider group don't have a tier system.

### Frontend Changes

**Route changes:**

* Change to route: `/long-term-relationships-on-rover/`

**Auth changes:**

* `LongTermRelationshipsOnRover.tsx` currently is a public route; we need to move it behind auth. Once done, the above endpoints/tiers would return the correct tier data based on the user's country and provider group.
* We need to handle the case where the API returns a 204 response.

**Authenticated pages** (RelationshipPage, AlternativeMonetizationInterstitial) continue using the existing `useApiTiersRetrieve()` hook, which resolves country server-side.

### Service Types in Scope

Tiered pricing only applies to **browsable service types**: overnight boarding, house sitting, dog walking, drop-in visits, and doggy day care (`BROWSABLE_SERVICE_TYPES` in `services/constants.py`).

**Grooming and training are excluded** — they are not in `BROWSABLE_SERVICE_TYPES` and are already filtered out at multiple levels:

* `CumulativeGrossBookingValueCalculator.calculate_internal_gbv()` filters stays by `conversation__service_type__in=BROWSABLE_SERVICE_TYPES`
* `BaseRelationshipProgressMapper._conversations` (used by `EarningsMapper` for pending earnings) filters by `service__service_type__slug__in=BROWSABLE_SERVICE_TYPES`
* `process_deposited_booking_task` skips snapshot updates for non-browsable service types

No additional filtering is needed for this project.

### What Does NOT Change

* `TieredFeeCalculator` — stateless, already takes `tiers` as a parameter
* `ConversationTakeRateSnapshot` model
* `CumulativeGrossBookingValueCalculator`
* Provider group assignment flow

### Provider Group Assignment (Updated for Multi-Country)

The provider group assignment flow **does** change. Today, three code paths hardcode the `alternative-monetization-2026-canada` provider group:

1. **SSU (Sitter Sign Up)** — `get_initial_provider_group()` in `services/models.py` assigns `PROVIDER_GROUP_SLUGS.alternative_monetization_2026_canada` when `should_allow_sitters_to_alt_monetization()` returns `True`, regardless of the sitter's country.
2. **Country change** — `change_provider_group_on_user_changing_country()` in `account/receivers.py` hardcodes `PROVIDER_GROUP_SLUGS.alternative_monetization_2026_canada` when the Statsig gate passes.
3. **Zip code change** — `change_provider_group_on_sitter_zip_code_change()` in `account/receivers.py` only runs for `country_code == "CA"` and assigns the Canada group.

**Required changes:** A new helper `get_alt_monetization_provider_group_slug(country_code)` maps country codes to the correct alt-monetization provider group slug (e.g., `CA` → `alternative-monetization-2026-canada`, `US` → `alternative-monetization-2026-usa`). All three assignment paths use this helper instead of hardcoding. The zip code change receiver is generalized to run for any country that has an alt-monetization provider group, not just `CA`.

The `alternative-monetization-2026-usa` provider group must be created (constant + DB migration) before US launch. The existing `prod_migrate_sitters_to_alt_monetization` management command already accepts `--country-code` and `--target-group-slug` flags, so it can be used as-is for US bulk migration.

### What Changes Minimally

* `TakeRateTier` dataclass — adds optional `tier_configuration_id` and `tier_threshold_id` fields (default `None`) so FKs flow naturally through the calculation pipeline
* `ConversationTakeRateSnapshot` — adds a nullable `tier_configuration` FK to `TierConfiguration`. Records which country's tiers the snapshot was created under. This is the mechanism for preserving tier status during cross-country moves.
* `ConversationTakeRateBreakdownItem` — adds a nullable `tier_threshold` FK to `TierThreshold`. Identifies which specific tier (1, 2, 3) this line item corresponds to, replacing the string-based `tier_slug` lookup. `tier_slug` is kept for backward compatibility during migration.
* Snapshot recreation paths (`update_snapshot_on_price_change`, `update_undeposited_booking_snapshots`) — when recreating a snapshot, use the original `tier_configuration` from the snapshot instead of re-resolving from the provider's current country

### Payments Impact Assessment

This change does **not** alter how we make money or add a new revenue stream. It restructures where existing tier configuration is stored (code constant → DB) and how it's resolved (global → per-country). The actual fee calculation (`TieredFeeCalculator`) and payment flow (`ProviderPayoutAdjustmentDeposit`) are unchanged.

* Does it change the way we make money? **No** — same tiered fee calculation, just different source for configuration.
* Does it add a new way to make money? **No** — enables expansion of the existing model to new countries.
* Are you adding a new payment method? **No.**
* Does it have sales tax implications? **No.**
* Will you impact the booking flow or touch the booking engine? **Minimal** — `managers.py` changes how tiers are fetched, not how they're applied.

## Risks & Mitigations

### Risk 1: DB query on every booking creation

**Impact:** Performance regression if tier lookup adds latency to the booking flow.

**Mitigation:** Cache `get_tiers_for_country()` with 12 hours TTL. Tier configurations change very rarely (business config, not user data). Cache is invalidated via `post_save` signal. Worst-case on a cache miss: one simple indexed query.

### Risk 2: Missing tier configuration for a country

**Impact:** A provider in a country without a `TierConfiguration` row would get the legacy Canada constant, which has wrong thresholds/currency.

**Mitigation:** `get_tiers_for_country()` falls back to the legacy constant and logs a warning. The `is_rollout_alt_monetisation` gate prevents tiered pricing from activating in countries without proper setup. The fallback is a safety net, not a feature.

### Risk 3: Backward compatibility of existing snapshots

**Impact:** Historical `ConversationTakeRateBreakdownItem` rows reference `tier_slug` values like `"canada_tier_1"`. If DB slugs differ, notification lookups could fail.

**Mitigation:** Migration seeds DB with identical slugs to the current constant. Slug format convention: `{country_code}_tier_{n}`. The `get_tier_from_slug()` notification has been updated to query by slug across all configurations, with a fallback to a constant.

### Risk 4: Admin misconfiguration

**Impact:** Ops creates a tier configuration with overlapping ranges, missing tiers, or rates > 1.0.

**Mitigation:** Model validation on `TierThreshold.clean()` and admin form validation:

* Ranges must be contiguous (each tier's start = previous tier's end)
* Exactly 3 tiers required per configuration*
* Rates between 0 and 1
* Last tier's end must be null (infinity)

*We might change this in the future, but it will require frontend changes. Until the frontend/clients have been updated, we should not allow fewer than 3 tiers

### Risk 5: Cross-country tier gaming

**Impact:** A provider changes their country (e.g., CA → ES) but continues booking stays with clients from relationships where GBV was accumulated under the old country's tier structure.

**Context:** Changing countries is not a self-service operation — it is done by CX. CX policy does not allow country changes when the sitter has active bookings. This is the primary defense.

**Mitigation — Tier preservation via** `tier_configuration` FK on snapshot: Each `ConversationTakeRateSnapshot` stores a FK to the `TierConfiguration` that was active when the snapshot was created. When a snapshot is recreated, the system uses the **original** tier configuration from the snapshot rather than resolving it from the provider's current country. This ensures:

* **Existing unpaid bookings** created in country A are always charged using country A's tiers, even if the provider later moves to country B
* **New bookings** created after the move use country B's tiers — this is correct, as the new relationship starts fresh in the new country

**Monitoring:** Emit a Datadog counter metric (`alt_monetization.cross_country_booking`) when a mismatch is detected between a snapshot's `tier_configuration.country_code` and the provider's current country during deposit processing.

## How to Configure Tiers for a New Country

### Prerequisites

1. The country must have an entry in `CountryConfigurationManager` (i18n/configuration.py) with a valid `currency_code`.
2. The country's `CountryConfigurationX` class must have a `default_tier_configuration` attribute set to the name of the default `TierConfiguration` (this requires a code deploy).
3. The Statsig gate `rollout_alt_monetisation` must be configured to target the new country's postal codes before tiered pricing takes effect on bookings.

### Option A: Django Admin

#### Step 1: Django Admin — Create TierConfiguration

1. Go to **Django Admin > Conversations > Tier Configurations > Add**
2. Fill in:

    * **Country code:** 2-letter ISO code (e.g., `ES`)
    * **Name:** Human-readable label (e.g., "Spain 2026 Tiers")
    * **Is active:** Leave unchecked until ready to go live
    * **Provider group:** Leave blank (default config)

3. Save the TierConfiguration
4. Add 3 TierThreshold rows via the inline (or separately under **Tier Thresholds > Add**):

| Field | Tier 1 | Tier 2 | Tier 3 |
| --- | --- | --- | --- |
| **slug** | `es_tier_1` | `es_tier_2` | `es_tier_3` |
| **tier_name** | `Tier 1` | `Tier 2` | `Tier 3` |
| **start** | `0.00` | `499.00` | `999.00` |
| **end** | `499.00` | `999.00` | _(leave blank — null means infinity)_ |
| **rate** | `0.3000` | `0.1500` | `0.1000` |
| **sort_order** | `1` | `2` | `3` |

5. When ready to go live, edit the TierConfiguration and set **Is active to true**.

#### Step 2: Code Deploy — Register Default in CountryConfiguration

Add `default_tier_configuration` to the country's configuration class in `i18n/configuration.py`:

```python
class CountryConfigurationES(CountryConfigurationAbstractEU):
    # ... existing attributes ...
    default_tier_configuration = "Spain 2026 Tiers"  # must match TierConfiguration.name
```

Deploy this change. After deployment, the resolution helpers will find the default config for Spain.

### Option B: Django Shell

```python
from conversations.take_rates.models import TierConfiguration, TierThreshold
from decimal import Decimal

# 1. Create the configuration
config = TierConfiguration.objects.create(
    country_code="ES",
    name="Spain 2026 Tiers",
    is_active=False,  # flip to True when ready
)

# 2. Create the tier thresholds
TierThreshold.objects.bulk_create([
    TierThreshold(
        tier_configuration=config,
        slug="es_tier_1",
        tier_name="Tier 1",
        start=Decimal("0.00"),
        end=Decimal("499.00"),
        rate=Decimal("0.3000"),
        sort_order=1,
    ),
    TierThreshold(
        tier_configuration=config,
        slug="es_tier_2",
        tier_name="Tier 2",
        start=Decimal("499.00"),
        end=Decimal("999.00"),
        rate=Decimal("0.1500"),
        sort_order=2,
    ),
    TierThreshold(
        tier_configuration=config,
        slug="es_tier_3",
        tier_name="Tier 3",
        start=Decimal("999.00"),
        end=None,  # infinity
        rate=Decimal("0.1000"),
        sort_order=3,
    ),
])

# 3. Verify
config.get_tiers()
# => (TakeRateTier(slug='es_tier_1', ...), TakeRateTier(slug='es_tier_2', ...), TakeRateTier(slug='es_tier_3', ...))

# 4. Activate when ready
config.is_active = True
config.save()  # cache is automatically invalidated via post_save signal
```

### Validation Rules

* Slug format convention: `{country_code}_tier_{n}` (e.g., `es_tier_1`)
* Ranges must be contiguous: each tier's `start` must equal the previous tier's `end`
* Last tier's `end` must be `None` (infinity)
* Rates must be between 0 and 1 (e.g., `0.3000` = 30%)
* Exactly 3 tiers per configuration

### Verification

After activating, verify the public API returns the correct tiers:

```
GET /api/v7/tiers/es/
```

And verify eligibility for a test provider in that country:

```python
from services.utils import is_rollout_alt_monetisation
from people.models import Person

person = Person.objects.get(opk="<test_provider_opk>")
is_rollout_alt_monetisation(person)  # should return True if Statsig gate is also active
```

## Alternatives Considered

### Alternative 1: Tiers on ProviderGroup model

**What:** Add a JSONField or related `ProviderGroupTier` model directly on `ProviderGroup`, with a boolean flag `has_tiered_pricing`.

**Why discarded:** Historically, provider groups were stable — they had not been updated for years until recently. However, the current wave of fee structure experimentation (GB/ES fee tests, Dogbuddy migration groups) has introduced provider group reassignments, and this pattern is likely to continue as experimentation expands. If tier configuration were attached to provider groups, any future group reassignment for an unrelated experiment would silently change the provider's tier structure.

**Risk of getting it wrong:** Medium-High — would work today while group changes are infrequent, but would surface as user-facing inconsistencies whenever fee experimentation triggers group migrations.

### Alternative 2: CountryConfigurationBase class properties

**What:** Add tier configuration directly to the existing Python `CountryConfigurationBase` class hierarchy in `i18n/configuration.py`. Each country class would declare tier thresholds as class attributes.

**Why discarded:** Tier thresholds are a numeric business configuration that product/ops may need to adjust without engineering involvement. Also, `configuration.py` is already 5000+ lines.

**Risk of getting it wrong:** Medium — would work correctly but create operational friction when expanding to new countries or adjusting thresholds.

### Alternative 3: Keep constant, parameterize by country

**What:** Expand `constants.py` to have a dictionary of `{country_code: tiers}` instead of a single `tiers` tuple.

**Why discarded:** Still requires code deploys to add/modify countries. Doesn't achieve the goal of being data-driven. Acceptable as a short-term solution, but it doesn't scale operationally.

**Risk of getting it wrong:** Low — simplest approach, but it creates tech debt.

### Design Decision: Default Tier Configuration via `CountryConfiguration`

**Decision:** The default tier configuration for each country is designated via a `default_tier_configuration` attribute on the corresponding `CountryConfigurationX` class, following the same pattern as `default_provider_group`. The `is_default` BooleanField has been removed from `TierConfiguration`.

**Why `CountryConfiguration` over `is_default`:**

1. **Consistency with existing patterns:** `default_provider_group` already uses this exact pattern.
2. **Code deploy is already required:** Adding a new country to Rover requires code changes regardless.
3. **No ambiguous state:** With `CountryConfiguration`, there is exactly one default per country by construction.
4. **Clearer separation of concerns:** `TierConfiguration` stores tier data (thresholds, rates). Which config is the "default" for a country is a country-level routing decision.

**Trade-off acknowledged:** Changing the default tier configuration for an existing country requires a code deploy, whereas `is_default` could be toggled in the admin. We accept this because changing a country's default tier config is a rare, high-impact operation that benefits from code review.

## Implementation Tickets

| # | Jira | Ticket | Depends On |
| --- | --- | --- | --- |
| 01 | [DEV-146698](https://roverdotcom.atlassian.net/browse/DEV-146698) | **Tier Models & Admin** — `TierConfiguration`/`TierThreshold` models, migration, Django admin | None |
| 01b | [DEV-146699](https://roverdotcom.atlassian.net/browse/DEV-146699) | **Tiers Admin Label Warning** — Help text on `TierThreshold.start` clarifying the +1 display offset on clients | 01 |
| 01c | [DEV-146700](https://roverdotcom.atlassian.net/browse/DEV-146700) | **Tier Admin Validation** — Contiguous ranges, exactly 3 tiers, first starts at 0, last end null, rates in (0,1) | 01 |
| 01d | [DEV-146701](https://roverdotcom.atlassian.net/browse/DEV-146701) | **Create Statsig Gate** — `rollout_db_driven_tiers` function in `flags.py` and gate in Statsig console (default OFF) | None |
| 01e | [DEV-146702](https://roverdotcom.atlassian.net/browse/DEV-146702) | **Tiers Admin Permissions** — Roles and permissions for TierConfiguration/TierThreshold admin (placeholder) | 01 |
| 02 | [DEV-146703](https://roverdotcom.atlassian.net/browse/DEV-146703) | **Tier Resolution Helpers** — `get_tiers_for_person()`, `get_tiers_for_country()`, 12-hour caching, cache invalidation signals | 01 |
| 03 | [DEV-146704](https://roverdotcom.atlassian.net/browse/DEV-146704) | **Seed Canada Tier Data** — Data migration seeding CA config matching legacy constant | 01 |
| 03a | [DEV-146705](https://roverdotcom.atlassian.net/browse/DEV-146705) | **Add `tier_configuration` FK to `ConversationTakeRateBreakdownItem`** — Nullable FK, update `TakeRateTier` dataclass, thread through `create_snapshot()`, simplify cross-country detection | 01, 03 |
| 03b | [DEV-146706](https://roverdotcom.atlassian.net/browse/DEV-146706) | **Backfill `tier_configuration` FK** — Management command to backfill existing records by joining `tier_slug` → `TierThreshold.slug` → `TierConfiguration` | 01, 03, 03a |
| 4a | [DEV-146707](https://roverdotcom.atlassian.net/browse/DEV-146707) | **Statsig Gate for DB Tier Resolution** — `rollout_db_driven_tiers` gate in `get_tiers_for_person`, `get_tiers_for_country`, `has_active_tier_config`; gate OFF = legacy constant, gate ON = DB lookup | 02, 01d |
| 4b | [DEV-146708](https://roverdotcom.atlassian.net/browse/DEV-146708) | **Migrate Production Files** — Replace tiers constant imports in 12 files, remove 3 unused imports, deprecate constant | 02, 03 |
| 5a | [DEV-146709](https://roverdotcom.atlassian.net/browse/DEV-146709) | **Statsig Gate for Eligibility Refactor** — Dual-path `is_rollout_alt_monetisation`: gate OFF = provider-group-slug check, gate ON = `has_active_tier_config` | 4a |
| 5b | [DEV-146710](https://roverdotcom.atlassian.net/browse/DEV-146710) | **Eligibility Gate Refactor** — `has_active_tier_config()` replaces provider-group slug check in `is_rollout_alt_monetisation()` | 01, 03 |
| 06 | [DEV-146711](https://roverdotcom.atlassian.net/browse/DEV-146711) | **Public API Endpoint** — `GET /api/v7/tiers/{country_code}/` (AllowAny) | 02, 03 |
| 07 | [DEV-146712](https://roverdotcom.atlassian.net/browse/DEV-146712) | **Frontend Country-Prefixed Page** — New route, Orval hook, 301 redirect from old URL | 06 |
| 08 | [DEV-146713](https://roverdotcom.atlassian.net/browse/DEV-146713) | **Cross-Country Tier Preservation** — Snapshot recreation uses original `tier_configuration` FK; Datadog metric for country mismatch monitoring | 01, 03, 03a |
| 09 | [DEV-146714](https://roverdotcom.atlassian.net/browse/DEV-146714) | **Update Hardcoded Tiers Page Links** — Replace `rover.com/long-term-relationships-on-rover` with country-prefixed URL in 2 components | 07 |
| 10 | [DEV-146715](https://roverdotcom.atlassian.net/browse/DEV-146715) | **Tiers Page Unavailable Country Fallback** — Show "not yet available in your country" when API returns 404 for unconfigured country | 06, 07 |
| 11 | [DEV-146727](https://roverdotcom.atlassian.net/browse/DEV-146727) | **Launch in the US Checklist** — Step-by-step runbook: create US TierConfiguration, add `CountryConfigurationUS.default_tier_configuration`, activate, add postal codes to Statsig gate | All (01–10), 12 |
| 12 | [DEV-146764](https://roverdotcom.atlassian.net/browse/DEV-146764) | **Pre-Calculate Cumulative GBV for Country Launch** — Add `--country-code` flag to `prod_calculate_gbv_for_service_relationships`, run before Statsig gate enablement | 01 |
