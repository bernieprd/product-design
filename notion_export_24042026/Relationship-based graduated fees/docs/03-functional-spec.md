# Func. spec · Relationship based graduated take rate

**URL:** https://roverdotcom.atlassian.net/wiki/spaces/PSD/pages/5523570713  
**Author:** Mégane Martinez | **Last modified:** Apr 29, 2026

---

# Deliverables

1. Canada geos-split test
2. US geo split-test
3. UK MVP?

# Product Specs

Figma is the source of truth for all design details

## Deliverable 1 · Canada geos-split test

[https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?node-id=4451-28079&t=3xeodHxBhPj120ce-4](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?node-id=4451-28079&t=3xeodHxBhPj120ce-4) 

#### **User Story 1 · Core functionality**

**As a Sitter I want my Rover fees to decrease over time for clients that repeat with so that I'm better rewarded for my efforts.**

Acceptance Criteria:

* For sitters in the test geos, the sitter side fee for a given booking request depends on their total accumulated booking value with that specific client

    * Progress is based on the accumulated **service total amount** e.g the sitter's rate including the sitter side fee. The owner side fee and tips are excluded
    * Progress is based on **bookings for which a service deposit has been emitted:** completed bookings (or cancelled booking where a cancellation penalty applied)
    
        * Only bookings payed out in the test country currency count towards the progress
        

|  | **Start** | **End** | **%fee** |
| --- | --- | --- | --- |
| **Tier 1** | $0 | $499 | 30% |
| **Tier 2** | $500 | $999 | 15% |
| **Tier 3** | $1000 | - | 10% |

* When a service deposit is emitted for a given booking and the relationship has reached a new tier we update all none completed requests/bookings with the new applicable %fee
* For bookings that overlap several tiers we apply a pro-rated %fee that is the weighted average of the booking value that falls into each tiers and their corresponding %fee.
* At launch, all past bookings between an owner and sitter will be included in their progress and that progress will be visible to the sitter right away
* At launch, we not update existing requests and bookings, these will keep the 20% flat fee
* Owner side %fees are not impacted and remain a flat 11%
* When a sitter moves out from test geo any new booking will go back to the 20% flat fee

#### **User Story 2 · Contacts/Clients**

**As a Sitter I want to easily access a list of my existing clients so I can check my progress with each of them**

Acceptance Criteria: 

* **P0** For sitters in the test geos, the `Rebook` tab (Apps) will show the list of their contacts split by:

    * All their **clients** (pet owners they have/had at least one confirmed booking with)
    * All **Sitters** that they have had at least one confirmed booking with (a sitter may be an owner too) 
    * The tab should be renamed "Contacts"
    * On Web the "Contacts" page will be accessible from the more menu
    
* **P0** For each **client** in the list

    * We will display their picture, name, list of pets, number of confirmed bookings they had with that Sitter, total $ progress with that sitter, current relationship tier
    
        * If the relationship doesn't have any completed bookings yet we don't display any tier
        
    * Tapping/clicking on a client will open the `Relationship` page for that client (see User story 3)
    
* **P0** For each **sitter** in the list:

    * We will display their picture, name, location and the service type of the last booking they had together.
    * Tapping/clicking on a sitter will open the Sitter profile of the sitter
    
* **P0** Clients and sitters are displayed in alphabetical order by default
* **P0** If a user is blocked or their account is deleted they don't appear in the list
* **P0** Empty state:

    * When a sitter has never booked with a client nor another sitter the Contacts tab will display the empty state without the `Clients` / `Sitters` tabs
    * When a sitter has never booked with a client but has booked with at least one sitter the Contacts tab will display the empty state with the `Clients` / `Sitters` tabs
    * The empty state will have an image, a title and a blurb, a `Learn more` CTA that opens the interstitial
    
* **P1** Sitters can order by contact name, pet name, total bookings or total progress
* **P1** Sitters can search by client name, pet name, total bookings
* **P0** Owners (who are not sitters) will not see the new Contacts tab

#### **User Story 3 · Relationship page**

**As a Sitter I want to easily check my progress with my existing clients so I can understand how much earnings I can expect from this relationship in the future**

Acceptance Criteria:

* **P0** The relationship page summarises a unique owner + sitter relationship and its progress in the fee structure.
* **P0** The relationship page will be accessible from the following entry points:
    * The Contacts tab
    * The (new/RxN) Conversation page header - upon tapping/clicking the pet owner's picture or name
    * The (new/RxN) Conversation page menu on mobile apps and web
    * The booking level breakdown

* The relationship page will be divided in 5 sections (6 with the pets section):

1. **P0** The header will contain owner's name, photo and pets list, `Rebook` CTA, `Profile` CTA

2. The progress section will contain:
    * **P0** Heading with copy depending on relationship tier (new, tier 1, tier 2, tier 3)
    * **P0** A visual representation of the current relationship tier
    * **P0** A progress bar showing accumulated GBV (dark green = completed, light green = pending)
    * **P0** A banner with contextual message
    * **P0** A `learn more` CTA that opens the interstitial

3. **P0** The **upcoming** section with list of pending requests and upcoming/current bookings

4. **P0** The **complete** section with list of completed bookings

5. **P0** The **Archived** section with list of archived/expired requests and cancelled bookings without penalty

6. **P2** The pets section

#### **User Story 4 · System messages, banners and push progress updates**

**As a sitter I want to understand how a given request or booking contributes to that relationship's progress so that I can choose what to do next**

Acceptance Criteria:

* **P0** We will use **2 different channels**: a **system message** in the conversation screen and a **banner in the booking details** page
* The content depends on:
    * **P0** Progress is pending (new relationship, existing relationship with completed progress, reached tier 3)
    * **P0** Progress is complete (unlocked a tier, or added to progress without unlocking)
    * **P0** Push notifications when a service deposit is completed
    * **P0** Recurring relationship payment issues

#### **User Story 5 · Booking level earnings breakdown**

**As a Sitter I want to know how my earnings on a specific bookings are calculated based on the tiers system so I can better understand the new structure**

Acceptance Criteria:

* **P0** Accessible from the Your earnings link in the booking details ledger and modify request ledger
* Shows breakdown of earnings by fee tiers, including the request/booking subtotal and total earnings
* **P0** Two CTAs: primary takes sitter to relationship page, secondary closes the modal

#### **User Story 6 · Service settings**

Acceptance Criteria:

* **P0** Visual explanation of the tiered fee structure in the service settings page (expandable/collapsable)
* **P0** Copy below each rate input updated to show "earn between $X and $Y"
    * X = rate × (1 - Tier 1 fee)
    * Y = rate × (1 - Tier 3 fee)

#### **User Story 7 · Announcements**

**As a Sitter I want to know about the new fee structure as soon as possible**

Acceptance Criteria:

* **P0** Call out shown on the Daily dashboard (apps), Web dashboard, and payment history page
* Two versions: sitters with existing clients, sitters with no existing clients
* **P0** Interstitial with `Learn more` CTA (opens landing page) and `close` CTA
* **P0** Call-outs dismissed when sitter clicks `Learn more` from the interstitial

#### **User Story 8 · Landing page**

Acceptance Criteria:

* Landing page URL: rover.com/long-term-relationships-on-rover
* Localized in en-ca and fr-ca
* Carousel with 4 stages, FAQs with collapse/expand pattern
* Link to service fee help centre article
* Should not be indexed

**User Story 9 - Payment history**

* For all bookings in Pending earnings and Earnings sections, Stay price, Rover fees and Earnings should match the new fee model

## Roll out requirements

* This change will be rolled out as a geo split test using a feature gate

## Event stream

### Interstitial

1. New event when the educational interstitial opens: `graduated-fees-model-interstitial-opens`
2. New event when the sitter clicks on the `Learn more` CTA: `graduated-fees-model-interstitial-clicks`

### Relationship page

1. New event when the relationship page opens: `relationship_page_open`
2. New event when the user clicks on a request/booking card: `relationship_page_card_click`
3. New event when the user clicks on See more CTA: `graduated-fees-model-interstitial-opens`
4. New event when the sitter clicks on the `Rebook` CTA: `relationship_rebook_click`
5. New event when the sitter opens the Owner profile: `relationship_profile_click`

### Contacts

1. New event when the Contacts tab/page opens: `contacts_open`
2. New event when the user tap/clicks on a contact: `contacts_contact_click`
3. New event when sharing your profile: `contacts-click-share-your-profile`

### Service settings

1. New event when a sitter expands the tiers component: `graduated-fees-model-tiers-component-expands`
2. New event when a sitter clicks on `Learn more` from the tier component: `graduated-fees-model-tiers-component-click`

## Deliverable 2 · US geo-split test

In the US test, the graduated take model will work the same as in Canada plus country specific adjustments:

* The tiered structure will be country specific
* Training and grooming will be excluded and stay at the 20% flat fee

[https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?m=auto&node-id=18866-51821&t=cTqC361dmJvu9wOK-1](https://www.figma.com/design/m3qiV0B3gQ2LABv0jyVgy3/-DEV-136407--Graduated-take-rate?m=auto&node-id=18866-51821&t=cTqC361dmJvu9wOK-1)

**User story 11 - Core functionality**

US specific graduated structure:

|  | **Start** | **End** | **%fee** |
| --- | --- | --- | --- |
| **Tier 1** | $0 | $TBD | TBD% |
| **Tier 2** | $TBD | $TBD | TBD% |
| **Tier 3** | $TBD | - | TBD% |

* Training and grooming requests and bookings will not count towards relationship GBV
* Training and grooming requests and bookings will keep the 20% flat fee

**User story 12-18**: All core acceptance criteria from Canada test apply with US-specific adjustments including:
- Training/grooming excluded from tier progression
- Relationship page has separate Training and Grooming sections
- Landing page accessible only to logged-in users with out-of-pilot fallback version
- Announcements excluded for training/grooming-only providers
