const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  s + "/_app/immutable/entry/app.99774c38.js",
  s + "/_app/immutable/nodes/0.db0fc251.js",
  s + "/_app/immutable/nodes/1.8021694e.js",
  s + "/_app/immutable/nodes/2.3b760cec.js",
  s + "/_app/immutable/assets/app.19e9f3c1.css",
  s + "/_app/immutable/assets/3.625db5c3.css",
  s + "/_app/immutable/nodes/3.045880fb.js",
  s + "/_app/immutable/nodes/4.3e6eeea5.js",
  s + "/_app/immutable/assets/5.f4b2c993.css",
  s + "/_app/immutable/nodes/5.ee6ac363.js",
  s + "/_app/immutable/chunks/TitleBar.242c0022.js",
  s + "/_app/immutable/chunks/index.0500b2c7.js",
  s + "/_app/immutable/chunks/index.81fd0eb1.js",
  s + "/_app/immutable/chunks/navigation.21a6321d.js",
  s + "/_app/immutable/chunks/scheduler.12b6bea3.js",
  s + "/_app/immutable/chunks/singletons.1c339f29.js",
  s + "/_app/immutable/chunks/song.fbf5cc25.js",
  s + "/_app/immutable/chunks/store.4c11173f.js",
  s + "/_app/immutable/chunks/stores.e8cb1ec3.js",
  s + "/_app/immutable/entry/start.36301fa5.js"
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
], o = "1697638543471", c = self, p = `cache${o}`, l = r.concat(h), u = new Set(l);
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
async function d(e) {
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
  const t = new URL(e.request.url), a = t.protocol.startsWith("http"), n = t.hostname === self.location.hostname && t.port !== self.location.port, i = t.host === self.location.host && u.has(t.pathname), m = e.request.cache === "only-if-cached" && !i;
  a && !n && !m && e.respondWith(
    (async () => i && await caches.match(e.request) || d(e.request))()
  );
});
