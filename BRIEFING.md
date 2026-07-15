# BRIEFING.md — ccordoba.es (build & deploy)

Contexto técnico para construir y desplegar el sitio con Claude Code en
VS Code. Sitio estático de una sola página, sin backend ni BBDD en esta v1.

---

## 1. Stack técnico

| Pieza | Elección |
|---|---|
| Framework | **Astro** (SSG puro, sin adaptador SSR) |
| Estilos | **Tailwind CSS** |
| Hosting | **Cloudflare Pages** (build automático desde GitHub) |
| Dominio | `ccordoba.es` (Porkbun), con `ccordoba.dev` como redirect |
| Repo | GitHub |
| Fuentes | Autoalojadas en `/public/fonts` (woff2), no CDN de Google Fonts |

**Nota:** no usar el adaptador `@astrojs/cloudflare` — solo hace falta para
SSR. Este sitio es 100% estático: Astro genera `dist/` y Cloudflare Pages
lo sirve directo.

---

## 2. Tokens de marca (para `tailwind.config.mjs`)

### Colores

| Token | Hex |
|---|---|
| `ink` | `#23262B` |
| `paper` | `#FAF9F7` |
| `senal` | `#6B4E8E` |
| `via` | `#E4DCEF` |
| `anden` | `#9FC9C4` |
| `linea` | `#E7E4DE` |

### Tipografía

| Token | Fuente | Uso |
|---|---|---|
| `font-display` | Space Grotesk (600/700) | Titulares, hero, nav |
| `font-body` | Inter (400/500) | Cuerpo de texto |
| `font-mono` | IBM Plex Mono (400) | Datos, cifras, timestamps, tags |

### Logo / assets

Archivos ya generados (pedir si no están copiados al repo):
- `wordmark-ccordoba-senal.svg` / `.png` — fondos claros
- `wordmark-ccordoba-blanco.png` — fondos oscuros
- `icon-cc-only-senal.png` / `-blanco.png` — favicon y avatar

Favicon: generar desde `icon-cc-only-senal.png` sobre fondo `#E4DCEF`.

---

## 3. Estructura de carpetas

```
/src
  /components
    Header.astro
    Footer.astro
    ProjectCard.astro
    FocusCard.astro
  /content
    /proyectos          (colección Markdown, uno por proyecto)
  /layouts
    BaseLayout.astro     (head, fuentes, nav, footer)
  /pages
    index.astro
  /styles
    global.css           (Tailwind + tokens de marca)
/public
  /fonts                 (woff2: Space Grotesk, Inter, IBM Plex Mono)
  /images                (logo, favicon, capturas de proyectos)
astro.config.mjs
tailwind.config.mjs
```

Contenido de texto de la home (copy ya redactado) y maqueta de referencia
viven en archivos aparte: `contenido-home-ccordoba.md` y
`ejemplo-home-ccordoba.html` — usar como fuente de contenido y layout,
reconstruido con componentes Astro.

---

## 4. Fuera de alcance v1

- Backend, API o BBDD (MySQL)
- Datos en vivo / badge conectado a `renfe-ld-monitor`
- Blog
- Modo oscuro

---

## 5. Checklist de construcción

- [ ] Scaffold del proyecto Astro + Tailwind
- [ ] Tokens de color y tipografía en `tailwind.config.mjs`
- [ ] Autoalojar las 3 fuentes en `/public/fonts`
- [ ] `BaseLayout.astro` con `<head>`, nav sticky, footer
- [ ] `Header.astro` (logo + nav)
- [ ] Sección hero (con animación del punto pulsante, ver HTML de referencia)
- [ ] Sección "Quién soy"
- [ ] Sección "Qué hago" (grid 2x2 de `FocusCard`)
- [ ] Sección "El laboratorio" con `ProjectCard` + placeholder "coming soon"
- [ ] Footer con CTAs
- [ ] Favicon + meta tags (Open Graph, título, descripción)
- [ ] `git init`, primer commit, repo en GitHub
- [ ] Conectar repo a Cloudflare Pages, confirmar build (`npm run build` → `dist`)
- [ ] Dominio personalizado `ccordoba.es`
- [ ] Redirect `ccordoba.dev` → `ccordoba.es`
