const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  e + "/_app/immutable/entry/app.9d1d88e6.js",
  e + "/_app/immutable/nodes/0.4d2c8962.js",
  e + "/_app/immutable/nodes/1.0e756fc7.js",
  e + "/_app/immutable/assets/2.625db5c3.css",
  e + "/_app/immutable/nodes/2.a8a9fe2e.js",
  e + "/_app/immutable/nodes/3.96cd61bc.js",
  e + "/_app/immutable/nodes/4.16c9b9c2.js",
  e + "/_app/immutable/nodes/5.56c5f94e.js",
  e + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  e + "/_app/immutable/chunks/SettingsPage.6ba5da69.js",
  e + "/_app/immutable/chunks/app.74d43282.js",
  e + "/_app/immutable/assets/app.2ee7debd.css",
  e + "/_app/immutable/chunks/common.98f050d8.js",
  e + "/_app/immutable/chunks/index.2f5ba9d6.js",
  e + "/_app/immutable/chunks/index.52f962b4.js",
  e + "/_app/immutable/chunks/music.86076db2.js",
  e + "/_app/immutable/chunks/navigation.5756cf95.js",
  e + "/_app/immutable/chunks/scheduler.143b6de7.js",
  e + "/_app/immutable/chunks/singletons.146a6407.js",
  e + "/_app/immutable/chunks/song.2e7dd3f9.js",
  e + "/_app/immutable/chunks/store.8dced48f.js",
  e + "/_app/immutable/chunks/stores.348111cd.js",
  e + "/_app/immutable/entry/start.d13e0ef2.js"
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
], o = "1723584062498", n = self, p = `cache${o}`, m = h.concat(d), r = new Set(m);
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
