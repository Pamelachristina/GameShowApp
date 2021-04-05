/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

'use strict';

let game = '';
const startButton = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const keyBoard = document.querySelector('#qwerty');
const qwertyButtons = document.querySelectorAll('#qwerty button');


startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
keyBoard.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
    }
})




