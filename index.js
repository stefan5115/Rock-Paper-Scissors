let scorePlayer = 0
let scoreComputer = 0
let tied = 0

const rock = document.getElementById('rock')
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

const playerChoise = [rock, paper, scissors]


const container = document.getElementById('container')
const secondContainer = document.getElementById('secondContainer')

function getComputerChoice(){
    let choice = ['rock','paper','scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}


function playRound (playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection){
        tied++
        container.textContent = "It's a tied"
    }else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "paper"){
        scoreComputer++
         container.textContent = "Computer Win!"
         secondContainer.textContent = `Player Score: ${scorePlayer}  Computer Score: ${scoreComputer}`
    }else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "scissors"){
        scorePlayer++
         container.textContent = "You Win!"
         secondContainer.textContent = `Player Score: ${scorePlayer}  Computer Score: ${scoreComputer}`
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "rock"){
        scorePlayer++
         container.textContent = "You Win!"
         secondContainer.textContent = `Player Score: ${scorePlayer}  Computer Score: ${scoreComputer}`
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "scissors"){
        scoreComputer++
         container.textContent = "Computer Win!"
         secondContainer.textContent = `Player Score: ${scorePlayer}  Computer Score: ${scoreComputer}`
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "paper"){
        scorePlayer++
         container.textContent = "You Win!"
         secondContainer.textContent = `Player Score: ${scorePlayer}  Computer Score: ${scoreComputer}`
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "rock"){
        scoreComputer++
         container.textContent = "Computer Win!"
         secondContainer.textContent = `Player Score: ${scorePlayer}  Computer Score: ${scoreComputer}`
    }
}

rock.addEventListener("click",() => {
    let computer = getComputerChoice()
    playRound('rock',computer)})
paper.addEventListener("click",() => {
    let computer = getComputerChoice()
    playRound('paper',computer)})
scissors.addEventListener("click",() => {
    let computer = getComputerChoice()
    playRound('scissors',computer)})


