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
    /* This function will return toss an error "Uncaught TypeError: Cannot read properties of null (reading 'charAt')" if playerSelection is null. This happens due to cancelling the selectionPrompt() function which causes the variable playerSelection to be null, and this function cannot process the value null.*/
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

function pointGiver() {
    switch (playRound(playerSelection, computerSelection)) {
        case "Win":
            ++playerPoints;
            break;
        case "Lose":
            ++computerPoints;
            break;
        case "Tie":
            playerPoints = playerPoints;
            computerPoints = computerPoints;
            /* This case is redundant, might not need this! */
            break;
    }
}

function alertRoundScore() {
    alert(`The current score is ${playerPoints}-${computerPoints}`)
}

function whoWins () {
    if (playerPoints >= 5) {
        alert("Congratulations you win!")
        return "Game Over";
    } else if (computerPoints >= 5) {
        alert("Sorry, you've lost!")
        return "Game Over";
    } else {
    }
}

function game() {
    alert("Let's play Rock, Paper, Scissors! First to 5 wins.");

    playerPoints = 0;
    computerPoints = 0;

    for (let i = 0; i < 100; i++) {
        playerSelection = userInputFormatter(selectionPrompt());
        computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}.`);
        alertRound();
        pointGiver();
        alertRoundScore();
        if (whoWins() == "Game Over") {
            break;
        } else {
        }
    }
}

game();



