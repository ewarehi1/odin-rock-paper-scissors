// PSUEDOCODE:

// When user inputs one of three choices (rock, paper, or scissors)
// Script randomly select one of the three choices
// Compares the inputs and selects one of three result (win, lose, or tie)
// Keeps score for five games to decide winner
// Return userChoice, opponentChoice, result of round, and result of game.

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

// Keeps score for five games to decide winner
function game(playerSelection) {
    
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection = getComputerChoice();

    // Compares the inputs and selects one of three result (win, lose, or tie)
    function playRound(playerSelection, computerSelection) {

        // For case sensitivity
        playerSelection = playerSelection.toLowerCase();

        // if player selects rock
        if (playerSelection === "rock") {
            switch (computerSelection) {
                case "rock":
                    return "It is a tie! You both select rock!";
                case "paper":
                    ++computerScore;
                    return "You lose! Paper beats rock!";
                case "scissors":
                    ++playerScore;
                    return "You won! Scissors beats paper";
            }
        }
        
        // If player selects paper
        if (playerSelection === "paper") {
            switch (computerSelection) {
                case "rock":
                    ++playerScore;
                    return "You win! Paper beats rock!";
                case "paper":
                    return "It is a tie! You both selected paper!";
                case "scissors":
                    ++computerScore;
                    return "You lose! Scissors beats paper!";
            }
        }
        
        // If player selects scissors
        if (playerSelection === "scissors" || "scissor") {
            switch (computerSelection) {
                case "rock":
                    ++computerScore;
                    return "You lose! Rock beats scissors!";
                case "paper":
                    ++playerScore;
                    return "You win! Scissors beats paper!";
                case "scissors":
                    return "It is a tie! You both pick scissors!";
            }
        }
    }

    const gameMessages = document.querySelector("#game-messages");
    
    let playerMessage = document.createElement('div');
    playerMessage.textContent = `You have selected ${playerSelection}!`;
    gameMessages.appendChild(playerMessage);
    
    let comMessage = document.createElement('div');
    comMessage.textContent = `Computer has selected ${computerSelection}!`;
    gameMessages.appendChild(comMessage);

    let resultMessage = document.createElement('div');
    resultMessage.textContent = `${playRound(playerSelection, computerSelection)}`;
    gameMessages.appendChild(resultMessage);
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    game("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    game("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    game("scissors");
});
