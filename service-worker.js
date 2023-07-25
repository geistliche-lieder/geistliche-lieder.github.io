const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.06bd73ae.js",
  s + "/_app/immutable/nodes/0.c70bfbad.js",
  s + "/_app/immutable/nodes/1.49794684.js",
  s + "/_app/immutable/nodes/2.7cf0a172.js",
  s + "/_app/immutable/assets/app.19e9f3c1.css",
  s + "/_app/immutable/assets/3.625db5c3.css",
  s + "/_app/immutable/nodes/3.7e0eacf8.js",
  s + "/_app/immutable/nodes/4.ddc32ff7.js",
  s + "/_app/immutable/assets/5.f4b2c993.css",
  s + "/_app/immutable/nodes/5.999fe3c1.js",
  s + "/_app/immutable/chunks/TitleBar.f5b25ff0.js",
  s + "/_app/immutable/chunks/index.4e284ba1.js",
  s + "/_app/immutable/chunks/index.eab26d42.js",
  s + "/_app/immutable/chunks/navigation.dd6f3402.js",
  s + "/_app/immutable/chunks/scheduler.c7c6d1ea.js",
  s + "/_app/immutable/chunks/singletons.7d77c622.js",
  s + "/_app/immutable/chunks/song.b6a753f6.js",
  s + "/_app/immutable/chunks/store.d78c978e.js",
  s + "/_app/immutable/chunks/stores.23613de8.js",
  s + "/_app/immutable/entry/start.f593742e.js"
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
], o = "1690314755253", n = self, p = `cache${o}`, l = r.concat(h), u = new Set(l);
n.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(p).then((t) => t.addAll(l)).then(() => {
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
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && u.has(t.pathname), m = e.request.cache === "only-if-cached" && !i;
  a && !c && !m && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
