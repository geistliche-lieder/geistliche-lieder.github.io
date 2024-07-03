const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.8851a64b.js",
  s + "/_app/immutable/nodes/0.f443ce26.js",
  s + "/_app/immutable/nodes/1.0f89771f.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.e4c25823.js",
  s + "/_app/immutable/nodes/3.956a8df3.js",
  s + "/_app/immutable/nodes/4.06c4da6c.js",
  s + "/_app/immutable/nodes/5.35ad3d40.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.6ba5da69.js",
  s + "/_app/immutable/chunks/app.9d5add44.js",
  s + "/_app/immutable/assets/app.12c6d38c.css",
  s + "/_app/immutable/chunks/common.98f050d8.js",
  s + "/_app/immutable/chunks/index.2f5ba9d6.js",
  s + "/_app/immutable/chunks/index.52f962b4.js",
  s + "/_app/immutable/chunks/music.86076db2.js",
  s + "/_app/immutable/chunks/navigation.1b083e55.js",
  s + "/_app/immutable/chunks/scheduler.143b6de7.js",
  s + "/_app/immutable/chunks/singletons.d4a07b86.js",
  s + "/_app/immutable/chunks/song.2e7dd3f9.js",
  s + "/_app/immutable/chunks/store.8dced48f.js",
  s + "/_app/immutable/chunks/stores.cbe45b94.js",
  s + "/_app/immutable/entry/start.7a7a0b84.js"
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
], o = "1720035706854", n = self, p = `cache${o}`, m = h.concat(d), r = new Set(m);
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
async function u(e) {
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
  const a = new URL(e.request.url), t = a.protocol.startsWith("http"), c = a.hostname === self.location.hostname && a.port !== self.location.port, i = a.host === self.location.host && r.has(a.pathname), l = e.request.cache === "only-if-cached" && !i;
  t && !c && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || u(e.request))()
  );
});
