import { profile } from "../data/profile";
export function About() {
  return (
    <section id="about" className="about container">
      <div>
        <div className="eyebrow">02 / Обо мне</div>
        <h2>
          Погружаюсь в процесс.
          <br />
          Проектирую решение.
          <br />
          <span>Довожу до запуска.</span>
        </h2>
      </div>
      <div className="about-copy">
        <p className="lead">{profile.about}</p>
        <p>
          Работаю с ChatGPT и Codex. Это инструменты разработки: я определяю
          архитектуру и пользовательские сценарии, формулирую требования,
          разбиваю задачу на части и проверяю результат.
        </p>
        <p>
          Vibe coding для меня — последовательная работа над продуктом: найти
          ошибки, доработать логику, развернуть сервис и развивать его на
          основании реального использования.
        </p>
      </div>
      <div className="results">
        <div>
          <strong>Веб-сервисы</strong>
          <span>Для реальных рабочих процессов</span>
        </div>
        <div>
          <strong>PWA</strong>
          <span>Приложение на смартфоне</span>
        </div>
        <div>
          <strong>Собственный VPS</strong>
          <span>Запуск и развитие сервисов</span>
        </div>
        <div>
          <strong>AI в процессе</strong>
          <span>От требований до исправлений</span>
        </div>
      </div>
    </section>
  );
}
