import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const thumb = fs.readFileSync(
    path.join(
      process.cwd(),
      "public/images/blog/building-a-3-year-financial-model/thumbnail.png"
    )
  );
  const thumbSrc = `data:image/png;base64,${thumb.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#06120a",
          overflow: "hidden",
        }}
      >
        <img
          src={thumbSrc}
          width={1200}
          height={630}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  );
}
