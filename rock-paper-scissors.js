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
    if (playerSelection = "rock") {
        switch (computerSelection) {
            case "rock":
                return "It is a tie! You both select rock!";
            case "paper":
                return "You lose! Paper beats rock!";
            case "scissors":
                return "You Won! Rock beats Paper";
        }
    }
}
console.log(playRound("rock", computerSelection));