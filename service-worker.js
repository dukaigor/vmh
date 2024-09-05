const CACHE_NAME = 'vmh-tracker-v1';
const urlsToCache = [
  '/vmh/',
  '/vmh/index.html',
  '/vmh/manifest.json',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-storage-compat.js',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logovmh-vUQp53LQUYf0HYaB3uFVoeNZtgxavL.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
