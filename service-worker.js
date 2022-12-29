const l = [
  "/_app/immutable/start-4d5cf64f.js",
  "/_app/immutable/components/layout.svelte-4020b759.js",
  "/_app/immutable/components/error.svelte-4f4a8b01.js",
  "/_app/immutable/components/pages/(music)/music/_layout.svelte-19058c81.js",
  "/_app/immutable/assets/app-894920b3.css",
  "/_app/immutable/components/pages/(songtext)/_layout.svelte-fe63632a.js",
  "/_app/immutable/assets/_layout-625db5c3.css",
  "/_app/immutable/components/pages/(music)/music/_page.svelte-cb417fa4.js",
  "/_app/immutable/components/pages/(songtext)/_page.svelte-a8ee7753.js",
  "/_app/immutable/assets/_page-f4b2c993.css",
  "/_app/immutable/modules/pages/(music)/music/_layout.ts-35951726.js",
  "/_app/immutable/modules/pages/(songtext)/_layout.ts-9a54fe2a.js",
  "/_app/immutable/chunks/singletons-d40baf44.js",
  "/_app/immutable/chunks/index-9dd2fa00.js",
  "/_app/immutable/chunks/index-30ce78f4.js",
  "/_app/immutable/chunks/stores-88e6d67d.js",
  "/_app/immutable/chunks/_layout-002d5f8b.js",
  "/_app/immutable/chunks/song-db7d99c5.js",
  "/_app/immutable/chunks/store-b2dce52a.js",
  "/_app/immutable/chunks/_layout-b3041e4f.js",
  "/_app/immutable/chunks/TitleBar-bab06775.js",
  "/_app/immutable/chunks/0-21feb7b6.js",
  "/_app/immutable/chunks/1-f23e8948.js",
  "/_app/immutable/chunks/2-83cb580e.js",
  "/_app/immutable/chunks/3-c823a476.js",
  "/_app/immutable/chunks/4-bf8793d2.js",
  "/_app/immutable/chunks/5-e33d5aa1.js"
], u = [
  "/.nojekyll",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/browserconfig.xml",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/favicon.png",
  "/index.css",
  "/mstile-144x144.png",
  "/mstile-150x150.png",
  "/mstile-310x150.png",
  "/mstile-310x310.png",
  "/mstile-70x70.png",
  "/robots.txt",
  "/safari-pinned-tab.svg",
  "/site.webmanifest",
  "/songs.json"
], p = "1672346568611", a = self, o = `cache${p}`, i = l.concat(u), h = new Set(i);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(i)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== o && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function r(s) {
  const e = await caches.open(`offline${p}`);
  try {
    const t = await fetch(s);
    return e.put(s, t.clone()), t;
  } catch (t) {
    const c = await e.match(s);
    if (c)
      return c;
    throw t;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && h.has(e.pathname), m = s.request.cache === "only-if-cached" && !n;
  t && !c && !m && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
