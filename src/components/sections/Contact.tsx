"use client";

import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className="section-title">
          {t.contact.title}
        </h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>
        <div className="card" style={{ maxWidth: "36rem" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
