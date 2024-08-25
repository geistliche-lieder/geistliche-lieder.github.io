const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.eff50f49.js",
  s + "/_app/immutable/nodes/0.4289ac0b.js",
  s + "/_app/immutable/nodes/1.374576f4.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.482afa4e.js",
  s + "/_app/immutable/nodes/3.ba658f6a.js",
  s + "/_app/immutable/nodes/4.a14204b4.js",
  s + "/_app/immutable/nodes/5.5b692673.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.745859da.js",
  s + "/_app/immutable/chunks/app.bc5fcf8b.js",
  s + "/_app/immutable/assets/app.50a10aef.css",
  s + "/_app/immutable/chunks/common.98f050d8.js",
  s + "/_app/immutable/chunks/index.083c7fd3.js",
  s + "/_app/immutable/chunks/index.676e4be4.js",
  s + "/_app/immutable/chunks/music.09543946.js",
  s + "/_app/immutable/chunks/navigation.6b380743.js",
  s + "/_app/immutable/chunks/scheduler.51d6c524.js",
  s + "/_app/immutable/chunks/singletons.b68030b6.js",
  s + "/_app/immutable/chunks/song.fb6bdabd.js",
  s + "/_app/immutable/chunks/store.616de63b.js",
  s + "/_app/immutable/chunks/stores.73735560.js",
  s + "/_app/immutable/entry/start.cf32fc54.js"
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
], o = "1724613722949", n = self, p = `cache${o}`, m = h.concat(r), u = new Set(m);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((a) => a.addAll(m)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (a) => {
      for (const t of a)
        t !== p && await caches.delete(t);
      n.clients.claim();
    })
  );
});
async function b(e) {
  const a = await caches.open(`offline${o}`);
  try {
    const t = await fetch(e);
    return a.put(e, t.clone()), t;
  } catch (t) {
    const c = await a.match(e);
    if (c)
      return c;
    throw t;
  }
}
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), t = a.protocol.startsWith("http"), c = a.hostname === self.location.hostname && a.port !== self.location.port, i = a.host === self.location.host && u.has(a.pathname), l = e.request.cache === "only-if-cached" && !i;
  t && !c && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || b(e.request))()
  );
});
