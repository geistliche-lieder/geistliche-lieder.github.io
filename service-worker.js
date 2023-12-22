const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.ca85c55d.js",
  s + "/_app/immutable/nodes/0.dff6db29.js",
  s + "/_app/immutable/nodes/1.2ab8dc3d.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.6bc871a9.js",
  s + "/_app/immutable/nodes/3.0b1b20c3.js",
  s + "/_app/immutable/nodes/4.d7bc5b95.js",
  s + "/_app/immutable/nodes/5.89fb98d0.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.d3fec74e.js",
  s + "/_app/immutable/chunks/app.ded908bf.js",
  s + "/_app/immutable/assets/app.b78dfdbd.css",
  s + "/_app/immutable/chunks/common.98f050d8.js",
  s + "/_app/immutable/chunks/index.8cdb236a.js",
  s + "/_app/immutable/chunks/index.c2058180.js",
  s + "/_app/immutable/chunks/music.5701ed34.js",
  s + "/_app/immutable/chunks/navigation.74a40a43.js",
  s + "/_app/immutable/chunks/scheduler.a6ab6dcc.js",
  s + "/_app/immutable/chunks/singletons.f0f9a2fb.js",
  s + "/_app/immutable/chunks/song.3e11a154.js",
  s + "/_app/immutable/chunks/store.fcab7c79.js",
  s + "/_app/immutable/chunks/stores.8e83320a.js",
  s + "/_app/immutable/entry/start.37e7b93d.js"
], d = [
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
], o = "1703277517443", c = self, p = `cache${o}`, m = h.concat(d), r = new Set(m);
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
async function u(e) {
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
    (async () => i && await caches.match(e.request) || u(e.request))()
  );
});
