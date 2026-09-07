# Inventario de rutas

Todas las rutas viven en `src/app` (Next.js App Router). Para cada una se indica de dónde sale su contenido — ver `CLAUDE.md` para el porqué de esta distinción y `convenciones.md` para el detalle del patrón de "artículo de recurso".

| Ruta | Origen del contenido |
|---|---|
| `/` | `@/features` — `Portada2`, `Consulta`, `Mediciones`, `PreviewOnline`, `Valores`, `Objetivos`, `Covertura` + `CajaComentarios` (shared). `Consulta` y `PreviewOnline` renderizan cada una un `SectionDivider` (shared) con las etiquetas "Consulta presencial" y "Consulta online"; `PreviewOnline` es solo ese divider más `StepsOverview` (`src/features/online/components/steps-overview.jsx`) |
| `/agendar` | Autocontenida (`style.css` propio) |
| `/antropometria` | Autocontenida, índice con links a las subrutas |
| `/antropometria/calculo-de-indicadores` | Autocontenida, índice |
| `/antropometria/calculo-de-indicadores/imc` | Autocontenida, calculadora con estado de cliente |
| `/antropometria/calculo-de-indicadores/phantom` | Autocontenida, `datos.jsx` con la tabla de referencia Phantom |
| `/antropometria/evaluacion-fisica` | Autocontenida, `datos.jsx` propio — **también** se importa como componente (`EvFisica`) desde `/consulta-nutricional-presencial` |
| `/articulos` | Autocontenida, índice de los 6 artículos |
| `/articulos/articulo-1-suplementos-deportivos` … `articulo-6-estrategia-nutricional-deportiva` | Autocontenidas, artículos largos |
| `/consulta-nutricional-online` | `@/features` — `ConsultaOnline` (`src/features/online`), componente de cliente con flujo de 3 pasos en estado local (`overview` → `evaluacion` → `plan`), la URL no cambia entre pasos |
| `/consulta-nutricional-presencial` | Autocontenida; importa `EvFisica` desde `/antropometria/evaluacion-fisica/page.jsx` y `Valores` desde `@/features` |
| `/evaluacion-online` | `@/features` — `EvaluacionOnline` (`src/features/online`), formulario de autoevaluación física con estado de cliente |
| `/nutricionistas` | Autocontenida, página "sobre mí" |
| `/objetivos/como-definir-objetivos` | Autocontenida |
| `/objetivos/definicion` | Autocontenida |
| `/objetivos/masa-muscular` | Autocontenida |
| `/objetivos/rendimiento` | Autocontenida |
| `/proyeccion-carrera` | `@/features` — `ProyeccionMaraton` (`src/features/maraton`) |
| `/recursos` | `@/features` — `Recursos` (índice/listado de recursos) |
| `/recursos/activar-semillas` | Autocontenida, construida con los building blocks de `recurso-article` |
| `/recursos/deportes-corta-duracion` | Autocontenida, `recurso-article` |
| `/recursos/deportes-media-duracion` | Autocontenida, `recurso-article` |
| `/recursos/germinar-legumbres` | Autocontenida, `recurso-article` |
| `/recursos/perdida-de-grasa` | Autocontenida, `recurso-article` |
| `/recursos/volumen-recomendaciones` | Autocontenida, `recurso-article` |
| `/recursos/porciones-de-alimentos` | Autocontenida, `style.css` + `datos.jsx` propios (recurso interactivo, no usa `recurso-article`) |

## Al agregar una ruta nueva

- Si es una sección "hub" reutilizable desde varios lugares (como la home o `/recursos`), considera exponerla como feature en `src/features` y agregarla al barrel (`src/features/index.js`).
- Si es contenido de una sola página (un artículo, una calculadora, una landing puntual), constrúyela como página autocontenida directamente en `src/app/<ruta>/page.jsx`, con su propio `style.css` y `datos.jsx` si necesita datos separados de la presentación.
- Si es un artículo del tipo "recurso" (`/recursos/<slug>`), usa los building blocks de `src/features/recursos/components/recurso-article.jsx` en vez de maquetar desde cero — ver `convenciones.md`.
