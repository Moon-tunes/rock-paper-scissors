console.log("Hello World!");

// Gets the computer's choice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    
    if (randomNumber === 0) {
        return "Rock";
    }
    else if (randomNumber === 1) {
        return "Paper";
    }
    else if (randomNumber === 2) {
        return "Scissors";
    }
    else return "error";
}

let computerChoice = getComputerChoice();

console.log("The computer has chosen " + computerChoice + ".");

// Gets the player's choice

// Plays a round of rock, paper, scissors

// Sets the number of rounds and keeps score