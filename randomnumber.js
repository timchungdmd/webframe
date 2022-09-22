function guessNumber() {
    const randomnumbergenerator = Math.floor(Math.random() * 10) + 1;

    let number = parseInt(prompt('Guess how many pokemons you must capture to go to the next level?(between 1 and 10) '));
    
    while(number!==randomnumbergenerator){
        number = parseInt(prompt('Wrong! Guess again: '));
        }
    if(number===randomnumbergenerator){
        alert(`Congratulations! you have to capture ${randomnumbergenerator} pokemons`);
        }
       
    }

guessNumber();

function getPokeball(){
    let img = document.createElement("img");
        img.src = 'pokeball.png';
        img.width = '50%';
        img.height = '50%';
        img.randomnumbergenerator = randomnumbergenerator;;
    
    for (i=0; i<randomnumbergenerator;i++){
        document.body.appendChild(img);
}
}
getPokeball();
  