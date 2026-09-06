let coins = 0;
let balloonHP = 0;
let balloonReward = 0;
let darts = 0;
let tacks = 0;
let bombs = 0;
let wizards = 0;
let plasma = 0;
let autoPlace = false;
let selectedBalloon = "↑";
let selectedHP = 0;
let selectedReward = 0;

function balloon(balloon, hp, reward) {
  balloonHP = hp;
  balloonReward = reward;
  selectedBalloon = balloon;
  selectedHP = hp;
  selectedReward = reward;
  document.getElementById("balloonDisplay").textContent = balloon;
  document.getElementById("balloonHP").textContent = balloonHP;
  document.getElementById("balloonReward").textContent = balloonReward;
}
function popBalloon() {

  if (balloonHP > 0) {
    balloonHP = balloonHP - 1;
    document.getElementById("balloonHP").textContent = balloonHP;
    if (balloonHP <= 0) {
      coins = coins + balloonReward;
      document.getElementById("coins").textContent = coins;
      document.getElementById("balloonDisplay").textContent = "💥";
      balloonReward = 0;
      document.getElementById("balloonReward").textContent = balloonReward;
      setTimeout(function() {
        if (autoPlace) {
          balloonHP = selectedHP;
          balloonReward = selectedReward;
          document.getElementById("balloonDisplay").textContent = selectedBalloon;
          document.getElementById("balloonHP").textContent = balloonHP;
          document.getElementById("balloonReward").textContent = balloonReward;
        }
      }, 500);
    }
  }
}

function buyDart() {
  if (coins >= 10) {
    coins = coins - 10;
    darts = darts + 1;
    document.getElementById("coins").textContent = coins;
    document.getElementById("darts").textContent = darts;
  }
}

function buyTack() {
  if (coins >= 50) {
    coins = coins - 50;
    tacks = tacks + 1;
    document.getElementById("coins").textContent = coins;
    document.getElementById("tacks").textContent = tacks;
  }
}

function buyBomb() {
  if (coins >= 150) {
    coins = coins - 150;
    bombs = bombs + 1;
    document.getElementById("coins").textContent = coins;
    document.getElementById("bombs").textContent = bombs;
  }
}

function buyWizard() {
  if (coins >= 500) {
    coins = coins - 500;
    wizards = wizards + 1;
    document.getElementById("coins").textContent = coins;
    document.getElementById("wizards").textContent = wizards;
  }
}

function buyPlasma() {
  if (coins >= 2000) {
    coins = coins - 2000;
    plasma = plasma + 1;
    document.getElementById("coins").textContent = coins;
    document.getElementById("plasma").textContent = plasma;
  }
}

setInterval(function() {
  let damage = 0;
  damage = damage + darts * 1;
  damage = damage + tacks * 3;
  damage = damage + bombs * 8;
  damage = damage + wizards * 20;
  damage = damage + plasma * 50;
  document.getElementById("dps").textContent = damage;
  if (balloonHP > 0) {
    balloonHP = balloonHP - damage;
    if (balloonHP <= 0) {
      balloonHP = 0;
      coins = coins + balloonReward;
      balloonReward = 0;
      document.getElementById("balloonDisplay").textContent = "💥";
      document.getElementById("coins").textContent = coins;
    }
    document.getElementById("balloonHP").textContent = balloonHP;
  }
}, 1000);

function toggleAutoPlace() {
  if (autoPlace == false) {
    if (coins >= 500) {
      coins = coins - 500;
      autoPlace = true;
      document.getElementById("coins").textContent = coins;
      let button = document.getElementById("autoPlaceButton");
      button.textContent = "Auto Place: ON";
      button.classList.add("on");
    }
  } else {
    autoPlace = false;
    let button = document.getElementById("autoPlaceButton");
    button.textContent = "Auto Place: OFF";
    button.classList.remove("on");
  }
}