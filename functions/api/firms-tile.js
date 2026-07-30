// Cloudflare Pages Function: proxy de tiles WMS de NASA FIRMS (VIIRS).
//
// El cliente (Leaflet) nunca ve el MAP_KEY: esta función lo añade en el
// servidor, a partir de la variable de entorno FIRMS_MAP_KEY configurada en
// Cloudflare Pages (Settings > Environment variables), y reenvía la
// petición a la WMS real de FIRMS.
//
// Solo se aceptan peticiones GetMap sobre las 3 capas VIIRS que usa la
// página (24h / 48h / 7 días), para que este endpoint no se pueda usar como
// proxy WMS abierto con nuestra cuota.

const FIRMS_WMS_BASE = "https://firms.modaps.eosdis.nasa.gov/mapserver/wms/fires/";

const ALLOWED_LAYERS = new Set(["fires_viirs_24", "fires_viirs_48", "fires_viirs_7"]);

const FORWARDED_PARAMS = [
  "SERVICE",
  "VERSION",
  "REQUEST",
  "LAYERS",
  "STYLES",
  "FORMAT",
  "TRANSPARENT",
  "SRS",
  "CRS",
  "BBOX",
  "WIDTH",
  "HEIGHT",
  "EXCEPTIONS",
];

export async function onRequestGet(context) {
  const { request, env } = context;
  const incoming = new URL(request.url).searchParams;

  // Leaflet construye la query en minúsculas (service=WMS&request=GetMap&...),
  // así que normalizamos a un mapa case-insensitive por si el cliente varía.
  const normalizado = new Map();
  for (const [key, value] of incoming) normalizado.set(key.toLowerCase(), value);

  const request_type = (normalizado.get("request") || "").toLowerCase();
  const layers = normalizado.get("layers") || "";

  if (request_type !== "getmap" || !ALLOWED_LAYERS.has(layers)) {
    return new Response("Parámetros no permitidos", { status: 400 });
  }

  if (!env.FIRMS_MAP_KEY) {
    return new Response("FIRMS_MAP_KEY no configurada", { status: 500 });
  }

  const upstream = new URL(FIRMS_WMS_BASE);
  upstream.searchParams.set("MAP_KEY", env.FIRMS_MAP_KEY);
  for (const param of FORWARDED_PARAMS) {
    const value = normalizado.get(param.toLowerCase());
    if (value) upstream.searchParams.set(param, value);
  }

  const upstreamResponse = await fetch(upstream.toString());

  if (!upstreamResponse.ok) {
    return new Response("Error al consultar FIRMS", { status: 502 });
  }

  return new Response(upstreamResponse.body, {
    status: 200,
    headers: {
      "Content-Type": upstreamResponse.headers.get("Content-Type") ?? "image/png",
      // Las detecciones de FIRMS se actualizan cada ~15 min: cacheamos los
      // tiles ese mismo margen para no agotar la cuota del MAP_KEY.
      "Cache-Control": "public, max-age=900, s-maxage=900",
    },
  });
}
