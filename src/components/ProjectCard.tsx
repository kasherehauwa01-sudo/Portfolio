import { useState } from "react";
import type { Project } from "../types/project";
const screenshots = import.meta.glob("/public/projects/*.{webp,png,jpg}", {
  eager: true,
  query: "?url",
  import: "default",
});
export function ProjectCard({
  project: p,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [failed, setFailed] = useState(false);
  const hasImage = `/public/projects/${p.image}` in screenshots;
  return (
    <article className={`project-card project-${p.id}`}>
      <div className="project-art">
        {hasImage && !failed ? (
          <img
            src={`${import.meta.env.BASE_URL}projects/${p.image}`}
            alt={`Публичный интерфейс: ${p.title}`}
            loading="lazy"
            decoding="async"
            width="1200"
            height="750"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="project-cover"
            aria-label={`Обложка проекта ${p.title}, не скриншот`}
          >
            <span className="cover-label">{p.category}</span>
            <span className="cover-symbol" aria-hidden="true">
              {["⌘", "◷", "↗", "₽", "✳", "▦"][index % 6]}
            </span>
            <span className="cover-title">{p.title}</span>
            <span className="cover-caption">{p.subtitle}</span>
          </div>
        )}
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{p.category}</span>
          <span className="status">
            <i />
            {p.status}
          </span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="benefit">
          <span aria-hidden="true">↳</span>
          {p.benefits[0]}
        </div>
        <div className="tags">
          {p.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <details>
          <summary>
            Подробнее о проекте <span aria-hidden="true">+</span>
          </summary>
          <div className="case">
            <h4>Проблема</h4>
            <p>{p.problem}</p>
            <h4>Решение</h4>
            <p>{p.solution}</p>
            <h4>Возможности</h4>
            <ul>
              {p.features.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <h4>Польза</h4>
            <ul>
              {p.benefits.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            {p.note && <p className="case-note">{p.note}</p>}
          </div>
        </details>
        <a
          className="service-link"
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Открыть сервис ${p.title} в новой вкладке`}
        >
          Открыть сервис <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
