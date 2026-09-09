import { useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
const categories = ["Все проекты", ...new Set(projects.map((p) => p.category))];
export function Projects() {
  const [category, setCategory] = useState(categories[0]);
  const visible = projects.filter(
    (p) => category === categories[0] || p.category === category,
  );
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">01 / Практика</div>
            <h2>
              Задачи разные.
              <br />
              Результат — <span>работает.</span>
            </h2>
          </div>
          <p>
            Реальные сервисы, выросшие из рабочих задач. Каждый можно открыть и
            посмотреть. Внутренние инструменты могут требовать входа.
          </p>
        </div>
        <div className="filters" role="group" aria-label="Категории проектов">
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
              {c === categories[0] && (
                <span>{projects.length.toString().padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          Показано проектов: {visible.length}
        </p>
        <div className="projects-grid">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} index={projects.indexOf(p)} />
          ))}
        </div>
      </div>
    </section>
  );
}
