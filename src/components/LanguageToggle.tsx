"use client";

import { useLanguage } from "./LanguageProvider";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={styles.switcher}
      role="group"
      aria-label={t.languageSwitcher}
      data-testid="language-switcher"
    >
      <button
        type="button"
        className={`btn btn-secondary ${styles.langButton} ${locale === "en" ? styles.active : ""}`}
        aria-pressed={locale === "en"}
        aria-label={`${t.languageEn}${locale === "en" ? " (selected)" : ""}`}
        onClick={() => setLocale("en")}
        data-testid="language-en"
      >
        EN
      </button>
      <button
        type="button"
        className={`btn btn-secondary ${styles.langButton} ${locale === "fi" ? styles.active : ""}`}
        aria-pressed={locale === "fi"}
        aria-label={`${t.languageFi}${locale === "fi" ? " (selected)" : ""}`}
        onClick={() => setLocale("fi")}
        data-testid="language-fi"
      >
        FI
      </button>
    </div>
  );
}
