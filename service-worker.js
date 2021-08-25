importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.NetworkFirst()
);

let defferedPrompt;
const addbtn = document.getElementById("pwa");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  defferedPrompt = event;
  addbtn.style.display = "block";
});

addbtn.addEventListener("click", (event) => {
  defferedPrompt.prompt();

  defferedPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      console.log("user accepted the prompt");
    }
    defferedPrompt = null;
  });
});

// Initialize deferredPrompt for use later to show browser install prompt.

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});
