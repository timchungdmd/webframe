function guessNumber() {
    const randomnumber = Math.floor(Math.random() * 10) + 1;

    let number = parseInt(prompt('Guess how many pokemons you must capture to go to the next level?(between 1 and 10) ')
    );
    
    while(number!==randomnumber){
        number = parseInt(prompt('Wrong! Guess again: '));
        }
    if(number===randomnumber){
        alert(`Congratulations! You need to capture ${randomnumber} pokemons`);
        }
       
    }
    guessNumber();


