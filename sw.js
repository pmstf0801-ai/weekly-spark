// Weekly Spark — 최소 서비스워커 (앱 설치 조건 충족용, 항상 최신 내용을 네트워크에서 받아옴)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
