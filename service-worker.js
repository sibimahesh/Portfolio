let cacheData = 'portfolioV5';
console.log("Inside service worker");
this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i',
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