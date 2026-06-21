self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('AppDIGI aktif');
});

self.addEventListener('fetch', event => {});
