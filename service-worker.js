const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  e + "/_app/immutable/entry/app.2583ee21.js",
  e + "/_app/immutable/nodes/0.8cd48403.js",
  e + "/_app/immutable/nodes/1.039fbef2.js",
  e + "/_app/immutable/assets/2.625db5c3.css",
  e + "/_app/immutable/nodes/2.482afa4e.js",
  e + "/_app/immutable/nodes/3.20764e7e.js",
  e + "/_app/immutable/nodes/4.d45cac71.js",
  e + "/_app/immutable/nodes/5.f098ce77.js",
  e + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  e + "/_app/immutable/chunks/SettingsPage.745859da.js",
  e + "/_app/immutable/chunks/app.bc5fcf8b.js",
  e + "/_app/immutable/assets/app.50a10aef.css",
  e + "/_app/immutable/chunks/common.98f050d8.js",
  e + "/_app/immutable/chunks/index.083c7fd3.js",
  e + "/_app/immutable/chunks/index.676e4be4.js",
  e + "/_app/immutable/chunks/music.09543946.js",
  e + "/_app/immutable/chunks/navigation.399dea0e.js",
  e + "/_app/immutable/chunks/scheduler.51d6c524.js",
  e + "/_app/immutable/chunks/singletons.531c5ac2.js",
  e + "/_app/immutable/chunks/song.6d3a146c.js",
  e + "/_app/immutable/chunks/store.616de63b.js",
  e + "/_app/immutable/chunks/stores.78c2e9e6.js",
  e + "/_app/immutable/entry/start.b00553c4.js"
], r = [
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
], o = "1724862729680", c = self, p = `cache${o}`, m = h.concat(r), u = new Set(m);
c.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(p).then((a) => a.addAll(m)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (a) => {
      for (const t of a)
        t !== p && await caches.delete(t);
      c.clients.claim();
    })
  );
});
async function d(s) {
  const a = await caches.open(`offline${o}`);
  try {
    const t = await fetch(s);
    return a.put(s, t.clone()), t;
  } catch (t) {
    const n = await a.match(s);
    if (n)
      return n;
    throw t;
  }
}
c.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const a = new URL(s.request.url), t = a.protocol.startsWith("http"), n = a.hostname === self.location.hostname && a.port !== self.location.port, i = a.host === self.location.host && u.has(a.pathname), l = s.request.cache === "only-if-cached" && !i;
  t && !n && !l && s.respondWith(
    (async () => i && await caches.match(s.request) || d(s.request))()
  );
});
