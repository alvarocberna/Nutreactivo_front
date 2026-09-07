# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build; static export to `out/` (see below)
- `npm run start` — serve the production build (only meaningful for non-export builds)
- `npm run lint` — run `next lint` (ESLint, config extends `next/core-web-vitals`)

There is no test suite configured in this repo (no test runner in `package.json`).

## Before committing

Before running `git commit`, invoke the `code-reviewer` subagent (`.claude/agents/code-reviewer.md`) to review the staged changes. It reports correctness bugs, security issues, and convention inconsistencies — it does not edit or fix anything itself. Read its findings and address anything real before committing.

## Naming conventions

Naming rules (PascalCase components, camelCase variables/functions, UPPER_SNAKE_CASE module constants, kebab-case files/folders, and the exceptions for Next.js reserved filenames and the `<feature>.component/.constants/.utils/.calculos` suffix pattern) are documented in the `code-conventions` skill (`.claude/skills/code-conventions/SKILL.md`), not duplicated here. Consult it when naming anything new or reviewing existing names.

## Keeping the documentation current

This file and `README.md` are maintained by the `project-documenter` subagent (`.claude/agents/project-documenter.md`), not edited ad hoc. After making a significant structural change — a new feature/route, a reorganized `src/` folder, a new major dependency, or a change to the build/deploy setup (`next.config.mjs`, `package.json` scripts) — invoke `project-documenter` to refresh both files instead of hand-editing them.

## Architecture

**Site type**: Next.js 15 App Router project configured for **static export** (`output: 'export'` in `next.config.mjs`, `images.unoptimized: true`). This rules out server components with runtime data fetching, API routes, ISR, or `next/image` optimization — everything must be resolvable at build time.

**Path alias**: `@/*` maps to `src/*` (see `jsconfig.json`).

### `src/app` — mostly standalone pages, a few thin wrappers

Five routes render through the `@/features` barrel (`src/features/index.js`): `/` (home — `Portada2`, `Consulta`, `Mediciones`, `PreviewOnline`, `Valores`, `Objetivos`, `Covertura`), `/proyeccion-carrera` (`ProyeccionMaraton`), `/recursos` (`Recursos`, the resource index), `/evaluacion-online` (`EvaluacionOnline`, the self-evaluation form), and `/consulta-nutricional-online` (`ConsultaOnline`, the client-side 3-step "evaluación física + plan nutricional" flow — see `src/features` section below for the state machine). Everything else in `src/app` is a **standalone page**: its JSX content lives directly in that route's `page.jsx`, usually with a co-located `style.css` and sometimes a local `datos.jsx` for content data (e.g. `antropometria/evaluacion-fisica/datos.jsx`, `recursos/porciones-de-alimentos/datos.jsx`). Don't assume a route is "just a thin wrapper" — check whether it actually imports from `@/features` before looking there for its content. See `docs/rutas.md` for the full route inventory.

The individual resource articles under `/recursos/<slug>` (`activar-semillas`, `deportes-corta-duracion`, etc.) are the one standalone group with real internal reuse: they're composed from shared building blocks in `src/features/recursos/components/recurso-article.jsx` (`RecursoPageHeader`, `RecursoSection`, `RecursoInlineImg`, `RecursoStepList`, `RecursoStep`, `RecursoTip`, `RecursoChecklist`, `RecursoVideoEmbed`), not from the `Recursos` feature component itself (that one only renders the `/recursos` index/listing page). See `docs/convenciones.md` for how to add a new resource article using these.

Exception to watch for: `src/app/consulta-nutricional-presencial/page.jsx` imports `EvFisica` directly from `../antropometria/evaluacion-fisica/page.jsx` instead of from a feature. In this case a `page.jsx` doubles as a reusable component — check for this before assuming a page is only reachable via its own route.

### `src/features` — the actual page/section building blocks

`src/features/index.js` is a single barrel (`export * from './<feature>/<feature>.component'`) that all `src/app` pages import from. When adding a new feature, export it from this barrel.

Convention inside a feature folder (see `src/features/maraton` as the fullest example):
- `<feature>.component.jsx` — main exported component. The export name doesn't always match the folder name (e.g. `maraton.component.jsx` exports `ProyeccionMaraton`, used at the `/proyeccion-carrera` route).
- `<feature>.constants.js` — static/copy data (Spanish-language content, option lists, etc.), kept separate from the component.
- `<feature>.calculos.js` / `<feature>.utils.js` — pure calculation/helper functions, separate from rendering.
- `components/` — subcomponents scoped to that feature only.

Small features may just have a single `.component.jsx`. A folder can also hold several sibling `.component.jsx` files when they're closely related and share data/styles — e.g. `src/features/online` has three: `evaluacion-online.component.jsx` (`EvaluacionOnline`, the `/evaluacion-online` form), `preview-online.component.jsx` (`PreviewOnline`, the home-page teaser rendered between `Mediciones` and `Valores`), and `consulta-online.component.jsx` (`ConsultaOnline`, the `/consulta-nutricional-online` page). `PreviewOnline` just renders `StepsOverview` (`src/features/online/components/steps-overview.jsx`, the "Tu plan nutricional personalizado de forma online" 2-step teaser markup) wrapped in `<SectionDivider label="Consulta online" />`, with its "Iniciar" CTA as a `Link` to `/consulta-nutricional-online` (since `StepsOverview` is called with no `onStart` prop there). All three sibling components share `online.constants.js` and one `style.css`, and are each exported individually from the barrel.

`ConsultaOnline` (`'use client'`) is a 3-state flow driven by local `useState`, not routing — the URL stays `/consulta-nutricional-online` throughout:
- `'overview'` (initial) — renders `StepsOverview`, this time *with* an `onStart` prop so its CTA is a button that sets state to `'evaluacion'` instead of a `Link`.
- `'evaluacion'` — renders `StepProgress` (`components/step-progress.jsx`, a "Paso X de 2" indicator; step 2's badge/label switch to a green palette vs. step 1's purple, matching the badge colors already used in `StepsOverview`) above `EvaluacionOnline`, wrapped in the same padded/`#f8f9fc`-background container the standalone `/evaluacion-online` page uses (kept in sync manually — no shared wrapper component), plus a "Continuar" button below the form that advances to `'plan'`.
- `'plan'` — renders `StepProgress` above `PlanNutricionalStep` (`components/plan-nutricional-step.jsx`), two option cards ("Consulta online con nutricionista" / "Plan predefinido (PDF)", $6.000 CLP) that both hand off to WhatsApp (`api.whatsapp.com/send` with a pre-filled message) rather than any in-site checkout or booking — same pattern as the `/agendar` route.

### `src/shared` — cross-cutting code

- `src/shared/components` — site-wide UI: `navbar.jsx`, `footer.jsx`, `caja-comentarios.jsx`, `install-bootstrap.js` (client-only component that wires up Bootstrap's JS bundle via dynamic `import()`), chart-style components (`bar.jsx`, `bar-maraton-vina.jsx`), `section-divider.jsx` (`SectionDivider({ label })` — a labeled divider line used to visually separate groups of home-page sections belonging to the same theme, e.g. `Consulta` and `PreviewOnline` each render one above their content).
- `src/shared/media` — images imported as JS modules (`import Img from '@/shared/media/xxx.png'`) for use with `next/image`.

### Images: two parallel copies, two access patterns

`public/media` and `src/shared/media` contain overlapping/duplicate image sets used two different ways:
- `src/shared/media/...` — imported as a module (`import Img from '...png'`) when passed to `next/image` as a `StaticImageData` object.
- `public/media/...` / `public/icons/...` — referenced by string path (`/media/xxx.png`) when the `src` needs to be a plain URL.

When adding an image used both ways, add it to both locations.

### Styling

- `src/style.scss` overrides Bootstrap's Sass color map (`$primary`, `$secondary`, plus custom `tertiary`/`quaternary`/`quinary`) and then imports Bootstrap's SCSS, so Bootstrap utility classes (`d-flex`, `col-10`, `text-tertiary`, etc.) carry the site's palette everywhere.
- Component-specific styling is a mix of Bootstrap utility classes and custom classes suffixed `Sty` (e.g. `consultaHeaderSty`, `objArrowSty`), usually defined in a co-located `style.css` next to the route/feature.
- `src/app/globals.css` holds global overrides; `src/app/page.module.css` is the only CSS Module in use. Exception: cross-cutting `src/shared/components` (e.g. `section-divider.jsx`) style themselves via classes added to `globals.css` rather than a co-located `style.css`, since they're used across multiple features/routes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
