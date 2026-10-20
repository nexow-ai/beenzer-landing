// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Lightning CSS turns the Latin range `U+0000-00FF` into `U+??`, which is not
 * a range, so the built page never loads the fonts for ordinary text. `astro
 * dev` does not run that pass. Put the range back on the finished CSS (the
 * same fix as nexow.studio).
 * @returns {import('vite').Plugin}
 */
function keepLatinFontRange() {
  return {
    name: 'keep-latin-font-range',
    apply: 'build',
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset' || !file.fileName.endsWith('.css')) continue;
        const text = typeof file.source === 'string' ? file.source : Buffer.from(file.source).toString('utf8');
        if (!text.includes('unicode-range:U+??')) continue;
        file.source = text.replaceAll('unicode-range:U+??', 'unicode-range:U+0000-00FF');
      }
    },
  };
}

// The site's own address, for canonical links, Open Graph, the sitemap and
// robots.txt: beenzer.xyz, where the Worker serves it. Set SITE_URL to build
// for another host.
const site = process.env.SITE_URL || 'https://beenzer.xyz';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'ignore',
  // Styles are small (about 8 kB gzipped): inline them and skip a render-blocking request.
  build: { format: 'directory', inlineStylesheets: 'always' },
  vite: {
    plugins: [keepLatinFontRange()],
    // three.js is one deferred chunk of about 570 kB (140 kB gzipped), loaded after first paint.
    build: { chunkSizeWarningLimit: 650 },
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
