let gameSeq = [];
let userSeq = []; // Fixed: Capital 'S' to match the rest of the code
let btns = ["BOX1", "BOX2", "BOX3", "BOX4"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(event) {
    if (start == false) {
        start = true;
        console.log("GAME STARTED");
        nextLevel();
    }
});

function nextLevel() {
    userSeq = [];
    level++;
    h2.innerText = `LEVEL ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    
    gameSeq.push(randomColor);
    btnFlash(randomBtn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(nextLevel, 800);
        }
    } else {
        
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>. <br> Press any key to restart.`;
        
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "";
        }, 150);
        
        resetGame();
    }
}

function btnPress() {
    if (!start) return;

    let btn = this;
    userFlash(btn);

    let userColor = btn.classList[0];
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll("div[type='BUTTON']");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function resetGame() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
   


