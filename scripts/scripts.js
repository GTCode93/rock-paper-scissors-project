function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    if (number <= 33) {
        return "Rock"
    } else if (number <= 66) {
        return "Paper"
    } else if (number <= 99) {
        return "Scissors"
    }}

/* function selectionPrompt() {
    return playerSelection = prompt("Type in Rock, Paper, or Scissors for this round.")
} */
// Function no longer needed for UI rework

/* function userInputFormatter() {
    firstCharacter = playerSelection.charAt(0);
    restOfCharacters = playerSelection.slice(1);
    return firstCharacter.toUpperCase() + restOfCharacters.toLowerCase()
} */
// Function no longer needed for UI rework

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














/* 
To Do List:
1) Edit console.log()s and access if they're useful or not to having a UI

2) Create 3 buttons with id's rockButton, paperButton, scissorsButton in HTML page.

3) Move HTML <script> element to head, add defer keyword

4) Create new <div> element after button elements with id results to display results of rounds

5) Add header to page <h1> element with "Let's play Rock Paper Scissors!"
*/

/* function game() {
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
*/
// Commented to create new system of playing rounds and keeping score



