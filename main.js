let playerScore = 0
let compScore = 0
let draw = 0

const imageRock = document.createElement('img');
const imagePaper = document.createElement('img');
const imageScissors = document.createElement('img');

imageRock.src = 'rock.png'
imageRock.width = '50'
imagePaper.src = 'paper.png'
imagePaper.width = '50'
imageScissors.src = 'scissors.png'
imageScissors.width = '50'


//button selections
const choices = document.querySelectorAll('button');

//info displayed on page
const gameInfo = document.querySelector('#gameInfo');
const playerPoints = document.getElementById('playerscore');
const computerPoints = document.getElementById('compscore');
const displayWhoWon = document.getElementById('roundwinner');
const displayWhoLost = document.getElementById('roundwinner');
const displayCChoice = document.getElementById('displaycchoice')




const tie = document.getElementById('draw');
const winner = document.getElementById('won')
const looser = document.getElementById('lost')


//event listener
choices.forEach(button => button.addEventListener('click', playRound));



//plays one round of the game
function playRound(e) {
let playerSelection = e.target.id;
console.log(playerSelection)
let computerSelection = getComputerChoice();

whoWins(playerSelection, computerSelection);

console.log("----------------------------------")

if (playerScore === 5) {
    winner.textContent = "YOU WON!"
    endGame();
    console.log("YOU WIN!");
}
else if (compScore === 5) {
    looser.textContent = "YOU LOOSE"
    endGame();
    console.log("YOU LOOSE!");
    
    

}
}

//computers selection
function getComputerChoice () {
    const rpsoptions = ["rock", "paper", "scissors"]
    let comprandom = rpsoptions[Math.floor(Math.random() * rpsoptions.length)];
    console.log(comprandom);   
    if (comprandom === "rock") {
        displayCChoice.textContent = 'ROCK';
        //document.querySelector('#displaycchoice').appendChild(imageRock);
    }else if (comprandom === "paper") {
        displayCChoice.textContent = 'PAPER';
        //document.querySelector('#displaycchoice').appendChild(imagePaper);
    }else if(comprandom === "scissors") {
        displayCChoice.textContent = 'SCISSORS';
        //document.querySelector('#displaycchoice').appendChild(imageScissors);
    } 
    return comprandom;

}


//Decides the winner
function whoWins(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log("Its a tie!");
        draw += 1
        displayWhoWon.textContent = 'Draw! Try Again'

    }else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
              playerSelection === 'paper' && computerSelection === 'rock' ||
              playerSelection === 'scissors' && computerSelection === 'paper') {
                console.log("Player Wins");
                playerScore += 1;
                displayWhoWon.textContent = 'YOU WIN!! You chose ' + playerSelection + ' and ' + ' the computer chose ' + computerSelection; 
                playerPoints.textContent ="Your Score: "+ playerScore;          
     } else {
        console.log("Computer Wins!");
        compScore += 1;
        displayWhoWon.textContent = 'Computer Wins!!"You picked ' + playerSelection + ' and ' + ' the computer picked ' + computerSelection;
        computerPoints.textContent = 'Computer\'s Score: ' + compScore;
        
     }
     console.log(playerScore);
     console.log(compScore);
}

function endGame(){
    
    if(playerScore === 5 || compScore === 5) {
    //alert("game over");
    tie.textContent = 'refresh page to play again';
    //document.querySelector('#displaycchoice').appendChild(tie)
    choices.forEach(button => button.removeEventListener('click', playRound));

}
    //choices.forEach(button => button.addEventListener('click',endGame ));
}
//endGame();







