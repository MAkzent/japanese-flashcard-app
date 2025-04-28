export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    // Register the service worker
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registration successful with scope: ', registration.scope);
      })
      .catch((err) => {
        console.log('Service Worker registration failed: ', err);
      });
  }
}