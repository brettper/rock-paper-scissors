"use strict"

function getComputerChoice () {
    let response;
    switch (Math.floor(Math.random()*3)+1) {
        case 1:
            response = "rock";
            break;
        case 2:
            response = "paper";
            break;
        case 3:
            response = "scissors";
            break;
    }
    return response;
}

function getHumanChoice () {
    let result = prompt ("Enter (r)ock, (p)aper or (s)cissors: ");

    let response;
    switch (result) {
        case 'r':
            response = "rock";
            break;
        case 'p':
            response = "paper";
            break;
        case 's':
            response = "scissors";
            break;
        default:
            response = getComputerChoice();
            console.log("Invalid response, you get " + response);
            break;
    }
    return response;

}

function playRound (humanChoice, computerChoice) {
    let result  // h, c or d
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            result = 'd';
        } else if (computerChoice === 'paper') {
            result = 'c';
        } else { // computerChoice must be scissors
            result = 'h';
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice === 'rock') {
            result = 'h';
        } else if (computerChoice === 'paper') {
            result = 'd';
        } else { // computerChoice must be scissors
            result = 'c';
        }
    } else { // humanChoice must be scissors
        if (computerChoice === 'rock') {
            result = 'c';
        } else if (computerChoice === 'paper') {
            result = 'h';
        } else { // computerChoice must be scissors
            result = 'd';
        }
    }
    return result;
}

function playGame () {

    let humanSelection;
    let computerSelection;
    let humanScore = 0;
    let computerScore = 0;
    let result = '';

    for (let round=0; round <= 5; round++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        result = playRound (humanSelection, computerSelection);
        console.log("Human selected "+humanSelection+", Computer selected "+computerSelection);
        switch (result) {
            case 'd':
                console.log("Match is a draw.");
                break;
            case 'c':
                console.log("Computer wins.");
                computerScore++;
                break;
            case 'h':
                console.log("Human wins.");
                humanScore++;
                break;
            default:
                console.log("Wait, what??");
                break;
        }
        if (round === 5) {
        console.log("Final score is Computer:"+computerScore+" Human:"+humanScore);
        } else {
        console.log("Score is Computer:"+computerScore+" Human:"+humanScore);
        }
    }
}