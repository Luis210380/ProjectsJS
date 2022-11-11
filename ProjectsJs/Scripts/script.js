//const prompt = require('prompt-sync')(); // to obtain info from the console terminal

function changeColor(){
 red = String(Math.random() * 255);
 green = String(Math.random() * 255);
 blue = String(Math.random() * 255);
 newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 document.getElementById("btn1").style.backgroundColor = newColor;
  
 var elementBtn = document.getElementById("btn1");
 var styleBtn = getComputedStyle(elementBtn);
 var color = styleBtn.backgroundColor;
var subColor = color.substring(4, color.length-1);
alert("The RGB Color is: " + color);

  for (i=0; i<subColor.length-1; i++){
    if(subColor[i] == ','){
      var Red = subColor.substring(0, i);
      break;
    }
  }
  for (j=Red.length+1; j<subColor.length-1; j++){
    if(subColor[j] == ','){
      var Green = subColor.substring(Red.length+2, j);
      var Blue = subColor.substring(j+1, subColor.length);
      break;
    }
  }
  Red = Number(Red);
  Green = Number(Green);
  Blue = Number(Blue);
  //alert("the red color is: " + Red + " the green color is: " + Green + " the blue color is: " + Blue);
  if(Red >= Green && Red >= Blue){
    document.getElementById("newColor").innerText = "Red";
    document.getElementById("btn1").textContent = "Red";
  }else if(Green >= Red && Green >= Blue){
    document.getElementById("newColor").innerText = "Green";
    document.getElementById("btn1").textContent = "Green";
  }else if(Blue >= Red && Blue >= Green){
    document.getElementById("newColor").innerText = "Blue";
    document.getElementById("btn1").textContent = "Blue";
  }
}
