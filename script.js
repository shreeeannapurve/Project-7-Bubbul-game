let timer = 60;
let score = 0;
let hitrn = 0;

function makeBubble(){
    let clutter = "";
let pbottum = document.querySelector("#pbtm");

for(let i=1; i<=132; i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
pbottum.innerHTML=clutter;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function runTimer(){

    let timerint = setInterval(function(){
        if(timer > 0){
            timer -- ;
            document.querySelector('#timerval').textContent=timer;
            
        }else{
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = `<h1> Game Over </h1>`;
        }
    },1000)
}

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent=score;

}

document.querySelector('#pbtm').addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    
    
})

runTimer();
getNewHit();
makeBubble();