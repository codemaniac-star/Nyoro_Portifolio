"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("Sending…");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your note.");
      setStatus("Your note is on its way. Thank you."); form.reset();
    } catch (error) { setStatus(error instanceof Error ? error.message : "Unable to send your note."); }
  }
  return <form className="contact-form" onSubmit={submit}><label>Name<input required name="name" autoComplete="name" maxLength={100}/></label><label>Email<input required name="email" type="email" autoComplete="email" maxLength={254}/></label><label>What would you like to work on?<textarea required name="message" rows={5} maxLength={5000}/></label><button className="button button-primary" type="submit">Send a note ↗</button><p aria-live="polite" className="form-status">{status}</p></form>;
}
