const log = console.log;

// This function defines a random number from 0 to 2 and returns a choice related to it
function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    
    if (num === 0) {
        return "Rock";
    }
    else if (num === 1) {
        return "Paper";
    }
    else if (num === 2) {
        return "Scissors";
    }
    else {
        return "Error: another number was returned";
    }
}

// Defines a variable "choice" that will receive the player prompt, transformed to lowercase.
// Prompt player until they write one of the 3 options
// Check if written options are equal to one of the 3 choices
// Prompt again if different
function getHumanChoice() {
    let choice

    // Do: prompt the player to write a choice and assign the variable "inputChoice"
    do  {
        let inputChoice = prompt("Write your choice: rock, paper or scissors");
        // change content of variable "inputChoice" into variable "choice"
        choice = inputChoice.toLowerCase();

        // log("inputChoice: "+ inputChoice);
        // log("choice: "+ choice);
        
        // If the player writes anything other than the 3 defined options, display an alert 
        if (choice != 'rock' 
            && choice != 'paper'
            && choice != 'scissors') {
            alert("Please write one of the options: rock, paper or scissors")
        }
    }
    //check if variable "choice" contains one of the tree choices. If true return one of the options.
    while ( choice != 'rock' 
        && choice != 'paper'
        && choice != 'scissors');

    if (choice == 'rock') {
        return "Rock";
    }
    else if (choice == 'paper') {
        return "Paper";
    }
    else if (choice == 'scissors') {
        return "Scissors";
    }
    else {
        return "Error: another number was returned";
    }
}

// Play five rounds and display the score for each round
function playGame() {

    // Store human and computer scores
    let humanScore = 0;
    let computerScore = 0;

    // Receives two parameters: human choice and computer choice.
    // Compares the received parameters and returns the round result
    function playRound(humanChoice,computerChoice) {
        if (humanChoice == 'Rock' && computerChoice == 'Rock') {
            return log(`It's a tie! Both chose ${humanChoice}.`);
        }
        else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
            computerScore++;
            return log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
        else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
            humanScore++;
            return log(`You win! ${humanChoice} beats ${computerChoice}.`);
        }
        else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
            humanScore++;
            return log(`You win! ${humanChoice} beats ${computerChoice}.`);
        }
        else if (humanChoice == 'Paper' && computerChoice == 'Paper') {
            return log(`It's a tie! Both chose ${humanChoice}.`);
        }
        else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
            computerScore++;
            return log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
        else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
            computerScore++;
            return log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
        else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
            humanScore++;
            return log(`You win! ${humanChoice} beats ${computerChoice}.`);
        }
        else if (humanChoice == 'Scissors' && computerChoice == 'Scissors') {
            return log(`It's a tie! Both chose ${humanChoice}.`);
        }
    }

    for (let i = 1; i < 6; i++) {

        // Display human and computer choices
        // Define variables that call human and computer choices functions
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        log(`
ROUND ${i}
Player choice:   ${humanSelection}
Computer choice: ${computerSelection}`)
        
        // Play one round
        playRound(humanSelection, computerSelection);
        
        //Display round score
        log(`Player score:   ${humanScore}
Computer score: ${computerScore}`)      
    }
}

// Play the game
playGame();