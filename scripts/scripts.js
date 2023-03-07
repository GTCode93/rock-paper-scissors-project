function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    if (number <= 33) {
        return "Rock"
    } else if (number <= 66) {
        return "Paper"
    } else if (number <= 99) {
        return "Scissors"
    }
}

function userInputFormatter() {
    firstCharacter = userInput.charAt(0);
    restOfCharacters = userInput.slice(1, -1);
    finalCharacter = userInput.slice(-1);

    firstCharacter = firstCharacter.toUpperCase();
    restOfCharacters = restOfCharacters.toLowerCase();
    finalCharacter = finalCharacter.toLowerCase();
    return firstCharacter + restOfCharacters + finalCharacter;
}

alert("Let's play Rock, Paper, Scissors!");

let userInput = prompt("Input Rock, Paper, or Scissors below.");
userInput = userInputFormatter();

let computerInput = getComputerChoice();

let playerSelection = userInput;

let computerSelection = computerInput;

playRound();

/* 
(function that compares computerInput and userInput and determines who wins the game)

playRound is a function

Problem: how do we figure out an algorithm to solve this? We need to write an algorithm that will compare the different variations of a rock paper scissors game. The function playRound must be able to take on two values: "playerSelection" and "computerSelection" (which i could redeclare these as the same values as userInput and computerInput)


*/


