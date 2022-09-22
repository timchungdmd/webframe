function guessNumber() {
    const randomnumbergenerator = Math.floor(Math.random() * 10) + 1;

    let number = parseInt(prompt('Pick a number between 1 and 10: '));
    
    while(true){
        if(number===randomnumbergenerator){
        alert('Congratulations! You guessed the correct number.');
        } 
        if(number!==randomnumbergenerator){
        number = parseInt(prompt('Wrong number, pick another number between 1 and 10: '));
        
        }
       
    }
}  

  
