import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import imageDimensions from './src/lib/image-html.mjs';
import { unified } from '@astrojs/markdown-remark';
export default defineConfig({
  site: 'https://acarsec.github.io', base: '/', output: 'static', trailingSlash: 'always',
  integrations: [sitemap({ filter: page => !page.endsWith('/404.html') && !page.endsWith('/404/') })],
  markdown: { processor: unified({ rehypePlugins: [imageDimensions] }), shikiConfig: { theme: 'github-dark', wrap: false } },
});
