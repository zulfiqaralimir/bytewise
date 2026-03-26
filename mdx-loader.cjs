/**
 * Custom MDX loader with all plugins baked in.
 * This is a webpack loader that wraps @mdx-js/loader
 * with pre-configured remark/rehype plugins.
 * Using a single loader file (not inline config) allows
 * Turbopack to use it as a string path (serializable).
 */
/* eslint-disable @typescript-eslint/no-require-imports */
const { createLoader } = require("@mdx-js/loader");

const loader = createLoader({
  providerImportSource: "@mdx-js/react",
  remarkPlugins: [
    require("remark-gfm").default,
    require("remark-math").default,
  ],
  rehypePlugins: [
    require("rehype-katex").default,
    require("rehype-highlight").default,
    require("rehype-slug").default,
  ],
});

module.exports = loader;
