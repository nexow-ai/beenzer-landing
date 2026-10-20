# Contributing to the Beenzer website

Thanks for helping. This repository is the website of Beenzer, a product of [Nexow, Inc.](https://nexow.studio). Bug reports, fixes and improvements are all welcome.

## Set up

Requires Node 22 (`.nvmrc`).

```bash
git clone git@github.com:nexow-ai/beenzer-landing.git
cd beenzer-landing
git checkout dev
npm ci
npm run dev
```

## Pull requests

1. Branch from `dev` (`feature/…`, `fix/…`). `main` is what ships.
2. Make the change, then run `npm run check` and `npm run build`. Both must pass.
3. Commit with a short message and the repository's emoji prefix:

   - ✨ new feature
   - 🐛 bug fix
   - 📝 content or documentation
   - 🎨 styling
   - ♻️ refactor
   - ⚡ performance
   - ♿ accessibility
   - 🔍 SEO

4. Open the pull request against `dev`, with a clear description and, for visual changes, screenshots on a phone and a desktop.

## House rules

- **Facts only.** Every claim on the site has a source, noted next to it in `src/data/`. No invented numbers, users, quotes, dates or prices. If a fact is unknown, leave it out.
- **Dependencies are pinned exactly** (`.npmrc`). Update them in a commit of their own, with the lockfile.
- **One dark theme.** Colours, type and spacing come from the tokens in `src/styles/global.css`. Do not hard-code new colours in components.
- **Motion with manners.** Every animation must respect `prefers-reduced-motion`, and nothing may trap or hijack the scroll.
- **Accessible by default.** Real text for content, labels on icon-only controls, visible focus, touch targets of at least 44 px, and alt text that says what a photo shows.
- **Light pages.** Images go in `src/assets/` so the build resizes them; videos are re-encoded before they go in `public/media/`. The globe's budget is written at the top of `src/scripts/globe.ts`.

## Before you open a pull request

- [ ] `npm run check` and `npm run build` pass
- [ ] Looks right at 390 px, 768 px and 1440 px wide
- [ ] Works with `prefers-reduced-motion: reduce`
- [ ] No console errors, no broken links
- [ ] Keyboard: every link and control can be reached and seen

## Reporting a bug

Open an issue with what you did, what you expected, what happened, and your browser and device. Screenshots help.

## Contact

[@beenzer_app](https://x.com/beenzer_app) on X and [Instagram](https://www.instagram.com/beenzer_app/), or [Nexow's contact page](https://nexow.studio/contact).
