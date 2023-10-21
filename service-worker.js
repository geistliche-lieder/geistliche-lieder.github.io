const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.d1bf8a0a.js",
  s + "/_app/immutable/nodes/0.7899543b.js",
  s + "/_app/immutable/nodes/1.e003f7ea.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.a8e465f4.js",
  s + "/_app/immutable/nodes/3.da19fcf8.js",
  s + "/_app/immutable/nodes/4.614fc729.js",
  s + "/_app/immutable/nodes/5.22769379.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.67cdc1db.js",
  s + "/_app/immutable/chunks/app.38b27006.js",
  s + "/_app/immutable/assets/app.e17700e0.css",
  s + "/_app/immutable/chunks/common.1905f694.js",
  s + "/_app/immutable/chunks/index.6caee621.js",
  s + "/_app/immutable/chunks/index.c2058180.js",
  s + "/_app/immutable/chunks/music.1bce1811.js",
  s + "/_app/immutable/chunks/navigation.013741af.js",
  s + "/_app/immutable/chunks/scheduler.a6ab6dcc.js",
  s + "/_app/immutable/chunks/singletons.bb0df4a2.js",
  s + "/_app/immutable/chunks/song.bdf5117e.js",
  s + "/_app/immutable/chunks/store.c404d4b6.js",
  s + "/_app/immutable/chunks/stores.bb2ca38c.js",
  s + "/_app/immutable/entry/start.03f4665c.js"
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
  s + "/home_screen_android.jpg",
  s + "/home_screen_apple.jpg",
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
], o = "1697904283666", c = self, p = `cache${o}`, m = h.concat(r), u = new Set(m);
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
  const a = new URL(e.request.url), t = a.protocol.startsWith("http"), n = a.hostname === self.location.hostname && a.port !== self.location.port, i = a.host === self.location.host && u.has(a.pathname), l = e.request.cache === "only-if-cached" && !i;
  t && !n && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
