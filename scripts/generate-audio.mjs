/**
 * Generate an MP3 audio file from article text using OpenAI TTS.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-audio.mjs <slug> <"text content">
 *
 * Or pipe text from a file:
 *   OPENAI_API_KEY=sk-... node scripts/generate-audio.mjs loop-engineering "$(cat text.txt)"
 *
 * Output: public/audio/<slug>.mp3
 *
 * Available voices: alloy, echo, fable, onyx, nova, shimmer
 * Default voice: nova (clear, professional female)
 */

import OpenAI from "openai";
import fs from "fs";
import path from "path";

const [, , slug, ...rest] = process.argv;
const text = rest.join(" ");

if (!slug || !text) {
  console.error("Usage: node scripts/generate-audio.mjs <slug> <text>");
  process.exit(1);
}

if (!process.env.OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY environment variable is not set.");
  process.exit(1);
}

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const outDir = path.join("public", "audio");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, `${slug}.mp3`);

console.log(`Generating audio for "${slug}"...`);
console.log(`Text length: ${text.length} characters`);

// OpenAI TTS has a 4096 character limit per request — chunk if needed
const CHUNK_SIZE = 4000;
const chunks = [];
for (let i = 0; i < text.length; i += CHUNK_SIZE) {
  chunks.push(text.slice(i, i + CHUNK_SIZE));
}

const buffers = [];
for (let i = 0; i < chunks.length; i++) {
  console.log(`Processing chunk ${i + 1}/${chunks.length}...`);
  const response = await client.audio.speech.create({
    model: "tts-1-hd",
    voice: "nova",
    input: chunks[i],
    response_format: "mp3",
  });
  const buffer = Buffer.from(await response.arrayBuffer());
  buffers.push(buffer);
}

fs.writeFileSync(outPath, Buffer.concat(buffers));
console.log(`Done! Audio saved to: ${outPath}`);
console.log(`Add to your MDX: <AudioPlayer src="/audio/${slug}.mp3" title="Listen to this article" />`);
