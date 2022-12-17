const l = [
  "/_app/immutable/start-590fb370.js",
  "/_app/immutable/components/pages/_layout.svelte-c420e78e.js",
  "/_app/immutable/assets/_layout-432cae01.css",
  "/_app/immutable/components/error.svelte-bb7edc01.js",
  "/_app/immutable/components/pages/_page.svelte-da207fb4.js",
  "/_app/immutable/assets/_page-51bfa698.css",
  "/_app/immutable/components/pages/song/_songId_/_page.svelte-254fee4f.js",
  "/_app/immutable/components/pages/song/_songId_/_verseIndex_/_page.svelte-b8150fd9.js",
  "/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/_app/immutable/modules/pages/song/_songId_/_page.ts-9232d639.js",
  "/_app/immutable/modules/pages/song/_songId_/_verseIndex_/_page.ts-83245c77.js",
  "/_app/immutable/chunks/singletons-af80a951.js",
  "/_app/immutable/chunks/index-37370bd0.js",
  "/_app/immutable/chunks/song-9a1cbec6.js",
  "/_app/immutable/chunks/_layout-1daba58d.js",
  "/_app/immutable/chunks/stores-f92e4456.js",
  "/_app/immutable/chunks/navigation-21b9cb4d.js",
  "/_app/immutable/chunks/_page-1c03c40a.js",
  "/_app/immutable/chunks/_page-022daf14.js",
  "/_app/immutable/chunks/0-9c22ddb5.js",
  "/_app/immutable/chunks/1-10d56a11.js",
  "/_app/immutable/chunks/2-1fd380bc.js",
  "/_app/immutable/chunks/3-ca14f5d8.js",
  "/_app/immutable/chunks/4-f2ef333b.js"
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
], o = "1671304240007", t = self, p = `cache${o}`, i = l.concat(u), h = new Set(i);
t.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(p).then((e) => e.addAll(i)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== p && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function r(s) {
  const e = await caches.open(`offline${o}`);
  try {
    const a = await fetch(s);
    return e.put(s, a.clone()), a;
  } catch (a) {
    const n = await e.match(s);
    if (n)
      return n;
    throw a;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && h.has(e.pathname), m = s.request.cache === "only-if-cached" && !c;
  a && !n && !m && s.respondWith(
    (async () => c && await caches.match(s.request) || r(s.request))()
  );
});
