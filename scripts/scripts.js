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

function selectionPrompt() {
    playerSelection = prompt("Type in Rock, Paper, or Scissors below to play!");
    return playerSelection;

}

function userInputFormatter() {
    firstCharacter = playerSelection.charAt(0);
    restOfCharacters = playerSelection.slice(1, -1);
    finalCharacter = playerSelection.slice(-1);

    firstCharacter = firstCharacter.toUpperCase();
    restOfCharacters = restOfCharacters.toLowerCase();
    finalCharacter = finalCharacter.toLowerCase();
    return firstCharacter + restOfCharacters + finalCharacter;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection = "Rock") {
        if (computerSelection == "Scissors") {
            return alert("You win!")
        } else if (computerSelection == "Paper") {
            return alert("You lose!")
        } else if (computerSelection == "Rock") {
            return alert("It's a tie!")
        }
    }
}


alert("Let's play Rock, Paper, Scissors!")
playerSelection = userInputFormatter(selectionPrompt()); 
/* This retrieves the variable playerSelection */


computerSelection = getComputerChoice();
alert(`Computer chose ${computerSelection}.`);
/* Defines computerSelection */


playRound(playerSelection, computerSelection);
/* Run the playRound function to alert who wins and who loses */








/* 
(function that compares computerInput and userInput and determines who wins the game)

playRound is a function

playerSelection is the same value as userInput

computerSelection is the same value as computerInput

Problem: how do we figure out an algorithm to solve this? We need to write an algorithm that will compare the different variations of a rock paper scissors game. The function playRound must be able to take on two values: "playerSelection" and "computerSelection" (which i could redeclare these as the same values as userInput and computerInput)

(Attempt using switch conditional)
switch and if...else statements

*
switch with value playerSelection

case: with value "Rock"
    if computerInput is "Scissors"
        alert computerInput is computerInput. You win!
    else if computerInput is "Paper"
        alert computerInput is computerInput. You lose!
    else computerInput is "Rock"
        alert computerInput is computerInput. It's a tie!
    break
case: with value "Paper"
    if computerInput is "Rock"
    alert computerInput is computerInput. You win!
    else if computerInput is "Scissors"
        alert computerInput is computerInput. You lose!
    else computerInput is "Paper"
        alert computerInput is computerInput. It's a tie!
    break
case: with value "Scissors"
    if computerInput is "Paper"
        alert computerInput is computerInput. You win!
    else if computerInput is "Rock"
        alert computerInput is computerInput. You lose!
    else computerInput is "Scissors"
        alert computerInput is computerInput. It's a tie!
    break
*

^^ else statements can be: computerInput is the same as playerSelection

if playerSelection is Rock
    if computerSelection is Scissors
        return an alert function that says "You win!"
    else if computerSelection is Paper
        return an alert function that says "You lose!"
    else (if they are the same)
        return an alert "It's a tie!"

*/


