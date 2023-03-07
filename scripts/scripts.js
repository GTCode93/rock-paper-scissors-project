/* 
Problem: Write a function named getComputerChoice that will randomly choose between three options: 'Rock', 'Paper', or 'Scissors'

No user interface
Desired output is Rock Paper or Scissors
No user input, the code must randomly give either of the three output randomly

Pseudocode:
getComputerChoice is a function with parameter computerChoice
let number be a variable
number takes on a random integer with Math.random and Math.floor (USING * 100, THE OUTCOME WILL NEVER BE 100, JUST 99 AND BELOW)

if number is <= 33, then return computerChoice is "Rock"
else if number is <= 66, then return computerChoice is "Paper"
else number is <= 99, then return computerChoice is "Scissors"

*/

function getComputerChoice () {
    let number = Math.floor(Math.random() * 100);
    if (number <= 33) {
        return 'Rock'
    } else if (number <= 66) {
        return 'Paper'
    } else if (number <= 99) {
        return 'Scissors'
    }
}