import type { Metadata } from "next";
import { Footer, Header, PageFrame } from "@/components/site";
import "./globals.css";
import "./cura-gallery.css";
import type { Viewport } from "next";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const title = "Newton Nyoro — Physical Systems & Software Studio";
const description = "Software development student and developer building civic and healthcare-focused products with Next.js, TypeScript, Tailwind CSS, Supabase, and Python/ML tooling.";

export const metadata: Metadata = {
  metadataBase: new URL("https://newtonnyoro.vercel.app"),
  title: { default: title, template: "%s — Newton Nyoro" }, description,
  alternates: { canonical: "https://newtonnyoro.vercel.app" },
  openGraph: { title, description, type: "website", url: "https://newtonnyoro.vercel.app", images: ["https://newtonnyoro.vercel.app/og-image.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["https://newtonnyoro.vercel.app/og-image.png"] },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><PageFrame/><Header/>{children}<Footer/></body></html>;
}
