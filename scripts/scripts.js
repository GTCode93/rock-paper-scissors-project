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
            outcomeDisplay.textContent = "Outcome: Win! :)";
            break;
        case "Lose":
            outcomeDisplay.textContent = "Outcome: Lose! :("
            break;
        case "Tie":
            outcomeDisplay.textContent = "Outcome: Tie! :|"
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
            
        default: 
        playerPoints = playerPoints;
        computerPoints = computerPoints;
    }}

function logRoundScore() {
    currentScoreDisplay.textContent = `Score: ${playerPoints} - ${computerPoints}`;
}

function whoWins() {
    if (playerPoints >= 5) {
        outcomeDisplay.textContent = "Outcome: You Win The Game! :D";
    } else if (computerPoints >= 5) {
        outcomeDisplay.textContent = "Outcome: You Lose The Game! D:"
    } else {
    }}

const selectionButtons = document.querySelectorAll(".selectionButtons")

const resultsDiv = document.querySelector("#results");
const playerSelectionDisplay = document.querySelector("#playerSelection");
const computerSelectionDisplay = document.querySelector("#computerSelection");
const outcomeDisplay = document.querySelector("#outcome");
const currentScoreDisplay = document.querySelector("#currentScore");

let playerSelection; let computerSelection;
let playerPoints = 0; let computerPoints = 0;

for(let i=1; i <= 100; i++) {
    selectionButtons.forEach(button => button.addEventListener("click", () => {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();
        playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`;
        computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`;
        playRound(playerSelection, computerSelection);
        logRound();
    })); 
    pointGiver(); 
    logRoundScore();
    if(whoWins() == "Game Over") {
        break;
    }
}

/* Syntax of this taken/inspired from https://www.youtube.com/watch?v=n1_vHArDBRA */

/* 
So far this code only plays ONE round of RPS!
Now I need to figure out how to play several rounds with some things and goals in mind:

    6) How does the final picture of the game ending look like? There has to be text saying "You Win! :D" and maybe if you press the buttons again it'll run again?? Not sure, but think about the end.

Notes:
* The reason the 5 point games worked is because of the loop. How do I take the set up we have right now and put it in a loop?

GOAL: Display the computer selection and rewrite the logRoundScore() function
*/







/* function game() {
    alert("Let's play Rock, Paper, Scissors! First to 5 wins.");
    playerPoints = 0; computerPoints = 0;
    
    for (let i = 1; i <= 100; i++) {
        playerSelection = userInputFormatter(selectionPrompt());

        computerSelection = getComputerChoice();

        console.log(`Computer chose ${computerSelection}`);

        logRound();

        pointGiver();

        logRoundScore();

        if (whoWins() == "Game Over") {
            break;
        }
    }} 
game();        
*/
// Commented to create new system of playing rounds and keeping score



