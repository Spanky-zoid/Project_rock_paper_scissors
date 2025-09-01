console.log("Hello World")

function getRandomInt(){
    return Math.floor(Math.random()*3)
}

function getComputerChoice(){
    let computerChoice = getRandomInt();

        if (computerChoice === 0){
            return "Rock";     
        } else if (computerChoice === 1){
            return "Paper";
        } else {
            return "Scissors";
        }
    }

function getHumanChoice(){
    let humanChoice = prompt("Rock Paper Scissors?")
    return humanChoice.toLowerCase()
}

function playGame(rounds){

    for(let x = 0; x < rounds; x++){
        playRound(getComputerChoice, getHumanChoice);
    }

        let humanScore = 0;
        let computerScore = 0;

    function playRound(getComputerChoice(), getHumanChoice()){

        if (getComputerChoice === "Rock" && getHumanChoice === "rock"){
            return console.log("Its a Tie! Rocks!")
        } else if (getComputerChoice === "Paper" && getHumanChoice === "paper"){
            return console.log("Its a Tie! Papers!")
        } else if (getComputerChoice === "Scissors" && getHumanChoice === "scissors"){
            return console.log("Its a Tie! Scissors!")
        } else if (getComputerChoice === "Rock" && getHumanChoice === "paper"){
            return console.log("Paper beats Rock, you win!")
        } else if (getComputerChoice === "Rock" && getHumanChoice === "scissors"){
            return console.log("Rock beats Scissors, you lose!")
        } else if (getComputerChoice === "Scissors" && getHumanChoice === "paper"){
            return console.log("Scissors beats Paper, you lose!")
        }  else if (getComputerChoice === "Paper" && getHumanChoice === "scissors"){
            return console.log("Scissors beats Paper, you win!")
        } else if (getComputerChoice === "Scissors" && getHumanChoice === "rock"){
            return console.log("Rock beats Scissors, you win!")
        }  else if (getComputerChoice === "Paper" && getHumanChoice === "rock"){
            return console.log("Paper beats Rock, you lose!")
        }
        }
    }    
