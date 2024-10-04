const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.4163171f.js",
  s + "/_app/immutable/nodes/0.190436f7.js",
  s + "/_app/immutable/nodes/1.a73e58b0.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.3cb06b9a.js",
  s + "/_app/immutable/nodes/3.822f56b3.js",
  s + "/_app/immutable/nodes/4.fd4ce529.js",
  s + "/_app/immutable/nodes/5.b630fb49.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.745859da.js",
  s + "/_app/immutable/chunks/app.61f2778d.js",
  s + "/_app/immutable/assets/app.d405c9d4.css",
  s + "/_app/immutable/chunks/common.98f050d8.js",
  s + "/_app/immutable/chunks/index.083c7fd3.js",
  s + "/_app/immutable/chunks/index.676e4be4.js",
  s + "/_app/immutable/chunks/music.09543946.js",
  s + "/_app/immutable/chunks/navigation.087d2be7.js",
  s + "/_app/immutable/chunks/scheduler.51d6c524.js",
  s + "/_app/immutable/chunks/singletons.e1051a95.js",
  s + "/_app/immutable/chunks/song.6d3a146c.js",
  s + "/_app/immutable/chunks/store.616de63b.js",
  s + "/_app/immutable/chunks/stores.4505ee4c.js",
  s + "/_app/immutable/entry/start.fcb3ce7c.js"
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
], o = "1728079264268", n = self, p = `cache${o}`, m = h.concat(r), u = new Set(m);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(m)).then(() => {
      n.skipWaiting();
    })
  );
});
n.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      n.clients.claim();
    })
  );
});
async function d(e) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const c = await t.match(e);
    if (c)
      return c;
    throw a;
  }
}
n.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && u.has(t.pathname), l = e.request.cache === "only-if-cached" && !i;
  a && !c && !l && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
