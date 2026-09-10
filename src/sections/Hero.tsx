import portrait from "../assets/portrait.webp";
import { profile } from "../data/profile";
import "../styles/hero.css";
export function Hero() {
  return (
    <section className="hero hero-compact container" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" /> AI-разработчик · Vibe Coder
          </div>
          <h1>
            Бизнес-задачи
            <br />
            превращаю в{" "}
            <span>
              работающие
              <br className="hero-break" /> цифровые сервисы.
            </span>
          </h1>
          <p className="hero-description">
            Создаю веб-приложения и инструменты автоматизации с помощью AI. От
            понимания процесса и проектирования логики до работающего сервиса на
            сервере.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Смотреть проекты <span aria-hidden="true">↗</span>
            </a>
            <a className="button secondary" href="#about">
              Обо мне <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure className="hero-portrait">
          <img
            src={portrait}
            alt={profile.name ? `Портрет: ${profile.name}` : "Автор портфолио"}
            width="1441"
            height="1920"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>
            <span>{profile.name || "От идеи до запуска"}</span>
            <span>Логика. Разработка. Результат.</span>
          </figcaption>
        </figure>
      </div>
      <div className="disciplines" aria-label="Направления работы">
        {[
          "Автоматизация бизнеса",
          "Внутренние веб-сервисы",
          "PWA",
          "Работа с данными",
          "API и интеграции",
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
