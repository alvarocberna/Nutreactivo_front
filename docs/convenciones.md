# Convenciones del proyecto

Detalle más profundo de patrones que en `CLAUDE.md` solo se mencionan de pasada. Ver también `rutas.md` para el inventario completo de páginas.

## Building blocks de "recurso" (`recurso-article.jsx`)

Los artículos individuales bajo `/recursos/<slug>` (excepto `porciones-de-alimentos`) se arman componiendo estas piezas de `src/features/recursos/components/recurso-article.jsx`, en vez de maquetar HTML/Bootstrap desde cero en cada página:

- `RecursoPageHeader({ title, description })` — título y bajada del artículo.
- `RecursoSection({ icon, title, children })` — bloque de contenido con ícono y título opcional (usa íconos de FontAwesome, ej. `faDroplet`).
- `RecursoInlineImg({ src, alt, className })` — imagen inline vía `next/image`, `src` como ruta string (por lo tanto debe existir en `public/media`, no solo en `src/shared/media`).
- `RecursoStepList` / `RecursoStep({ number, title, img, imgAlt, children })` — lista de pasos numerados, cada uno con imagen opcional.
- `RecursoTip({ children })` — recuadro de tip con ícono de bombilla.
- `RecursoChecklist({ items })` — lista con checkmarks.
- `RecursoVideoEmbed({ src, title })` — iframe de video responsivo.

Ejemplo real: `src/app/recursos/activar-semillas/page.jsx` combina `RecursoPageHeader` + varios `RecursoSection` con imágenes vía `RecursoInlineImg`.

**Para agregar un nuevo artículo de recurso:**
1. Crear `src/app/recursos/<slug>/page.jsx`.
2. Importar los building blocks necesarios desde `@/features/recursos/components/recurso-article`.
3. Si el recurso necesita aparecer listado en `/recursos`, agregarlo a `src/features/recursos/recursos.constants.js` (los datos que renderiza el componente `Recursos`).
4. Cualquier imagen usada con `RecursoInlineImg` o `RecursoStep` debe existir en `public/media` (ruta string) — ver la sección de imágenes abajo.

## Páginas autocontenidas: `style.css` y `datos.jsx` locales

La mayoría de las rutas (ver `rutas.md`) no pasan por `src/features`: su JSX vive directo en `page.jsx`. Dos archivos hermanos opcionales acompañan a estas páginas:

- **`style.css`** co-ubicado — estilos específicos de esa ruta, importado directo en el `page.jsx` (ej. `src/app/agendar/style.css`, `src/app/consulta-nutricional-presencial/style.css`).
- **`datos.jsx`** co-ubicado — cuando el contenido es una tabla/lista de datos separable de la presentación (ej. `src/app/antropometria/evaluacion-fisica/datos.jsx`, `src/app/recursos/porciones-de-alimentos/datos.jsx`, `src/app/antropometria/calculo-de-indicadores/phantom/datos.jsx`).

Esto es distinto de la convención de `src/features/<feature>.constants.js` — esa aplica solo dentro de una feature del barrel; las páginas autocontenidas usan `datos.jsx` en su propia carpeta de ruta.

## Imágenes: convención de duplicado en detalle

Como se resume en `CLAUDE.md`, hay dos copias paralelas de las imágenes:

- **`src/shared/media/...`** — se importa como módulo JS (`import Img from '@/shared/media/xxx.png'`) y se pasa a `next/image` como objeto `StaticImageData`. Ejemplo: `src/app/objetivos/rendimiento/page.jsx` importa `img_halterofilia.jpg`, `img_remo2.jpeg`, `img_atletismo.jpeg` así.
- **`public/media/...`** / **`public/icons/...`** — se referencia como string (`src='/media/xxx.png'`) cuando el componente necesita una URL, no un módulo. Ejemplo: los building blocks `RecursoInlineImg` y `RecursoStep` de `recurso-article.jsx` reciben `src` como string, así que las imágenes que usan deben existir en `public/media`.

**Regla práctica:** si vas a usar una imagen nueva dentro de un building block de `recurso-article` (o cualquier componente que reciba `src` como string), solo necesitas agregarla a `public/media`. Si la vas a importar directamente como módulo en un componente, agrégala a `src/shared/media`. Si no estás seguro de cuál usará el componente, revisa cómo recibe la prop `src` antes de decidir dónde poner el archivo — y si el mismo asset se usa de ambas formas en distintos lugares, agrégalo a las dos carpetas.
