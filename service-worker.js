const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  e + "/_app/immutable/entry/app.7e9c87b0.js",
  e + "/_app/immutable/nodes/0.3a01ebaa.js",
  e + "/_app/immutable/nodes/1.52a80acf.js",
  e + "/_app/immutable/assets/2.625db5c3.css",
  e + "/_app/immutable/nodes/2.35d1ffdb.js",
  e + "/_app/immutable/nodes/3.18aff5d0.js",
  e + "/_app/immutable/nodes/4.356867e8.js",
  e + "/_app/immutable/nodes/5.4e36f9cd.js",
  e + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  e + "/_app/immutable/chunks/SettingsPage.a6ed20ad.js",
  e + "/_app/immutable/chunks/app.36771be4.js",
  e + "/_app/immutable/assets/app.56fb9eeb.css",
  e + "/_app/immutable/chunks/common.1905f694.js",
  e + "/_app/immutable/chunks/index.6caee621.js",
  e + "/_app/immutable/chunks/index.c2058180.js",
  e + "/_app/immutable/chunks/music.1bce1811.js",
  e + "/_app/immutable/chunks/navigation.b32e1114.js",
  e + "/_app/immutable/chunks/scheduler.a6ab6dcc.js",
  e + "/_app/immutable/chunks/singletons.43e301f5.js",
  e + "/_app/immutable/chunks/song.bdf5117e.js",
  e + "/_app/immutable/chunks/store.c404d4b6.js",
  e + "/_app/immutable/chunks/stores.28b6ae67.js",
  e + "/_app/immutable/entry/start.e4e0b5f7.js"
], u = [
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
], o = "1697894177802", n = self, p = `cache${o}`, m = h.concat(u), r = new Set(m);
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
async function b(s) {
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
    (async () => i && await caches.match(s.request) || b(s.request))()
  );
});
