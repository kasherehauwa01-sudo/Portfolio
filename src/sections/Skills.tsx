import { skills } from "../data/skills";
export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">03 / Инструменты</div>
            <h2>Что я умею</h2>
          </div>
          <p>
            Технологии и подходы, с которыми я работал в своих проектах. Выбираю
            инструменты под задачу и углубляюсь по мере необходимости.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map(([title, description, items], i) => (
            <article key={title}>
              <span className="skill-number">0{i + 1} ↗</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="tags">
                {items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
