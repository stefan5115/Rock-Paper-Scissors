function getComputerChoice(){
    let choice = ['rock','paper','scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

function playRound (playerSlection, computerSelection){
    if(playerSlection.toLowerCase() === computerSelection){
        return "It's a tied"
    }
}

let player = 'rock';
let computer = getComputerChoice()
console.log(playRound(player,computer))

