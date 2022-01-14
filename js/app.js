let boxs = document.querySelectorAll(".box");
let title = document.querySelector(".title");
let xbtn = document.querySelector(".x");
let obtn = document.querySelector(".o");
let mainPage = document.querySelector(".choose");
let gamePage = document.querySelector(".container");
let turn;

// Add sound effect
let audioBtn = new Audio();
audioBtn.src = "../mixkit-arcade-game-jump-coin-216.wav";
let audioWinner = new Audio();
audioWinner.src = "../mixkit-achievement-bell-600.wav";
let audioEnter = new Audio();
audioEnter.src = "../mixkit-retro-arcade-casino-notification-211.wav";

// Add Click Events

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    game(box);
  });
});

xbtn.addEventListener("click", () => {
  player("X");
});

obtn.addEventListener("click", () => {
  player("O");
});

// Start Functions

function player(ox) {
  turn = `${ox}`;
  mainPage.style.display = "none";
  gamePage.style.display = "block";
  title.innerHTML = `${ox} Player Turn`;
  audioEnter.play();
}

function game(element) {
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "O";
    title.innerHTML = "O Player turn";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "X";
    title.innerHTML = "X Player Turn";
  }

  audioBtn.play();
  winner();
}

function winner() {
  if (
    boxs[0].innerHTML == boxs[1].innerHTML &&
    boxs[1].innerHTML == boxs[2].innerHTML &&
    boxs[2].innerHTML != ""
  ) {
    addClass(0, 1, 2);
  }
  if (
    boxs[3].innerHTML == boxs[4].innerHTML &&
    boxs[4].innerHTML == boxs[5].innerHTML &&
    boxs[5].innerHTML != ""
  ) {
    addClass(3, 4, 5);
  }
  if (
    boxs[6].innerHTML == boxs[7].innerHTML &&
    boxs[7].innerHTML == boxs[8].innerHTML &&
    boxs[8].innerHTML != ""
  ) {
    addClass(6, 7, 8);
  }
  if (
    boxs[0].innerHTML == boxs[3].innerHTML &&
    boxs[3].innerHTML == boxs[6].innerHTML &&
    boxs[6].innerHTML != ""
  ) {
    addClass(0, 3, 6);
  }
  if (
    boxs[1].innerHTML == boxs[4].innerHTML &&
    boxs[4].innerHTML == boxs[7].innerHTML &&
    boxs[7].innerHTML != ""
  ) {
    addClass(1, 4, 7);
  }
  if (
    boxs[2].innerHTML == boxs[5].innerHTML &&
    boxs[5].innerHTML == boxs[8].innerHTML &&
    boxs[8].innerHTML != ""
  ) {
    addClass(2, 5, 8);
  }
  if (
    boxs[0].innerHTML == boxs[4].innerHTML &&
    boxs[4].innerHTML == boxs[8].innerHTML &&
    boxs[8].innerHTML != ""
  ) {
    addClass(0, 4, 8);
  }
  if (
    boxs[2].innerHTML == boxs[4].innerHTML &&
    boxs[4].innerHTML == boxs[6].innerHTML &&
    boxs[6].innerHTML != ""
  ) {
    addClass(2, 4, 6);
  }
}

function addClass(n1, n2, n3) {
  boxs[n1].classList.add("winner");
  boxs[n2].classList.add("winner");
  boxs[n3].classList.add("winner");
  audioWinner.play();
  title.innerHTML = `${boxs[n3].innerHTML} Player Win`;

  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}
