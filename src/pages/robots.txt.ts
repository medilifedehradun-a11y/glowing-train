import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Set NOINDEX=true in the environment (e.g. on a Vercel staging project) to keep
// that deployment out of search engines. Production builds (no NOINDEX) allow all.
const noindex = process.env.NOINDEX === 'true';

export const GET: APIRoute = () => {
  const body = noindex
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
