let name = window.prompt('Enter Name');
let score = 0;
let p=0;
let c=0;
function choice(Player){
    let choices = ['rock' , 'scissor' , 'paper'];
    let computer = choices[Math.floor(Math.random()*3)];
    if(Player === computer){
        alert(`It's a tie , Computer has also choosen same`);
    }
    else if(Player==='rock' && computer==='scissor' 
        ||Player==='paper' && computer==='rock' 
        ||Player==='scissor' && computer==='paper' 
    ){
        score++;
        document.querySelector('#score').innerText = `Score : ${score}`;
        p++;
        document.querySelector('#P1').innerText = `${name} : ${p}`;
        alert(`You Won, Your Choice is ${Player} and Computer Choice is ${computer}`);
    }else{
        c++;
        document.querySelector('#P2').innerText=`Computer :  ${c} `;
        alert(`You Lose, Your Choice is ${Player} and Computer Choice is ${computer}`);

    }
}