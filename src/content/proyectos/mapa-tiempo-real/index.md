---
title: "Mapa en tiempo real — ES / US / IE"
description: "Replay animado de las posiciones GPS de trenes en España, Estados Unidos e Irlanda. Con un hallazgo curioso: no todos los operadores publican estos datos."
tags: ["GPS", "Leaflet", "Python"]
categorias: ["Datos abiertos", "Tiempo real", "Mapa"]
link: "/proyectos/mapa-tiempo-real/"
order: 2
video: "/videos/mapa-tiempo-real.mp4"
objetivo: "Ver el movimiento real de los trenes sobre el mapa, no solo datos tabulados, y de paso comparar qué operadores ferroviarios del mundo publican de verdad su posición GPS en abierto y cuáles no."
datos:
  fuente: "flotaLD.json de Renfe (España), API pública de Amtraker (Estados Unidos), API XML oficial de Irish Rail (Irlanda)"
  frecuencia: "Captura de posiciones cada 60 segundos"
  limitaciones: "Deutsche Bahn y SNCF no publican ningún dato de VehiclePositions — verificado directamente, no es una limitación técnica de este proyecto sino una decisión de esos operadores"
arquitectura:
  stack: ["Python", "Leaflet", "OpenStreetMap"]
  notas: "Visor con selector de país, replay animado con control de velocidad, y filtro por producto/tipo de tren. Corre en local; no está planeado desplegarlo de forma permanente."
---

El sistema captura la posición GPS de cada tren activo cada 60
segundos y la guarda. El visor permite elegir país, reproducir el
histórico del día como un replay con controles de velocidad (+1, +5,
+10, +20), y filtrar por tipo de producto (AVE, Alvia, Intercity...).

La comparativa entre operadores fue un hallazgo casi accidental: al
intentar replicar lo mismo con Deutsche Bahn y SNCF, ninguno de los
dos publica posiciones GPS en tiempo real — algo revelador sobre el
nivel de transparencia real de cada operador, más allá de lo que
digan sus políticas de datos abiertos.
