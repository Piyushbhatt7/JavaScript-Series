// Create a game where you start with any random game number.
// Ask the user to keep guessing the game number until the user enters correct value.

let gameNumber = 25;

let userNum = prompt("Guess the number");

while(userNumber !== gameNumber)
{
    prompt("You enterd wrong number. Guess again: ")
}

console.log("congrats! you guessed the right number");