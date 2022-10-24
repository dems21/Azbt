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

let no = 0;
let turn = 1;
let go = false;
function blur_removed() {
  player1.classList.remove("blur");
  player2.classList.remove("blur");
}
blur_removed();

function makezero() {
  for (let i = 0; i < zero.length; i++) {
    zero[i].textContent = 0;
  }
}
makezero();
let random_generator = function () {
  return Math.floor(Math.random() * 6) + 1;
};
let random = "";

let blur_1 = function () {
  player1.classList.add("blur");
  player2.classList.remove("blur");
  p1Score.style.color = "white";
  p2Score.style.color = "black";
};
let blur_2 = function () {
  player2.classList.add("blur");
  player1.classList.remove("blur");
  p2Score.style.color = "white";
  p1Score.style.color = "black";
};

rolldice.addEventListener("click", function () {
  rolldice.classList.add("touch");
  hold.classList.add("touch");
  random = random_generator();
  console.log(random);
  go = true;
  if (random === 1) {
    img_dice.src = "./Images/dice_1.png";
  } else if (random === 2) {
    img_dice.src = "./Images/dice_2.png";
  } else if (random === 3) {
    img_dice.src = "./Images/dice_3.png";
  } else if (random === 4) {
    img_dice.src = "./Images/dice_4.png";
  } else if (random === 5) {
    img_dice.src = "./Images/dice_5.png";
  } else {
    img_dice.src = "./Images/dice_6.png";
  }

  if (turn === 1) {
    blur_2();
    if (random !== 1) {
      no += random;
    } else {
      blur_1();
      turn = 2;
      no = 0;
    }
    p1CurrentS.textContent = no;
  } else if (turn === 2) {
    blur_1();
    if (random !== 1) {
      no += random;
    } else {
      blur_2();
      turn = 1;
      no = 0;
    }
    p2CurrentS.textContent = no;
  }
});

hold.addEventListener("click", function () {
  if (go === true) {
    console.log("hold is clicked");
    if (turn === 1) {
      blur_1();
      p1CurrentS.textContent = 0;
      p1Score.textContent = Number(p1Score.textContent) + no;
      turn = 2;
    } else if (turn === 2) {
      blur_2();
      p2CurrentS.textContent = 0;
      p2Score.textContent = Number(p2Score.textContent) + no;
      turn = 1;
    }
  }
  go = false;
  no = 0;
});

newgame.addEventListener("click", function () {
  makezero();
  blur_removed();
  turn = 1;
  p1Score.style.color = "black";
  p2Score.style.color = "black";
});
