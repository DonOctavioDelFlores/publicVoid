if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/sw.js')
      .catch((err) => console.log('service worker not registered', err));
  });
}
