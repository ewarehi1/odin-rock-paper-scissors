// PSUEDOCODE:

// When user inputs one of three choices (rock, paper, or scissors)
// Script randomly select one of the three choices
// Compares the inputs and selects one of three result (win, lose, or tie)
// Return userChoice, opponentChoice, and result

// 1. Script randomly select one of the three choices
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