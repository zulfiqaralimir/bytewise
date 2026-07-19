import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bytewise-one.vercel.app"),
  title: "ByteWise — Programming Concepts from First Principles",
  description: "A comprehensive CS education book covering data structures, algorithms, system design, and modern engineering by Zulfiqar Ali Mir.",
  openGraph: {
    title: "ByteWise — Programming Concepts from First Principles",
    description: "A comprehensive CS education book covering data structures, algorithms, system design, and modern engineering by Zulfiqar Ali Mir.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteWise — Programming Concepts from First Principles",
    description: "A comprehensive CS education book covering data structures, algorithms, system design, and modern engineering by Zulfiqar Ali Mir.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
