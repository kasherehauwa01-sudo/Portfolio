# Портфолио AI-разработчика

Самостоятельный статический сайт на React, TypeScript и Vite. Без backend и серверных маршрутов. Все тексты на русском. Исходники сайта находятся в корне репозитория Portfolio.

## Запуск

Нужен Node.js 22.12+ и npm.

```bash
git clone https://github.com/kasherehauwa01-sudo/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Проверка TypeScript и production-сборка:

```bash
npm run build
npm run preview
```

Публикуется только содержимое `dist/`. `node_modules`, `.tools` и `dist` не нужно добавлять в Git. `package-lock.json` нужно сохранить: workflow использует `npm ci`.

## Изменение информации

- `src/data/profile.ts`: имя, описание, роль и контакты. Пустые контакты скрыты. Пока все поля пусты, показана нейтральная фраза без выдуманных адресов.
- `email`: адрес; `telegram`: username, @username или https://t.me/username; `phone`: телефон с кодом страны; `github`: username или полный HTTPS-адрес профиля.
- `src/sections/Hero.tsx`: первый экран; `About.tsx`: подход; `Process.tsx`: этапы; `Contacts.tsx`: контактное предложение.
- `src/data/skills.ts`: категории навыков.
- `src/styles/global.css`: цвета, типографика и адаптивность.
- `index.html`: title, description и Open Graph.
- `src/assets/portrait.webp`: фото первого экрана. Замените файл своим WebP; Vite автоматически соберет корректный путь для GitHub Pages. Компактная шапка и адаптация портрета оформлены в `src/styles/hero.css`.

## Добавление проекта

Добавьте объект в массив `src/data/projects.ts`. Тип `Project` в `src/types/project.ts` проверяет обязательные поля: `id`, `title`, `subtitle`, `description`, `problem`, `solution`, `benefits`, `features`, `url`, `technologies`, `category`, `image`, `status`. Дополнительное поле `note` — примечание к кейсу. `id` должен быть уникальным. `benefits`, `features`, `technologies` — массивы строк; укажите хотя бы одну пользу. Новые категории автоматически попадут в фильтры. Верстку изменять не нужно.

Кнопка «Подробнее» раскрывает кейс внутри карточки. Нативный `details` поддерживает клавиатуру без дополнительной библиотеки. Ссылки сервисов открываются в новой вкладке.

## Изображения

Поместите скриншоты в `public/projects/` и выполните новую сборку. Имена: `catalog.webp`, `sroki.webp`, `analizmop.webp`, `finomir.webp`, `shramko.webp`, `key3in.webp`. Поддерживаются также `.png` и `.jpg` — поменяйте поле `image`.

Рекомендуется WebP шириной 1200 px, до 200 КБ. В проект включены реальные публичные скриншоты каталога, контроля сроков и Shramko. Изображения загружаются лениво. Если файл отсутствует либо не загрузился, показывается типографическая обложка, а не выдуманный интерфейс. Проверка наличия файлов выполняется при сборке: после добавления изображения пересоберите сайт.

Клик по скриншоту открывает галерею с крупным изображением без обрезки и ссылкой на оригинал. Для нескольких изображений добавьте к проекту поле `images`, например `images: ["catalog.webp", "catalog-search.webp", "catalog-details.webp"]`, и соответствующие файлы в `public/projects/`. Главное изображение `image` всегда идет первым; дубликаты и отсутствующие файлы исключаются. В галерее доступны кнопки, стрелки клавиатуры и свайп. Escape, крестик или клик по фону закрывают окно. При одном скриншоте стрелки скрыты. Типографические обложки не открываются как скриншоты.

## GitHub Pages

1. В репозитории **Settings → Pages → Build and deployment → Source** выберите **GitHub Actions**.
2. Слейте пуллреквест с сайтом в `main`. Workflow `.github/workflows/deploy.yml` установит зависимости, проверит TypeScript, соберет сайт и опубликует `dist`.
3. Дождитесь успешного задания в Actions. URL будет в выводе Deploy и Settings → Pages. Без собственного домена ожидаемый адрес: https://kasherehauwa01-sudo.github.io/Portfolio/.

Пуллреквесты отдельно проверяет `.github/workflows/check.yml`: установка по lockfile и сборка с префиксом `/Portfolio/`. Эта проверка не публикует сайт.

Workflow получает реальный `base_path` от `actions/configure-pages` и передает его в Vite через `PAGES_BASE`. Для репозитория `Portfolio` это `/Portfolio/` (регистр важен), для `username.github.io` или собственного домена — `/`. Имена аккаунта и репозитория в исходниках приложения не зашиты. При локальной сборке используется `./`, поэтому ассеты работают и при размещении в подпапке. Все разделы используют якоря; настройка SPA fallback и `404.html` не нужны.

Если основная ветка называется иначе, измените `branches: [main]` в workflow. Для собственного домена сначала настройте его в Settings → Pages; включите HTTPS и повторно запустите workflow.

## Проверка подпапки локально

PowerShell:

```powershell
$env:PAGES_BASE='/Portfolio/'
npm run build
npm run preview
# Откройте http://127.0.0.1:4173/Portfolio/
Remove-Item Env:PAGES_BASE
```

В bash: `PAGES_BASE=/Portfolio/ npm run build`, затем `PAGES_BASE=/Portfolio/ npm run preview`.

## SEO

Есть русская семантическая разметка, title, description, Open Graph, favicon и robots.txt. Workflow создает `canonical`, `og:url`, `sitemap.xml` и ссылку на sitemap в robots.txt на основании настоящего адреса Pages. До выбора домена фиктивные URL не используются. Для ручной публикации после сборки запустите `SITE_URL=https://ваш-домен/ node scripts/seo.mjs` (в PowerShell задайте `$env:SITE_URL` отдельно).

Шрифт Golos Text загружается из Google Fonts с `display=swap`; при недоступности сети используется Arial. Критических внешних скриптов и библиотек UI нет.

## Источники описаний и ограничения

Публичные страницы проверены 09.09.2026:

- [Каталог](https://kvasmix.ru/vr/catalog/) и [контроль сроков](https://kvasmix.ru/vr/sroki_godnosti/) открывают рабочую оболочку. Основное описание взято из предоставленных владельцем сведений.
- [Анализ МОП](https://kvasmix.ru/vr/analizmop/) показывает форму входа в Calltrack. Подробное описание Android-приложения, веб-сервиса, синхронизации и прав доступа предоставлено владельцем 10.09.2026.
- [Finomir](https://kvasmix.ru/vr/finomir/) требует PIN. По обновленным сведениям владельца от 10.09.2026 система поддерживает распознавание счетов и автоматическое заполнение данных.
- [Shramko](https://kasherehauwa01-sudo.github.io/shramko/) показывает программу «Рацион» Юлии Шамко. Проверены разделы недель, раскрытие дня, рецепты, кнопки отметок и индикатор прогресса. Медицинские результаты не заявляются.
- [Key3in](https://kvasmix.ru/key3in/) открывает регистрацию/вход. Возможности календаря приведены по сведениям владельца.

Публичная доступность URL не означает наличие гостевого доступа к данным. Авторизация и создание учетных записей при проверке не выполнялись.

Подробности контроля сроков, Shramko и Key3in дополнены сведениями владельца от 10.09.2026: сбор остатков, события контроля, 21-дневная программа, сохранение прогресса, совместный календарь и офлайн-синхронизация. Эти дополнения не выдаются за результаты публичного тестирования.

Настройка публикации соответствует [официальной инструкции Vite](https://vite.dev/guide/static-deploy.html#github-pages). Реальный запуск GitHub Actions проверяется после размещения файлов в выбранном репозитории.

## Структура

```text
portfolio/
  .github/workflows/deploy.yml
  public/
    favicon/mark.svg
    projects/                 # Реальные скриншоты и инструкция
    robots.txt
  scripts/seo.mjs
  src/
    components/               # Навигация и карточка проекта
    data/                     # Профиль, проекты, навыки
    sections/                 # Hero, Projects, About, Skills, Process, Contacts
    styles/global.css
    types/project.ts
    App.tsx
    main.tsx
  index.html
  package.json
  package-lock.json
  tsconfig.json
  vite.config.ts
  README.md
```
