let scorePlayer = 0
let scoreComputer = 0
let tied = 0

const rock = document.getElementById('rock')
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const restartbtn = document.getElementById('restart')

const firstContainer = document.getElementById('firstContainer')
const secondContainer = document.getElementById('secondContainer')

function getComputerChoice(){
    let choice = ['rock','paper','scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}


function playRound (playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection){
        tied++
        secondContainer.innerHTML = "<p>It's a tied</p>"
        firstContainer.innerHTML = `<p>Player Score: ${scorePlayer}  Computer Score: ${scoreComputer} Tied: ${tied} </p>`
    }else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "paper"){
        scoreComputer++
        secondContainer.innerHTML = "<p>You lost! Rock is beaten by Paper</p>"
         firstContainer.innerHTML = `<p>Player Score: ${scorePlayer}  Computer Score: ${scoreComputer} Tied: ${tied} </p>`
    }else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "scissors"){
        scorePlayer++
        secondContainer.innerHTML = "<p>You won! Rock beats Scissors</p>"
         firstContainer.innerHTML = `<p>Player Score: ${scorePlayer}  Computer Score: ${scoreComputer} Tied: ${tied} </p>`
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "rock"){
        scorePlayer++
        secondContainer.innerHTML = "<p>You won! Paper beats Rock</p>"
         firstContainer.innerHTML = `<p>Player Score: ${scorePlayer}  Computer Score: ${scoreComputer} Tied: ${tied} </p>`
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "scissors"){
        scoreComputer++
        secondContainer.innerHTML = "<p>You lost! Paper is beaten by Scissors</p>"
         firstContainer.innerHTML = `<p>Player Score: ${scorePlayer}  Computer Score: ${scoreComputer} Tied: ${tied} </p>`
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "paper"){
        scorePlayer++
        secondContainer.innerHTML = "<p>You won! Scissors beats Paper</p>"
         firstContainer.innerHTML = `<p>Player Score: ${scorePlayer}  Computer Score: ${scoreComputer} Tied: ${tied} </p>`
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "rock"){
        scoreComputer++
        secondContainer.innerHTML = "<p>You lost! Scissors is beaten by Rock</p>"
         firstContainer.innerHTML = `<p>Player Score: ${scorePlayer}  Computer Score: ${scoreComputer} Tied: ${tied} </p>`
    }
}

function restart(){
    scoreComputer = 0;
    scorePlayer = 0;
    tied = 0;
    firstContainer.innerHTML = '<p>Choose you weapon</p> <p>First who won 5 rounds  will win!</p>'
    secondContainer.innerHTML = ''
}

function game(player,computer){
    playRound(player,computer)
    if(scorePlayer === 5 ){
        restart()
        secondContainer.innerHTML = "<p>YOU WON!</p>"
    }else if (scoreComputer === 5){
        restart()
        secondContainer.innerHTML = "<p>COMPUTER WON!</p>"
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
