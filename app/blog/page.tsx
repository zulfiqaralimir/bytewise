import type { Metadata } from "next";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog — ByteWise",
  description: "Articles on AI, engineering, and technology by Zulfiqar Ali Mir.",
  openGraph: {
    title: "Blog — ByteWise",
    description: "Articles on AI, engineering, and technology by Zulfiqar Ali Mir.",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Blog</h1>
        <p className="text-gray-500 text-lg">Articles on AI, engineering, and technology.</p>
      </div>

      <BlogList />
    </div>
  );
}
