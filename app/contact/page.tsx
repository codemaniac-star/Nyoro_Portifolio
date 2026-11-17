import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CopyEmail } from "@/components/copy-email";
import { SectionLabel } from "@/components/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Newton Nyoro about systems engineering, distributed systems, and editorial software." };
export default function ContactPage() { return <main className="page-container page-main"><div className="page-heading"><SectionLabel>Direct wire // contact</SectionLabel><h1>Start a conversation.</h1><p>For systems design, engineering engagements, or a thoughtful exchange about software and print.</p></div><div className="contact-layout"><div className="contact-copy"><p>The simplest route is email. Share what you’re working on and the kind of help you need; I’ll reply as soon as I can.</p><CopyEmail/><ul className="social-list"><li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub —</a></li><li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn —</a></li><li><a href="https://x.com" target="_blank" rel="noreferrer">X / Dispatch —</a></li></ul><span className="hand">Nairobi · London · Working globally</span></div><ContactForm/></div></main>; }
