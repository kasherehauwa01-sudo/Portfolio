import { useEffect, useState } from "react";
import { profile } from "../data/profile";
const links = [
  ["home", "Главная"],
  ["about", "Обо мне"],
  ["projects", "Проекты"],
  ["skills", "Навыки"],
  ["process", "Как я работаю"],
  ["contacts", "Контакты"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="header">
      <div className="nav-wrap">
        <a className="brand" href="#home" aria-label="На главную">
          <span className="brand-mark" aria-hidden="true">
            ↗
          </span>
          <span>
            {profile.name || "Практика"}
            <small>AI-разработка</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Закрыть ×" : "Меню ☰"}
        </button>
        <nav
          id="navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Основная навигация"
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
