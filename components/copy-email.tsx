"use client";

import { useState } from "react";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try { await navigator.clipboard.writeText("newton@nyoro.studio"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = "mailto:newton@nyoro.studio"; }
  }
  return <button className="email-copy" onClick={copy} type="button">newton@nyoro.studio <span>{copied ? "COPIED ✓" : "COPY ↗"}</span></button>;
}
