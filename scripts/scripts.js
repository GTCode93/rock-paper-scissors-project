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
            /* For a cleaner set up, maybe look to have a default setting for this conditional. */
    }}

function logRoundScore() {
    /* This function should definitely be reworked for the new UI system. */
}

function whoWins() {
    if (playerPoints >= 5) {
        // code if Player wins
    } else if (computerPoints >= 5) {
        // code if Computer wins
    } else {
    }}

let playerSelection; let computerSelection;
let playerPoints = 0; let computerPoints = 0;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const resultsDiv = document.querySelector("#results");
const playerSelectionDisplay = document.querySelector("#playerSelection");
const computerSelectionDisplay = document.querySelector("#computerSelection");
const outcomeDisplay = document.querySelector("#outcome");

rockButton.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice(); 
    computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`;
    playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`;
    
    playRound(playerSelection, computerSelection);
    logRound();
});

paperButton.addEventListener("click", () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice(); 
    computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`;
    playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`;

    playRound(playerSelection, computerSelection);
    logRound();
});

scissorsButton.addEventListener("click", () => {
    playerSelection = "Scissors";
    computerSelection = getComputerChoice(); 
    computerSelectionDisplay.textContent = `Computer Selection: ${computerSelection}`;
    playerSelectionDisplay.textContent = `Player Selection: ${playerSelection}`;

    playRound(playerSelection, computerSelection);
    logRound();
});

/* 
So far this code only plays ONE round of RPS!
Now I need to figure out how to play several rounds with some things and goals in mind:

    2) Create a new element to display the current score. Likely using literals.

    3) ^^ Dom methods for this too

    4) Look back at the old game() function and see how I even got to playing 5 rounds in the first place. 

    5) Take a look back at the functions used and how they were used in the game() function. How can I use them with this new set up?

    6) How does the final picture of the game ending look like? There has to be text saying "You Win! :D" and maybe if you press the buttons again it'll run again?? Not sure, but think about the end.

Notes:
* The reason the 5 point games worked is because of the loop. How do I take the set up we have right now and put it in a loop?
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



