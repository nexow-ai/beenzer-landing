<div align="center">
  <img src="public/icon-192.png" alt="Beenzer" width="96" />

# Beenzer

**Beenzer. Done that.**

The website of Beenzer, the geo-social app by [Nexow, Inc.](https://nexow.studio): photos and videos pinned to the place they were taken, any of which can become a Solana NFT. In 20 languages.

[beenzer.xyz](https://beenzer.xyz) · [Beenzer at Nexow](https://nexow.studio/products/beenzer) · [@beenzer_app](https://x.com/beenzer_app)

</div>

---

## What is on the site

| Page        | What it does                                                                                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`         | The scroll dive: a dot-matrix Earth the camera falls onto, down to the shore of Lake Geneva where BEENZER #18 was minted. Then how the app works, on-chain, story, crew, journal, FAQ. |
| `/journal/` | News and guides, written in Markdown in `src/content/journal/`.                                                                                                                        |
| `/legal/`   | Site notice: who runs the site, and what it does with data (nothing: no cookies, analytics or trackers).                                                                               |
| `/dao/`     | Where the old DAO page sends people now.                                                                                                                                               |
| `/404`      | Nothing pinned here.                                                                                                                                                                   |

Every page exists in every language: English at the root (`/journal/`), the others under their code (`/fr/journal/`, `/ar/journal/`, `/zh-cn/journal/`). See [Languages](#languages).

### The hero

`src/scripts/globe.ts` is one idea, stated at the top of the file: scrolling drops the camera from orbit onto the exact spot one real Beenzer was posted, and the map resolves as it comes down. The land is about 85,000 dots in five levels of detail, each about 2.6 times finer than the last, so the density on screen stays even from orbit to the ground. The 3D pin at the end is the logo's, extruded.

- Three.js loads after the headline has painted, when the browser is idle.
- The render loop stops when the hero is off-screen or the tab is hidden; the pixel ratio is capped at 2.
- With `prefers-reduced-motion`, there is one still frame and normal scrolling. Without WebGL, a rendered poster of the same globe takes its place.

### Facts only

Everything the site states comes from a source, noted next to it in `src/data/`: the app's code and plan in `nexow-ai/beenzer`, Nexow's own site, and Solana mainnet. BEENZER #18 was read from the chain and its Arweave metadata; its coordinates are rounded to about a kilometre, the post's own visibility radius. Nothing invents a number, a user, a quote or a date.

## Languages

English, Español, Français, Deutsch, Italiano, Português (Brasil), Nederlands, Türkçe, Русский, Українська, العربية, עברית, हिन्दी, ไทย, Tiếng Việt, Bahasa Indonesia, 简体中文, 繁體中文, 日本語 and 한국어.

- **The list** is `src/i18n/locales.ts`: each language's path code, its `lang` tag, its name in itself, and its direction. `astro.config.mjs` reads it for the sitemap's alternates.
- **The words** are in `src/i18n/dict/`, one file per language. `en.ts` is the source and defines the type every other file must match: same keys, same array lengths. `npm run check` fails on a missing or extra string. A build without one of the files fails; `astro dev` shows English in its place. Strings carry a little markup, read by `rich()` in `src/i18n/index.ts`: `[label](key)` for a link, `**strong**`, `*emphasis*`, `==gradient==`, and `{name}` for values the page fills in.
- **The journal** is in `src/content/journal/<code>/`. The English posts are the list; a translation has the same file name. A post with no translation yet is shown in English, says so, and its canonical link points to the English one.
- **Pages** live in `src/pages/[...lang]/`, which renders each page once per language (`lang` is empty for English). The 404 page is `src/pages/404.astro` and `src/pages/[lang]/404.astro`; the build moves each language's to `/<code>/404.html`, where the Worker finds it for a missing page under that path.
- **Right to left:** Arabic and Hebrew set `dir="rtl"`. Layout uses logical properties (`inset-inline-start`, `margin-inline-end`), arrows along the line of reading flip, and the globe and its card swap sides. The brand line, coordinates and code stay left to right.
- **Type:** Unbounded, Geist and Geist Mono cover Latin, Cyrillic and Vietnamese. Arabic, Hebrew, Devanagari, Thai, Chinese, Japanese and Korean use the faces their systems ship (`--font-script` in `global.css`), so nothing is downloaded from anyone else; those scripts drop the Latin letter-spacing and get taller line heights.
- **Dates and numbers** go through `Intl` in the page's language, with Western digits everywhere and the Gregorian calendar in Thai.
- **SEO:** each page has `hreflang` alternates and an `x-default` (English), its own `og:locale`, and translated JSON-LD. The brand line "Beenzer. Done that." stays in English in every language.
- **Choosing:** the globe button in the header lists every language in its own name, and the footer links them all. A visitor whose browser prefers another of the languages is offered it once, in that language; nothing redirects. The choice is kept in `localStorage` (the site notice says so).

To add a language: add it to `LOCALES`, copy `src/i18n/dict/en.ts` to `<code>.ts` and translate it (keep the keys, markup and placeholders), add its `--font-script` in `global.css` if the brand fonts lack its letters, and translate the posts into `src/content/journal/<code>/`. To change copy, change `en.ts` and every other dictionary with it.

## Develop

Requires Node 22 (`.nvmrc`).

```bash
npm ci            # install from the lockfile (versions are pinned exactly)
npm run dev       # http://localhost:4321
npm run check     # types and Astro diagnostics
npm run build     # static site in dist/
npm run preview   # serve dist/
```

### Globe data

`public/globe/land.bin` (20 KB, 6 KB gzipped) is a land mask: one bit per point of the lattices in `src/lib/lattice.js`, which the page turns back into positions. It is committed. To rebuild it after changing the lattices or the target:

```bash
npm run globe     # Natural Earth land via world-atlas, lakes from scripts/data/lakes-alps.json
```

### Media

`public/media/` holds the phone clips and the original app walkthrough, re-encoded for the web (H.264, `+faststart`, no audio except the walkthrough). Photos live in `src/assets/` and are resized and converted to WebP at build time.

## Deploy

The build is a static folder. Two ways:

- **Cloudflare Workers**, like nexow.studio: `npm run deploy` builds and publishes to [beenzer.xyz](https://beenzer.xyz), the Worker's custom domain (`wrangler.jsonc`; the zone is in Nexow's Cloudflare account). The Worker also answers on beenzer-landing.nexow.workers.dev, with canonical links pointing to beenzer.xyz.
- **The site's address** (canonical links, Open Graph, sitemap, robots.txt) comes from `SITE_URL` at build time and defaults to `https://beenzer.xyz`.
- **Any static host**: publish `dist/`. `public/_redirects` sends the original site's addresses (`/dao.html`, `/doc.html`, `/html/*`) to their new homes, and `/en/…` to the root, and `public/_headers` sets caching and security headers, on hosts that read them (Cloudflare, Netlify).

## Structure

```
src/
  pages/        [...lang]/ (index, journal, legal, dao in every language), 404, [lang]/404
  components/   Hero, AppTour, Showcase, OnChain, Story, Team, Faq, Follow, Header, Footer, LangSuggest, NotFound, Logo, Icon
  i18n/         locales.ts (the languages), dict/ (their words), index.ts (paths, formats, markup), journal.ts
  scripts/      globe.ts (WebGL), motion.ts (Lenis + GSAP: one clock for the page)
  content/      journal posts (Markdown), one folder per language
  data/         site facts, team, FAQ, globe pins
  lib/          lattice.js (shared with scripts/), icons
  styles/       global.css (tokens, type, controls)
public/         icons, OG image, globe mask and poster, media, redirects
scripts/        build-globe.mjs
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Work on `dev`; `main` is what ships.

## License

Copyright © 2022–2026 Nexow, Inc. The code is under the [MIT License](LICENSE). The Beenzer name and logo, the photos, videos and other media in this repository are not covered by it and may not be reused without permission.
