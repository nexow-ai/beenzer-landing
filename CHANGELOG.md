# Changelog

All notable changes to the Beenzer website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-10-20

A rebuild from scratch, for Beenzer as a product of Nexow, Inc. (nexow.studio).

### Added

- Astro 7 static site with self-hosted fonts and no cookies, analytics or trackers
- Scroll-driven WebGL hero: a dot-matrix globe the camera falls onto, in five levels of detail, landing on the shore of Lake Geneva where BEENZER #18 was minted, with the logo's pin in 3D
- "How it works" tour: a phone built in HTML that runs the Flutter rebuild's screens (map, camera, pin with a live visibility slider, feed, mint)
- BEENZER #18 as a holographic card, with its real on-chain data
- On-chain section, read from the minting server: Phantom sign-in, Arweave, Metaplex editions, royalties, and the mint pipeline
- Story timeline and the original app's walkthrough, cropped to its screen
- Journal with three articles, a site notice, a DAO page, and a 404
- SEO: canonical URLs, Open Graph image rendered from the hero, JSON-LD (organization, app, FAQ, articles), sitemap, robots, web manifest and icons
- Served at beenzer.xyz from a Cloudflare Worker, with caching and security headers and redirects from the original site's addresses

### Changed

- Ownership: Nexow, Inc. in the footer, the license and the metadata
- Copy now follows the facts: the app is being rebuilt in Flutter for iOS and Android, and any post can become a Solana NFT
- The featured NFT is BEENZER #18 in Savigny, as on-chain, instead of "#33" in Barcelona

### Removed

- The jQuery and Bootstrap template, its demo pages in `html/`, and about 670 MB of unused stock video
- Unverified numbers, placeholder sellers and auctions, the defunct Google Play link and the expired Discord and Telegram invites
- The $BEEN and $BEENZ "invest and earn dividends" copy

## [1.0.5] - 2025-11-05

### Changed

- Updated NFT carousel to display 5 cards on desktop (matching team carousel)
- Carousel now shows consistent number of items across sections

## [1.0.4] - 2025-11-05

### Fixed

- Removed defunct polyfill.io script that was causing console errors
- Modern browsers no longer need polyfill.io dependency

## [1.0.3] - 2025-11-05

### Fixed

- Fixed 404 errors for NFT card images (BEENZER#12.jpg and BEENZER#54.jpg)
- Renamed image files to remove `#` character which caused URL encoding issues
- Updated HTML references to use new filenames (BEENZER-12.jpg, BEENZER-54.jpg)

## [1.0.2] - 2025-11-05

### Fixed

- Fixed NFT carousel infinite loop behavior (changed `rewind:true` to `loop:true`)
- Improved dark mode visibility for heart icons and like counts in NFT cards
- Enhanced opacity values for better readability in dark mode

## [1.0.1] - 2025-11-05

### Added

- Documented the new `videos/beenzer_app.mp4` walkthrough in the README.
- Linked the official @beenzer_app accounts on X and Instagram across documentation.

## [1.0.0] - 2025-11-05

### 🎉 First Stable Release

This marks the first production-ready release of the Beenzer Landing Page. All core features are complete, content is finalized, and the website is ready for public deployment.

### Added

- Comprehensive SEO meta tags including Open Graph and Twitter Cards for better social media sharing
- Canonical URLs to prevent duplicate content issues
- "Coming Soon" sections for Staking, Governance, Marketplace, and Stats features in DAO page
- Proper descriptions for $BEEN and $BEENZ tokens
- Complete feature descriptions replacing Lorem ipsum placeholders
- ARIA labels for social media links and interactive elements
- Proper alt text for images and download buttons
- Meta keywords for improved search engine optimization

### Fixed

- Critical typo: "secction" → "section" in index.html
- Animation delay typo in dao.html: "qs" → ".75s"
- Invalid nested heading tags (h3 > h6, h3 > h1) replaced with semantic HTML
- Incomplete sentence in wallet connection feature description
- Duplicate tokenomics content in DAO page
- Empty href attributes for App Store download links
- Missing muted attribute on autoplay videos for browser compliance
- Broken social media links in footer (now pointing to actual Beenzer accounts)

### Changed

- Improved meta descriptions for both index.html and dao.html
- Updated page titles to be more descriptive and SEO-friendly
- Changed inappropriate h3 tags to p tags for better semantic HTML
- Enhanced feature descriptions with Beenzer-specific content
- Updated copyright year to 2023
- Replaced generic social media links with actual Beenzer community links

### Removed

- Lorem ipsum placeholder text from Features section
- Duplicate and redundant DAO tokenomics content

## [0.9.9] - 2023-XX-XX

### Added

- Initial landing page structure
- Basic NFT marketplace functionality
- Team section with international team members
- News section with latest updates
- Wallet integration support

### Changed

- Design improvements and modern UI updates
- Enhanced mobile responsiveness

---

## [0.9.10] - 2025-11-05

### Added

- Development branch workflow
- Comprehensive CHANGELOG documentation
- Development workflow guidelines in README

### Changed

- Merged all v0.9.10 improvements to main branch
- Finalized content and SEO optimizations

---

## Release Notes

### Version 1.0.0 - Production Ready! 🚀

The Beenzer Landing Page is now production-ready! This release represents the culmination of comprehensive refactoring, content completion, and optimization work.

**What's included:**

- ✅ Complete website content (no placeholders)
- ✅ Professional SEO optimization with Open Graph and Twitter Cards
- ✅ Fully functional DAO page with tokenomics
- ✅ Better social media integration
- ✅ Improved accessibility (ARIA labels, semantic HTML)
- ✅ Fixed all HTML validation issues
- ✅ Comprehensive documentation (CHANGELOG, README, CONTRIBUTING)
- ✅ Established development workflow (dev → main)

### Development Workflow

This project uses a `dev` branch for development work. All changes should be made in the `dev` branch and merged to `main` when ready for production deployment.

See [README.md](README.md) for detailed development guidelines.
