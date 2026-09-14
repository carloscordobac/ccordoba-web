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
