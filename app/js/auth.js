const auth = firebase.auth(),
  whenSignedIn = document.getElementById("whenSignedIn"),
  whenSignedOut = document.getElementById("whenSignedOut"),
  signInbtn = document.getElementById("signInbtn"),
  signInbtn2 = document.getElementById("signInbtn2"),
  signOutbtn = document.getElementById("signOutbtn"),
  signOutbtn2 = document.getElementById("signOutbtn2"),
  provider = new firebase.auth.GoogleAuthProvider();
(signInbtn.onclick = () => {
  auth.signInWithPopup(provider);
}),
  (signInbtn2.onclick = () => {
    auth.signInWithPopup(provider);
  }),
  (signOutbtn.onclick = () => {
    auth.signOut();
  }),
  (signOutbtn2.onclick = () => {
    auth.signOut();
  });
let main = document.getElementById("main"),
  userWelcome = document.getElementById("userWelcome"),
  breathe = document.getElementById("breathe"),
  logo = document.getElementById("nav-bar");
auth.onAuthStateChanged((a) => {
  a
    ? ((wallpaper.style.display = "none"),
      (heroTitle.style.display = "none"),
      (whenSignedIn.style.display = "none"),
      (whenSignedOut.style.display = "inline-block"),
      (document.body.style.backgroundColor = "#0f0f3a"),
      (breathe.style.display = "grid"),
      (userWelcome.style.display = "inline-block"),
      (userWelcome.textContent = `Hello 👋 ${a.displayName}`),
      (main.style.display = "grid"),
      (logo.style.display = "none"),
      (navImage.style.display = "none"))
    : ((main.style.display = "none"),
      (whenSignedIn.style.display = "inline-block"),
      (whenSignedOut.style.display = "none"),
      (breathe.style.display = "none"),
      (navImage.style.display = "grid"),
      (logo.style.display = "grid"),
      (navImage.style.marginRight = "30px"),
      (userWelcome.style.display = "none"),
      (wallpaper.style.display = "block"),
      (heroTitle.style.display = "grid"),
      heroTitle.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 2e3,
        iterations: 1,
      }),
      document.body.animate([{ opacity: 0.5 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }),
      wallpaper.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1e3,
        iterations: 1,
      }));
});
