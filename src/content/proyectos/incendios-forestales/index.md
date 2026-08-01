---
title: "Incendios forestales en España"
description: "Mapa interactivo de más de 247.000 incendios forestales en España entre 1983 y 2023, con datos oficiales del MITECO. Se puede reproducir año a año, como el replay de trenes, viendo cómo cambia el mapa con cada verano."
tags: ["EGIF", "Leaflet", "Python"]
categorias: ["Datos abiertos", "Histórico", "Mapa"]
link: "/proyectos/incendios-forestales/"
order: 5
video: "/videos/incendios-forestales.mp4"
objetivo: "Visualizar la evolución histórica de los incendios forestales en España de forma que se entienda de un vistazo, mismo enfoque de 'replay temporal' que ya usé para los trenes, aplicado a otro tipo de dato geolocalizado."
datos:
  fuente: "Estadística General de Incendios Forestales (EGIF) vía Civio, 1968-2022; Excel EGIF 2023 con reproyección UTM; agregados 2024-2026 de informes PDF del MITECO"
  frecuencia: "Dato histórico, actualizado a medida que MITECO publica nuevos informes anuales"
  limitaciones: "Los incendios de 1968-1982 no están geolocalizados, solo agregados por intensidad/superficie quemada; los años 2024-2026 son cifras agregadas, no puntos individuales"
arquitectura:
  stack: ["Python", "Leaflet", "pyproj"]
  notas: "Reproyección de coordenadas UTM (husos 29/30/31) a WGS84 para poder geolocalizar los incendios de 2023. 247.638 incendios geolocalizados en total."
---

El mapa tiene un slider de año (1968-2026) y dos modos de
visualización: mapa de calor o puntos individuales, más un modo
"acumulado" para ver el total histórico de golpe. Cada incendio
geolocalizado incluye año y hectáreas quemadas.

Construir esto exigió cruzar tres fuentes con formatos completamente
distintos: un CSV histórico de Civio, un Excel con coordenadas UTM que
había que reproyectar a WGS84, y PDFs de informes agregados del MITECO
para los años más recientes, cada fuente con su propio nivel de
detalle.
