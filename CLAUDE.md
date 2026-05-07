# Bernardo Prudêncio · Portfolio — Claude Code guide

## File architecture

This is a static HTML/CSS portfolio site hosted on GitHub Pages.

```
index.html              ← THE LIVE HOMEPAGE (canonical, what visitors see)
style.css               ← Shared stylesheet for root + all project pages
project-*.html          ← Case study pages (hierarchy/detail pages)
project-graduated-fees-deck.html  ← Presentation deck (linked from graduated-fees)
resources/              ← Images and GIFs
bernardo.prd.en.2026.pdf
```

## Stylesheet

`style.css` at the root is the single stylesheet for the live homepage and all
project pages. Edit it once — it is referenced as `./style.css` from root files.

## Branch convention

Feature branches follow the pattern: `claude/<description>-<ticket-id>`

## Assets

Project cover images (animated GIFs) live in `/resources/`. The CV PDF is at
the repo root: `bernardo.prd.en.2026.pdf`.
