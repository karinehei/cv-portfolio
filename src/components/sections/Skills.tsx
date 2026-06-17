"use client";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Skills.module.css";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className="section-title">
          {t.skills.title}
        </h2>
        <p className="section-subtitle">{t.skills.subtitle}</p>
        <div className={`grid-2 ${styles.grid}`}>
          {t.skills.groups.map((group) => (
            <article
              key={group.id}
              className="card"
              data-testid={`skill-group-${group.id}`}
            >
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
