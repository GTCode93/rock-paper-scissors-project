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

function userInputFormatter() {
    firstCharacter = userInput.charAt(0);
    restOfCharacters = userInput.slice(1, -1);
    finalCharacter = userInput.slice(-1);

    firstCharacter = firstCharacter.toUpperCase();
    restOfCharacters = restOfCharacters.toLowerCase();
    finalCharacter = finalCharacter.toLowerCase();
    return firstCharacter + restOfCharacters + finalCharacter;
}

function playRound() {
    switch (userInput) {
        case "Rock":
            if (computerInput="Scissors") {
                alert(`Computer chose ${computerInput}. You win!`)
            } else if (computerInput="Paper") {
                alert(`Computer chose ${computerInput}. You lose!`)
            } else {
                alert (`Computer also chose ${computerInput}. It's a tie!`)
            }
        case "Paper":
            if (computerInput="Rock") {
                alert(`Computer chose ${computerInput}. You win!`)
            } else if (computerInput="Scissors") {
                alert (`Computer chose ${computerInput}. You lose!`)
            } else {
                alert (`Computer also chose ${computerInput}. It's a tie!`)
            }
        case "Scissors":
            if (computerInput="Paper") {
                alert(`Computer chose ${computerInput}. You win!`)
            } else if (computerInput="Rock") {
                alert (`Computer chose ${computerInput}. You lose!`)
            } else {
                alert (`Computer also chose ${computerInput}. It's a tie!`)
            }
    }
}

alert("Let's play Rock, Paper, Scissors!");

let userInput = prompt("Input Rock, Paper, or Scissors below.");
userInput = userInputFormatter();

let computerInput = getComputerChoice();

playRound();

/* 
(function that compares computerInput and userInput and determines who wins the game)

playRound is a function
 
There are two ways of doing this I can think of: if...else statements and switch cases. If else statements would take 6 lines of code for the options that contradict (win or lose) and the default can be the 3 matches (ties)

Switch cases would take up to 9 different cases, but are easier to read. 
*/


