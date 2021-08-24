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
