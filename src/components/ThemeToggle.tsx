"use client";

import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={toggleTheme}
      aria-label={theme === "light" ? t.themeLight : t.themeDark}
      data-testid="theme-toggle"
    >
      <span aria-hidden="true">{theme === "light" ? "🌙" : "☀️"}</span>
      <span className="sr-only">
        {theme === "light" ? t.themeLight : t.themeDark}
      </span>
    </button>
  );
}
