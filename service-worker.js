const l = [
  "/_app/immutable/start-38d34d3d.js",
  "/_app/immutable/components/layout.svelte-0843e9b4.js",
  "/_app/immutable/components/error.svelte-573de6d8.js",
  "/_app/immutable/components/pages/(music)/music/_layout.svelte-a4f5f1e3.js",
  "/_app/immutable/assets/app-894920b3.css",
  "/_app/immutable/components/pages/(songtext)/_layout.svelte-3c4d4b0c.js",
  "/_app/immutable/assets/_layout-625db5c3.css",
  "/_app/immutable/components/pages/(music)/music/_page.svelte-056b69ec.js",
  "/_app/immutable/components/pages/(songtext)/_page.svelte-75c3181a.js",
  "/_app/immutable/assets/_page-f4b2c993.css",
  "/_app/immutable/modules/pages/(music)/music/_layout.ts-35951726.js",
  "/_app/immutable/modules/pages/(songtext)/_layout.ts-9a54fe2a.js",
  "/_app/immutable/chunks/singletons-ba873e94.js",
  "/_app/immutable/chunks/index-ff889d6b.js",
  "/_app/immutable/chunks/index-03f8d9f7.js",
  "/_app/immutable/chunks/stores-02419a59.js",
  "/_app/immutable/chunks/_layout-002d5f8b.js",
  "/_app/immutable/chunks/song-48491217.js",
  "/_app/immutable/chunks/store-75269b13.js",
  "/_app/immutable/chunks/_layout-b3041e4f.js",
  "/_app/immutable/chunks/TitleBar-cb32f0f0.js",
  "/_app/immutable/chunks/0-86cfb280.js",
  "/_app/immutable/chunks/1-ae26e4bf.js",
  "/_app/immutable/chunks/2-064229bf.js",
  "/_app/immutable/chunks/3-72c70fff.js",
  "/_app/immutable/chunks/4-6ba9cc98.js",
  "/_app/immutable/chunks/5-c1a8a3c9.js"
], u = [
  "/.nojekyll",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon-precomposed.png",
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
], p = "1672496262901", a = self, o = `cache${p}`, i = l.concat(u), h = new Set(i);
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
