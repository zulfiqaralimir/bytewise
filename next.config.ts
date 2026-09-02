import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    webpackMemoryOptimizations: true,
    // Webpack build worker moves compilation into a separate process,
    // cutting peak memory in the main build process — Next auto-enables
    // this unless a custom webpack() config is present (we have one below),
    // so it has to be turned back on explicitly.
    webpackBuildWorker: true,
  },
  webpack(config, { dev }) {
    // 368+ MDX pages each run the full remark/rehype pipeline (KaTeX, GFM,
    // syntax highlighting) during the webpack compile step. Default
    // parallelism (100) processes too many of these concurrently and OOMs
    // Vercel's build container — cap concurrency to trade build time for
    // peak memory. Dropped from 4 to 2 after the site outgrew that ceiling
    // too (SIGKILL ~70s into the compile step, far earlier than the prior
    // multi-minute OOMs, meaning headroom ran out sooner this round).
    config.parallelism = 2;
    // The persistent filesystem cache (Next/webpack default in production)
    // holds the module graph in memory during the build on top of writing
    // it to disk — extra peak RSS we can't afford in this container. Not
    // needed here since Vercel builds are one-shot, not iterative.
    if (config.cache && !dev) {
      config.cache = Object.freeze({ type: "memory" });
    }
    // Add MDX loader directly — bypasses @next/mdx wrapper which triggers
    // "use client" propagation in Next.js 16 App Router
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {
            /* eslint-disable @typescript-eslint/no-require-imports */
            remarkPlugins: [
              require("remark-gfm").default,
              require("remark-math").default,
            ],
            rehypePlugins: [
              require("rehype-katex").default,
              require("rehype-highlight").default,
              require("rehype-slug").default,
            ],
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
