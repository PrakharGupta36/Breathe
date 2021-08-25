importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"
),
  workbox.routing.registerRoute(
    ({ request: a }) => "image" === a.destination,
    new workbox.strategies.NetworkFirst()
  );
let defferedPrompt;
const addbtn = document.getElementById("pwa");
window.addEventListener("beforeinstallprompt", (a) => {
  a.preventDefault(), (defferedPrompt = a), (addbtn.style.display = "block");
}),
  addbtn.addEventListener("click", () => {
    defferedPrompt.prompt(),
      defferedPrompt.userChoice.then((a) => {
        "accepted" === a.outcome && console.log("user accepted the prompt"),
          (defferedPrompt = null);
      });
  }),
  window.addEventListener("beforeinstallprompt", (a) => {
    a.preventDefault(),
      (deferredPrompt = a),
      showInstallPromotion(),
      console.log(`'beforeinstallprompt' event was fired.`);
  });
