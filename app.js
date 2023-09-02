//js file for my Rock Paper Scissors Project//

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById ("user-score");
const computerScore_span = document.getElementById ("computer-score");
const scoreBoard_div = document.querySelector (".score-board");
const result_div = document.querySelector (".result");
const rock_div = document.getElementById ("rock");
const paper_div = document.getElementById ("paper");
const scissors_div = document.getElementById ("scissors");

function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function lose() {
    console.log("USER LOST");
}

function draw() {
    console.log("DRAW");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
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