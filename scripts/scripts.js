function playerSelection() {
    let selection = prompt('Input Rock, Paper, or Scissors below.');
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    if (number <= 33) {
        return 'Rock'
    } else if (number <= 66) {
        return 'Paper'
    } else if (number <= 99) {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection();
}

/* 
This function's intention is to only PROCESS THE ROUND AND COMPARE THE TWO FUNCTIONS ABOVE.

playRound is a function and uses the variables playerSelection and computerSelection




*/


