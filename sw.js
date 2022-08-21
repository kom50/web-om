let cacheData = 'app-v1'

this.addEventListener('install', (event) => {
    console.log("🚀 ~ file: sw.js ~ line 4 ~ this.addEventListener ~ event", event)
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/vendors~main.chunk.js',
                '/static/js/main.chunk.js',
                '/static/media/om.ba8dc23e.jpg',
                '/index.html',
                '/favicon.ico',
                'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;1,300&display=swap',
                '/',
            ])
        })
    )
})

this.addEventListener('fetch', (event) => {
    console.log("🚀 ~ file: sw.js ~ line 20 ~ this.addEventListener ~ event", event)
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(response => {
                if (response)
                    return response
            })
        )
    }
})