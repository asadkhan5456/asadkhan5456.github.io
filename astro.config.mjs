// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://asadkhan5456.github.io',
  output: 'static',
  trailingSlash: 'always',
  // English is served at the root. Add 'de' to locales and create src/pages/de/ to add German.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
