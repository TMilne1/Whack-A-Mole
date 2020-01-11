const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let last;

let score=0;

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

function play(){
    score = 0;

}

function peek(){
    const time = randomTime(2000,10000)
    const hole = randomHole(holes)
    //return hole;
    hole.classList.add('up')

    setInterval(()=>{
        hole.classList.remove('up')
        
    },time)
}

moles.forEach((mole)=>{
    mole.addEventListener('click',()=>score+=1)
})




