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
        <div className="header-profile">
          <a className="header-identity" href="#home">
            <span>{profile.name}</span>
            <strong>{profile.role}</strong>
          </a>
          <div className="header-contacts">
            <a className="messenger-link" href={`https://t.me/${profile.telegram.replace(/^@/, "")}`} target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram" title="Telegram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.5 3.5 18 20c-.2 1-1 1.2-1.8.7l-5.3-3.9-2.6 2.5c-.3.3-.5.5-1 .5l.4-5.4L17.5 6c.4-.4-.1-.6-.6-.3L4.8 13.3 1.5 12.2c-.9-.3-.9-.9.2-1.3L20.2 3c.8-.3 1.5.2 1.3.5Z"/></svg>
            </a>
            {profile.max && <a className="messenger-link" href={profile.max} target="_blank" rel="noopener noreferrer" aria-label="Написать в MAX" title="MAX">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-8 13l-1 5 5-1a9 9 0 1 0 4-17Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M7 15V9l5 4 5-4v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
            </a>}
            <a className="header-phone" href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
        </div>
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
