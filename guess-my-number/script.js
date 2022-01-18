'use strict';

//-querySelector
// console.log(document.querySelector('.message').textContent = 'Correct Number!');

// document.querySelector('.message').textContent = '🎉 Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//-eventListner

//Will generate random number from 1 to 20
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

let highscore = 0;

//on click -> check button
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input 
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No Number!';
    
    //when player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };

    //when guess is too high     
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =  '📈 Too...High!';
            score--;
            document.querySelector('.score').textContent = score;
            
        }else{
            document.querySelector('.message').textContent = '👎 You lost the Game!';
            document.querySelector('.score').textContent = 0;
        };
      //when guess is too low   
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =  '📉 Too...Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '👎 You lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

//on click -> Again button

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    let secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = '🚀 Start guessing...';
    document.querySelector('.score').textContent = score;
    
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});











