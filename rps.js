// Gets the computer's choice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else if (randomNumber === 2) {
        return "scissors";
    }
    else return "error";
}

// Plays a round of rock, paper, scissors

function playRound(playerChoice, computerChoice) {

console.log("The computer has chosen " + computerChoice + ".");
console.log("You have chosen " + playerChoice + ".");

if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
    playerWin++;
    return "You win!";
}
else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
    computerWin++;
    return "You lose!";
}
else if (playerChoice === computerChoice) {
    return "It's a draw!";
}
else {
    return "Why have you broken me? :(";
}
}

// Plays the game for 5 rounds and keeps score

let playerWin = 0;
let computerWin = 0;
let outcome;


function game() {
    
    for (let i = 0; i < 5; i++) {
    
    console.log("Round " + (i + 1) + "!");
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    console.clear();
    console.log(playRound(playerChoice, computerChoice));
    
    i != 4 ? 
    console.log("The score is:\n You: " + playerWin + "\n Computer: " + computerWin) : 
    console.log("The final score is:\n You: " + playerWin + "\n Computer: " + computerWin);
    }
    
    if (playerWin > computerWin) {
        console.log("Congratulations, you beat the computer!");
    }
    else if (playerWin === computerWin) {
        console.log("And the final result, is a tie!");
    }
    else {
        console.log("The computer beat you, better luck next time!");
    }
}

// Starts the game 

game();