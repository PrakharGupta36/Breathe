let buttonAudio = document.getElementById("button1")
let sounds = [];
for (let i = 0; i < 3; i++){
  sounds.push(`./assets/sound/meditation${i + 1}.mp3`);
}
let random = Math.floor(Math.random() * 3);
var audioElem = document.getElementById("audio");
audioElem.src = sounds[random];
function toggleSound() {
  
  if (audioElem.paused) { 
    audioElem.play();
    buttonAudio.textContent = "Pause Ambient Sound"
  } else {
    audioElem.pause();
    buttonAudio.textContent = "Listen Ambient Sound"
  }
}

let buttonAudio2 = document.getElementById("button2");
let sounds2 = [];
for (let i = 0; i < 3; i++) {
  sounds2.push(`./assets/sound/meditation${i + 1}.mp3`);
}
let random2 = Math.floor(Math.random() * 3);
var audioElem2 = document.getElementById("audio2");
audioElem2.src = sounds[random];
function toggleSound2() {
  if (audioElem2.paused) {
    audioElem2.play();
    buttonAudio2.textContent = "Pause Ambient Sound";
  } else {
    audioElem2.pause();
    buttonAudio2.textContent = "Listen Ambient Sound";
  }
}
