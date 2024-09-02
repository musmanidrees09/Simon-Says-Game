let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");

let btns = ["red", "yellow", "green", "purple"];

let p = document.querySelector("p");

let body = document.querySelector("body");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");

  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];

  level++;
  h2.innerText = `Level ${level}`;

  let ranIdx = Math.floor(Math.random() * 3);
  let ranColor = btns[ranIdx];
  let ranBtn = document.querySelector(`.${ranColor}`);

  gameSeq.push(ranColor);
  console.log(gameSeq);

  gameFlash(ranBtn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! your score was <b>${level}<b>  <br> Press any key to restart`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}

function btnPress() {
  let button = this;
  userFlash(button);

  userColor = button.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allButton = document.querySelectorAll(".btn");

for (butn of allButton) {
  butn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
