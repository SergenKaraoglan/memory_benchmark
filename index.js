const display = document.getElementById('display');
const inputButton = document.getElementById('inputButton'); 
const answerInput = document.getElementById('answerInput');
const score = document.getElementById('score');
const highScore = document.getElementById('highScore');

let answer = null;
let level = 1;
let start = false;
let timer = null;

function main(){
    if (!start){
        start = true;
        generate();
        inputButton.value = 'Submit';
    }
    else{
        if (!timer){
            checkAnswer();
        }
    }
}

function generate(){
    answerInput.style.visibility = 'hidden';
    answer = Math.round(Math.random() * 10**level);
    display.innerText = answer;
    timer = setTimeout(displayOff, 3000);
}

function displayOff(){
    timer = null;
    display.innerText = '';
    answerInput.style.visibility = 'visible';
}

function checkAnswer(){
    if (answerInput.value == answer){
        score.innerText = level;
        level++;
        generate();
    }
    else{
        reset();
    }
}

function reset(){
    highScore.innerText = Math.max(parseInt(highScore.innerText), parseInt(score.innerText));
    level = 1;
    start = false;
    inputButton.value = "Start";
    score.innerText = 0;
}

answerInput.addEventListener("keyup", function(event) {
    if (event.key == "Enter"){
        main();
    }
});