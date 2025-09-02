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

        let humanScore = 0;
        let computerScore = 0;

    function playRound(){

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice().toLowerCase();
        

        if (computerChoice === humanChoice){
            return console.log("Its a Tie!")

        } else if (computerChoice === "rock" && humanChoice === "paper"){
            humanScore++;
            console.log("Human score:" + humanScore)
            console.log("Computer score:" + computerScore)             
            return console.log("Paper beats Rock, you win!")

        } else if (computerChoice === "rock" && humanChoice === "scissors"){
            computerScore++;
            console.log("Human score:" + humanScore)           
            console.log("Computer score:" + computerScore)            
            return console.log("Rock beats Scissors, you lose!")

        } else if (computerChoice === "scissors" && humanChoice === "paper"){
            computerScore++;
            console.log("Human score:" + humanScore)            
            console.log("Computer score:" + computerScore)             
            return console.log("Scissors beats Paper, you lose!")

        }  else if (computerChoice === "paper" && humanChoice === "scissors"){
            humanScore++;
            console.log("Human score:" + humanScore)
            console.log("Computer score:" + computerScore)                           
            return console.log("Scissors beats Paper, you win!")

        } else if (computerChoice === "scissors" && humanChoice === "rock"){
            humanScore++;
            console.log("Human score:" + humanScore)
            console.log("Computer score:" + computerScore)             
            return console.log("Rock beats Scissors, you win!")
            
        }  else if (computerChoice === "paper" && humanChoice === "rock"){
            computerScore++;
            console.log("Human score:" + humanScore)            
            console.log("Computer score:" + computerScore)             
            return console.log("Paper beats Rock, you lose!")
        }

    }  


