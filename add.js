let gameseqn=[];
let userseqn=[];
let btncolor=["red","green","yellow","purple"];

let level=0;
let started=false;

let h3=document.querySelector("h3");
let h4=document.querySelector("h4");
h4.innerText=`Heighest Score: ${level}`;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started");
        started=true;
        levelUp();
    }
})

function levelUp(){
    userseqn=[];
    level++;
    h3.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btncolor[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    btnFlash(randbtn);
    gameseqn.push(randcolor);
    // console.log("game sequence:",gameseqn);
    
}

function checkAns(idx){
    
    if(gameseqn[idx]===userseqn[idx]){
        if(gameseqn.length==userseqn.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML=`Game over! Your score : <b>${level}</b> </br>Press any key to start again`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        },150);
        // console.log("game sequence:",gameseqn);
        h4.innerText=`Heighest Score: ${level}`;
        reset();
        

    }
}

function btnFlash(radnbtn){
    radnbtn.classList.add("flash");
    setTimeout(function(){
        radnbtn.classList.remove("flash");
    },250);
}

function btnclick(){
    btnFlash(this);
    usercolor=this.getAttribute("id");
    userseqn.push(usercolor);
    //console.log("user sequence:",userseqn);
    checkAns(userseqn.length-1);
}

let allbtn= document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",btnclick);
}
function reset(){
    started=false;
    level=0;
    gameseqn=[];
    userseqn=[];
}

