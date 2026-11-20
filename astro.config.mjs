import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH || '/';
function localLinks() {
  return (tree) => {
    function walk(node) {
      for (const key of ['href', 'src']) {
        const value = node.properties?.[key];
        if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
          node.properties[key] = `${base.replace(/\/$/, '')}${value}`;
        }
      }
      node.children?.forEach(walk);
    }
    walk(tree);
  };
}

export default defineConfig({
  site: process.env.SITE_URL || 'https://nolacompletestreets.org',
  base,
  output: 'static',
  trailingSlash: 'always',
  markdown: { rehypePlugins: [localLinks] },
  vite: { server: { fs: { strict: true } } },
});
