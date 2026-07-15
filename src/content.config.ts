import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const proyectos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
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
    }),
});

export const collections = { proyectos };
