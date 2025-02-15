// serviceWorkerRegistration.js

// Registra il service worker se il browser lo supporta
export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/serviceWorker.js')  // Assicurati che il percorso sia corretto
          .then((registration) => {
            console.log('Service Worker registrato con successo: ', registration);
          })
          .catch((error) => {
            console.error('Errore nella registrazione del Service Worker:', error);
          });
      });
    }
  }
  
  // Funzione per annullare la registrazione (se necessario)
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
  