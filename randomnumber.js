function guessNumber() {
    const randomnumbergenerator = Math.floor(Math.random() * 10) + 1;
    let number = prompt('Pick a number between 1 and 10\(type quit if you don\'t want to play the game\): ');

    while(parseInt(number)!==randomnumbergenerator){
        if(number.toLowerCase()==='quit'){
        alert('Goodbye! Try again later');
        }
        
        else{number=prompt('Wrong number, pick another number between 1 and 10: ');
        }}
    alert('Congratulations! You guessed the correct number.');
         
    }
    
