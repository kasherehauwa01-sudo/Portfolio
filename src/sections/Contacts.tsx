import { useState } from "react";
import { profile } from "../data/profile";
export function Contacts() {
  const [message, setMessage] = useState("");
  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: "Telegram",
      value: profile.telegram,
      href: profile.telegram.startsWith("https://")
        ? profile.telegram
        : `https://t.me/${profile.telegram.replace("@", "")}`,
    },
    {
      label: "Телефон",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      label: "GitHub",
      value: profile.github,
      href: profile.github.startsWith("https://")
        ? profile.github
        : `https://github.com/${profile.github}`,
    },
  ].filter((c) => c.value.trim());
  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setMessage("Контакт скопирован");
    } catch {
      setMessage(
        "Не удалось скопировать. Выделите и скопируйте контакт вручную.",
      );
    }
  }
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <div className="eyebrow">05 / Давайте обсудим</div>
        <h2>
          Есть задача, которую
          <br />
          хочется <span>автоматизировать?</span>
        </h2>
        <p>
          Могу разобрать существующий процесс и предложить, как превратить его в
          удобный цифровой инструмент.
        </p>
        {contacts.length ? (
          <div className="contact-list">
            {contacts.map((c) => (
              <div key={c.label}>
                <a href={c.href}>
                  {c.label}
                  <strong>{c.value} ↗</strong>
                </a>
                <button
                  onClick={() => copy(c.value)}
                  aria-label={`Скопировать ${c.label}`}
                >
                  Копировать
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="contact-empty">
            Контакты будут опубликованы здесь.
          </div>
        )}
        <div role="status" className="copy-status">
          {message}
        </div>
      </div>
    </section>
  );
}
