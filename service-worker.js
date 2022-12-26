const m = [
  "/_app/immutable/start-70a77d7f.js",
  "/_app/immutable/components/pages/_layout.svelte-5c29f2eb.js",
  "/_app/immutable/assets/_layout-31533331.css",
  "/_app/immutable/components/error.svelte-9b902652.js",
  "/_app/immutable/components/pages/_page.svelte-04babd65.js",
  "/_app/immutable/assets/_page-f4b2c993.css",
  "/_app/immutable/modules/pages/_layout.ts-b8ee4d7c.js",
  "/_app/immutable/modules/pages/_page.ts-58102fe8.js",
  "/_app/immutable/chunks/singletons-9f7adb17.js",
  "/_app/immutable/chunks/index-d441f4ba.js",
  "/_app/immutable/chunks/song-efbe0258.js",
  "/_app/immutable/chunks/_layout-1daba58d.js",
  "/_app/immutable/chunks/stores-f1b037a3.js",
  "/_app/immutable/chunks/_page-fc6283ed.js",
  "/_app/immutable/chunks/0-1030f353.js",
  "/_app/immutable/chunks/1-59bb5e33.js",
  "/_app/immutable/chunks/2-2b22b2bb.js"
], r = [
  "/.nojekyll",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/browserconfig.xml",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/favicon.png",
  "/index.css",
  "/mstile-144x144.png",
  "/mstile-150x150.png",
  "/mstile-310x150.png",
  "/mstile-310x310.png",
  "/mstile-70x70.png",
  "/robots.txt",
  "/safari-pinned-tab.svg",
  "/site.webmanifest",
  "/songs.json"
], o = "1672067173916", a = self, i = `cache${o}`, p = m.concat(r), h = new Set(p);
a.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(i).then((e) => e.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const t of e)
        t !== i && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function u(s) {
  const e = await caches.open(`offline${o}`);
  try {
    const t = await fetch(s);
    return e.put(s, t.clone()), t;
  } catch (t) {
    const n = await e.match(s);
    if (n)
      return n;
    throw t;
  }
}
a.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), t = e.protocol.startsWith("http"), n = e.hostname === self.location.hostname && e.port !== self.location.port, c = e.host === self.location.host && h.has(e.pathname), l = s.request.cache === "only-if-cached" && !c;
  t && !n && !l && s.respondWith(
    (async () => c && await caches.match(s.request) || u(s.request))()
  );
});
