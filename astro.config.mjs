import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output -- deploys to Cloudflare Pages with zero config
// If you add API routes later, swap output to 'server' and add:
// import cloudflare from '@astrojs/cloudflare';
// adapter: cloudflare()

export default defineConfig({
  output: 'static',
  site: 'https://d2b2.co',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
  },
});
