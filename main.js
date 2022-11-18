
function playRound() {
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
whoWins(playerSelection, computerSelection);
console.log("----------------------------------")
}


function getComputerChoice () {
    const rpsoptions = ["rock", "paper", "scissors"]
    let comprandom = rpsoptions[Math.floor(Math.random() * rpsoptions.length)];
    console.log(comprandom);
    return comprandom;

}

function getPlayerChoice() {
    let playerpick = prompt("Pick your fighter. Type Rock, Paper or Scissors?");
    playerpick = playerpick.toLowerCase();
    console.log(playerpick);
    return playerpick;
}

function whoWins(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Its a tie!");

    }else if (playerSelection === "rock" && computerSelection === "scissors" ||
              playerSelection === "paper" && computerSelection === "rock" ||
              playerSelection === "scissors" && computerSelection === "paper") {
                console.log("Player Wins");
     } else {
        console.log("Computer Wins!");
     }
     
}

function game(){
    for (let i=1; i<=5; i++)
    playRound(i);

}
game();


//playRound(playerSelection, computerSelection);

//console.log(playRound(playerSelection, computerSelection));























//Rock Paper Scissors game copied from utube tutorial

 /*const rpsoptions = ["rock", "paper", "scissors"]
 const winners = [];

function game () {
    for(let i = 1; i <= 5; i++){
    playRound(i);
    }
    logWins();
    
    

}
function playRound() {
    
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    //console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
    
    
    console.log("____________________________________");
    
}
function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    input = input.toLowerCase();
    //console.log(input);
    return input;    
} 
    
function computerChoice() {
    return rpsoptions[Math.floor(Math.random()*rpsoptions.length)]
}
function checkWinner(choiceP,choiceC){
    console.log(choiceP, choiceC);
    if (choiceP === choiceC) {
        return "Tie";
} else if (
          (choiceP === "rock" && choiceC === "scissors") || 
          (choiceP === "paper" && choiceC === "rock") ||
          (choiceP === "scissors" && choiceC === "paper")) 
          {
            return "player";
}else  {
            return "computer";
}



}

function logWins() {
    console.log(winners);
}


game ();*/