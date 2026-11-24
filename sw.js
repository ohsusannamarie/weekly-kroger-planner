const prefix = 'dakota-groceries-';
const cacheName = prefix + 'v5';
const assets = [
  './', './index.html', './manifest.webmanifest', './icon.svg', './bowl.jpg',

  './meals/baconmac.webp', './meals/bbqflat.webp', './meals/bolog.webp', './meals/buffquesa.webp',
  './meals/cajunalf.webp', './meals/cajunshrimp.webp', './meals/cheeseburgmac.webp', './meals/cheesesteak2.webp',
  './meals/cheesestk.webp', './meals/chilibeef.webp', './meals/fajita.webp', './meals/hamdelts.webp',
  './meals/honeychop.webp', './meals/honeythigh.webp', './meals/loadedspud.webp', './meals/lomein.webp',
  './meals/meatloaf.webp', './meals/meatsub.webp', './meals/mushchop.webp', './meals/nachos.webp',
  './meals/pinwheels.webp', './meals/pizzaup.webp', './meals/porkchop.webp', './meals/potpie.webp',
  './meals/potpiesoup.webp', './meals/potsoup.webp', './meals/quesa.webp', './meals/ramenglow.webp',
  './meals/sausagegn.webp', './meals/sausagepot.webp', './meals/scampi.webp', './meals/shep.webp',
  './meals/shrimptaco.webp', './meals/sloppy.webp', './meals/smashburg.webp', './meals/snackplate.webp',
  './meals/spudbowl.webp', './meals/steakbites.webp', './meals/stuffedpep.webp', './meals/swissburg.webp',
  './meals/szechtaco.webp', './meals/tacos.webp', './meals/taqbowl.webp', './meals/terimeat.webp',
  './meals/terisalmon.webp', './meals/tilapiataco.webp', './meals/turkburg.webp', './meals/turkragu.webp',
  './meals/turkspud.webp', './meals/velvglow.webp',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => (key.startsWith(prefix) || key.startsWith('weekly-kroger-planner-shell-')) && key !== cacheName)
      .map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    if (request.destination === 'image') {
      const photo = await cache.match(request);
      if (photo) return photo;
    }
    try {
      return await fetch(request);
    } catch {
      return (await cache.match(request, {ignoreSearch:true}))
        ?? (request.mode === 'navigate' ? cache.match('./') : Response.error());
    }
  })());
});
