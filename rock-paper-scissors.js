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

let playerScore = 0;
let computerScore = 0;

function game(playerSelection) {
    let computerSelection = getComputerChoice();

    const gameMessages = document.querySelector("#game-messages");
    
    let message = gameMessages.lastChild;
    while (message) {
        gameMessages.removeChild(message);
        message = gameMessages.lastChild;
    }

    function playRound(playerSelection, computerSelection) {

        // For case sensitivity
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection === "rock") {
            switch (computerSelection) {
                case "rock":
                    return "It is a tie! You both select rock!";
                case "paper":
                    ++computerScore;
                    return "You lose! Paper beats rock!";
                case "scissors":
                    ++playerScore;    /*
                    let newScore = document.createTextNode(`Score   ${playerScore}:${computerScore}`);
                    oldScore.replaceWith(newScore);
                    */
                    return "It is a tie! You both selected paper!";
                case "scissors":
                    ++computerScore;
                    return "You lose! Scissors beats paper!";
            }
        }
        
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
    
    let playerMessage = document.createElement('div');
    playerMessage.textContent = `You have selected ${playerSelection}!`;
    gameMessages.appendChild(playerMessage);
    
    let comMessage = document.createElement('div');
    comMessage.textContent = `Computer has selected ${computerSelection}!`;
    gameMessages.appendChild(comMessage);

    let resultMessage = document.createElement('div');
    resultMessage.textContent = `${playRound(playerSelection, computerSelection)}`;
    gameMessages.appendChild(resultMessage);

    const oldScore = document.querySelector('.score');

    const newScore = document.createElement('div');
    newScore.classList.add('score');
    newScore.textContent = `Score   ${playerScore}:${computerScore}`;
    oldScore.replaceWith(newScore);
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
