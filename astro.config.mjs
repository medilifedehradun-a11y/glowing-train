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
    defaultStrategy: 'viewport',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
