const auth = firebase.auth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

const signInbtn = document.getElementById("signInbtn");
const signInbtn2 = document.getElementById("signInbtn2");
const signOutbtn = document.getElementById("signOutbtn");
const signOutbtn2 = document.getElementById("signOutbtn2");

const provider = new firebase.auth.GoogleAuthProvider();
signInbtn.onclick = () => {
  auth.signInWithPopup(provider);
};

signInbtn2.onclick = () => {
  auth.signInWithPopup(provider);
};

signOutbtn.onclick = () => {
  auth.signOut();
};

signOutbtn2.onclick = () => {
  auth.signOut();
};


let main = document.getElementById("main");
let userWelcome = document.getElementById("userWelcome");
let breathe = document.getElementById("breathe");
let logo = document.getElementById("nav-bar");
auth.onAuthStateChanged((user) => {
  if (user) {
    wallpaper.style.display = "none";
    heroTitle.style.display = "none";
    whenSignedIn.style.display = "none";
    whenSignedOut.style.display = "inline-block";
    document.body.style.backgroundColor = "#0f0f3a";
    breathe.style.display = "grid";
    userWelcome.style.display = "inline-block"
    userWelcome.textContent = `Hello 👋 ${user.displayName}`;
    main.style.display = "grid";
    logo.style.display = "none";
    navImage.style.display = "none";
  } else {
    main.style.display = "none";
    whenSignedIn.style.display = "inline-block";
    whenSignedOut.style.display = "none";
    breathe.style.display = "none";
    navImage.style.display = "grid";
    logo.style.display = "grid";
    navImage.style.marginRight = "30px";
    userWelcome.style.display = "none";
    wallpaper.style.display = "block";
    heroTitle.style.display = "grid";
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
        { opacity: 0.5 },
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
