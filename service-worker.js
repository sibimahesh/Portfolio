let cacheData = 'portfolioV11';
console.log("Inside service worker");
this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '.css/style.css',
                '.img/profile-pic.jpg',
                '.img/sprite.svg',
                '.img/Sibi_Mahesh_Resume.docx',
                '.favicon.ico',
                'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i',
                './'
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