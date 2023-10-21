const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.680a48a3.js",
  s + "/_app/immutable/nodes/0.4aacdc64.js",
  s + "/_app/immutable/nodes/1.85c48942.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.35d1ffdb.js",
  s + "/_app/immutable/nodes/3.18aff5d0.js",
  s + "/_app/immutable/nodes/4.2890e3db.js",
  s + "/_app/immutable/nodes/5.6e06439c.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.a6ed20ad.js",
  s + "/_app/immutable/chunks/app.36771be4.js",
  s + "/_app/immutable/assets/app.56fb9eeb.css",
  s + "/_app/immutable/chunks/common.1905f694.js",
  s + "/_app/immutable/chunks/index.6caee621.js",
  s + "/_app/immutable/chunks/index.c2058180.js",
  s + "/_app/immutable/chunks/music.1bce1811.js",
  s + "/_app/immutable/chunks/navigation.54c786b7.js",
  s + "/_app/immutable/chunks/scheduler.a6ab6dcc.js",
  s + "/_app/immutable/chunks/singletons.02d17472.js",
  s + "/_app/immutable/chunks/song.bdf5117e.js",
  s + "/_app/immutable/chunks/store.c404d4b6.js",
  s + "/_app/immutable/chunks/stores.a55e47c0.js",
  s + "/_app/immutable/entry/start.a1d9d52b.js"
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
], o = "1697896919356", c = self, p = `cache${o}`, m = h.concat(u), r = new Set(m);
c.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((a) => a.addAll(m)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (a) => {
      for (const t of a)
        t !== p && await caches.delete(t);
      c.clients.claim();
    })
  );
});
async function d(e) {
  const a = await caches.open(`offline${o}`);
  try {
    const t = await fetch(e);
    return a.put(e, t.clone()), t;
  } catch (t) {
    const n = await a.match(e);
    if (n)
      return n;
    throw t;
  }
}
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), t = a.protocol.startsWith("http"), n = a.hostname === self.location.hostname && a.port !== self.location.port, i = a.host === self.location.host && r.has(a.pathname), l = e.request.cache === "only-if-cached" && !i;
  t && !n && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
