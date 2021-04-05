/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

'use strict';

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null; 
        
     }

    
     
     /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const quotes = [ 'Black Lives Matter',
                          'Stop Asian Hate',
                          'Love is Love',
                          'White silence is violence',
                          'No human is Illegal']

        const phrases = quotes.map(quote => new Phrase(quote), []);
        return phrases
                         
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let number = Math.floor(Math.random() * Math.floor(this.phrases.length));
        return this.phrases[number];


    }
    /**
    * Begins game by selecting a random phrase and displaying it to user
    * The `startGame()` method hides the start screen overlay (the `div` element with an `id` of
    `overlay`), calls the `getRandomPhrase()` method to select a Phrase object from the Game
    object’s array of phrases, and then adds the phrase to the gameboard by calling the
    `addPhraseToDisplay()` method (which is a method on the Phrase class) on the selected Phrase
    object. The selected phrase should be stored in the Game’s `activePhrase` property, so it can be
    easily accessed throughout the game.
    */
    startGame() {
        //hides the start screen overlay
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const checkLetters = document.getElementsByClassName('hide');
        return checkLetters.length === 0;

    }


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
        removeLife(){ 
        let heartImg = document.querySelectorAll('#scoreboard img');
        heartImg[this.missed].src="images/lostHeart.png";
        this.missed += 1;
       

        if (this.missed >= 5){
           this.gameOver();
        
    } 
  }



    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
     gameOver(gameWon){
            let message = document.querySelector('#game-over-message');
            let resetButton = document.querySelector('#btn__reset');
            let overlay = document.querySelector('#overlay');
            overlay.style.display='';
            if (this.missed <5 ){
                message.innerText= "You Win!";
                resetButton.innerText= "Play Again";
                overlay.className='win';//change the background color
            } else{
                //player lose
                message.innerText="You Lose! Better luck next time.";
                resetButton.innerText= "Try Again";
                overlay.className='lose';
            }
            this.resetGame();
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
   handleInteraction(button){
    button.disabled = true;
    const clickedLetter = button.textContent;
    const match = this.activePhrase.checkLetter(clickedLetter);
    //check captured letter against active phrase for matches
    if(!match){
        button.classList.add('wrong');
        this.removeLife();
    } 
  }


    resetGame(){
        //reset the missed guess of user back to 0
        this.missed = 0;
        // reset all buttons that are disabled
        let disabledButton = document.querySelectorAll('#qwerty button[disabled]');
        for (let i = 0; i < disabledButton.length; i++){
            disabledButton[i].disabled = false;
            disabledButton[i].className = 'key';
        }
        // next, reset all lives
        document.querySelectorAll('#scoreboard img').forEach(item => {item.src = "images/liveHeart.png"});
    }

}

    

