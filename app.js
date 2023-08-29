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
    console.log(Math.random()*3);
}

getComputerChoice();

function game(userChoice) {

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