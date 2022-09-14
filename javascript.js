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
    choice = prompt(`${currentRound + 1} of ${rounds} - Choose rock, paper or scissors.`);
    if (choice !== null) {choice = choice.toLowerCase()}
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
        console.log("Not a correct choice.")
    }
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice){
    return "tie";
  }

  switch (playerChoice) {
    case "rock":
      switch (computerChoice){
        case "paper":
          return "win";
          break;
        case "scissors":
          return "lose";
          break;
      }
      break;
    case "paper":
      switch (computerChoice){
        case "rock":
          return "win";
          break;
        case "scissors":
          return "lose";
          break;
      }
      break;
    case "scissors":
      switch (computerChoice){
        case "paper":
          return "win";
          break;
        case "rock":
          return "lose";
          break;
      }
      break;
  }
}

function game(rounds, buttonChoice) {
  for (let i = 0; i < rounds; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = buttonChoice;
    let outcome = playRound(playerChoice, computerChoice);

    switch (outcome) {
      case "win":
        console.log(`%cYou win!%c ${playerChoice} vs ${computerChoice}.`, "color: lawngreen;", "");
        ++wins;
        break;
      case "lose":
        console.log(`%cYou lose!%c ${playerChoice} vs ${computerChoice}.`, "color: crimson;", "");
        ++losses;
        break;
      case "tie":
        console.log(`%cTie!%c ${playerChoice} vs ${computerChoice}.`, "color: gold;", "");
        ++ties;
        break;
    }
  }
  console.log(`Finished with ${wins} wins, ${losses} losses, and ${ties} ties.`);
}

let wins = 0;
let losses = 0;
let ties = 0;

let rockButton = document.querySelector('.button.rock');
let paperButton = document.querySelector('.button.paper');
let scissorsButton = document.querySelector('.button.scissors');
let gameOutput = document.querySelector('.gameoutput');


rockButton.addEventListener('click', function (e) {
  //console.log(e);
  //console.log(e.target);
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  e.target.style.background = "#" + randomColor;
  game(1, 'rock');
});

paperButton.addEventListener('click', function (e) {
  //console.log(e);
  //console.log(e.target);
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  e.target.style.background = "#" + randomColor;
  game(1, 'paper');
});

scissorsButton.addEventListener('click', function (e) {
  //console.log(e);
  //console.log(e.target);
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  e.target.style.background = "#" + randomColor;
  game(1, 'scissors');
});