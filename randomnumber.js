function guessNumber() {
    const randomnumbergenerator = Math.floor(Math.random() * 10) + 1;
    let number = parseInt(prompt('Pick a number between 1 and 10. You only get 5 chances: '));
    
    while(number!==randomnumbergenerator){
        number = parseInt(prompt('Wrong number, pick another number between 1 and 10: '));
        }
    if(number===randomnumbergenerator){
        alert('Congratulations! You guessed the correct number.');
        }   
    }
   
guessNumber();