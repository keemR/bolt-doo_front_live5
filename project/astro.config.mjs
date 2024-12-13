import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL,
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin', '/private'],
        },
      ],
      sitemap: true,
    }),
  ],
  output: 'server',
  adapter: netlify(),
});
