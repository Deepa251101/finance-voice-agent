"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setMessage("Online form delivery has not been configured, so your enquiry was not sent. Please contact us using the details on this page.");
  }

  return <form className="contact-form" onSubmit={handleSubmit}><label>Full Name<input name="name" autoComplete="name" required minLength={2}/></label><label>Email Address<input name="email" type="email" autoComplete="email" required/></label><label>Phone Number<input name="phone" type="tel" autoComplete="tel" required minLength={7}/></label><label>Subject<input name="subject" required minLength={3}/></label><label className="span-2">Message<textarea name="message" rows={5} required minLength={10}/></label><div className="span-2 form-submit"><button className="button button-primary" type="submit">Prepare enquiry <span aria-hidden="true">→</span></button><span aria-live="polite">{message}</span></div></form>;
}
