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
