// PSUEDOCODE:

// When user inputs one of three choices (rock, paper, or scissors)
// Script randomly select one of the three choices
// Compares the inputs and selects one of three result (win, lose, or tie)
// Return userChoice, opponentChoice, and result

// When user inputs one of three choices (rock, paper, or scissors)
const playerSelection = prompt("Time for a game of Rock, Paper, Scissors!\nWhat do you choose?");

// Script randomly select one of the three choices
function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3);
    let randChoice;

    if (randNumber === 0) {
        randChoice = "rock";
    } else if (randNumber === 1) {
        randChoice = "paper";
    } else {
        randChoice = "scissors";
    };

    return randChoice;
};
const computerSelection = getComputerChoice();

computerSelection = 7;

// Compares the inputs and selects one of three result (win, lose, or tie)
function playRound(playerSelection, computerSelection) {
    
    // For case sensitivity
    playerSelection = playerSelection.toLowerCase();

    console.log("You have selected " + playerSelection + "!");
    console.log("Computer has selected " + computerSelection + "!");

    // if player selects rock
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return "It is a tie! You both select rock!";
            case "paper":
                return "You lose! Paper beats rock!";
            case "scissors":
                return "You won! Rock beats paper";
        }
    }
    
    // If player selects paper
    if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win! Paper beats rock!";
            case "paper":
                return "It is a tie! You both selected paper!";
            case "scissors":
                return "You lose! Scissors beats paper!";
        }
    }
    
    // If player selects scissors
    if (playerSelection === "scissors" || "scissor") {
        switch (computerSelection) {
            case "rock":
                return "You lose! Rock beats scissors!";
            case "paper":
                return "You win! Scissors beats paper!";
            case "scissors":
                return "It is a tie! You both pick scissors!";
        }
    }
}

alert(playRound(playerSelection, computerSelection));
