---
title: "Generador de juego de cartas"
description: "Un motor que convierte un set de imágenes en un mazo de cartas completo, listo para imprenta, con reglas inspiradas en clásicos como el UNO."
tags: ["Python", "Pillow", "PDF"]
categorias: ["Automatización", "Diseño"]
link: "/proyectos/generador-juego-cartas/"
order: 0
nuevo: true
images:
  - "./01-portada.png"
objetivo: "Todo empezó jugando con mi hijo. Me surgió una pregunta tonta: ¿sería muy complicado personalizar mi propio juego de cartas? De esa pregunta nació este proyecto. Después de darle vueltas, me decidí por algo clásico y reconocible, un juego al que pudiera sentarme a jugar con él."
datos: null
arquitectura:
  stack: ["Python", "Pillow", "librería de maquetación PDF"]
  notas: "Python, ejecutado desde VS Code con Claude Code como copiloto de desarrollo. Pillow para la generación de cada carta como imagen, y una librería de maquetación de PDF para componer el documento final imprimible."
portada:
  imagen: "./02-recorte.jpg"
  alt: "Cartas del mazo de trenes recién impresas, siendo recortadas a mano con cúter y regla sobre una base de corte"
cuerpo_titulo: "Qué hace"
descarga:
  titulo: "Descargar"
  texto: "Os dejo el PDF con el mazo de cartas de trenes completo, listo para descargar e imprimir."
  enlace: "/descargas/mazo-trenes.pdf"
  etiqueta_boton: "Descargar el mazo de trenes (PDF) ↓"
---

Construí un motor capaz de generar un PDF completo con todas las
cartas de un mazo, con reglas inspiradas en un clásico como el UNO,
listo para imprenta. Solo hay que subir las imágenes que quieras usar,
el programa monta el resto: colores, numeración, cartas especiales,
portada y maquetación lista para imprimir.

Este proyecto me obligó a salir del mundo digital y visitar la
reprografía varias veces. Hubo que ajustar cosas por el camino
(tamaños, márgenes, sangrado), pero al final salió algo bastante
decente.

Para mi hijo construí un mazo especial con sus peluches favoritos como
protagonistas, se lo di como regalo de cumpleaños.

La diferencia entre diseñar en pantalla y diseñar para un objeto
físico real, ajustar tamaños, márgenes y sangrado para imprenta fue un
aprendizaje en sí mismo. Automatizar el proceso (en vez de maquetar
cada carta a mano) es lo que hizo posible crear dos mazos distintos
reutilizando el mismo motor.
