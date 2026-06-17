"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { withBasePath } from "@/lib/paths";

export function CvDownload() {
  const { t } = useLanguage();

  return (
    <section id="cv" className="section" aria-labelledby="cv-heading">
      <div className="container">
        <h2 id="cv-heading" className="section-title">
          {t.cv.title}
        </h2>
        <p className="section-subtitle">{t.cv.subtitle}</p>
        <div className="card" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
          <p style={{ margin: 0, flex: "1 1 16rem", color: "var(--color-text-muted)" }}>
            {t.cv.cardText}
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href={withBasePath("/cv.pdf")}
              className="btn btn-primary"
              download
              data-testid="cv-download"
            >
              {t.cv.download}
            </a>
            <a
              href="https://www.linkedin.com/in/karine-heinonen-07b509128/"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cv-linkedin"
              aria-label={t.cv.linkedinAria}
            >
              {t.cv.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
