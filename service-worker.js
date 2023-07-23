const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.98716b4d.js",
  s + "/_app/immutable/nodes/0.d520ca0d.js",
  s + "/_app/immutable/nodes/1.befb4c14.js",
  s + "/_app/immutable/nodes/2.7cf0a172.js",
  s + "/_app/immutable/assets/app.19e9f3c1.css",
  s + "/_app/immutable/assets/3.625db5c3.css",
  s + "/_app/immutable/nodes/3.7e0eacf8.js",
  s + "/_app/immutable/nodes/4.a5ac42db.js",
  s + "/_app/immutable/assets/5.f4b2c993.css",
  s + "/_app/immutable/nodes/5.2fa2b7d9.js",
  s + "/_app/immutable/chunks/TitleBar.f5b25ff0.js",
  s + "/_app/immutable/chunks/index.4e284ba1.js",
  s + "/_app/immutable/chunks/index.eab26d42.js",
  s + "/_app/immutable/chunks/scheduler.c7c6d1ea.js",
  s + "/_app/immutable/chunks/singletons.d29178e6.js",
  s + "/_app/immutable/chunks/song.b6a753f6.js",
  s + "/_app/immutable/chunks/store.d78c978e.js",
  s + "/_app/immutable/chunks/stores.b2b9a450.js",
  s + "/_app/immutable/entry/start.e9c8d473.js"
], h = [
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
], o = "1690136952445", c = self, p = `cache${o}`, l = r.concat(h), d = new Set(l);
c.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(l)).then(() => {
      c.skipWaiting();
    })
  );
});
c.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (t) => {
      for (const a of t)
        a !== p && await caches.delete(a);
      c.clients.claim();
    })
  );
});
async function u(e) {
  const t = await caches.open(`offline${o}`);
  try {
    const a = await fetch(e);
    return t.put(e, a.clone()), a;
  } catch (a) {
    const n = await t.match(e);
    if (n)
      return n;
    throw a;
  }
}
c.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), n = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && d.has(t.pathname), m = e.request.cache === "only-if-cached" && !i;
  a && !n && !m && e.respondWith(
    (async () => i && await caches.match(e.request) || u(e.request))()
  );
});
