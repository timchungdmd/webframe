function guessNumber() {
    const randomnumber = Math.floor(Math.random() * 10) + 1;

    let number = parseInt(prompt('Guess how many pokemons you must capture to go to the next level?(between 1 and 10) ')
    );
    
    while(number!==randomnumber){
        number = parseInt(prompt('Wrong! Guess again: '));
        }
    if(number===randomnumber){
        alert(`Congratulations! you have to capture ${randomnumber} pokemons`);
        }
       
    }
    guessNumber();


function getPokeball(){
const myImages = document.images;
let randomnumber=parseInt(prompt('How many pokeballs do you need?'));
let text = "";
for (let i = 0; i <randomnumber; i++) {
  console.log('test');
}
document.getElementById("demo").innerHTML = text;
}
getPokeball();