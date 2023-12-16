const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.3c6f644d.js",
  s + "/_app/immutable/nodes/0.a685f504.js",
  s + "/_app/immutable/nodes/1.fb030dd8.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.57a75654.js",
  s + "/_app/immutable/nodes/3.57f1efb8.js",
  s + "/_app/immutable/nodes/4.17b8eecc.js",
  s + "/_app/immutable/nodes/5.523c14c6.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.d3fec74e.js",
  s + "/_app/immutable/chunks/app.3c2253e4.js",
  s + "/_app/immutable/assets/app.dffdbd13.css",
  s + "/_app/immutable/chunks/common.98f050d8.js",
  s + "/_app/immutable/chunks/index.8cdb236a.js",
  s + "/_app/immutable/chunks/index.c2058180.js",
  s + "/_app/immutable/chunks/music.54bdd16b.js",
  s + "/_app/immutable/chunks/navigation.057a29b2.js",
  s + "/_app/immutable/chunks/scheduler.a6ab6dcc.js",
  s + "/_app/immutable/chunks/singletons.14ee3498.js",
  s + "/_app/immutable/chunks/song.bdf5117e.js",
  s + "/_app/immutable/chunks/store.c404d4b6.js",
  s + "/_app/immutable/chunks/stores.582c2664.js",
  s + "/_app/immutable/entry/start.d24c4507.js"
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
], o = "1702737032821", c = self, p = `cache${o}`, m = h.concat(r), u = new Set(m);
c.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(m)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      c.clients.claim();
    })
  );
});
async function d(e) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const n = await t.match(e);
    if (n)
      return n;
    throw a;
  }
}
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), n = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && u.has(t.pathname), l = e.request.cache === "only-if-cached" && !i;
  a && !n && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
