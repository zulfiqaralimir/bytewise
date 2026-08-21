import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Eugene Fama and David Booth — The Fifty-Year Partnership That Changed How the World Invests. Why beating the market is a losing game, and what to do instead.";
export const size = { width: 1536, height: 1024 };
export const contentType = "image/png";

export default async function OgImage() {
  const data = await readFile(
    join(process.cwd(), "public/images/blog/eugene-fama-david-booth/thumbnail.png")
  );
  return new Response(new Uint8Array(data), {
    headers: { "Content-Type": "image/png" },
  });
}
