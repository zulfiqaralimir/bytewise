import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/docs/cs-book/part-20-gre/chapter-3/3-1-issue-essay-structure",
        destination: "/docs/cs-book/part-20-gre/chapter-1/1-4-issue-essay-structure",
        permanent: true,
      },
    ];
  },
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
