// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "japanese-flashcard-app-offline";

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      console.log("[PWA] Cached offline page during install");
      return cache.addAll([
        "/",
        "/offline",
        "/manifest.json",
        "/icon-192.png",
        "/file.svg",
        "/globe.svg",
        "/window.svg"
      ]);
    })
  );
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // If request was successful, add or update it in the cache
        event.waitUntil(updateCache(event.request, response.clone()));
        return response;
      })
      .catch(function(error) {
        console.log("[PWA] Network request failed. Serving content from cache: " + error);
        return fromCache(event.request);
      })
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(function(matching) {
      if (!matching || matching.status === 404) {
        // If the request is for a page, show the offline page
        if (request.destination === "document") {
          return cache.match("/");
        }
        return Promise.reject("no-match");
      }
      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function(cache) {
    return cache.put(request, response);
  });
}