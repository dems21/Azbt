"use strict";
let newgame = document.querySelector(".btn_newgame");
let rolldice = document.querySelector(".btn_roldice");
let hold = document.querySelector(".btn_hold");
let player1 = document.querySelector(".player1");
let p1Name = document.querySelector(".p1Name");
let p1Score = document.querySelector(".p1Score");
let p1CurrentS = document.querySelector(".p1CurrentS");
let player2 = document.querySelector(".player2");
let p2Name = document.querySelector(".p2Name");
let p2Score = document.querySelector(".p2Score");
let p2CurrentS = document.querySelector(".p2CurrentS");
let zero = document.querySelectorAll(".zero");
let img_dice = document.querySelector(".img_dice");
let winner = document.querySelector(".winner");

let CurrentScore, active_player, score, playing;

function initial() {
  CurrentScore = 0;
  p1CurrentS.textContent = 0;
  p2CurrentS.textContent = 0;
  p1Score.textContent = 0;
  p2Score.textContent = 0;

  playing = false;
  active_player = 1;
  score = [0, 0, 0];
  img_dice.src = "./Images/dice_0.png";
  winner.classList.add("hidden");
  player1.classList.remove("blur");
  player2.classList.add("blur");
  p1Score.classList.remove("white");
  p2Score.classList.add("white");
}
initial();

const switchplayer = function () {
  document.querySelector(`.p${active_player}CurrentS`).textContent = 0;
  active_player = active_player == 1 ? 2 : 1;
  player1.classList.toggle("blur");
  player2.classList.toggle("blur");
  p1Score.classList.toggle("white");
  p2Score.classList.toggle("white");
};

rolldice.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 6) + 1;
  playing = true;
  img_dice.src = `./Images/dice_${random}.png`;

  if (random !== 1) {
    CurrentScore += random;
    document.querySelector(`.p${active_player}CurrentS`).textContent =
      CurrentScore;
  } else {
    CurrentScore = 0;
    switchplayer();
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    playing = false;
    score[`${active_player}`] += CurrentScore;
    document.querySelector(`.p${active_player}Score`).textContent =
      score[`${active_player}`];
    if (score[`${active_player}`] > 99) {
      winner.classList.remove("hidden");
      active_player == 1
        ? player1.classList.toggle("blur")
        : player2.classList.toggle("blur");
      winner.textContent = `Player ${active_player} win!!`;
    }
    switchplayer();
    CurrentScore = 0;
  }
});

newgame.addEventListener("click", initial);
