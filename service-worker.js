const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.c2603638.js",
  s + "/_app/immutable/nodes/0.8f1dcff0.js",
  s + "/_app/immutable/nodes/1.fd776e79.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.b513a88a.js",
  s + "/_app/immutable/nodes/3.41cef64d.js",
  s + "/_app/immutable/nodes/4.063558b3.js",
  s + "/_app/immutable/nodes/5.ba2c989b.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.e155967a.js",
  s + "/_app/immutable/chunks/app.4566154c.js",
  s + "/_app/immutable/assets/app.65daea4a.css",
  s + "/_app/immutable/chunks/common.98f050d8.js",
  s + "/_app/immutable/chunks/index.2f5ba9d6.js",
  s + "/_app/immutable/chunks/index.52f962b4.js",
  s + "/_app/immutable/chunks/music.86076db2.js",
  s + "/_app/immutable/chunks/navigation.db2c51c8.js",
  s + "/_app/immutable/chunks/scheduler.143b6de7.js",
  s + "/_app/immutable/chunks/singletons.04960d53.js",
  s + "/_app/immutable/chunks/song.8d2a36b6.js",
  s + "/_app/immutable/chunks/store.8dced48f.js",
  s + "/_app/immutable/chunks/stores.3863c576.js",
  s + "/_app/immutable/entry/start.6c81bd28.js"
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
], o = "1707521050533", n = self, p = `cache${o}`, m = h.concat(r), u = new Set(m);
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
