function getComputerChoice(){
    let choice = ['rock','paper','scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

function playRound (playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection){
        return "It's a tied"
    }else if (playerSelection === 'rock' && computerSelection === "paper"){
        return "Computer Win!"
    }else if (playerSelection === 'rock' && computerSelection === "scissors"){
        return "You Win!"
    }else if (playerSelection === 'paper' && computerSelection === "rock"){
        return "You Win!"
    }else if (playerSelection === 'paper' && computerSelection === "scissors"){
        return "Computer Win!"
    }else if (playerSelection === 'scissors' && computerSelection === "paper"){
        return "You Win!"
    }else if (playerSelection === 'scissors' && computerSelection === "rock"){
        return "Computer Win!"
    }
}

let player = 'paper';
let computer = getComputerChoice()
console.log(playRound(player,computer))

function game(){
    for(let i = 0; i < 5 ; i++){
        return playRound(player,computer)
    }
}

game()