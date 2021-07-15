//Variables
const playerSelect = document.querySelector(".player-select");
const computerSelect = document.querySelector(".computer-select");

const buttonsWrapper = document.querySelector(".buttons-wrapper");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

const result = document.querySelector(".result");

const playerScoreWrapper = document.querySelector(".player-score");
const computerScoreWrapper = document.querySelector(".computer-score");

let compScore = 0;
let playerScore = 0;

function computerPlay() {
  let randomly = Math.floor(Math.random() * 3);
  let str = randomly == 0 ? "rock" : randomly == 1 ? "paper" : "scissors";
  return str;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "paper" && computerSelection == "rock") {
    result.innerHTML = "You Win! Paper Beats Rock";
    playerSelect.innerHTML = playerSelection;
    computerSelect.innerHTML = computerSelection;
    playerScore++;
    playerScoreWrapper.innerHTML = playerScore;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result.innerHTML = "You Lose! Paper Beats Rock";
    playerSelect.innerHTML = playerSelection;
    computerSelect.innerHTML = computerSelection;
    compScore++;
    computerScoreWrapper.innerHTML = compScore;
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    result.innerHTML = "You Win! Rock Beats Scissors";
    playerSelect.innerHTML = playerSelection;
    computerSelect.innerHTML = computerSelection;
    playerScore++;
    playerScoreWrapper.innerHTML = playerScore;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result.innerHTML = "You Lose! Rock Beats Scissors";
    playerSelect.innerHTML = playerSelection;
    computerSelect.innerHTML = computerSelection;
    compScore++;
    computerScoreWrapper.innerHTML = compScore;
  }

  if (playerSelection == "scissors" && computerSelection == "paper") {
    result.innerHTML = "You Win! Scissors Beats Paper";
    playerSelect.innerHTML = playerSelection;
    computerSelect.innerHTML = computerSelection;
    playerScore++;
    playerScoreWrapper.innerHTML = playerScore;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result.innerHTML = "You Lose! Scissors Beats Paper";
    playerSelect.innerHTML = playerSelection;
    computerSelect.innerHTML = computerSelection;
    compScore++;
    computerScoreWrapper.innerHTML = compScore;
  }

  if (playerSelection == computerSelection) {
    result.innerHTML = "Equal";
  }
}

rockButton.addEventListener("click", () => {
  playRound("rock", computerPlay());
  game();
});

paperButton.addEventListener("click", () => {
  playRound("paper", computerPlay());
  game();
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", computerPlay());
  game();
});

function game() {
  if (playerScore == 5) {
    result.innerHTML = "Congrats you won the game restarting!";
    buttonsWrapper.style.pointerEvents = "none";
    setTimeout("restarting()", 2000);
  } else if (compScore == 5) {
    result.innerHTML = "Sorry you lost the game restarting!";
    setTimeout("restarting()", 2000);
    buttonsWrapper.style.pointerEvents = "none";
  }
}

function restarting() {
  result.innerHTML = "";
  playerScore = 0;
  compScore = 0;
  playerScoreWrapper.innerHTML = playerScore;
  computerScoreWrapper.innerHTML = compScore;
  buttonsWrapper.style.pointerEvents = "all";
}
