function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let choice = getRandomInt(3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function getPlayerChoice(currentRound = 1, rounds = 1){
  let choice = "";
  while (choice == "") {
    choice = prompt(`${currentRound + 1} of ${rounds} - Choose rock, paper or scissors.`).toLowerCase();
    switch (choice) {
      case "rock":
        return "rock";
        break;
      case "paper":
        return "paper";
        break;
      case "scissors":
        return "scissors";
        break;
      default:
        choice = "";
        console.warn("Not a correct choice.")
    }
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice){
    console.warn(`Tie! ${playerChoice} vs ${computerChoice}.`);
    return "tie";
  }

  switch (playerChoice) {
    case "rock":
      switch (computerChoice){
        case "paper":
          console.log(`You win! ${playerChoice} vs ${computerChoice}.`);
          return "win";
          break;
        case "scissors":
          console.error(`You lose! ${playerChoice} vs ${computerChoice}.`);
          return "lose";
          break;
      }
      break;
    case "paper":
      switch (computerChoice){
        case "rock":
          console.log(`You win! ${playerChoice} vs ${computerChoice}.`);
          return "win";
          break;
        case "scissors":
          console.error(`You lose! ${playerChoice} vs ${computerChoice}.`);
          return "lose";
          break;
      }
      break;
    case "scissors":
      switch (computerChoice){
        case "paper":
          console.log(`You win! ${playerChoice} vs ${computerChoice}.`);
          return "win";
          break;
        case "rock":
          console.error(`You lose! ${playerChoice} vs ${computerChoice}.`);
          return "lose";
          break;
      }
      break;
  }
}

function game(rounds = 1) {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  for (let i = 0; i < rounds; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice(i, rounds);
    let outcome = playRound(playerChoice, computerChoice);

    switch (outcome) {
      case "win":
        ++wins;
        break;
      case "lose":
        ++losses;
        break;
      case "tie":
        ++ties;
        break;
    }
  }
  console.log(`Finished with ${wins} wins, ${losses} losses, and ${ties} ties.`);
}

game(3);