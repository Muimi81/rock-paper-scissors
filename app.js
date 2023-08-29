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

rock_div.addEventListener ('click', function() {
    console.log("Hey, you clicked on rock");
})

paper_div.addEventListener ('click', function() {
    console.log ("Hey, you cliked on paper");
})

scissors_div.addEventListener ('click', function() {
    console.log ("Hey, you clicked on scissors");
})