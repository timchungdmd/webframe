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
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
    
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
    }

  