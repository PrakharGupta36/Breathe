const circleProgress = document.querySelector(".circle-progress"),
  numberOfBreaths = document.querySelector(".breath-input"),
  start = document.querySelector(".start"),
  instructions = document.querySelector(".instructions"),
  breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;
numberOfBreaths.addEventListener("change", () => {
  (breathsLeft = numberOfBreaths.value), (breathsText.innerText = breathsLeft);
});
const growCircle = () => {
    circleProgress.classList.add("circle-grow"),
      setTimeout(() => {
        circleProgress.classList.remove("circle-grow");
      }, 8e3);
  },
  breathTextUpdate = () => {
    breathsLeft--,
      (breathsText.innerText = breathsLeft),
      (instructions.innerText = "Breath in"),
      setTimeout(() => {
        (instructions.innerText = "Hold Breath"),
          setTimeout(() => {
            instructions.innerText = "Exhale Breath Slowly";
          }, 4e3);
      }, 4e3);
  },
  breathingApp = () => {
    const a = setInterval(
      () =>
        0 === breathsLeft
          ? (clearInterval(a),
            (instructions.innerText =
              "Breathing session completed. Click 'Begin' to start another session!"),
            start.classList.remove("button-inactive"),
            (breathsLeft = numberOfBreaths.value),
            void (breathsText.innerText = breathsLeft))
          : void (growCircle(), breathTextUpdate()),
      12e3
    );
  };
start.addEventListener("click", () => {
  start.classList.add("button-inactive"),
    (instructions.innerText = "Get relaxed, and ready to begin breathing"),
    setTimeout(() => {
      (instructions.innerText = "Breathing is about to begin..."),
        setTimeout(() => {
          breathingApp(), growCircle(), breathTextUpdate();
        }, 2e3);
    }, 2e3);
});
