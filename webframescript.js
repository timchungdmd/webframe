function myFunction() {
    let text = "Do you want to change the background of this website?";
    if (confirm(text) == true) {
        color = prompt("Enter the color you want on the Background?(black,white,red,blue,green,pink)");
        function myFunction(){
        document.body.style.backgroundColor = color;
        }
    } else {
      text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
  }

function changecolor() {
    document.body.style.backgroundColor = color;
}    
    