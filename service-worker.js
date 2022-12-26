const l = [
  "/_app/immutable/start-667743e7.js",
  "/_app/immutable/components/pages/_layout.svelte-c420e78e.js",
  "/_app/immutable/assets/_layout-432cae01.css",
  "/_app/immutable/components/error.svelte-9cb178e9.js",
  "/_app/immutable/components/pages/_page.svelte-da207fb4.js",
  "/_app/immutable/assets/_page-51bfa698.css",
  "/_app/immutable/components/pages/song/_songId_/_page.svelte-5e7eb9bf.js",
  "/_app/immutable/components/pages/song/_songId_/_verseIndex_/_page.svelte-1926ea46.js",
  "/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/_app/immutable/modules/pages/song/_songId_/_page.ts-9232d639.js",
  "/_app/immutable/modules/pages/song/_songId_/_verseIndex_/_page.ts-83245c77.js",
  "/_app/immutable/chunks/singletons-a09d80de.js",
  "/_app/immutable/chunks/index-37370bd0.js",
  "/_app/immutable/chunks/song-9a1cbec6.js",
  "/_app/immutable/chunks/_layout-1daba58d.js",
  "/_app/immutable/chunks/stores-e0588eac.js",
  "/_app/immutable/chunks/navigation-8bdf2598.js",
  "/_app/immutable/chunks/_page-1c03c40a.js",
  "/_app/immutable/chunks/_page-022daf14.js",
  "/_app/immutable/chunks/0-9c22ddb5.js",
  "/_app/immutable/chunks/1-0112f711.js",
  "/_app/immutable/chunks/2-1fd380bc.js",
  "/_app/immutable/chunks/3-201ba18e.js",
  "/_app/immutable/chunks/4-f80a5126.js"
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
], o = "1672067279711", t = self, p = `cache${o}`, i = l.concat(u), h = new Set(i);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((s) => s.addAll(i)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const a of s)
        a !== p && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function r(e) {
  const s = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return s.put(e, a.clone()), a;
  } catch (a) {
    const n = await s.match(e);
    if (n)
      return n;
    throw a;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), a = s.protocol.startsWith("http"), n = s.hostname === self.location.hostname && s.port !== self.location.port, c = s.host === self.location.host && h.has(s.pathname), m = e.request.cache === "only-if-cached" && !c;
  a && !n && !m && e.respondWith(
    (async () => c && await caches.match(e.request) || r(e.request))()
  );
});
