let cachedData = "appV1";

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cachedData).then((cache)=>{
         cache.addAll([
            "/static/js/bundle.js",
            "/about",
            "/manifest.json",
            "/logo192.png",
            "/User"
         ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
           if(result){
            return result
           }
           let requestUrl = event.request.clone();
           return fetch(requestUrl);
            })
        )
    }

})