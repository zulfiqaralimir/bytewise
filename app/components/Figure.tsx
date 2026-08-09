import { ReactNode } from "react";
import Image from "next/image";

interface FigureProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  caption?: string;
  children?: ReactNode;
}

/**
 * Captioned wrapper for custom SVG illustrations and photos/screenshots,
 * styled to match <MermaidDiagram>. Two usage modes:
 *   - Photo/screenshot: <Figure src="/images/..." alt="..." width={800} height={450} caption="..." />
 *   - Custom SVG: <Figure title="..." caption="..."><svg>...</svg></Figure>
 */
export function Figure({ src, alt, width, height, title, caption, children }: FigureProps) {
  return (
    <div className="my-6 rounded-lg border border-gray-200 overflow-hidden">
      {title && (
        <div className="bg-gray-100 text-gray-500 text-xs font-mono uppercase tracking-widest px-4 py-2 border-b border-gray-200">
          {title}
        </div>
      )}
      <div className="p-4 flex justify-center overflow-x-auto bg-white">
        {src ? (
          <Image src={src} alt={alt ?? ""} width={width ?? 800} height={height ?? 450} className="max-w-full h-auto" />
        ) : (
          children
        )}
      </div>
      {caption && (
        <div className="px-4 py-2 text-xs text-gray-500 text-center border-t border-gray-200 bg-gray-50">
          {caption}
        </div>
      )}
    </div>
  );
}
