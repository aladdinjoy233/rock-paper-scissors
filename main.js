const gameOptions = ["rock", "paper", "scissors"];

// Ask player for the input
function getPlayerPlay() {
  let askPlayer = prompt("Rock, Paper, or Scissors?");
  return askPlayer.toLowerCase();
}

// Get random number between MIN and MAX
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Get computer's play
function computerPlay() {
  let currentChoice = gameOptions[getRandomInt(0, 2)];
  return currentChoice;
}

// Play one round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "It's a tie!";

  // Loosing
  if (
      playerSelection === "rock" && computerSelection === "paper" ||
      playerSelection === "paper" && computerSelection === "scissors" ||
      playerSelection === "scissors" && computerSelection === "rock") {
        return `You loose, ${computerSelection} beats ${playerSelection}!`
  } else {
    // Winning
    return `You win, ${playerSelection} beats ${computerSelection}!`;
  };
}

// Play the game 5 times
function game() {
  for (i = 0; i < 5; i++){
    console.log(playRound(getPlayerPlay(), computerPlay()));
  }
}