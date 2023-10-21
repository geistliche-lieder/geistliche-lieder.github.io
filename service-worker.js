const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.9b27d688.js",
  s + "/_app/immutable/nodes/0.87bcd461.js",
  s + "/_app/immutable/nodes/1.54b75a12.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.35d1ffdb.js",
  s + "/_app/immutable/nodes/3.18aff5d0.js",
  s + "/_app/immutable/nodes/4.5bf84438.js",
  s + "/_app/immutable/nodes/5.d6cd456f.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.a6ed20ad.js",
  s + "/_app/immutable/chunks/app.36771be4.js",
  s + "/_app/immutable/assets/app.56fb9eeb.css",
  s + "/_app/immutable/chunks/common.1905f694.js",
  s + "/_app/immutable/chunks/index.6caee621.js",
  s + "/_app/immutable/chunks/index.c2058180.js",
  s + "/_app/immutable/chunks/music.1bce1811.js",
  s + "/_app/immutable/chunks/navigation.682c2c76.js",
  s + "/_app/immutable/chunks/scheduler.a6ab6dcc.js",
  s + "/_app/immutable/chunks/singletons.a5f5e818.js",
  s + "/_app/immutable/chunks/song.bdf5117e.js",
  s + "/_app/immutable/chunks/store.c404d4b6.js",
  s + "/_app/immutable/chunks/stores.75e939b6.js",
  s + "/_app/immutable/entry/start.a31d95e8.js"
], u = [
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
], o = "1697893086699", n = self, p = `cache${o}`, m = h.concat(u), r = new Set(m);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(m)).then(() => {
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
async function d(e) {
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
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && r.has(t.pathname), l = e.request.cache === "only-if-cached" && !i;
  a && !c && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
