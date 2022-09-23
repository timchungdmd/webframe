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






//function getPokeball() {
  //  var src = "pokebball.png";
  //  for(i=0; i<randomnumbergenerator; i++){
   // show_image("pokeball.png", 276,110, "pokeball");}

//getPokeball();
//function showpokeball(){
 //   let img = document.createElement("img");
  //      img.src = 'pokeball.png';
   //     img.width = width;
    //    img.height = height;
     //   img.randomnumbergenerator = randomnumbergenerator;
      //  document.body.appendChild(img);

}