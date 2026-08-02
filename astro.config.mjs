// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Páginas marcadas noindex (vistas previas privadas, sin enlace en la nav):
// el plugin de sitemap no lee esa meta etiqueta por su cuenta, así que las
// excluimos aquí a mano para que no aparezcan listadas.
const PAGINAS_PRIVADAS = [
  'https://ccordoba.es/cartas-trenes/',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://ccordoba.es',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !PAGINAS_PRIVADAS.includes(page),
    }),
    mdx(),
  ]
});