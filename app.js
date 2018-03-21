var allButtons = document.querySelectorAll(".button");
var turn = 1;
var simonArray = [];
var playerArray = [];

document.querySelector("button").addEventListener("click", () => {
  turn = 1;
  document.querySelector("h1").classList.add("hidden");
  runGame();
});

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", event => {
    if (playerArray.length < simonArray.length) {
      playerArray.push(i);
      for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i] != simonArray[i]) {
          document.querySelector("h1").classList.remove("hidden");
          return;
        }
      }
      if (playerArray.length == simonArray.length) {
        runGame();
      }
    }
  });
}

function runGame() {
  simonArray = [];
  playerArray = [];
  for (let i = 0; i < turn; i++) {
    simonArray.push(Math.floor(Math.random() * 4));
  }
  for (let i = 0; i < simonArray.length; i++) {
    setTimeout(() => {
      allButtons[simonArray[i]].classList.toggle("selected");
    }, 1000 * i);
    setTimeout(() => {
      allButtons[simonArray[i]].classList.toggle("selected");
    }, 1000 * (i + 1));
  }
  turn++;
}
