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
    playerSelection = prompt("Type in Rock, Paper, or Scissors below to play!");
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
                alert("You win!")
            } else if (computerSelection == "Paper") {
                alert("You lose!")
            } else if (computerSelection == "Rock") {
                alert("It's a tie!")
            }
            break;
        case "Paper":
            if (computerSelection == "Rock") {
                alert("You win!")
            } else if (computerSelection == "Scissors") {
                alert("You lose!")
            } else if (computerSelection == "Paper") {
                alert("It's a tie!")
            }
            break;
        case "Scissors":
            if (computerSelection == "Paper") {
                alert("You win!")
            } else if (computerSelection == "Rock") {
                alert("You lose!")
            } else if (computerSelection == "Scissors") {
                alert("It's a tie!")
            }
            break;
    }
    /* 
    Rock-Scissors: win
    Rock-Paper: lose
    Rock-Rock: tie

    Paper-Rock: win
    Paper-Scissors: lose
    Paper-Paper: tie

    Scissors-Paper: win
    Scissors-Rock: lose
    Scissors-Scissors: tie

    IT WORKS!
    */
}


alert("Let's play Rock, Paper, Scissors!")
playerSelection = userInputFormatter(selectionPrompt()); 
/* This retrieves the variable playerSelection */


computerSelection = getComputerChoice();
alert(`Computer chose ${computerSelection}.`);
/* Defines computerSelection and shows an alert of the value */


playRound(playerSelection, computerSelection);
/* Run the playRound function to alert who wins and who loses */








/* 

Maybe create a specific playRound function for Rock Paper and Scissors? 

I think there's no true difference between using pure if...else statements and if else statements with nested switch. They both have the same issue: Rock works but the rest doesn't.

playRound function attempts:
1
if (playerSelection = "Rock") {
        if (computerSelection == "Scissors") {
            return alert("You win!")
        } else if (computerSelection == "Paper") {
            return alert("You lose!")
        } else if (computerSelection == "Rock") {
            return alert("It's a tie!")
        }
    } else if (playerSelection = "Paper") {
        if (computerSelection == "Rock") {
            return alert("You win!")
        } else if (computerSelection == "Scissors") {
            return alert("You lose!")
        } else if (computerSelection == "Paper") {
            return alert("It's a tie!")
        }
    } else if (playerSelection = "Scissors") {
        if (computerSelection == "Paper") {
            return alert("You win!")
        } else if (computerSelection == "Rock") {
            return alert("You lose!")
        } else if (computerSelection == "Scissors") {
            return alert("It's a tie!")
        }

2
if (playerSelection = "Rock") {
        switch (computerSelection) {
            case "Scissors":
                alert("You win!")
                break;
            case "Paper":
                alert("You lose!")
                break;
            case "Rock": 
                alert("It's a tie!")
                break;
        }
            Rock works! 
    } else if (playerSelection = "Paper") {
        switch (computerSelection) {
            case "Rock":
                alert("You win!")
                break;
            case "Scissors":
                alert("You lose!")
                break;
            case "Paper":
                alert("It's a tie!")
                break; 
        }
        
        Paper does not work

        Paper-Scissors: win
        Paper-Paper: lose
        Paper-Rock: tie
        
    } else if (playerSelection = "Scissors") {
        switch (computerSelection) {
            case "Paper":
                alert("You win!")
                break;
            case "Rock":
                alert("You lose!")
                break;
            case "Scissors":
                alert("It's a tie!")
                break;
        }

3
switch conditional with if else statements inside?

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


