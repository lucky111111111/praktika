const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelectorAll('.score');
const moles = document.querySelectorAll('.mole');

function randomtime(min, max) {
    return Math.round(Math.random()* (max-min)+min);
}

let lastHole;
let timeUp = false;
let score = 0;



function randomHole(holes) {
    const idx = Math.floor(Math.random()*holes.length)
    // const idx = Math.floor(1.12)
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomtime(1000,4000);
    const hole = randomHole(holes);
    
    hole.classList.add('up')
    setTimeout (() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
}, time);
}

function startGame() {
    score = 0;
    scoreBoard[0].textContent = score;
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, 100000)
}

function bonk(e) {
    // console.dir(    this.parentNode.classList.remove('up')    )
    // console.log ('bonk')

    // if(!e.istrusted) {
    //     console.log ('test')
    //     return;
    // } 
    // console.log (score)
    // score++;
    // this.parentNode.classList.remove('up');
    console.log(score)
    // console.log(scoreBoard)
    score++;
    scoreBoard[0].textContent = score;  
    console.log(this.parentNode.classList.remove('up'))  
}

moles.forEach(mole => mole.addEventListener('click', bonk));