function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    if (number <= 33) {
        return "Rock"
    } else if (number <= 66) {
        return "Paper"
    } else if (number <= 99) {
        return "Scissors"
    }}

function selectionPrompt() {
    return playerSelection = prompt("Type in Rock, Paper, or Scissors for this round.")
}

function userInputFormatter() {
    /* Will return toss an error "Uncaught TypeError: Cannot read properties of null 
    (reading 'charAt')" if playerSelection is null. This happens due to cancelling the 
    selectionPrompt() function which causes the variable playerSelection to be null, 
    and this function cannot process the value null.*/
    firstCharacter = playerSelection.charAt(0);
    restOfCharacters = playerSelection.slice(1);
    return firstCharacter.toUpperCase() + restOfCharacters.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                return "Win"
            } else if (computerSelection == "Paper") {
                return "Lose"
            } else if (computerSelection == "Rock") {
                return "Tie"
            }
            break;
        case "Paper":
            if (computerSelection == "Rock") {
                return "Win"
            } else if (computerSelection == "Scissors") {
                return "Lose"
            } else if (computerSelection == "Paper") {
                return "Tie"
            }
            break;
        case "Scissors":
            if (computerSelection == "Paper") {
                return "Win"
            } else if (computerSelection == "Rock") {
                return "Lose"
            } else if (computerSelection == "Scissors") {
                return "Tie"
            }
            break;
    }}

function logRound () {
    roundOutcome = playRound(playerSelection, computerSelection)
    switch (roundOutcome) {
        case "Win":
            console.log("You win this round!");
            break;
        case "Lose":
            console.log("You lose this round!");
            break;
        case "Tie":
            console.log("It's a tie this round!");
            break;
    }}

function pointGiver() {
    switch (playRound(playerSelection, computerSelection)) {
        case "Win":
            ++playerPoints;
            break;
        case "Lose":
            ++computerPoints;
            break;
    }}

function logRoundScore() {
    console.log(`The current score is ${playerPoints}-${computerPoints}`);
}

function whoWins () {
    if (playerPoints >= 5) {
        console.log("Congratulations you win!");
        return "Game Over";
    } else if (computerPoints >= 5) {
        console.log("Sorry, you've lost!");
        return "Game Over";
    } else {
    }}

function game() {
    alert("Let's play Rock, Paper, Scissors! First to 5 wins.");
    playerPoints = 0; computerPoints = 0;
    for (let i = 0; i < 100; i++) {
        playerSelection = userInputFormatter(selectionPrompt());
        computerSelection = getComputerChoice();
        console.log(`Computer chose ${computerSelection}`);
        logRound();
        pointGiver();
        logRoundScore();
        if (whoWins() == "Game Over") {
            break;
        } else {
        }}}

game();



