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
console.log(userInput);

/* 
(function that formats the userInput so the first character is capital and the rest is lower case)

userInputFormatter is a function

firstCharacter is the first character of userInput

restOfCharacters is the rest of the characters of userInput

Capitalize firstCharacter

Lower case restOfCharacters

Return firstCharacter plus restOfCharacters


*/

/* 
(function that compares computerInput and userInput and determines who wins the game)
playRound is a function

*/


