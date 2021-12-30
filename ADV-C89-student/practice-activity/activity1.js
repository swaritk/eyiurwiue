score = 0;

function updateScore(){
    score = score + 1;
    document.getElementById("score").innerHTML = "SCORE : " + score;
    console.log("+ 1 point");
} 

function saveScore() {
    localStorage.setItem("score", score);
}

function nextPage() {
    window.location = "activity_2.html";
    
}

function back() {
   window.location = "activity_1.html";
}

function getScore() {
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1> Score: " + score + "</h1>";
}
