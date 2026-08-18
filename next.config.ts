import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  webpack(config) {
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
