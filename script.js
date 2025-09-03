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

function playGame(){
 
        for (let i = 1; i < 6; i++) {
            playRound();
        }
        console.log("End of game: " + "Human: " + humanScore + " PC: " +computerScore + " Ties: " + aTie)
        return humanScore = 0, computerScore = 0, aTie = 0
}    

        let humanScore = 0;
        let computerScore = 0;
        let aTie = 0;  

    function playRound(){

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice().toLowerCase();

        if (computerChoice === humanChoice){
            aTie++;
            return console.log("Its a Tie!")

        } else if (computerChoice === "rock" && humanChoice === "paper"){
            humanScore++;      
            return console.log("Paper beats Rock, you win!")

        } else if (computerChoice === "rock" && humanChoice === "scissors"){
            computerScore++;           
            return console.log("Rock beats Scissors, you lose!")

        } else if (computerChoice === "scissors" && humanChoice === "paper"){
            computerScore++;          
            return console.log("Scissors beats Paper, you lose!")

        }  else if (computerChoice === "paper" && humanChoice === "scissors"){
            humanScore++;                          
            return console.log("Scissors beats Paper, you win!")

        } else if (computerChoice === "scissors" && humanChoice === "rock"){
            humanScore++;             
            return console.log("Rock beats Scissors, you win!")
            
        }  else if (computerChoice === "paper" && humanChoice === "rock"){
            computerScore++;           
            return console.log("Paper beats Rock, you lose!")
        }

    }