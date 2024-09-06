if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker înregistrat cu succes:', registration.scope);
      })
      .catch(error => {
        console.log('Înregistrarea Service Worker a eșuat:', error);
      });
  });
}
