# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

REMED-style medical device showcase website — a single-page marketing site for a medical technology company. Built with React 19 + Vite 8, no routing (all sections on one page with anchor-link navigation).

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint (flat config, JS/JSX only, no TypeScript)

## Architecture

**Single-page app** composed of sequential full-viewport sections rendered in `App.jsx`:
Header → Hero → About → Products → Business → Contact → Footer

**Component structure:** Each section lives in `src/components/<Name>/` with co-located `.jsx` and `.css` files. No CSS modules or CSS-in-JS — plain CSS files imported directly.

**Key patterns:**
- `ScrollReveal` (`src/components/UI/ScrollReveal.jsx`) — reusable framer-motion + intersection-observer wrapper used throughout for scroll-triggered animations. Accepts `direction`, `delay`, `duration` props.
- `Button` (`src/components/UI/Button.jsx`) — shared button component.
- Products carousel uses **Swiper** with autoplay, navigation, and responsive breakpoints.
- Header has desktop dropdown nav + mobile slide-in menu using framer-motion `AnimatePresence`.

**Design system:** CSS custom properties defined in `src/styles/global.css` — dark purple theme (`--color-bg: #0a0014`, `--color-purple: #8b5cf6`), Inter font, responsive breakpoints at 767px and 1024px. Utility classes: `.container`, `.section-title`, `.purple`.

**Static assets** in `public/`: SVG icons sprite (`icons.svg`), favicon, hero logo, product model image.

## Git

Do not include the `Co-Authored-By: Claude` signature in commit messages.

## ESLint

Flat config in `eslint.config.js`. The `no-unused-vars` rule ignores variables starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`), which allows unused React component imports.
