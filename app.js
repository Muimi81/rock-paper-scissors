//js file for my Rock Paper Scissors Project//

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById ("user-score");
const computerScore_span = document.getElementById ("computer-score");
const scoreBoard_div = document.querySelector (".score-board");
const result_div = document.querySelector (".result");
const rock_div = document.getElementById ("rock");
const paper_div = documnt.getElementById ("paper");
const scissors_div = document.getElementById ("scissors");

function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rock paper":
        case "paper rock":
        case "scissors paper":
            console.log("USER WINS.");
            break;

        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            console.log ("USER LOSES.");
            break;
        
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
            console.log ("IT'S A DRAW!");
            break;
    }
}

function main () {
    rock_div.addEventListener ('click', function() {
        game ("rock");
    })
    
    paper_div.addEventListener ('click', function() {
        game ("paper");
    })
    
    scissors_div.addEventListener ('click', function() {
        game ("scissors");
    })
}

main ();