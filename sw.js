// Service Worker para SURTECHNIK - rutas relativas para subcarpetas
const CACHE_NAME = 'surtechnik-v3';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Network-first: siempre intenta red, fallback a cache
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});