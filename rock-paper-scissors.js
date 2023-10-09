// PSUEDOCODE:

// When user inputs one of three choices (rock, paper, or scissors)
// Script randomly select one of the three choices
// Compares the inputs and selects one of three result (win, lose, or tie)
// Return userChoice, opponentChoice, and result

// Script randomly select one of the three choices
let getComputerChoice = function() {
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

// Compares the inputs and selects one of three result (win, lose, or tie)
function playRound(playerSelection, computerSelection) {
    
    // if player selects rock
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return "It is a tie! You both select rock!";
            case "paper":
                return "You lose! Paper beats rock!";
            case "scissors":
                return "You Won! Rock beats Paper";
        }
    }
    
    if (playerSelection === "paper") { // If player selects paper
        switch (computerSelection) {
            case "rock":
                return "You win! Paper beats rock!";
            case "paper":
                return "It is a Tie! You both selected paper!";
            case "scissors":
                return "You lose! Rock beats paper!";
        }
    }
    
    if (playerSelection === "scissors" || "scissor") { // If player selects scissors
        switch (computerSelection) {
            case "rock":
                return "You lose! Rock beats scissors!";
            case "paper":
                return "You Win! Scissors beats paper!";
            case "scissors":
                return "It is a tie! You both pick Scissors!";
        }
    }
}
console.log(playRound("scissors", computerSelection));