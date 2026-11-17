import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel expects Next.js output in `.next`; use a separate local directory
  // to avoid OneDrive's managed `.next` reparse point on this workstation.
  distDir: process.env.VERCEL ? ".next" : process.env.NEXT_DIST_DIR || ".next-final",
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] }
};

export default nextConfig;
