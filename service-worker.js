// ===========================================
//  BTC Cykly - Service Worker (offline support)
// ===========================================

const CACHE_NAME = 'btc-cykly-v1.0.1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-48.png',
  './icons/icon-64.png',
  './icons/icon-128.png',
  './icons/icon-192.png',
  './icons/icon-256.png',
  './icons/icon-512.png'
];

// Install: nacacheuj vsechny assety
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate: smaz stare cache verze
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first strategie pro lokalni assety, network-first pro API
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // API requests (CoinGecko) - vzdy zkus sit, pak cache
  if (url.hostname.includes('coingecko.com') || url.hostname.includes('api.')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Uloz uspesnou odpoved do cache
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Lokalni assety - cache-first
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request).then(response => {
        // Uloz nove resourcy do cache
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }))
      .catch(() => {
        // Fallback pri vypadku site - vrat hlavni stranku
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
});
