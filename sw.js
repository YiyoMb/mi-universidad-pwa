const cacheName = 'mi-universidad-cache-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js',
    '/icons/realmadrid1.png',
    '/icons/realmadrid2.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
