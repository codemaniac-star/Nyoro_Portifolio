import type { Metadata } from "next";
import { Footer, Header, PageFrame } from "@/components/site";
import "./globals.css";
import type { Viewport } from "next";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const title = "Newton Nyoro — Physical Systems & Software Studio";
const description = "Senior software engineer building distributed systems, high-concurrency runtimes, and quiet editorial interfaces.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nyoro.studio"),
  title: { default: title, template: "%s — Newton Nyoro" }, description,
  openGraph: { title, description, type: "website", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><PageFrame/><Header/>{children}<Footer/></body></html>;
}
