import { profile } from "../data/profile";
import maxLogo from "../assets/max-logo.png";

export function MessengerLinks() {
  return (
    <div className="messenger-links">
      <a className="messenger-link" href={`https://t.me/${profile.telegram.replace(/^@/, "")}`} target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram" title="Telegram">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.5 3.5 18 20c-.2 1-1 1.2-1.8.7l-5.3-3.9-2.6 2.5c-.3.3-.5.5-1 .5l.4-5.4L17.5 6c.4-.4-.1-.6-.6-.3L4.8 13.3 1.5 12.2c-.9-.3-.9-.9.2-1.3L20.2 3c.8-.3 1.5.2 1.3.5Z"/></svg>
      </a>
      {profile.max && <a className="messenger-link" href={profile.max} target="_blank" rel="noopener noreferrer" aria-label="Написать в MAX" title="MAX">
        <span className="max-icon" style={{ maskImage: `url(${maxLogo})`, WebkitMaskImage: `url(${maxLogo})` }} aria-hidden="true" />
      </a>}
    </div>
  );
}
