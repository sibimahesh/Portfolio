let cacheData = 'porfolioV2';

this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                './css/style.css',
                './img/profile-pic.jpg',
                './img/sprite.svg',
                './img/Sibi_Mahesh_Resume.docx',
                './favicon.ico',
                './index.html',
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