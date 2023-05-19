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
            resultsDiv.appendChild(displayWin);
            break;
        case "Lose":
            resultsDiv.appendChild(displayLose);
            break;
        case "Tie":
            resultsDiv.appendChild(displayTie);
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
    /* This function should definitely be reworked for the new UI system. */
}

function whoWins () {
    if (playerPoints >= 5) {
        // code if Player wins
    } else if (computerPoints >= 5) {
        // code if Computer wins
    } else {
    }}

let playerSelection;
let computerSelection;
let playerPoints;
let computerPoints;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const resultsDiv = document.querySelector("#results");
const playerSelectionDisplay = document.querySelector("#playerSelection");
const computerSelectionDisplay = document.querySelector("#computerSelection");

const displayWin = document.createElement("h3");
displayWin.style.color = "green";
const displayLose = document.createElement("h3");
displayWin.style.color = "red";
const displayTie = document.createElement("h3")
displayWin.style.color = "yellow";

rockButton.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice(); 
    computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`;
    playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`;
});

paperButton.addEventListener("click", () => {

});

scissorsButton.addEventListener("click", () => {
    
});

playRound(playerSelection, computerSelection);
logRound();








/* 
To Do List:
1)

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



