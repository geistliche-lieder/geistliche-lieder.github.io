const m = [
  "/_app/immutable/start-f953b4a3.js",
  "/_app/immutable/components/pages/_layout.svelte-5c29f2eb.js",
  "/_app/immutable/assets/_layout-31533331.css",
  "/_app/immutable/components/error.svelte-7acc0c62.js",
  "/_app/immutable/components/pages/_page.svelte-84bceb66.js",
  "/_app/immutable/assets/_page-f4b2c993.css",
  "/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/_app/immutable/chunks/singletons-688b2756.js",
  "/_app/immutable/chunks/index-d441f4ba.js",
  "/_app/immutable/chunks/song-efbe0258.js",
  "/_app/immutable/chunks/_layout-1daba58d.js",
  "/_app/immutable/chunks/stores-eaaa0eb7.js",
  "/_app/immutable/chunks/0-1030f353.js",
  "/_app/immutable/chunks/1-b61d11a4.js",
  "/_app/immutable/chunks/2-4ce4b019.js"
], r = [
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
], o = "1672067534435", a = self, i = `cache${o}`, p = m.concat(r), h = new Set(p);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(i).then((e) => e.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== i && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function u(s) {
  const e = await caches.open(`offline${o}`);
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
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && h.has(e.pathname), l = s.request.cache === "only-if-cached" && !n;
  t && !c && !l && s.respondWith(
    (async () => n && await caches.match(s.request) || u(s.request))()
  );
});
