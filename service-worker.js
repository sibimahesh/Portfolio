let cacheData = 'portfolioV4';
console.log("Inside service worker");
this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/Portfolio/css/style.css',
                '/Portfolio/img/profile-pic.jpg',
                '/Portfolio/img/sprite.svg',
                '/Portfolio/img/Sibi_Mahesh_Resume.docx',
                '/Portfolio/favicon.ico',
                'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i',
                '/Portfolio/index.html',
                '/Portfolio',
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