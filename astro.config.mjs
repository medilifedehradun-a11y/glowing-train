// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.medilifesuperspeciality.com',
  // Canonical URLs, internal links and the sitemap all use the no-slash form;
  // vercel.json redirects /path/ -> /path so only one version is indexable.
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
    // 'hover' (also tap/focus) instead of 'viewport', which fetched ~20 pages per visit.
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // Keep the noindexed thank-you page out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') })],
});
