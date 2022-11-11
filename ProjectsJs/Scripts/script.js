//const prompt = require('prompt-sync')(); // to obtain info from the console terminal

function changeColor(){
 var red = String(Math.random() * 255);
 var green = String(Math.random() * 255);
 var blue = String(Math.random() * 255);
 newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 document.getElementById("btn1").style.backgroundColor = newColor;
 alert("the RGB color is: " + newColor);
 
 red = Number(red);
 green = Number(green);
 blue = Number(blue);
  //alert("the red color is: " + Red + " the green color is: " + Green + " the blue color is: " + Blue);
  if(red >= green && red >= blue){
    document.getElementById("newColor").innerText = "Red";
    document.getElementById("btn1").textContent = "Red";
  }else if(green >= red && green >= blue){
    document.getElementById("newColor").innerText = "Green";
    document.getElementById("btn1").textContent = "Green";
  }else if(blue >= red && blue >= green){
    document.getElementById("newColor").innerText = "Blue";
    document.getElementById("btn1").textContent = "Blue";
  }
}
