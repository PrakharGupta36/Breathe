const auth = firebase.auth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

const signInbtn = document.getElementById("signInbtn");
const signOutbtn = document.getElementById("signOutbtn");

const provider = new firebase.auth.GoogleAuthProvider();

signInbtn.onclick = () => {
  auth.signInWithPopup(provider);
};

signOutbtn.onclick = () => {
  auth.signOut();
};

let main = document.getElementById("main");
let userWelcome = document.getElementById("userWelcome");

auth.onAuthStateChanged((user) => {
  if (user) {
    whenSignedIn.style.display = "none";
    whenSignedOut.style.display = "inline-block";
    document.body.style.backgroundColor = "#0f0f3a";
    heroTitle.style.display = "none";
    wallpaper.style.display = "none";
    userWelcome.textContent = `Hello 👋 ${user.displayName}`;

  } else {
    whenSignedIn.style.display = "inline-block";
    whenSignedOut.style.display = "none";
    document.body.style.backgroundColor = "none";
    heroTitle.style.display = "grid";
    wallpaper.style.display = "block";
    navImage.style.display = "block";
    heroTitle.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 2000,
        iterations: 1,
      }
    );
    document.body.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      }
    );
    wallpaper.animate(
      [
        // keyframes
        { opacity: 0 },
        { opacity: 1 },
      ],
      {
        // timing options
        duration: 1000,
        iterations: 1,
      }
    );
  }
});
