function getPokeball(){
    
    let randomnumber=parseInt(prompt('How many pokeballs do you need?'));
    let text = "";
    if (isNaN(randomnumber)){
        parseInt(prompt('You can only type a number, how many pokeballs do you need'));
    }else if(randomnumber>10){
        parseInt(prompt('You can\'t have more than 10 pokeballs. How many pokeballs do you need'));
    }
    else if(typeof randomnumber=='number' && randomnumber<=10){
        
        
        let parent    = document.getElementsByClassName('container-fluid');
        imagePath = 'pokeball.png';
        img;
    
        for (let i = 1; i <= randomnumber+1; i++) {
        console.log(i);
        img = new Image();
        img.src = imagePath;
        parent.appendChild(img);
        }
    
    }
          //let img=document.write('<img  src="pokeball.png" width=30%; height=30%;margin: 1px;" />');
          //let image= "img  src=\"pokeball.png\" width=15%; height=15%" 
          //document.getElementsByClassName("pokeball").innerHTML = img
    }
    //document.getElementById("pokeball").innerHTML = "Hello World!";

