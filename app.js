let userSeq = [];
let gameSeq = [];
let boxes = ['one','two','three','four'];
let playing = false;
let level = 0;
let score = 0;
let h2 = document.querySelector("h2");
let name = 

document.addEventListener("keypress",()=>{
    if(playing == false)
    {
        playing = true;
        levelup();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(()=>(btn.classList.remove("flash")),300);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerHTML = `Level ${level}`;
    
    let rand = Math.floor(Math.random()*4);
    let btn = document.querySelector(`.${boxes[rand]}`);
    console.log(gameSeq);
 
    flash(btn);
    gameSeq.push(boxes[rand]);
    console.log(gameSeq);
}

function btnpress(){
    let btn = this;
    flash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function checkans(index){
    
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length===level){
            score++;
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game over <br> <b>Your Score<b> ${score}`;
        let body = document.querySelector('body');
        body.classList.add('wrong');
        setTimeout(()=>(body.classList.remove('wrong')),250);
        
        reset();
    }
}

function reset(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    playing = false;
}