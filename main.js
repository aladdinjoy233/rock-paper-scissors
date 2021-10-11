const gameOptions = ["rock", "paper", "scissors"];
const siteChoices = document.querySelectorAll(".choice");
const roundWinnerDiv = document.querySelector(".announce-round-winner");
const matchWinnerOverlay = document.querySelector(".match-finished-overlay");
const matchWinnerTitle = document.querySelector(".winner-title");
const restartBtn = document.querySelector("#restart-btn")

let playerScoreSpan = document.querySelector(".player-score");
let compScoreSpan = document.querySelector(".computer-score");

let playerScore = 0;
let computerScore = 0;

// Get a random number between the MIN number and the MAX number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Get computer's play utilzizing the random number function
function computerPlay() {
  return gameOptions[getRandomInt(0, 2)];
}

// Function that does everything it should do when a player wins a round
function playerWin(playerSelection, computerSelection) {
  roundWinnerDiv.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
  playerScore++;
  playerScoreSpan.textContent = playerScore;
}

// Function that does everything it should do when a player loses a round (PC WINS)
function compWin(playerSelection, computerSelection) {
  roundWinnerDiv.textContent = `You loose, ${computerSelection} beats ${playerSelection}!`
  computerScore++
  compScoreSpan.textContent = computerScore;
}

// Play a single round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) roundWinnerDiv.textContent = "It's a tie!";

  // Loosing
  if (
    playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
    compWin(playerSelection, computerSelection);
  } else {
    // Winning
    playerWin(playerSelection, computerSelection);
  };
}

// Check for a winner (When there are 5 points for any player)
function checkWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    let winner = playerScore >= 5 ? "player" : "computer";

    if (winner === "player") {
      matchWinnerTitle.innerText = "Congratulations! You Win!";
    } else {
      matchWinnerTitle.innerText = "Maybe you'll win next time. . .";
    }

    matchWinnerOverlay.classList.add("game-over");
  }
}

// Listen for click on any of the three choice buttons
siteChoices.forEach(choice => {
  choice.addEventListener("click", (e) => {
    let playersChoice = gameOptions[choice.getAttribute('data-num-in-array')];
    playRound(playersChoice, computerPlay());
    checkWinner();
  })
})

// Restart the game when the button is clicked
restartBtn.addEventListener("click", () => {
  playerScore = 0;
  playerScoreSpan.textContent = playerScore;
  computerScore = 0;
  compScoreSpan.textContent = computerScore;
  roundWinnerDiv.textContent = "Winner will be announced here";
  matchWinnerOverlay.classList.remove("game-over");
})