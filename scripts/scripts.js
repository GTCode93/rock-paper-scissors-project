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
alert("Let's play Rock, Paper, Scissors!")
let userInput = prompt("Input Rock, Paper, or Scissors below.");

/* 
(function that formats the userInput so the first character is capital and the rest is lower case)
userInputFormatter is a function
*/

/* 
(function that compares computerInput and userInput and determines who wins the game)
playRound is a function

*/


