const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // This stores the triggered event
    window.deferredPrompt = event;
    // This removes the hidden class
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }
  // This shows the prompt
  promptEvent.prompt();
   // This reset the prompt variable
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
      // This is used to clear the prompt
    window.deferredPrompt = null;
});
