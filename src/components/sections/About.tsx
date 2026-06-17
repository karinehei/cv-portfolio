"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section-title">
          {t.about.title}
        </h2>
        <p className="section-subtitle">{t.about.subtitle}</p>
        <div className="card">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} style={paragraph === t.about.paragraphs.at(-1) ? { marginBottom: 0 } : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
