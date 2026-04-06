# Maati Art Cafe
<div align="center">
  <img src="https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Framer--Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
</div>

An immersive, highly animated premium cafe website built with Astro and React. The architecture focuses on deep, cinematic storytelling with performant scroll-linked animations and a robust, modern aesthetic.

---

## Way of Working (Logic Flows)

### Loading & Entry Flow
```mermaid
graph TD;
    A[Initial Page Request] --> B{Is First Visit?}
    B -- Yes --> C[Render Gilded Obsidian Loader]
    C --> D[Await Critical Assets]
    D --> E[Animate Loader Out & Reveal Hero]
    B -- No --> F[Skip Loader]
    F --> E
```

### Scroll & Interaction Flow
```mermaid
graph TD;
    A[User Engagement] --> B[Cursor Follow Element]
    A --> C[Scroll Progress Bar]
    A --> D[Intersection Observer / Framer Motion]
    B --> B1[Magnetic Hover Effects]
    D --> D1[Staggered Reveals]
    D --> D2[Parallax Backgrounds]
    D --> D3[Sticky Card Stacking]
```

### SEO & Performance Pipeline
```mermaid
graph TD;
    A[Page Request] --> B[Layout.astro Global Wrapper]
    B --> C[Inject Dynamic Title/Desc]
    B --> D[Setup Open Graph & Twitter Cards]
    B --> E[Inject LD-JSON Structured Schema]
    C & D & E --> F[Offload Render Heavy Assets via Lazy Loading]
```

---

## Exhaustive File Table

### Project Root
| File/Directory | Purpose |
|----------------|---------|
| `astro.config.mjs` | Primary configuration for the Astro framework, including React and Tailwind integrations, prefetching rules, and vite build/css-splitting config. |
| `.vscode/settings.json` | VS Code workspace overrides specifically to mute standard CSS linting against modern Tailwind CSS v4 directives (e.g. `@theme`, `@import source`). |
| `postcss.config.mjs` | PostCSS configuration handling CSS transforms and Tailwind utility compilation. |
| `tailwind.config.ts` / `.css`| Theme definitions, custom color palettes (`--espresso`, `--cream`, etc.), and breakpoints. |
| `package.json` | Project dependencies including `lucide-react`, `motion/react`, and other UI utilities. |

### Source (`/src`)
| Path / File | Purpose |
|-------------|---------|
| `/pages/*.astro` | Core Astro routes: `index.astro`, `about.astro`, `gallery.astro`, `menu.astro`. |
| `/layouts/Layout.astro` | The global wrapper component managing the document shell (`<head>`, `<meta>`), maintaining global state (e.g. Navigation & Cursor persistence across routes). |
| `/styles/` | Global CSS configuration: `theme.css` (custom design variables), `globals.css` (base layer resets/themes). |

### Components (`/src/components`)
| Component | Description |
|-----------|-------------|
| **`/pages/`** | Contains the heavy React logic for each major page route. |
| ↳ `Home.tsx` | Sticky-stacked scroll layout featuring parallax hero, floating coffee particles, and zoom-out responsive scaling. |
| ↳ `About.tsx` | Cinematic origin story layout divided by Earth, Craft, Fire, and Ritual philosophies. |
| ↳ `Menu.tsx` / `Gallery.tsx` | Grid-based media displays with hover reveals. |
| **Global UI** | Shared interactive elements for the main layout shell. |
| ↳ `Navigation.tsx` | Highly polished drawer & fixed header with Framer Motion entry animations. |
| ↳ `Footer.tsx` | Global site footer with branding and links. |
| ↳ `LoadingScreen.tsx` | "Gilded Obsidian" asset-aware introductory blocker to mask FOUC/flashes. |
| ↳ `CursorFollow.tsx` | Custom magnetic, dynamic pointer. |
| ↳ `FloatingParticles.tsx`| Performs background particle animation using React/Framer. |
| **`/ui/`** | The complete raw shadcn/ui library components (`button.tsx`, `dialog.tsx`, `accordion.tsx`, etc.). |
| **`/figma/`** | Helper components including `ImageWithFallback` for robust asset rendering. |

---

## Design System Overview

- **Aesthetic**: Premium, earthy, and highly sophisticated.
- **Color Tokens**:
  - `--espresso`: Deep dark brownish-black (`#2C1810`).
  - `--cream`: Primary background (`#FFF8F0`).
  - `--mocha`, `caramel`, `latte`: For accent borders, glow effects, gradients, and secondary UI highlights.
- **Typography**: Heavily relies on `font-serif` for elegant, editorial headings coupled with clean, tracked-out sans serif uppercase labels.
- **Interactivity**: Everything feels tactile. Extensive use of `group-hover:opacity-100` coupled with Framer Motion's `whileHover` and `useScroll` hooks ensures no element feels static.