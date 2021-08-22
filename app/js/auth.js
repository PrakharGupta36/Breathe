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

let button1 = document.getElementById("button1"); 

button1.onclick = () => {
  if (auth.onAuthStateChanged === false) {
    console.log("You are not logged in")
  } else {

  }
}

auth.onAuthStateChanged((user) => {
  if (user) {
    whenSignedIn.style.display = "none";
    whenSignedOut.style.display = "inline-block";
    window.location.href = "/main.html";
  } else {
    whenSignedIn.style.display = "inline-block";
    whenSignedOut.style.display = "none";
    signOutbtn.onclick = () => {
      window.location.href = "/index.html"
    }
  }
});
