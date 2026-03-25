# 🌐 kyomi.dev

Personal portfolio and engineering blog, built with Nuxt 4, Nuxt UI, and
TailwindCSS.

[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white&labelColor=020420)](https://nuxt.com)
[![Nuxt UI](https://img.shields.io/badge/Nuxt_UI-v4-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&labelColor=1a1a2e)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white&labelColor=1a1a2e)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-10.32-F69220?logo=pnpm&logoColor=white&labelColor=1a1a2e)](https://pnpm.io)

---

## ✨ Features

- **Portfolio:** hero section, about me, and an experience timeline with
  technology badges
- **Blog:** Markdown-powered posts with KaTeX math rendering, syntax
  highlighting, and estimated reading time
- **Dark mode:** seamless theme toggle with Nuxt UI
- **Fully static:** prerendered at build time via Nitro's crawl-links strategy
- **SEO-ready:** per-page meta tags populated from post frontmatter
- **Accessible:** built with `@nuxt/a11y` and semantic HTML throughout
- **Testing:** three-tier test suite: Vitest unit, Vitest component
  (Nuxt + happy-dom), and Playwright E2E

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Nuxt 4 |
| Component library | Nuxt UI v4 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript 5.9 |
| Content / CMS | `@nuxt/content` v3 (Markdown) |
| Math rendering | KaTeX (remark-math + rehype-katex) |
| Icons | Iconify (heroicons, lucide, mdi, ri, simple-icons) |
| Images | `@nuxt/image` |
| Unit / component tests | Vitest 4 + `@nuxt/test-utils` + `happy-dom` |
| E2E tests | Playwright |
| Linting | ESLint with `@nuxt/eslint-config` (stylistic) |
| Package manager | pnpm 10.32 |
| Runtime | Node 24.14 (pinned via `mise.toml`) |

## 🗂️ Project Structure

```
.
├── app/
│   ├── assets/css/main.css        # Global styles, fonts, KaTeX overrides
│   ├── components/
│   │   ├── content/               # Prose overrides for Nuxt Content
│   │   ├── landing/               # Home page sections (Hero, AboutMe, Experiences, LatestPosts)
│   │   ├── layout/                # Shell components (AppHeader, AppFooter, AppMain)
│   │   └── overlays/blog/         # Blog post components (PostContent, PostInfo, PostTags…)
│   ├── pages/
│   │   ├── index.vue              # Landing page (/)
│   │   └── blog/
│   │       ├── index.vue          # Blog listing (/blog)
│   │       └── [...slug].vue      # Individual post (/blog/...)
│   ├── app.config.ts              # Nuxt UI theme (primary: blue, neutral: slate)
│   ├── app.vue                    # Root component
│   └── error.vue                  # Custom error page
├── content/
│   └── blog/
│       ├── 2025/                  # Posts from 2025
│       └── 2026/                  # Posts from 2026
├── tests/
│   ├── e2e/                       # Playwright E2E specs
│   ├── nuxt/                      # Vitest component tests
│   └── unit/                      # Vitest unit tests
├── content.config.ts              # Blog collection schema (Zod)
├── nuxt.config.ts                 # Main Nuxt configuration
├── eslint.config.mjs              # ESLint rules
├── vitest.config.ts
├── playwright.config.ts
└── mise.toml                      # Node + pnpm version pins
```

## 🚀 Getting Started

### 📋 Prerequisites

- [Node.js](https://nodejs.org) 24+ (use [mise](https://mise.jdx.dev) to pin
  automatically)
- [pnpm](https://pnpm.io) 10.32+

Use `mise install` to set up the correct Node and pnpm versions based on
`mise.toml`.

### 📦 Installation

```bash
pnpm install
```

### 🧪 Development

Start the dev server on `http://localhost:3000`:

```bash
pnpm dev
```

### 🏗️ Build

```bash
# Production build
pnpm build

# Preview the production build locally
pnpm preview
```

## 🧾 Available Scripts

| Script               | Description                                 |
|----------------------|---------------------------------------------|
| `pnpm dev`           | Start the development server                |
| `pnpm build`         | Build for production                        |
| `pnpm preview`       | Preview the production build                |
| `pnpm lint`          | Run ESLint                                  |
| `pnpm lint:fix`      | Run ESLint and auto-fix issues              |
| `pnpm typecheck`     | Run TypeScript type checking                |
| `pnpm test`          | Run all Vitest tests                        |
| `pnpm test:watch`    | Run Vitest in watch mode                    |
| `pnpm test:coverage` | Run Vitest with coverage report             |
| `pnpm test:unit`     | Run unit tests only                         |
| `pnpm test:nuxt`     | Run component tests only                    |
| `pnpm test:e2e`      | Run Playwright E2E tests                    |
| `pnpm test:e2e:ui`   | Run Playwright E2E tests with the UI runner |

## ✍️ Writing Blog Posts

Posts live in `content/blog/<year>/` as Markdown files. Each file must include
the following frontmatter:

```yaml
---
date: 2025-03-10
minRead: 8
image: /path/to/cover-image.png
language: english
author:
  name: kyomi
  description: software engineer
  avatar:
    src: /github/bitterteriyaki.png
    alt: kyomi's avatar
tags:
  - algorithms
  - math
---
```

KaTeX math is supported inline (`$...$`) and in display blocks (`$$...$$`). Code
blocks support syntax highlighting for most languages

## 📐 Code Conventions

This project enforces strict code style via ESLint:

- Imports must be **alphabetically sorted**
- Vue SFCs must follow the block order: `<script>` → `<template>` → `<style>`
- Max line length in templates: **80 characters**
- Up to 5 attributes per line in Vue templates

Run `pnpm lint:fix` to auto-fix most issues before committing.

## 📄 License

This project is licensed under the **MIT License**.
See [LICENSE](./LICENSE) for the full text.

## 📫 Contact

- **Email:** me@kyomi.dev
- **GitHub:** [@bitterteriyaki](https://github.com/bitterteriyaki)
