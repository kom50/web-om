let cacheData = 'app-v1'

const caching_files = [
    './static/js/bundle.js',
    './static/js/vendors~main.chunk.js',
    './static/js/main.chunk.js',
    './static/media/om.ba8dc23e.jpg',
    './index.html',
    './favicon.ico',
    './manifest.json',
    './img/icons/om-32x32.png',
    './img/icons/om-192x192.png',
    './img/icons/om-512x512.png',
    '.https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;1,300&display=swap',
    './',
]

this.addEventListener('install', (event) => {
    console.log("Service Worker : Installed!")
    event.waitUntil(
        (async () => {
            try {
                const cache_obj = await caches.open(cacheData)
                cache_obj.addAll(caching_files)
            }
            catch {
                console.log("error occurred while caching...")
            }
        })()
    )
    // event.waitUntil(
    //     caches.open(cacheData).then((cache) => {
    //         cache.addAll([
    //             '/static/js/bundle.js',
    //             '/static/js/vendors~main.chunk.js',
    //             '/static/js/main.chunk.js',
    //             '/static/media/om.ba8dc23e.jpg',
    //             '/index.html',
    //             '/favicon.ico',
    //             '/web-om/#/',
    //             '/manifest.json',
    //             '/img/icons/om-32x32.png',
    //             '/img/icons/om-192x192.png',
    //             '/img/icons/om-512x512.png',
    //             'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;1,300&display=swap',
    //             '/',
    //         ])
    //     })
    // )
})

this.addEventListener('fetch', (event) => {
    console.log("🚀 ~ file: sw.js ~ line 20 ~ this.addEventListener ~ event", event)
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request)
            })
        )
    }
})