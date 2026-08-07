# Supraja Hospitals · Medical Value Travel — Interactive Pitch Site

A self-contained, offline-capable pitch website for the stakeholder briefing
**"Medical Tourism: The Industry, Our Plan, and the Uganda Opportunity"**
(Supraja Hospitals · A Dhanturi Group Enterprise · Hyderabad, India).

All copy and figures are transcribed **verbatim** from the two source files:

- `Supraja Medical Tourism Board Deck.pptx` — the narrative flow of the site mirrors this deck
- `MVT Final.docx` — the working document (ecosystem, financial model, keys to success)

## Run it

The build in `dist/` is fully static and self-contained (no CDNs, no external
requests — fonts, map data, and slide renders are all bundled). Serve it from
any static host or a local server:

```bash
cd dist
python3 -m http.server 8000     # or: npx serve .
# open http://localhost:8000
```

> Browsers block ES modules on `file://`, so use any tiny static server rather
> than double-clicking `index.html`. Dropping `dist/` onto any static host
> (Netlify/Vercel/S3/nginx, at any subpath) also works as-is — paths are relative.

## Develop / rebuild

```bash
npm install
npm run dev       # local dev server
npm run build     # static production build → dist/
```

## Where the brand tokens live

The colour system is defined **once** in `src/index.css` (`:root` variables),
extracted from the board deck's theme, and mapped to semantic Tailwind roles in
`tailwind.config.js`. No raw hex values appear in any component.

| Token | Hex | Role |
|---|---|---|
| `--pine-950` | `#0B3D39` | Primary dark ground (hero, dividers, dark cards) |
| `--pine-900/800/700` | `#0F4D46` / `#0F5C52` / `#1F6E63` | Derived brand surfaces |
| `--pine-600` | `#1F8A73` | Secondary / interactive accents, chart series |
| `--mist-300/200/100` | `#9FC9C0` / `#CFE7E1` / `#D9EDE8` | Brand tints (surfaces, borders, dark-ground text) |
| `--gold` (+soft/tint/ink) | `#C6A15B` (`#EFE3C8` / `#FBF3E7` / `#3D2F14`) | Accent: kickers, highlights, CTA moments |
| `--ink` / `--muted` | `#1A1A1A` / `#6B7280` | Text |
| `--line` / `--surface` / `--paper` | `#E1E7E5` / `#F7F9F8` / `#FFFFFF` | Borders & light grounds |

Typography: **Source Serif 4** (display, mirrors the deck's serif headlines) +
**Inter** (UI/body). Both are bundled locally via Fontsource.

## Hidden source-document backup ("break-glass")

For meetings, the original assets are available without appearing in the nav:

- **Double-click / double-tap the Supraja logo** (top-left), or **focus the
  logo and press Enter twice** — this opens the Source Documents overlay.
- **Board Deck tab**: all 35 slides with prev/next, ←/→ arrow keys, `G` for a
  thumbnail grid, `F` for fullscreen, jump-to-slide via the thumbnail rail.
- **MVT Document tab**: the full working document, verbatim, with an outline
  sidebar and plain-text search.
- `Esc` exits back to the site.

## Motion & performance

- Honors `prefers-reduced-motion` automatically; a quiet **"Motion on/off"**
  toggle in the header forces lite mode (static frames, no continuous animation).
- Globe/map (D3), the source-doc viewer, and world topology data are
  code-split and lazy-loaded; slide images are lazy `webp`.
- Content renders first; nothing is blocked behind animation.

## Notes on the sources

- **The two source files state different base-case financials.** The site
  presents both, labelled, in "The Model" section (deck: ₹1.4 Cr invested /
  ₹29.0 Cr 3-yr revenue / ₹6.1 Cr 3-yr EBITDA / break-even Month 22 · working
  document: ₹1.25 Cr / ₹13.00 Cr Year-3 revenue / ₹3.00 Cr Year-3 EBITDA /
  break-even ~2.5–3 years). Neither was altered or merged.
- Content-lock means source text is reproduced exactly — including the working
  document's spelling "Dhanturi Gorup of Hotels" in the integrated-model flow.
  Fix it in the source and re-transcribe if desired.
- Live cross-checks of suprajahospitals.com and dhanturi.com/brands were
  blocked by this build environment's network policy, so the deck's own theme
  (which already carries the brand) is the colour source of truth, and the
  Dhanturi hospitality integration uses exactly the language in the two source
  files rather than a scraped brand list.
