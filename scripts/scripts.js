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

function playRound(playerSelection, computerSelection) {

}




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



*/


