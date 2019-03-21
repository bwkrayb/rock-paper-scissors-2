let yourChoice;
let computerChoice;
let winner;
let winnerTotal;
let computerWins = 0;
let humanWins = 0;

function computerPlay() {
    let num = Math.random();
    if (num >= .67) {
        computerChoice = 'Rock';
    } else if (num >= .34) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    };
}

function promptChoice() {
    yourChoice = prompt().toLowerCase();
    let n = length.yourChoice;
    let firstLetter = yourChoice.substr(0,1);
    yourChoice = firstLetter.toUpperCase() + yourChoice.substr(1,n);
};

function playerChoice(choice) {
    yourChoice = choice;
    console.log(yourChoice);
    playGame();
}

function calcWinner() {
    if (computerChoice == 'Rock') {
        computerRock();
    } else if (computerChoice == 'Paper') {
        computerPaper();
    } else {
        computerScissors();
    };
    
}

function computerRock() {
    if (yourChoice == 'Rock') {
        winner = 'Tie';
    } else if (yourChoice == 'Paper') {
        winner = 'Human Wins!';
        humanWins = humanWins + 1;
    } else {
        winner = 'Computer Wins!';
        computerWins = computerWins + 1;
    };
}

function computerPaper() {
    if (yourChoice == 'Rock') {
        winner = 'Computer Wins!';
        computerWins = computerWins + 1;
    } else if (yourChoice == 'Paper') {
        winner = 'Tie';
    } else {
        winner = 'Human Wins!';
        humanWins = humanWins + 1;
    };
}

function computerScissors() {
    if (yourChoice == 'Rock') {
        winner = 'Human Wins!';
        humanWins = humanWins + 1;
    } else if (yourChoice == 'Paper') {
        winner = 'Computer Wins!';
        computerWins = computerWins + 1;
    } else {
        winner = 'Tie';
    };
}

function printData() {
    document.getElementById("computer").innerHTML = computerChoice;
    document.getElementById("human").innerHTML = yourChoice;
    document.getElementById("winner").innerHTML = winner;
    document.getElementById("compWins").innerHTML = computerWins;
    document.getElementById("humanWins").innerHTML = humanWins;
}

function calcFinalWinner() {
    if (computerWins ==5 || humanWins == 5) {
        if (computerWins > humanWins) {
            winnerTotal = 'Computer';
        } else {
            winnerTotal = 'Human';
        }
        alert("The " + winnerTotal + " has won it all!");
        setToZero();7
    }
}

function setToZero() {
    yourChoice = '';
    computerChoice = '';
    winner = '';
    winnerTotal = '';
    computerWins = 0;
    humanWins = 0;
}

// function playGame() {
//     yourChoice = '';
//     computerChoice = '';
//     winner = '';
//     computerPlay();
//     promptChoice();
//     if (yourChoice == 'Rock' || yourChoice == 'Paper' || yourChoice == 'Scissors') {
//         calcWinner();
//         printData();
//         calcFinalWinner();
//     } else {
//         alert("You did not enter rock, paper, or scissors.");
//     };
// }

function playGame() {
  computerChoice = '';
  winner = '';
  computerPlay();
  if (yourChoice == 'Rock' || yourChoice == 'Paper' || yourChoice == 'Scissors') {
      calcWinner();
      printData();
      calcFinalWinner();
  } else {
      alert("You did not enter rock, paper, or scissors.");
  };
}