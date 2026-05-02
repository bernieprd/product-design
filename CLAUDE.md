# Bernardo Prudêncio · Portfolio — Claude Code guide

## File architecture

This is a static HTML/CSS portfolio site hosted on GitHub Pages.

```
index.html              ← THE LIVE HOMEPAGE (canonical, what visitors see)
variant-e/index.html    ← Variant E copy (mirrors root, used for variant switcher)
variant-e/style.css     ← Shared stylesheet (used by BOTH index.html files)
variant-e/project-*.html
variant-a/, variant-f/, variant-o/   ← Experimental variants
resources/              ← Images and GIFs
bernardo.prd.en.2026.pdf
```

## Critical rule: always edit both index files

**`index.html` and `variant-e/index.html` are near-identical copies.**
The root file is the live site; the variant-e copy exists so the variant switcher
can link back to "E" as an option alongside A, F, O.

Whenever you change the homepage content or layout, update **both**:
- `/index.html`
- `/variant-e/index.html`

The stylesheet (`variant-e/style.css`) is shared — edit it once.

## Variants

| Variant | Status | Notes |
|---|---|---|
| root / E | **Live** | Canonical homepage |
| A | Active | Alternate layout |
| F | Active | Alternate layout |
| O | Active | Alternate layout |
| B, C, D | Deleted | Removed, do not recreate |

## Branch convention

Feature branches follow the pattern: `claude/<description>-<ticket-id>`

## Assets

Project cover images (animated GIFs) live in `/resources/`. The CV PDF is at
the repo root: `bernardo.prd.en.2026.pdf`.
