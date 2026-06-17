"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function QaTesting() {
  const { t } = useLanguage();

  return (
    <section id="qa-testing" className="section" aria-labelledby="qa-heading">
      <div className="container">
        <h2 id="qa-heading" className="section-title">
          {t.qa.title}
        </h2>
        <p className="section-subtitle">{t.qa.subtitle}</p>
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h3 style={{ marginTop: 0, fontSize: "1.125rem" }}>{t.qa.howItWorksTitle}</h3>
          {t.qa.howItWorksParagraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              style={{
                color: "var(--color-text-muted)",
                margin: index === t.qa.howItWorksParagraphs.length - 1 ? 0 : "0 0 1rem",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid-2">
          {t.qa.artefacts.map((item) => (
            <article key={item.path} className="card" data-testid="qa-artefact">
              <h3 style={{ marginTop: 0, fontSize: "1rem" }}>{item.label}</h3>
              <p style={{ margin: "0.25rem 0 0.5rem" }}>
                <code>{item.path}</code>
              </p>
              <p style={{ color: "var(--color-text-muted)", margin: 0 }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
