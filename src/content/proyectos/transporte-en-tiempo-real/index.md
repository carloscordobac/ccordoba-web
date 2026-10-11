---
title: "El transporte en tiempo real"
description: "Un mapa único con las posiciones reales que publican los operadores de trenes, autobuses y tranvías de España, Portugal y Francia."
tags: ["Tiempo real", "Datos abiertos", "Mapa"]
categorias: ["Tiempo real", "Datos abiertos", "Mapa"]
link: "/proyectos/transporte-en-tiempo-real/"
live_url: "https://mapas.ccordoba.es"
order: 7
date: 2026-10-11
nuevo: false
en_home: false
destacado: true
images:
  - "./01-mapa.png"
portada:
  imagen: "./01-mapa.png"
  alt: "Visor de mapas.ccordoba.es mostrando el transporte en tiempo real de Bizkaia: trenes de Cercanías, Bilbobus, Bizkaibus y Metro Bilbao sobre el mapa"
objetivo: "Reunir en un mismo mapa las posiciones que publican los operadores de transporte. El proyecto permite explorar cómo se mueven trenes, autobuses y tranvías en distintas áreas de España, Portugal y Francia, y deja claro cuándo una fuente no ofrece posiciones disponibles. La intención es mostrar vehículos reales, sin estimar su ubicación a partir de horarios."
datos:
  fuente: "El visor consulta feeds de posiciones publicados por los operadores y portales de movilidad. Combina formatos como GTFS-Realtime y APIs propias, valida las coordenadas y las fechas y presenta los resultados con una estructura común."
  frecuencia: "Cada cinco minutos guarda un resumen por fuente (estado, número de vehículos, última posición y tiempo de respuesta) para analizar su evolución."
  limitaciones: "No almacena recorridos ni posiciones individuales en el histórico."
arquitectura:
  stack: ["Cloudflare Pages", "Cloudflare Pages Functions", "MapLibre", "Cloudflare Workers", "Cloudflare D1"]
  notas: "La web se sirve desde Cloudflare Pages y dibuja el mapa con MapLibre. Las Pages Functions consultan y normalizan los feeds desde el servidor, donde permanecen las credenciales necesarias. Un Worker independiente toma las capturas periódicas y las guarda en Cloudflare D1. Así, el mapa puede mostrar las posiciones actuales mientras las páginas de Datos e Histórico ofrecen una visión del estado de las fuentes a lo largo del tiempo."
cuerpo_titulo: "Cómo funciona"
---

Elige un país y un área para ver sus operadores. Puedes mostrar u
ocultar cada red, consultar sus líneas y centrar el mapa en la que te
interese. La vista Datos muestra el estado actual de cada fuente;
Histórico permite observar cómo han variado sus posiciones
publicadas, su disponibilidad y su tiempo de respuesta.
