"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className={`section ${styles.hero}`} aria-labelledby="hero-heading">
      <div className="container">
        <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
        <h1 id="hero-heading" className={styles.title} data-testid="hero-title">
          {t.hero.title}
        </h1>
        <p className={styles.lead}>{t.hero.lead}</p>
        <div className={styles.cta}>
          <a href="#qa-testing" className="btn btn-primary">
            {t.hero.ctaPortfolio}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
