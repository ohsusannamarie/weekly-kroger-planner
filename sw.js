const prefix = 'weekly-kroger-planner-';
const version = prefix + 'shell-v2';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(version).then(cache => cache.addAll(['./', './index.html', './app.js?v=2', './bowl.jpg'])).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(prefix) && key !== version).map(key => caches.delete(key)))));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  event.respondWith(fetch(event.request).catch(async () => {
    const cache = await caches.open(version);
    return (await cache.match(event.request, {ignoreSearch:true})) ??
      (event.request.mode === 'navigate' ? cache.match('./') : Response.error());
  }));
});
