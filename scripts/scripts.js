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

/* Make a function for that alerts the score after a round is over

Pseudocode:

roundScore is a function

alert a string that says `The current score is ${playerPoints}-${computerPoints}`

*/

/* 
Make a separate function that checks on the points and alerts who wins or if the rounds should keep going until someone wins.

Pseudocode:

whoWins is a function

if playerPoints is 5 or more
    alert("You reached 5 points, you win the game!")
else if computerPoints is 5 or more
    alert("Computer reached 5 points, you lose the game!")
else
    continue the rounds

*/

function game() {
    alert("Let's play Rock, Paper, Scissors! First to 5 wins.");
    playerPoints = 0;
    computerPoints = 0;
    for (let i = 0; playerPoints < 5; i++) {
        playerSelection = userInputFormatter(selectionPrompt());
        computerSelection = getComputerChoice();
        alert(`Computer chose ${computerSelection}.`);
        alertRound();

        pointGiver();
        alertRoundScore();
    }
    alert("Congratulations! You win! :D")
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


PSEUDOCODE(I;m writing this as i figure it out):

game() is a function

alert "Let's play rock paper scissors first to 5 wins"
playerSelection is a variable the user inputs (R, P, or S)
computerSelection is a variable a computer inputs (R,P, or S)
alert what the computer chose

alertRound function alerts what the outcome of the round is

(What we need after this is several things:

* How to keep a point system between player and computer
* How to keep the rounds running until player or computer hits 5 points
* How to use loops in this context 
)

ATTEMPTS:
Let's say we have a loop for the player and a loop for the computer points. If player gains a point (or takes a "Win",) the loop runs and a variable takes on one point where the variable had first started at 0. Ditto with the computer. Once player or computer has reached 5, return an alert that a certain side has won.

To keep the round running, use the same loop set up but have the maximum number of the loop be the maximum number possible until either player or computer reaches 5 wins. 
    Doesn't keep in mind ties...

*/


