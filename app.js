let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const resetBtn=document.querySelector("#btn");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame=(userChoice)=>{
    console.log("User choice=",userChoice); 
    const compChoice=genCompChoice();
    console.log("Computer choice=",compChoice);

    if(compChoice===userChoice){
        draw(userChoice);
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissor" ? false : true;
        }
        else{//user "scissors"
            //comp rock paper
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
}

const draw=(userChoice)=>{
    console.log("Game was Draw");
    msg.innerText=`Draw! Both Chose ${userChoice}`;
    msg.style.backgroundColor="#723d46"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        console.log("You Win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#4F7942";
    }
    else{
        console.log("Comp win");
        compScore++;
        compScorePara.innerText=compScore; 
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="#D2042D";
    }
}

const resetGame=()=>{
    userScore=0;
    compScore=0;
    userScorePara.innerText=userScore;
    compScorePara.innerHTML=compScore;
    msg.innerText="Game Reset";
    msg.style.backgroundColor="white";
    msg.style.color="black";
    msg.style.border="2px solid black";
}
resetBtn.addEventListener("click",resetGame);