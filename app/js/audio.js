let buttonAudio = document.getElementById("button1"),
  sounds = [];
for (let a = 0; 3 > a; a++)
  sounds.push(`./assets/sound/meditation${a + 1}.mp3`);
let random = Math.floor(3 * Math.random());
var audioElem = document.getElementById("audio");
audioElem.src = sounds[random];
function toggleSound() {
  audioElem.paused
    ? (audioElem.play(), (buttonAudio.textContent = "Pause Ambient Sound"))
    : (audioElem.pause(), (buttonAudio.textContent = "Listen Ambient Sound"));
}
let buttonAudio2 = document.getElementById("button2"),
  sounds2 = [];
for (let a = 0; 3 > a; a++)
  sounds2.push(`./assets/sound/meditation${a + 1}.mp3`);
let random2 = Math.floor(3 * Math.random());
var audioElem2 = document.getElementById("audio2");
audioElem2.src = sounds2[random2];
function toggleSound2() {
  audioElem2.paused
    ? (audioElem2.play(), (buttonAudio2.textContent = "Pause Ambient Sound"))
    : (audioElem2.pause(), (buttonAudio2.textContent = "Listen Ambient Sound"));
}
