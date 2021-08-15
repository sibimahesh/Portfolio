let cacheData = 'portfolioV6';
console.log("Inside service worker");
this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                'https://sibimahesh.github.io/Portfolio/css/style.css',
                '/'
            ]);
        })
    )
})

this.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    )
})