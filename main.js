const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let last;
let score=0;
let timeUp=false;

function randomTime(min,max){
    return Math.round(Math.random()*(max-min) + min)  
}

function randomHole(holes){
    const i = Math.floor(Math.random() * holes.length)
    let current = holes[i] 
    //current.classList.add(up)
    if(current == last){
        return randomHole(holes)
    }
    last = current
    return current
}

function play(timer = 10000){
    score = 0;
    scoreBoard.textContent = score;
    timeUp = false;
    peek();
    setTimeout(()=>{
        timeUp = true;
    },timer) 
     
}

function peek(){
    const time = randomTime(300,1000)
    const hole = randomHole(holes)
    //return hole;
    hole.classList.add('up')
    setTimeout(()=>{
        hole.classList.remove('up')
        if (!timeUp) { peek() }
    },time)
    
}

function scoreKeeper(){
    if (!event.isTrusted) {return 'cheater';}
    this.classList.remove('up')  
    score += 1
    scoreBoard.textContent = score;
    
}

moles.forEach((mole)=>{
    mole.addEventListener('click',scoreKeeper)
})




