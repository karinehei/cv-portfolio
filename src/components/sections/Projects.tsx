"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="section-title">
          {t.projects.title}
        </h2>
        <p className="section-subtitle">{t.projects.subtitle}</p>
        <div className="grid-2">
          {t.projects.items.map((project) => (
            <article key={project.id} className="card" data-testid="project-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", flexWrap: "wrap" }}>
                <h3 style={{ margin: 0, fontSize: "1.125rem", flex: "1 1 12rem" }}>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`project-link-${project.id}`}
                      aria-label={t.projects.viewRepoAria(project.title)}
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <span className="tag" aria-label={project.statusLabel}>
                  {project.statusLabel.replace(/^(Status|Tila): /, "")}
                </span>
              </div>
              <p style={{ color: "var(--color-text-muted)", margin: "1rem 0" }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
