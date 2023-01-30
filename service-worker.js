const l = [
  "/_app/immutable/start-555d0b9c.js",
  "/_app/immutable/components/layout.svelte-01de2d7b.js",
  "/_app/immutable/components/error.svelte-b8156982.js",
  "/_app/immutable/components/pages/(music)/music/_layout.svelte-a1f5d0b0.js",
  "/_app/immutable/assets/app-5ace6a37.css",
  "/_app/immutable/components/pages/(songtext)/_layout.svelte-1a2e8a67.js",
  "/_app/immutable/assets/_layout-625db5c3.css",
  "/_app/immutable/components/pages/(music)/music/_page.svelte-838435aa.js",
  "/_app/immutable/components/pages/(songtext)/_page.svelte-88fecb5e.js",
  "/_app/immutable/assets/_page-f4b2c993.css",
  "/_app/immutable/modules/pages/(music)/music/_layout.ts-35951726.js",
  "/_app/immutable/modules/pages/(songtext)/_layout.ts-9a54fe2a.js",
  "/_app/immutable/chunks/singletons-1d5d54ab.js",
  "/_app/immutable/chunks/index-c9ad3d2c.js",
  "/_app/immutable/chunks/index-983c2565.js",
  "/_app/immutable/chunks/stores-e426ead2.js",
  "/_app/immutable/chunks/_layout-002d5f8b.js",
  "/_app/immutable/chunks/song-f5fb165b.js",
  "/_app/immutable/chunks/store-9ea2ec21.js",
  "/_app/immutable/chunks/_layout-b3041e4f.js",
  "/_app/immutable/chunks/TitleBar-17d224f1.js",
  "/_app/immutable/chunks/0-4a2bc401.js",
  "/_app/immutable/chunks/1-c2357134.js",
  "/_app/immutable/chunks/2-5d6f8d14.js",
  "/_app/immutable/chunks/3-b2d853a0.js",
  "/_app/immutable/chunks/4-64482ebd.js",
  "/_app/immutable/chunks/5-08b15daa.js"
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
], p = "1675062329746", t = self, o = `cache${p}`, i = l.concat(u), h = new Set(i);
t.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(o).then((e) => e.addAll(i)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const a of e)
        a !== o && await caches.delete(a);
      t.clients.claim();
    })
  );
});
async function r(s) {
  const e = await caches.open(`offline${p}`);
  try {
    const a = await fetch(s);
    return e.put(s, a.clone()), a;
  } catch (a) {
    const c = await e.match(s);
    if (c)
      return c;
    throw a;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, n = e.host === self.location.host && h.has(e.pathname), m = s.request.cache === "only-if-cached" && !n;
  a && !c && !m && s.respondWith(
    (async () => n && await caches.match(s.request) || r(s.request))()
  );
});
