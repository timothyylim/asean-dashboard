# ASEAN Dashboard — Project Notes

## Project overview
- Docsify site in `docs/` folder, served via GitHub Pages from `main` branch `/docs`
- Repo: https://github.com/timothyylim/asean-dashboard
- Live site: https://timothyylim.github.io/asean-dashboard/
- GitHub user: timothyylim

## Key files
- `docs/index.html` — Docsify config
- `docs/cfil.md` — CFIL Malaysia research (governance, 22 cohort projects, stakeholders)
- `docs/organisations.md` — Directory of climate/advocacy orgs across ASEAN
- `docs/hubs.md` — Cities with active climate scenes
- `docs/_sidebar.md` — Navigation
- `docs/cfil-cohort1-projects.pdf` — CFIL Cohort 1 project list PDF (source document)

## Tech stack
- Docsify (client-side, no build step) — loaded via CDN in `docs/index.html`
- Also has Astro/Starlight config (`astro.config.mjs`, `package.json`) but not currently used for deployment
- GitHub Pages serves from `docs/` on `main` branch

## Research & scraping notes

### Approach used for CFIL research
1. **WebSearch** for key terms — search snippets often more useful than fetching individual pages
2. **WebFetch** on target URLs — mixed results depending on site type
3. **PDF via Read tool** — richest source; WebFetch downloads PDFs, then Read tool renders pages as images

### What works for scraping
- WebSearch snippets are often sufficient for structured data
- PDFs: WebFetch downloads them, then use Read tool with `pages` param to view as images
- Static sites (e.g. planters.life) render well with WebFetch
- Combining multiple search results gives comprehensive picture

### What doesn't work
- WordPress news sites mostly return CSS/JS instead of article text via WebFetch
- Some sites (UNDP, fintech.global) block with 403
- Docsify/SPA sites don't render content for WebFetch (client-side JS)
- PDF binary content can't be parsed by WebFetch inline — need to save and use Read tool
