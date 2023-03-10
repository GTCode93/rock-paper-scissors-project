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
    playerSelection = prompt("Type in Rock, Paper, or Scissors for this round.");
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
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                return "Win";
            } else if (computerSelection == "Paper") {
                return "Lose";
            } else if (computerSelection == "Rock") {
                return "Tie"
            }
            break;
        case "Paper":
            if (computerSelection == "Rock") {
                return "Win";
            } else if (computerSelection == "Scissors") {
                return "Lose";
            } else if (computerSelection == "Paper") {
                return "Tie";
            }
            break;
        case "Scissors":
            if (computerSelection == "Paper") {
                return "Win";
            } else if (computerSelection == "Rock") {
                return "Lose";
            } else if (computerSelection == "Scissors") {
                return "Tie";
            }
            break;
    }
}

function alertRound () {
    roundOutcome = playRound(playerSelection, computerSelection)
    switch (roundOutcome) {
        case "Win":
            alert("You win this round!")
            break;
        case "Lose":
            alert("You lose this round!")
            break;
        case "Tie":
            alert("It's a tie this round!")
            break;
    }
}

function game() {
    alert("Let's play Rock, Paper, Scissors! First to 5 wins.");
    for (let i = 0; i < 5; i++) {
        playerSelection = userInputFormatter(selectionPrompt());
        computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}.`);
        alertRound();
    }
}


game();


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

PSEUDOCODE:
*/


