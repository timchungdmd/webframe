function getPokeball(){
    
    let randomnumber=parseInt(prompt('How many pokeballs do you need?'));
    let text = "";
    if (isNaN(randomnumber)){
        parseInt(prompt('You can only type a number, how many pokeballs do you need'));
    }else if(randomnumber>10){
        parseInt(prompt('You can\'t have more than 10 pokeballs. How many pokeballs do you need'));
    }
    else if(typeof randomnumber=='number' && randomnumber<=10){
          let pokeballs=document.getElementById("pokeball").innerHTML = "Hello World!";
          
        }
   
    }
    //document.getElementById("pokeball").innerHTML = "Hello World!";

getPokeball();