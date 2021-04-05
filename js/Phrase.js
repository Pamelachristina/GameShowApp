/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

'use strict';

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        
    }


    /**
    * Display phrase on game board
    */

   addPhraseToDisplay() {
        //select element needed 
        const list = document.querySelector('#phrase ul');
        //variable to hold phrase
        let phrase = this.phrase.split('');

        //loop through the letters of the phrase
        phrase.forEach(selectedLetter => {
            let listElement = document.createElement('li');
            list.appendChild(listElement);
            listElement.innerHTML = selectedLetter;

            if (selectedLetter !== ' '){
                listElement.className = `hide letter ${selectedLetter}`;

            }else {
                listElement.className = 'space';
            }
        });
       /*  for (let i = 0; i < phrase.length; i++){
            let li = document.createElement('li');

            if (phrase[i] === ''){  
                list.appendChild(li)
                li.className = 'space';

            } else {
                list.appendChild(li)
                li.className = `hide letter ${phrase[i]}`;

            }
        } */


   }

   /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    * @returns boolean 
    */
   checkLetter(letter) {
    if (this.phrase.includes(letter)) {
        return true;
    } else {
        return false;
    }

   }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const match = document.querySelectorAll('.phrase, li');
        for (let i = 0; i < match.length; i++) {
           if (match[i].innerHTML === letter){
               match[i].className = 'show';
           }

        }
           
        
    }




}