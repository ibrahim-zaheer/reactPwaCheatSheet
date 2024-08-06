let cachedData = "appV1";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cachedData).then((cache) => {
            return cache.addAll([
                "/static/js/bundle.js",
                "/about",
                "/manifest.json",
                "/logo192.png",
                "/User"
            ]);
        })
    );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result;
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl);
            })
        );
    }
    else{
        if(event.request.url === "http://localhost:3000/logo192.png"){
        self.registration.showNotification("No internet", {
            body: "You are offline",
            icon: "https://th.bing.com/th?id=OIP.wZleKPOieitQET0-5z1P7QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        });}
    }
    console.warn("url",event.request.url)
    if(event.request.url === "http://localhost:3000/manifest.json"){
// Show notification for testing purposes
self.registration.showNotification("hello", {
    body: "hello from Notification",
    icon: "https://th.bing.com/th?id=OIP.BkSBgs32XX9jVb6d_FX_yAHaGJ&w=274&h=227&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
});
    }

    
});
