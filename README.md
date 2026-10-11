# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🗺️ Estructura de páginas

El sitio tiene tres páginas principales:

- **`/`** (home): hero de presentación, una franja de enlace a "Sobre mí", el
  **proyecto destacado** a ancho completo (`FeaturedProject.astro`) y hasta 4
  tarjetas más en el grid "El laboratorio", con un botón para ver el listado completo.
- **`/sobre-mi`**: los bloques "Quién soy" y "Mis intereses" (antes vivían en la home).
- **`/proyectos`**: listado completo de la colección `proyectos`, con filtro por
  categoría. Los dos proyectos "meta" (identidad-marca, ccordoba-web) se agrupan al
  final bajo el subtítulo "Sobre este sitio".

### Campos `destacado` y `en_home`

Cada entrada de `src/content/proyectos/` admite dos campos opcionales (por defecto
`false` los dos):

- **`destacado: boolean`** — el proyecto ocupa el bloque de ancho completo de la
  home, por encima del grid. **Solo puede haber uno a la vez**: si hay más de un
  proyecto con `destacado: true`, `src/pages/index.astro` lanza un error en build
  (`npm run build` falla con un mensaje que lista los proyectos en conflicto).
- **`en_home: boolean`** — el proyecto aparece en el grid "El laboratorio" de la
  home (máximo 4, ordenados por `date` descendente, con los `nuevo: true` siempre
  primero). El proyecto destacado nunca se repite en este grid aunque también
  tenga `en_home: true`.

`/proyectos` muestra **todos** los proyectos de la colección, con el destacado
siempre el primero de todos (chip "Destacado" en la tarjeta), después los
`nuevo: true`, y el resto por fecha descendente.

### Filtro por categoría en `/proyectos`

La fila de chips ("Todos" + una chip por cada `categoria` distinta) se genera
automáticamente a partir de los proyectos existentes — no hay que mantener la lista a
mano, un `categoria` nuevo en cualquier proyecto aparece solo como chip. El filtrado es
JavaScript vanilla, mejora progresiva: sin JS (o antes de que cargue) se ven todas las
tarjetas. El filtro activo se sincroniza con `?tag=` en la URL para poder compartir una
vista filtrada, y si el grupo "Sobre este sitio" se queda vacío con el filtro activo, su
subtítulo también se oculta.

## 📊 Analítica y consentimiento de cookies

El sitio integra Google Analytics 4 (gtag.js) sujeto a consentimiento explícito del visitante.

### Variable de entorno

Necesaria en `.env` (ver `.env.example`):

```
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Sustituye `G-XXXXXXXXXX` por el Measurement ID real de la propiedad de GA4. El prefijo `PUBLIC_`
es necesario para que Astro exponga la variable al código de cliente. `.env` está en
`.gitignore` y nunca se sube al repositorio.

### Cómo funciona el consentimiento

- En la primera visita, el componente `src/components/CookieConsent.astro` muestra un banner
  discreto en la parte inferior de la página con los botones "Aceptar" y "Rechazar".
- La decisión se guarda en `localStorage` (clave `cookie-consent`), por lo que el banner no
  vuelve a mostrarse en visitas posteriores.
- El script de Google Analytics **solo se carga e inicializa si el visitante pulsa "Aceptar"**
  (en el momento, o en una visita previa en la que ya aceptó). Si rechaza o todavía no ha
  decidido, no se carga ningún script de seguimiento.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
