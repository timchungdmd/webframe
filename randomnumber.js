function guessNumber() {
    const randomnumbergenerator = Math.floor(Math.random() * 10) + 1;
    let number = parseInt(prompt('Pick a number between 1 and 10. You only get 5 chances: '));
    console.log(number);
    i=0
    for (i=0;i<6;i++)    
        if(number!==randomnumbergenerator){
        number = parseInt(prompt('Wrong number, pick another number between 1 and 10: '));
        }
        else if(number===randomnumbergenerator){
        alert('Congratulations! You guessed the correct number.');
        }
    alert('You used all your chances. Please try again later');    
    }
   
  
  
guessNumber();