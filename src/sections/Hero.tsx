export function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="eyebrow">
        <span className="live-dot" /> AI-разработчик · Автоматизация бизнеса
      </div>
      <h1>
        Превращаю
        <br />
        бизнес-задачи
        <br />в <span>работающие</span>
        <br />
        <span>цифровые сервисы.</span>
      </h1>
      <div className="hero-bottom">
        <div>
          <p className="hero-description">
            Создаю веб-приложения, системы учета и инструменты автоматизации с
            помощью AI. От идеи и проектирования логики до работающего сервиса
            на сервере.
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
        <div className="hero-aside">
          <span className="mini-label">ОТ ЗАДАЧИ К РЕЗУЛЬТАТУ</span>
          <div className="path-line">
            <span>Идея</span>
            <i /> <span>Логика</span>
            <i />
            <b>Сервис ↗</b>
          </div>
          <p>
            AI помогает писать код.
            <br />Я отвечаю за то, как работает решение.
          </p>
        </div>
      </div>
      <div className="disciplines">
        {[
          "AI-разработка",
          "Автоматизация бизнеса",
          "Внутренние веб-сервисы",
          "PWA",
          "Работа с данными",
          "Интеграции",
        ].map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>
    </section>
  );
}
