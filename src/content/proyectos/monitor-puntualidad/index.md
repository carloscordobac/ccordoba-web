---
title: "Monitor de puntualidad — Renfe LD"
description: "Captura cada 5 minutos los datos de puntualidad en tiempo real de Renfe Larga Distancia y los convierte en gráficas que cualquiera puede leer."
tags: ["GTFS-RT", "Python", "React"]
categorias: ["Datos abiertos", "Tiempo real", "Dashboard"]
link: "/proyectos/monitor-puntualidad/"
order: 3
images:
  - "./01-resumen.png"
  - "./02-trenes-activos.png"
  - "./03-patrones.png"
  - "./04-calidad-feed.png"
  - "./05-replay.png"
objetivo: "Probar y explorar qué se puede construir con los datos de tiempo real que Renfe pone a disposición del público."
datos:
  fuente: "Feed GTFS-RT (trip updates) publicado en abierto por Renfe"
  frecuencia: "Captura automática cada 5 minutos"
arquitectura:
  stack: ["Python", "Flask", "SQLite", "React", "Recharts"]
  notas: "Backend ligero sin infraestructura pesada — corre perfectamente en una máquina normal. Umbrales de puntualidad siguiendo la metodología oficial de Renfe (5, 15, 30 y 60 minutos, con 15 min como métrica de cabecera). Corre en local, capturando datos de forma continua para ir acumulando histórico; no está planeado desplegarlo de forma permanente."
galeria:
  - imagen: "./01-resumen.png"
    caption: "Vista general del dashboard (pestaña Resumen)"
  - imagen: "./02-trenes-activos.png"
    caption: "Trenes activos en tiempo real"
  - imagen: "./03-patrones.png"
    caption: "Patrones de retraso por día y hora"
  - imagen: "./04-calidad-feed.png"
    caption: "Calidad y cobertura del feed GTFS-RT"
  - imagen: "./05-replay.png"
    caption: "Replay del día, hora a hora"
---

Cada vez que el sistema consulta los datos, anota cuántos trenes están
circulando, cuánto se están retrasando de media, qué producto va mejor
o peor, y si los retrasos son puntuales o tendencia del día. Todo queda
guardado, así que con el tiempo se puede ver si los lunes hay más
retrasos que los viernes, o si ciertas horas son más problemáticas.

El dashboard está organizado en pestañas: Resumen, Retrasos, Trenes
activos, Por producto, Patrones, Calidad del feed, Resumen del día
(replay hora a hora), y Tabla con los datos en crudo.
