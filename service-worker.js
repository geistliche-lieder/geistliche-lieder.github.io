const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), d = [
  s + "/_app/immutable/entry/app.97858381.js",
  s + "/_app/immutable/nodes/0.d9f53ce7.js",
  s + "/_app/immutable/nodes/1.3ed647d8.js",
  s + "/_app/immutable/nodes/2.0ed1e360.js",
  s + "/_app/immutable/assets/app.bc442170.css",
  s + "/_app/immutable/assets/3.625db5c3.css",
  s + "/_app/immutable/nodes/3.7e8952c7.js",
  s + "/_app/immutable/nodes/4.9e4164d0.js",
  s + "/_app/immutable/nodes/5.5da11d9c.js",
  s + "/_app/immutable/assets/VirtualList.f4b2c993.css",
  s + "/_app/immutable/chunks/VirtualList.5950c98c.js",
  s + "/_app/immutable/chunks/index.0e2c8bd1.js",
  s + "/_app/immutable/chunks/index.5684e23d.js",
  s + "/_app/immutable/chunks/navigation.6ba2aea1.js",
  s + "/_app/immutable/chunks/scheduler.cd932b42.js",
  s + "/_app/immutable/chunks/singletons.f0d53683.js",
  s + "/_app/immutable/chunks/song.a00df9d6.js",
  s + "/_app/immutable/chunks/store.3ba0d815.js",
  s + "/_app/immutable/chunks/stores.de81d5b0.js",
  s + "/_app/immutable/entry/start.bad4bd21.js"
], r = [
  s + "/.nojekyll",
  s + "/android-chrome-192x192.png",
  s + "/android-chrome-512x512.png",
  s + "/apple-touch-icon-precomposed.png",
  s + "/apple-touch-icon.png",
  s + "/browserconfig.xml",
  s + "/favicon-16x16.png",
  s + "/favicon-32x32.png",
  s + "/favicon.ico",
  s + "/favicon.png",
  s + "/index.css",
  s + "/mstile-144x144.png",
  s + "/mstile-150x150.png",
  s + "/mstile-310x150.png",
  s + "/mstile-310x310.png",
  s + "/mstile-70x70.png",
  s + "/robots.txt",
  s + "/safari-pinned-tab.svg",
  s + "/site.webmanifest",
  s + "/songs.json"
], o = "1697644029849", n = self, p = `cache${o}`, l = d.concat(r), h = new Set(l);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(l)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      n.clients.claim();
    })
  );
});
async function u(e) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const c = await t.match(e);
    if (c)
      return c;
    throw a;
  }
}
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && h.has(t.pathname), m = e.request.cache === "only-if-cached" && !i;
  a && !c && !m && e.respondWith(
    (async () => i && await caches.match(e.request) || u(e.request))()
  );
});
