const CACHE='cbe-np-option2-v16';
const ASSETS=['./','./index.html','./app.js','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => {
  if(r) return r;
  return fetch(e.request).then(response => {
    const url = new URL(e.request.url);
    if(e.request.method === 'GET' && url.origin === location.origin && url.pathname.includes('/assets/cards/')){
      const copy = response.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return response;
  });
})));
