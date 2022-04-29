let p1 = {
  score: 0,
  display: document.querySelector("#p1Display"),
  button: document.querySelector("#p1Button"),
};

let p2 = {
  score: 0,
  display: document.querySelector("#p2Display"),
  button: document.querySelector("#p2Button"),
};

const updateScores = (player, oponent) => {
  if (!isGameOver) {
    player.score++;
    player.display.textContent = player.score;

    if (player.score === winningScore) {
      isGameOver = true;
      //   p1Display.classList.add("win");
      //   p2Display.classList.add("lost");
      player.display.classList.add("has-text-success");
      oponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      oponent.button.disabled = true;
    }
  }
};

// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
// const resetButton = document.querySelector("#resetButton");
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

const winningScoreSelect = document.querySelector("#playto");
winningScoreSelect.addEventListener("change", function () {
  //console.log(this);
  // 'Window' object if an arrow function is used
  console.dir(this);
  //   select#playto
  // 0: option ...
  winningScore = parseInt(this.value);
  reset();
});

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

// p1Button.addEventListener("click", () => {
//   if (!isGameOver) {
//     p1Score++;
//     p1Display.textContent = p1Score;

//     if (p1Score === winningScore) {
//       isGameOver = true;
//       //   p1Display.classList.add("win");
//       //   p2Display.classList.add("lost");
//       p1Display.classList.add("has-text-success");
//       p2Display.classList.add("has-text-danger");
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//     }
//   }
// });
// p2Button.addEventListener("click", () => {
//   if (!isGameOver) {
//     p2Score++;
//     p2Display.textContent = p2Score;

//     if (p2Score === winningScore) {
//       isGameOver = true;
//       //   p1Display.classList.add("lost");
//       //   p2Display.classList.add("win");
//       p1Display.classList.add("has-text-danger");
//       p2Display.classList.add("has-text-success");
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//     }
//   }
// });

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  //   p1Score = 0;
  //   p2Score = 0;
  //   p1Display.textContent = 0;
  //   p2Display.textContent = 0;
  //   p1Display.classList.remove("win", "lost");
  //   p2Display.classList.remove("win", "lost");
  //   p1.score = 0;
  //   p2.score = 0;
  //   p1.display.textContent = 0;
  //   p2.display.textContent = 0;
  //   p1.display.classList.remove("has-text-success", "has-text-danger");
  //   p2.display.classList.remove("has-text-success", "has-text-danger");
  //   p1.button.disabled = false;
  //   p2.button.disabled = false;

  for (let player of [p1, p2]) {
    player.score = 0;
    player.display.textContent = 0;
    player.display.classList.remove("has-text-success", "has-text-danger");
    player.button.disabled = false;
  }
}
