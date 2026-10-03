---
title: "Renfe en relieve"
description: "Una aplicación para Mac que transforma la posición real de los trenes en circulación en un mapa 3D de la actividad ferroviaria española."
tags: ["Tiempo real", "Datos abiertos", "Mapa", "Mac"]
categorias: ["Tiempo real", "Datos abiertos", "Mapa"]
link: "/proyectos/renfe-en-relieve/"
order: -1
nuevo: true
video: "/videos/proyectos/renfe-en-relieve/preview.mp4"
video_caption: "Una jornada ferroviaria convertida en relieve, movimiento y luz"
objetivo: "Crear una forma más intuitiva y memorable de explorar la actividad ferroviaria, no solo mostrando dónde está cada tren en un momento concreto, sino revelando qué zonas concentran más circulación a lo largo de una jornada completa. La aplicación permite elegir un día capturado, cambiar la resolución del análisis, filtrar por producto comercial (AVE, AVLO, Alvia, Euromed, Media Distancia, Regional o Intercity) y reproducir el transcurso del día para observar cómo se activa la red."
datos:
  fuente: "Información de posición en tiempo real de los trenes de Renfe en circulación"
  frecuencia: "Capturas periódicas a lo largo del día, conservadas para construir un histórico diario analizable"
arquitectura:
  stack: ["Tauri", "Rust", "Python", "SQLite", "MapLibre GL JS", "JavaScript + Canvas", "HTML y CSS"]
  notas: "Aplicación nativa de escritorio para macOS. Tauri integra la interfaz web en una app ligera y coordina el visor, la captura y el acceso a los datos locales. Python se encarga del capturador: consulta periódicamente los trenes en circulación, normaliza los campos, registra errores sin detener el proceso y almacena cada observación en SQLite. MapLibre GL JS gestiona el mapa, la cámara 3D y el relieve por cuadrículas; una capa en JavaScript y Canvas anima los trenes con requestAnimationFrame; HTML y CSS construyen la interfaz."
cuerpo_titulo: "Cómo funciona"
---

Renfe en relieve es una aplicación de escritorio para macOS que
captura la posición de los trenes de Renfe a lo largo del día y
convierte esa información en una representación tridimensional de
la red ferroviaria española.

La visualización no dibuja ninguna vía. En su lugar, divide el
territorio en una cuadrícula y analiza cuántos trenes distintos han
pasado por cada zona. El resultado hace visible la actividad
ferroviaria como un paisaje: los grandes corredores se elevan como
cordilleras y los principales nodos, como Madrid, destacan como
torres.

El proyecto transforma datos de movilidad aparentemente aislados en
una imagen capaz de explicar la estructura, la intensidad y el
ritmo de la red de un solo vistazo.

La aplicación consulta periódicamente la información disponible de
los trenes que están en circulación y guarda cada posición en un
histórico. Cada registro incluye la fecha y hora de captura, el
identificador del tren, su posición geográfica y, cuando está
disponible, datos como el producto comercial, origen, destino,
retraso y próxima parada.

Con esos datos, el visor reconstruye el recorrido de cada tren
durante el día. Para construir el relieve, cada celda de la
cuadrícula cuenta trenes únicos, no capturas totales. Así se evita
que un tren parado durante mucho tiempo tenga más peso visual que
otro que pasa rápidamente por la misma zona.

La capa de movimiento muestra los trenes como puntos luminosos con
estelas sutiles. El usuario puede reproducir la jornada, ajustar la
velocidad, rotar el mapa, inclinar la cámara y acercarse a
cualquier zona de España.
