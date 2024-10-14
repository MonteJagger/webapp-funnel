// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://montejagger.github.io/webapp-funnel/',
  base: '/webapp-funnel/',
  integrations: [react(), tailwind()],
  build: {
    assets: 'assets',
    inlineStylesheets: 'never'
  }
});