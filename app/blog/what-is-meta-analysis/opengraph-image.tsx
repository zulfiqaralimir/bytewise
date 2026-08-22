import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 1536, height: 1024 };
export const contentType = "image/png";

export default async function OgImage() {
  const file = await readFile(
    path.join(process.cwd(), "public/images/blog/what-is-meta-analysis/thumbnail.png")
  );
  return new Response(new Uint8Array(file), {
    headers: { "Content-Type": "image/png" },
  });
}
