let currentScoreLeft = 0;
let currentScoreRight = 0;

function addOneLeft() {
currentScoreLeft += 1;
let scoreLeft = document.getElementById("score-left");
scoreLeft.innerText = currentScoreLeft;
console.log("Button clicked");
}

function addTwoLeft() {
    currentScoreLeft += 2;
    let scoreLeft = document.getElementById("score-left");
    scoreLeft.innerText = currentScoreLeft;
}

function addThreeLeft() {
   currentScoreLeft = currentScoreLeft + 3;
    let scoreLeft = document.getElementById("score-left");
    scoreLeft.innerText = currentScoreLeft;
}

function addOneRight() {
currentScoreRight += 1;
let scoreLeft = document.getElementById("score-right");
scoreLeft.innerText = currentScoreRight;
console.log("Button clicked");
}

function addTwoRight() {
    currentScoreRight += 2;
    let scoreLeft = document.getElementById("score-right");
    scoreLeft.innerText = currentScoreRight;
}

function addThreeRight() {
    currentScoreRight += 3;
    let scoreLeft = document.getElementById("score-right");
    scoreLeft.innerText = currentScoreRight;
}
