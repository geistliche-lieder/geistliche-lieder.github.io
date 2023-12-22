const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.40d12b28.js",
  s + "/_app/immutable/nodes/0.e8f6da07.js",
  s + "/_app/immutable/nodes/1.b6589c40.js",
  s + "/_app/immutable/assets/2.625db5c3.css",
  s + "/_app/immutable/nodes/2.989c5880.js",
  s + "/_app/immutable/nodes/3.b66816d8.js",
  s + "/_app/immutable/nodes/4.f1f3b0ee.js",
  s + "/_app/immutable/nodes/5.27b4b322.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.e155967a.js",
  s + "/_app/immutable/chunks/app.4ebcbc34.js",
  s + "/_app/immutable/assets/app.b78dfdbd.css",
  s + "/_app/immutable/chunks/common.98f050d8.js",
  s + "/_app/immutable/chunks/index.2f5ba9d6.js",
  s + "/_app/immutable/chunks/index.52f962b4.js",
  s + "/_app/immutable/chunks/music.cbf77326.js",
  s + "/_app/immutable/chunks/navigation.fd5954bd.js",
  s + "/_app/immutable/chunks/scheduler.143b6de7.js",
  s + "/_app/immutable/chunks/singletons.cfe4b214.js",
  s + "/_app/immutable/chunks/song.113e5615.js",
  s + "/_app/immutable/chunks/store.8dced48f.js",
  s + "/_app/immutable/chunks/stores.92442152.js",
  s + "/_app/immutable/entry/start.82a4ecc9.js"
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
], o = "1703281359356", n = self, p = `cache${o}`, m = h.concat(r), u = new Set(m);
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
