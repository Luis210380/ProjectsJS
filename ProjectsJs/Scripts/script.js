//const prompt = require('prompt-sync')(); // to obtain info from the console terminal

function changeColor(){
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
  alert("the red color is: " + Red + " the green color is: " + Green + " the blue color is: " + Blue);
  if(Red >= Green && Red >= Blue){
    alert("The color is RED");
  }else if(Green >= Red && Green >= Blue){
    alert("The color is GREEN");
  }else if(Blue >= Red && Blue >= Green){
    alert("The color is BLUE");
  }
  red = String(Math.random() * 255);
  green = String(Math.random() * 255);
  blue = String(Math.random() * 255);

  document.getElementById("btn1").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}
