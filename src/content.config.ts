import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const proyectos = defineCollection({
  // .mdx además de .md: hace falta para proyectos que necesitan
  // HTML/CSS/componentes embebidos en el cuerpo (p. ej. identidad-marca).
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/proyectos" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Stack técnico: se usa en la página de detalle (/proyectos/[slug]).
      tags: z.array(z.string()),
      // Categorías de tipo de proyecto (Datos abiertos, Tiempo real, Mapa...):
      // se usan en la tarjeta de la home, encima del título. Campo aparte de
      // "tags" a propósito, para no mezclar stack técnico con categoría.
      categorias: z.array(z.string()).optional(),
      link: z.string(),
      order: z.number(),
      // Capturas del proyecto (una o varias): coloca los archivos (jpg/png/webp)
      // dentro de la carpeta del proyecto y lístalos aquí, p. ej.
      // ["./01-resumen.png", "./02-detalle.png"]. Con más de una se muestran
      // en carrusel.
      images: z.array(image()).optional(),
      // Vídeo de portada (opcional, sustituye a las imágenes si está presente):
      // sube el .mp4 a /public/videos/ y pon aquí la ruta, p. ej. "/videos/mi-video.mp4".
      video: z.string().optional(),

      // Campos opcionales para la página de detalle (/proyectos/[slug]).
      // Si un proyecto no los define, esa sección se omite en el layout.
      objetivo: z.string().optional(),
      datos: z
        .object({
          fuente: z.string(),
          frecuencia: z.string(),
          limitaciones: z.string().optional(),
        })
        .nullable()
        .optional(),
      arquitectura: z
        .object({
          stack: z.array(z.string()),
          notas: z.string(),
        })
        .optional(),
      // Galería con pie de foto para la página de detalle. Independiente de
      // "images" (que alimenta el carrusel de la tarjeta en la home).
      galeria: z
        .array(
          z.object({
            imagen: image(),
            caption: z.string(),
          }),
        )
        .optional(),
      // Título de la sección de cuerpo (el contenido Markdown del archivo).
      // Por defecto "Cómo funciona"; algún proyecto especial puede cambiarlo
      // (p. ej. "Cómo está construida" para ccordoba-web).
      cuerpo_titulo: z.string().default("Cómo funciona"),
      estado_actual: z.string().optional(),
    }),
});

export const collections = { proyectos };
