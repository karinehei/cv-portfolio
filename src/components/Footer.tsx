"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>
          &copy; {year} {t.logoText} — {t.footer.text}
        </p>
        <p className={styles.meta}>{t.footer.meta}</p>
      </div>
    </footer>
  );
}
