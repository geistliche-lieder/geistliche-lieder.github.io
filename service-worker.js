const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.79a0ab03.js",
  s + "/_app/immutable/nodes/0.d67f5658.js",
  s + "/_app/immutable/nodes/1.e3963622.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.482afa4e.js",
  s + "/_app/immutable/nodes/3.6a8ff7a4.js",
  s + "/_app/immutable/nodes/4.c9a0c679.js",
  s + "/_app/immutable/nodes/5.136d333f.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.745859da.js",
  s + "/_app/immutable/chunks/app.bc5fcf8b.js",
  s + "/_app/immutable/assets/app.50a10aef.css",
  s + "/_app/immutable/chunks/common.98f050d8.js",
  s + "/_app/immutable/chunks/index.083c7fd3.js",
  s + "/_app/immutable/chunks/index.676e4be4.js",
  s + "/_app/immutable/chunks/music.09543946.js",
  s + "/_app/immutable/chunks/navigation.c74853b0.js",
  s + "/_app/immutable/chunks/scheduler.51d6c524.js",
  s + "/_app/immutable/chunks/singletons.68026434.js",
  s + "/_app/immutable/chunks/song.71d5e43b.js",
  s + "/_app/immutable/chunks/store.616de63b.js",
  s + "/_app/immutable/chunks/stores.f10a9eee.js",
  s + "/_app/immutable/entry/start.f80b7dd1.js"
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
], o = "1724613128904", n = self, p = `cache${o}`, m = h.concat(r), u = new Set(m);
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
async function d(e) {
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
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
