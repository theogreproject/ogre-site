import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theogreproject.github.io',
  base: '/ogre-site',
  integrations: [mdx(), sitemap()],
  markdown: {
    drafts: false
  }
});
