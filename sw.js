
const CACHE = 'skyops-quiz-v4'; // bump version

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './nordic-skyops-logo.png',
  './icons/icon-192-v2.png',
  './icons/icon-512-v2.png',
  './questions-250.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});

