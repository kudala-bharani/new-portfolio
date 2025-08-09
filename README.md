## New Portfolio

A modern, responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS. Configured for smooth local development and easy deployment to GitHub Pages.

### Features

- **Responsive UI** with Tailwind CSS
- **Smooth-scrolling navigation** with active section highlighting
- **React Router** with a dedicated `Gallery` page
- **WSL-/Docker-friendly dev server** (host binding + file polling)
- **Optimized production build** via Vite

### Tech stack

- **Framework**: React 18 + TypeScript
- **Build tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: react-router-dom
- **Icons**: lucide-react

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm 9+ (recommended)

### Install

```bash
npm ci
```

### Run in development

```bash
npm run dev
```

This opens the app in your browser. If it does not, visit `http://localhost:5173/`.

### Build for production

```bash
npm run build
```

Outputs to `dist/`.

### Preview the production build

```bash
npm run preview
```

Then open the URL printed in the terminal. Note: preview serves under `/new-portfolio/` (see Base path below).

## Project structure

```
new-portfolio/
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig*.json
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ index.css
│  ├─ components/
│  │  ├─ About.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Navigation.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Skills.tsx
│  │  └─ SpotlightCard.tsx
│  └─ pages/
│     └─ Gallery.tsx
└─ README.md
```

## Configuration notes

### Vite base path (GitHub Pages)

`vite.config.ts` sets:

- **Dev**: base `/` (simple local URLs)
- **Production**: base `/new-portfolio/` (required for GitHub Pages under a project path)

This ensures local dev URLs are `http://localhost:5173/`, while the production build assumes it will be hosted at `https://<username>.github.io/new-portfolio/`.

### Tailwind

Configured via `tailwind.config.js` and `postcss.config.js`. Styles are imported in `src/index.css`.

## Routes

- `/` – Home (sections: hero, about, skills, experience, projects, contact)
- `/gallery` – Gallery page

## Content and assets

- The resume link in `src/components/Hero.tsx` points to `/KUDALA_BHARANI_KUMAR_REDDY_RESUME.pdf`.
  - Place your PDF in a `public/` folder at the project root so it’s available in production: `public/KUDALA_BHARANI_KUMAR_REDDY_RESUME.pdf`.
  - Vite will serve files in `public/` at the site root.

## Linting

```bash
npm run lint
```

## Deploying to GitHub Pages

Option A — GitHub Actions (recommended):

1. Ensure `vite.config.ts` production base is `/new-portfolio/` (already configured).
2. Create a workflow that builds the site and deploys `dist/` to Pages. Example minimal workflow steps:
   - Checkout → Setup Node → Install (`npm ci`) → Build (`npm run build`) → Upload artifact → Deploy to Pages.

Option B — Manual `gh-pages` branch:

1. Build locally: `npm run build`
2. Create and push a `gh-pages` branch from `dist/` contents. One approach using a worktree:
   ```bash
   git worktree add gh-pages
   rm -rf gh-pages/*
   cp -r dist/* gh-pages/
   cd gh-pages && git add . && git commit -m "Deploy" && git push -u origin HEAD:gh-pages
   git worktree remove gh-pages
   ```
3. In GitHub repo Settings → Pages, choose the `gh-pages` branch.

After deployment, your site should be live at `https://<username>.github.io/new-portfolio/`.

## Troubleshooting

- **Blank page in preview or on Pages**: ensure you’re visiting the app under `/new-portfolio/` and that `base` is set correctly in `vite.config.ts` for production.
- **Cannot reach dev server**: use `npm run dev`. If needed, try a different port: `npm run dev -- --port 5174`. On WSL/Docker, host binding is already enabled.
- **Styles not applied**: verify Tailwind is building (classes present in `dist/assets/*.css`). Ensure `content` paths in `tailwind.config.js` include `./src/**/*.{js,ts,jsx,tsx}` and `./index.html`.

---

Made with React + Vite + Tailwind.
