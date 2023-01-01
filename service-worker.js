const l = [
  "/_app/immutable/start-ff36cba4.js",
  "/_app/immutable/components/layout.svelte-01de2d7b.js",
  "/_app/immutable/components/error.svelte-de42a0f2.js",
  "/_app/immutable/components/pages/(music)/music/_layout.svelte-a1f5d0b0.js",
  "/_app/immutable/assets/app-2d79883c.css",
  "/_app/immutable/components/pages/(songtext)/_layout.svelte-b11c0c3b.js",
  "/_app/immutable/assets/_layout-625db5c3.css",
  "/_app/immutable/components/pages/(music)/music/_page.svelte-dacb8626.js",
  "/_app/immutable/components/pages/(songtext)/_page.svelte-eeb7119e.js",
  "/_app/immutable/assets/_page-f4b2c993.css",
  "/_app/immutable/modules/pages/(music)/music/_layout.ts-35951726.js",
  "/_app/immutable/modules/pages/(songtext)/_layout.ts-9a54fe2a.js",
  "/_app/immutable/chunks/singletons-af071890.js",
  "/_app/immutable/chunks/index-c9ad3d2c.js",
  "/_app/immutable/chunks/index-983c2565.js",
  "/_app/immutable/chunks/stores-a9c9baa2.js",
  "/_app/immutable/chunks/_layout-002d5f8b.js",
  "/_app/immutable/chunks/song-94efc43c.js",
  "/_app/immutable/chunks/store-05c23323.js",
  "/_app/immutable/chunks/_layout-b3041e4f.js",
  "/_app/immutable/chunks/TitleBar-17d224f1.js",
  "/_app/immutable/chunks/0-4a2bc401.js",
  "/_app/immutable/chunks/1-0bfa8c86.js",
  "/_app/immutable/chunks/2-5d6f8d14.js",
  "/_app/immutable/chunks/3-b6e16367.js",
  "/_app/immutable/chunks/4-7b1fbc86.js",
  "/_app/immutable/chunks/5-2cce3af1.js"
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
], p = "1672589067300", a = self, o = `cache${p}`, i = l.concat(u), h = new Set(i);
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
