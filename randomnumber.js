function guessNumber() {
    const randomnumbergenerator = Math.floor(Math.random() * 10) + 1;

    let number = parseInt(prompt('Pick a number between 1 and 10: '));
    
    while(number!==randomnumbergenerator){
        number = parseInt(prompt('Wrong number, pick another number between 1 and 10: '));
        }
    if(number===randomnumbergenerator){
        alert(`Congratulations! you have to capture ${randomnumbergenerator} pokemons`);
        }
       
    }
const images = 'pokeball.jpeg';

for (let x = 0; x < randomnumbergenerator; x++) {
                        
        const element = '<img src="' + images + '">'
        document.querySelector('.images').innerHTML += element;


}