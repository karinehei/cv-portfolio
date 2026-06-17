"use client";

import { useLanguage } from "./LanguageProvider";
import styles from "./SkipLink.module.css";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a href="#main-content" className={styles.skipLink}>
      {t.skipLink}
    </a>
  );
}
