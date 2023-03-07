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

let playerSelection = playerSelection();
let computerChoice = getComputerChoice();
function playRound()
