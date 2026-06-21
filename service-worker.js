self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
  console.log('AppDIGI aktif');
});

self.addEventListener('fetch', event => {});
