let scorePlayer = 0
let scoreComputer = 0
let tied = 0

const rock = document.getElementById('rock')
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

function getComputerChoice(){
    let choice = ['rock','paper','scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}
let computer = getComputerChoice()

function playRound (playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection){
        tied++
        return "It's a tied"
    }else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "paper"){
        scoreComputer++
        return "Computer Win!"
    }else if (playerSelection.toLowerCase() === 'rock' && computerSelection === "scissors"){
        scorePlayer++
        return "You Win!"
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "rock"){
        scorePlayer++
        return "You Win!"
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === "scissors"){
        scoreComputer++
        return "Computer Win!"
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "paper"){
        scorePlayer++
        return "You Win!"
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === "rock"){
        scoreComputer++
        return "Computer Win!"
    }
}

rock.addEventListener("click",() => {console.log(playRound('rock',computer))})
paper.addEventListener("click",() => {console.log(playRound('paper',computer))})
scissors.addEventListener("click",() => {console.log(playRound('scissors',computer))})

// function game(){
//     for(let i = 0; i < 5 ; i++){
//         let player = prompt("Ce alegi: ROCK | PAPER | SCISSORS ?")
//         let computer = getComputerChoice()
//         console.log(playRound(player,computer)) 
//         console.log(`Player:${scorePlayer} Tied:${tied} Computer${scoreComputer}`)
//     }
    
//     if(scorePlayer > scoreComputer){
//         console.log("Player win!!")
//     }else{
//         console.log("Computer win!!")
//     }
// }

// game()