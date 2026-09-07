# Nutreactivo

Sitio web de Nutreactivo — nutrición deportiva en Viña del Mar, Valparaíso y modalidad online. Construido con Next.js (App Router) y exportado como sitio estático.

## Requisitos

- Node.js compatible con Next.js 15
- npm

## Comandos

- `npm run dev` — servidor de desarrollo (http://localhost:3000)
- `npm run build` — build de producción; genera el export estático en `out/`
- `npm run start` — sirve el build de producción (uso limitado, ver nota de despliegue abajo)
- `npm run lint` — corre ESLint (`next lint`, config `next/core-web-vitals`)

No hay suite de tests configurada en este proyecto.

## Despliegue

El sitio se compila como **export estático** (`output: 'export'` en `next.config.mjs`), por lo que `npm run build` genera HTML/CSS/JS listos para servir desde cualquier hosting estático. No hay rutas de API, SSR ni Node.js en producción — basta con subir el contenido de `out/`.

## Estructura del proyecto

- `src/app/` — rutas (Next.js App Router). Solo unas pocas (la home, `/recursos`, `/proyeccion-carrera`, `/evaluacion-online`, `/consulta-nutricional-online`) renderizan componentes de `src/features`; el resto son páginas autocontenidas con su propio contenido, `style.css` y a veces `datos.jsx`.
- `src/features/` — la lógica y el contenido real de las secciones "hub" que sí pasan por el barrel `src/features/index.js`, organizadas por feature.
- `src/shared/` — componentes transversales (navbar, footer, etc.) e imágenes compartidas.
- `public/` — assets estáticos servidos directamente.

Para el detalle de arquitectura y decisiones no evidentes a simple vista, ver [`CLAUDE.md`](./CLAUDE.md). Para el inventario completo de rutas y convenciones más específicas, ver la carpeta [`docs/`](./docs):

- [`docs/rutas.md`](./docs/rutas.md) — inventario completo de rutas y de dónde sale el contenido de cada una.
- [`docs/convenciones.md`](./docs/convenciones.md) — building blocks de artículos de "recurso", patrón de páginas autocontenidas, y la convención de imágenes duplicadas en detalle.

## Documentación

`CLAUDE.md`, este `README.md` y `docs/` se mantienen con el subagente `project-documenter` (`.claude/agents/project-documenter.md`), que se invoca tras cambios estructurales importantes (nuevas features/rutas, reorganización de carpetas, nuevas dependencias relevantes, cambios en build o despliegue) en vez de editarlos a mano.
