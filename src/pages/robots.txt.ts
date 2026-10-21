import type { APIRoute } from 'astro';

/** robots.txt, pointing at the sitemap on whichever host this build is for. */
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
