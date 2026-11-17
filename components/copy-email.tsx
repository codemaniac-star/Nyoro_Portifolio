"use client";

import { useState } from "react";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try { await navigator.clipboard.writeText("newtnmukuha06@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = "mailto:newtnmukuha06@gmail.com"; }
  }
  return <button className="email-copy" onClick={copy} type="button">newtnmukuha06@gmail.com <span>{copied ? "COPIED ✓" : "COPY —"}</span></button>;
}
