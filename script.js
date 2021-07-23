'use strict';

let num = parseInt(Math.random() * 20) + 1;
let hS = 0;
let scor = 20;
function displayMessage(messa) {
    document.querySelector('.message').textContent = messa
}
document.querySelector('.check').addEventListener('click', function () {
    let guess = parseInt(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage("Incorrect Input!!!");
    } else if (guess === num) {
        scor--;
        if (scor > hS) {
            hS = scor;
            document.querySelector('.highscore').textContent = scor;
        }
        document.querySelector('.score').textContent = scor;
        document.querySelector('.number').textContent = num;
        displayMessage("Congratulation you are right");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
    } else if (guess !== num) {
        if (scor > 1) {
            scor--
            document.querySelector('.score').textContent = scor
            displayMessage(guess > num ? "Guess to high." : "Guess to low.")
        } else {
            document.querySelector('.number').textContent = num
            displayMessage("You lost the game!")
            scor--
            document.querySelector('.score').textContent = 0
        }
    }
})
document.querySelector('.again').addEventListener('click', function () {
    scor = 20;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.score').textContent = scor;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = ''
    num = parseInt(Math.random() * 20) + 1;
})
