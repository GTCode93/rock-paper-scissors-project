function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    if (number <= 33) {
        return "Rock"
        /* If number is 33 or lower, return Rock */
    } else if (number <= 66) {
        return "Paper"
        /* If number is 66 or lower (but above 33), return Paper */
    } else if (number <= 99) {
        return "Scissors"
        /* If number is 99 or lower (but above 66), return Scissors */
    }
}

function selectionPrompt() {
    playerSelection = prompt("Type in Rock, Paper, or Scissors for this round.");
    return playerSelection;

}

function userInputFormatter() {
    firstCharacter = playerSelection.charAt(0);
    restOfCharacters = playerSelection.slice(1, -1);
    finalCharacter = playerSelection.slice(-1);
    /* Assigns different parts of the string to variables */

    firstCharacter = firstCharacter.toUpperCase();
    restOfCharacters = restOfCharacters.toLowerCase();
    finalCharacter = finalCharacter.toLowerCase();
    /* Capitalize the first character and lower case the rest */

    return firstCharacter + restOfCharacters + finalCharacter;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                alert("You win!");
                return "Win";
            } else if (computerSelection == "Paper") {
                alert("You lose!");
                return "Lose";
            } else if (computerSelection == "Rock") {
                alert("It's a tie!");
                return "Tie"
            }
            break;
        case "Paper":
            if (computerSelection == "Rock") {
                alert("You win!");
                return "Win";
            } else if (computerSelection == "Scissors") {
                alert("You lose!");
                return "Lose";
            } else if (computerSelection == "Paper") {
                alert("It's a tie!");
                return "Tie";
            }
            break;
        case "Scissors":
            if (computerSelection == "Paper") {
                alert("You win!");
            } else if (computerSelection == "Rock") {
                alert("You lose!");
            } else if (computerSelection == "Scissors") {
                alert("It's a tie!");
            }
            break;
            /* How do I set a variable's value with the outcome of this function? */
    }
}

function game() {
    alert("Let's play Rock, Paper, Scissors! First to 5 wins.");
    for (let i = 0; i < 5; i++) {
        playerSelection = userInputFormatter(selectionPrompt());
        computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}.`);
        gameOutcome = playRound(playerSelection, computerSelection);
    }
}



/* alert("Let's play Rock, Paper, Scissors!")
playerSelection = userInputFormatter(selectionPrompt()); 


computerSelection = getComputerChoice();
alert(`Computer chose ${computerSelection}.`);

let gameOutcome;
gameOutcome = playRound(playerSelection, computerSelection);
 */
game();




/* 
playRound function:
(switch conditional with if else statements inside)
PSEUDOCODE: 

playRound is a function

switch conditional with expression playerSelection

        case playerSelection is "Rock"
            if computerSelection is "Scissors"
                alert You win!
            else if computerSelection is "Paper"
                alert You lose!
            else if computerSelection is "Rock"
                alert It's a tie!
         case playerSelection is "Paper"
            if computerSelection is "Rock"
                alert You win!
            else if computerSelection is "Scissors"
                alert You lose!
            else if computerSelection is "Paper"
                alert It's a tie!
        case playerSelection is "Scissors"
            if computerSelection is "Paper"
                alert You win!
            else if computerSelection is "Rock"
                alert You lose!
            else if computerSelection is "Scissors"
                alert It's a tie!
*/

/* 
Problem: Make function game() that calls the function playRound() inside of it. Program game() to play a five round game that keeps score and reports a winner or loser at the end.

* Use loops! below is some code to help play the five round:
    for (let i = 0); i <5; i++) {
        Your code here!
    }
* use prompt() to get input from the user
    I think you ignore this since the set up now already has a prompt() function in use!
* Remember to use console.log() to display the results of each round and the winner at the end

* Feel free to re-work previous functions if you need to. Specifically, you may want to change the return value to something more useful

* Feel free to create more helpful functions if you think it would be useful!



*(My own words) let's see about putting all of the functions into game(). The only thing we should be able to run and everything works just fine is the function game()

PSEUDOCODE:
(First Attempt)
game() is a function without a set value

use loop code: for (let i = 0); i <5; i++) 
(i don't know how to code code with this function. Experiment or Google it! )
    (nested)
*/


