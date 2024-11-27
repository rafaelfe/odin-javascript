const log = console.log;
let humanScore = 0;
let computerScore = 0;

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

log("Computer: " + getComputerChoice());

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

        log("inputChoice: "+ inputChoice);
        log("choice: "+ choice);
        
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

log("Player: " + getHumanChoice());

// Receives two parameters: human choice and computer choice.
// Compares the received parameters and returns the round result
function playRound(humanChoice,computerChoice) {
    if (humanChoice == 'Rock' && computerChoice == 'Rock') {
        return log(`It's a tie! Both chose ${humanChoice}`);
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
        return log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
        return log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        return log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice == 'Paper' && computerChoice == 'Paper') {
        return log(`It's a tie! Both chose ${humanChoice}`);
    }
    else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
        return log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
        return log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
        return log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice == 'Scissors' && computerChoice == 'Scissors') {
        return log(`It's a tie! Both chose ${humanChoice}`);
    }
}



// Playground, to test things out
// log("hello");
// log(Math.floor(Math.random()*3));


// let a;

// function checkA(a) {
//     if ( a == '1' && '2' && '3' ) {
//         return "yes 1 2 or 3"
//     }
//     else {
//         return "no 1 2 or 3"
//     }
// }


// // Prompt user to choose a number between 1, 2 or 3
// function getHumanChoice() {
//     let num

//     // // check if player enters number 1, 2 or 3
//     do  {
//         num = prompt("Choose a number:\n1 - Rock\n2 - Paper\n3 - Scissors");

//         if (num != 1 
//             && num != 2
//             && num != 3) {
//             alert("Please enter a number between 1, 2 or 3")
//         }
//     }
//     while ( num != 1
//             && num != 2
//             && num != 3
//      );

//     if (num == 1) {
//         return "Rock";
//     }
//     else if (num == 2) {
//         return "Paper";
//     }
//     else if (num == 3) {
//         return "Scissors";
//     }
//     else {
//         return "Error: another number was returned";
//     }
// }