// serviceWorker.js

const CACHE_NAME = 'my-pwa-cache-v1';
// Lista degli URL da cache-are (modifica in base alle tue necessità)
const urlsToCache = [
  '/',
  '/index.html',
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/css/main.css",
];

// Installazione del service worker: apre la cache e aggiunge gli asset
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aperta');
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercetta le richieste fetch e risponde con le risposte in cache, se presenti
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Se l'asset è in cache, restituiscilo, altrimenti effettua il fetch dalla rete
        return response || fetch(event.request);
      })
  );
});

// Attivazione del service worker: pulizia delle cache obsolete
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
