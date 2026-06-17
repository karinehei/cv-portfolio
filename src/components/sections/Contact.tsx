"use client";

import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";
import { getContactEmail, isStaticHosting } from "@/lib/staticHosting";
import { hasWeb3Forms } from "@/lib/web3forms";

export function Contact() {
  const { t } = useLanguage();
  const onStaticHosting = isStaticHosting();
  const contactEmail = getContactEmail();
  const showStaticFallbackNotice = onStaticHosting && !hasWeb3Forms();

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className="section-title">
          {t.contact.title}
        </h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>
        {showStaticFallbackNotice && (
          <p
            className="form-hint"
            role="note"
            data-testid="contact-static-notice"
            style={{ maxWidth: "36rem", marginBottom: "1rem" }}
          >
            {t.contact.staticNotice}
            {contactEmail && (
              <>
                {" "}
                <a href={`mailto:${contactEmail}`} className="form-inline-link">
                  {contactEmail}
                </a>
              </>
            )}
          </p>
        )}
        <div className="card" style={{ maxWidth: "36rem" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
