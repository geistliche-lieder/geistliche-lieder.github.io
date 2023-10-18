const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), h = [
  s + "/_app/immutable/entry/app.801fd81b.js",
  s + "/_app/immutable/nodes/0.fee4e05e.js",
  s + "/_app/immutable/nodes/1.81ebd059.js",
  s + "/_app/immutable/nodes/2.b3f3645e.js",
  s + "/_app/immutable/assets/app.105a26b3.css",
  s + "/_app/immutable/assets/3.625db5c3.css",
  s + "/_app/immutable/nodes/3.929baf91.js",
  s + "/_app/immutable/nodes/4.1bb0e68b.js",
  s + "/_app/immutable/nodes/5.c84a1cb1.js",
  s + "/_app/immutable/assets/SettingsPage.f4b2c993.css",
  s + "/_app/immutable/chunks/SettingsPage.e75755b0.js",
  s + "/_app/immutable/chunks/index.02dae1cf.js",
  s + "/_app/immutable/chunks/index.a4871ec6.js",
  s + "/_app/immutable/chunks/navigation.ff86b801.js",
  s + "/_app/immutable/chunks/scheduler.b756a13f.js",
  s + "/_app/immutable/chunks/singletons.c2302af3.js",
  s + "/_app/immutable/chunks/song.fca63610.js",
  s + "/_app/immutable/chunks/store.35f58f5c.js",
  s + "/_app/immutable/chunks/stores.fdee632d.js",
  s + "/_app/immutable/entry/start.1b709a83.js"
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
], o = "1697660606509", n = self, p = `cache${o}`, l = h.concat(r), u = new Set(l);
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
async function b(e) {
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
    (async () => i && await caches.match(e.request) || b(e.request))()
  );
});
