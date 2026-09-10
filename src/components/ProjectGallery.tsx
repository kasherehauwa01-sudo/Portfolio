import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function ProjectGallery({
  title,
  images,
  onClose,
}: {
  title: string;
  images: string[];
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const headingId = useId();
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<string[]>([]);
  const [loaded, setLoaded] = useState<string[]>([]);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const multiple = images.length > 1;
  const current = images[index];
  const move = (direction: number) =>
    setIndex((value) => (value + direction + images.length) % images.length);

  useEffect(() => {
    const element = dialog.current!;
    const opener =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialog}
      className="gallery-dialog"
      aria-labelledby={headingId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (!multiple) return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div className="gallery-panel">
        <header className="gallery-header">
          <div>
            <span>Скриншоты проекта</span>
            <h2 id={headingId}>{title}</h2>
          </div>
          <button
            autoFocus
            onClick={onClose}
            className="gallery-close"
            aria-label="Закрыть галерею"
          >
            ×
          </button>
        </header>
        <div
          className="gallery-stage"
          onTouchStart={(event) => {
            const touch = event.touches[0];
            touchStart.current = { x: touch.clientX, y: touch.clientY };
          }}
          onTouchCancel={() => {
            touchStart.current = null;
          }}
          onTouchEnd={(event) => {
            const start = touchStart.current;
            touchStart.current = null;
            if (!start || !multiple) return;
            const touch = event.changedTouches[0];
            const dx = touch.clientX - start.x;
            if (
              Math.abs(dx) > 60 &&
              Math.abs(dx) > Math.abs(touch.clientY - start.y) * 1.5
            )
              move(dx < 0 ? 1 : -1);
          }}
        >
          {failed.includes(current) ? (
            <p className="gallery-error" role="status">
              Не удалось загрузить изображение.
              {multiple && " Попробуйте следующий скриншот."}
            </p>
          ) : (
            <>
              {!loaded.includes(current) && (
                <p className="gallery-loading" role="status">
                  Загрузка изображения…
                </p>
              )}
              <img
                key={current}
                src={current}
                alt={`${title} — скриншот ${index + 1} из ${images.length}`}
                decoding="async"
                onLoad={() => setLoaded((value) => [...value, current])}
                onError={() => setFailed((value) => [...value, current])}
              />
            </>
          )}
        </div>
        <footer className="gallery-footer">
          <div className="gallery-controls">
            {multiple && (
              <button onClick={() => move(-1)} aria-label="Предыдущий скриншот">
                ←
              </button>
            )}
            <span aria-live="polite" aria-atomic="true">
              {index + 1} / {images.length}
            </span>
            {multiple && (
              <button onClick={() => move(1)} aria-label="Следующий скриншот">
                →
              </button>
            )}
          </div>
          {!failed.includes(current) && (
            <a href={current} target="_blank" rel="noopener noreferrer">
              Открыть оригинал ↗
            </a>
          )}
        </footer>
      </div>
    </dialog>,
    document.body,
  );
}
