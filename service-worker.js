const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/_app/immutable/entry/app.86f80fa2.js",
  e + "/_app/immutable/nodes/0.d520ca0d.js",
  e + "/_app/immutable/nodes/1.da646e98.js",
  e + "/_app/immutable/nodes/2.10106310.js",
  e + "/_app/immutable/assets/app.3e1744fb.css",
  e + "/_app/immutable/assets/3.625db5c3.css",
  e + "/_app/immutable/nodes/3.fc646f89.js",
  e + "/_app/immutable/nodes/4.e5f7703f.js",
  e + "/_app/immutable/assets/5.f4b2c993.css",
  e + "/_app/immutable/nodes/5.ee820512.js",
  e + "/_app/immutable/chunks/TitleBar.f5b25ff0.js",
  e + "/_app/immutable/chunks/index.4e284ba1.js",
  e + "/_app/immutable/chunks/index.eab26d42.js",
  e + "/_app/immutable/chunks/scheduler.c7c6d1ea.js",
  e + "/_app/immutable/chunks/singletons.66750eb8.js",
  e + "/_app/immutable/chunks/song.b6a753f6.js",
  e + "/_app/immutable/chunks/store.d78c978e.js",
  e + "/_app/immutable/chunks/stores.33cee7be.js",
  e + "/_app/immutable/entry/start.337807f6.js"
], h = [
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
], o = "1690062393302", n = self, p = `cache${o}`, l = r.concat(h), u = new Set(l);
n.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(p).then((t) => t.addAll(l)).then(() => {
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
async function d(s) {
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
  const t = new URL(s.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && u.has(t.pathname), m = s.request.cache === "only-if-cached" && !i;
  a && !c && !m && s.respondWith(
    (async () => i && await caches.match(s.request) || d(s.request))()
  );
});
