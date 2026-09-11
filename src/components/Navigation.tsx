import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { MessengerLinks } from "./MessengerLinks";
const links = [
  ["home", "Главная"],
  ["about", "Обо мне"],
  ["projects", "Проекты"],
  ["skills", "Навыки"],
  ["process", "Как я работаю"],
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
            <MessengerLinks />
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
