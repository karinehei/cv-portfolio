"use client";

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import styles from "./Header.module.css";

const MENU_PANEL_ID = "main-navigation-menu";

export function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 900px)").matches) {
        closeMenu();
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#home"
          className={styles.logo}
          data-testid="site-logo"
          aria-label={t.logoLabel}
        >
          {t.logoText}
        </a>

        <div className={styles.actions}>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className={`btn btn-secondary ${styles.menuButton}`}
          aria-expanded={menuOpen}
          aria-controls={MENU_PANEL_ID}
          aria-label={menuOpen ? t.menuClose : t.menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="menu-toggle"
        >
          <span className={styles.menuIcon} aria-hidden="true">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

        <nav
          id={MENU_PANEL_ID}
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label={t.navAriaLabel}
        >
          <ul className={styles.navList}>
            {t.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={closeMenu}
                  data-testid={`nav-link-${link.id}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
