function getComputerChoice(){
    let choice = ['rock','paper','scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    console.log(choice[randomNumber]) 
}

getComputerChoice()