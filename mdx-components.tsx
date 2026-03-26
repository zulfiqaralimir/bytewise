import type { MDXComponents } from "mdx/types";

// This file is required to use MDX in `app` directory.
// It provides a set of components used across all MDX files.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
