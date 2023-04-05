let scorePlayer = 0
let scoreComputer = 0
let tied = 0

const rock = document.getElementById('rock')
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const restartbtn = document.getElementById('restart')

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

function restart(){
    scoreComputer = 0;
    scorePlayer = 0;
    tied = 0;
    secondContainer.textContent = ''
    container.textContent = ''
}

function game(player,computer){
    playRound(player,computer)
    if(scorePlayer === 5 ){
        restart()
        container.textContent = "You win"
    }else if (scoreComputer === 5){
        restart()
        container.textContent = "Computer win"
    }
}

rock.addEventListener("click",() => {
    let computer = getComputerChoice()
    game('rock',computer)})
paper.addEventListener("click",() => {
    let computer = getComputerChoice()
    game('paper',computer)})
scissors.addEventListener("click",() => {
    let computer = getComputerChoice()
    game('scissors',computer)})

restartbtn.addEventListener('click',()=>{restart()})
