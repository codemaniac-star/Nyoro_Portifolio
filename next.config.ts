import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep generated files out of the OneDrive-managed `.next` directory.
  distDir: process.env.NEXT_DIST_DIR || ".next-local",
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] }
};

export default nextConfig;
