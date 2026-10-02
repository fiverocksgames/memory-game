const CACHE_NAME = 'memory-game-' + "2d2807fd3c7f";
const ASSETS = [
  "/assets/icon-192-B2VyLwMa.png",
  "/assets/index-CUiC3KR1.js",
  "/assets/index-Dnzym2Ak.css",
  "/assets/manifest-Bp7WjCGY.json",
  "/audio/bgm/forest.ogg",
  "/audio/bgm/happy.ogg",
  "/icons/icon-144.png",
  "/icons/icon-192.png",
  "/icons/icon-36.png",
  "/icons/icon-48.png",
  "/icons/icon-512.png",
  "/icons/icon-72.png",
  "/icons/icon-96.png",
  "/index.html",
  "/manifest.json",
  "/og-memory-game-v1.png"
];
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS.map((asset) => '.' + asset))));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  ]));
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
