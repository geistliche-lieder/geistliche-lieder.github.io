const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  e + "/_app/immutable/entry/app.b0d85cee.js",
  e + "/_app/immutable/nodes/0.77963d8a.js",
  e + "/_app/immutable/nodes/1.ffe64b4e.js",
  e + "/_app/immutable/assets/2.625db5c3.css",
  e + "/_app/immutable/nodes/2.57a75654.js",
  e + "/_app/immutable/nodes/3.57f1efb8.js",
  e + "/_app/immutable/nodes/4.34052ff4.js",
  e + "/_app/immutable/nodes/5.b8ebde3d.js",
  e + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  e + "/_app/immutable/chunks/SettingsPage.d3fec74e.js",
  e + "/_app/immutable/chunks/app.3c2253e4.js",
  e + "/_app/immutable/assets/app.dffdbd13.css",
  e + "/_app/immutable/chunks/common.98f050d8.js",
  e + "/_app/immutable/chunks/index.8cdb236a.js",
  e + "/_app/immutable/chunks/index.c2058180.js",
  e + "/_app/immutable/chunks/music.54bdd16b.js",
  e + "/_app/immutable/chunks/navigation.dea92fa6.js",
  e + "/_app/immutable/chunks/scheduler.a6ab6dcc.js",
  e + "/_app/immutable/chunks/singletons.b0693818.js",
  e + "/_app/immutable/chunks/song.bdf5117e.js",
  e + "/_app/immutable/chunks/store.c404d4b6.js",
  e + "/_app/immutable/chunks/stores.0d74216c.js",
  e + "/_app/immutable/entry/start.5df59676.js"
], d = [
  e + "/.nojekyll",
  e + "/android-chrome-192x192.png",
  e + "/android-chrome-512x512.png",
  e + "/apple-touch-icon-precomposed.png",
  e + "/apple-touch-icon.png",
  e + "/browserconfig.xml",
  e + "/favicon-16x16.png",
  e + "/favicon-32x32.png",
  e + "/favicon.ico",
  e + "/favicon.png",
  e + "/home_screen_android.jpg",
  e + "/home_screen_apple.jpg",
  e + "/index.css",
  e + "/mstile-144x144.png",
  e + "/mstile-150x150.png",
  e + "/mstile-310x150.png",
  e + "/mstile-310x310.png",
  e + "/mstile-70x70.png",
  e + "/robots.txt",
  e + "/safari-pinned-tab.svg",
  e + "/site.webmanifest",
  e + "/songs.json"
], o = "1702686354927", n = self, p = `cache${o}`, m = h.concat(d), r = new Set(m);
n.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(p).then((t) => t.addAll(m)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      n.clients.claim();
    })
  );
});
async function u(s) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(s);
    return t.put(s, a.clone()), a;
  } catch (a) {
    const c = await t.match(s);
    if (c)
      return c;
    throw a;
  }
}
n.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const t = new URL(s.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && r.has(t.pathname), l = s.request.cache === "only-if-cached" && !i;
  a && !c && !l && s.respondWith(
    (async () => i && await caches.match(s.request) || u(s.request))()
  );
});
