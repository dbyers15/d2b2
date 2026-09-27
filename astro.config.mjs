import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://d2b2.co',
  build: {
    assets: '_assets',
  },
});
