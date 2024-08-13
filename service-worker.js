const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  e + "/_app/immutable/entry/app.b273929f.js",
  e + "/_app/immutable/nodes/0.57346ee6.js",
  e + "/_app/immutable/nodes/1.819a87ee.js",
  e + "/_app/immutable/assets/2.625db5c3.css",
  e + "/_app/immutable/nodes/2.a8a9fe2e.js",
  e + "/_app/immutable/nodes/3.96cd61bc.js",
  e + "/_app/immutable/nodes/4.a0054c3a.js",
  e + "/_app/immutable/nodes/5.13dc526e.js",
  e + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  e + "/_app/immutable/chunks/SettingsPage.6ba5da69.js",
  e + "/_app/immutable/chunks/app.74d43282.js",
  e + "/_app/immutable/assets/app.2ee7debd.css",
  e + "/_app/immutable/chunks/common.98f050d8.js",
  e + "/_app/immutable/chunks/index.2f5ba9d6.js",
  e + "/_app/immutable/chunks/index.52f962b4.js",
  e + "/_app/immutable/chunks/music.86076db2.js",
  e + "/_app/immutable/chunks/navigation.669007c8.js",
  e + "/_app/immutable/chunks/scheduler.143b6de7.js",
  e + "/_app/immutable/chunks/singletons.d21a677c.js",
  e + "/_app/immutable/chunks/song.2e7dd3f9.js",
  e + "/_app/immutable/chunks/store.8dced48f.js",
  e + "/_app/immutable/chunks/stores.b613d9bf.js",
  e + "/_app/immutable/entry/start.8e79cdea.js"
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
], o = "1723584477733", n = self, p = `cache${o}`, m = h.concat(d), r = new Set(m);
n.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(p).then((a) => a.addAll(m)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (a) => {
      for (const t of a)
        t !== p && await caches.delete(t);
      n.clients.claim();
    })
  );
});
async function u(s) {
  const a = await caches.open(`offline${o}`);
  try {
    const t = await fetch(s);
    return a.put(s, t.clone()), t;
  } catch (t) {
    const c = await a.match(s);
    if (c)
      return c;
    throw t;
  }
}
n.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const a = new URL(s.request.url), t = a.protocol.startsWith("http"), c = a.hostname === self.location.hostname && a.port !== self.location.port, i = a.host === self.location.host && r.has(a.pathname), l = s.request.cache === "only-if-cached" && !i;
  t && !c && !l && s.respondWith(
    (async () => i && await caches.match(s.request) || u(s.request))()
  );
});
