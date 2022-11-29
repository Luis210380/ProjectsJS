//const prompt = require('prompt-sync')(); // to obtain info from the console terminal

//function changeColor(){
  informColor = () =>{
    let red = document.getElementById("Red").value;
    let green = document.getElementById("Green").value;
    let blue = document.getElementById("Blue").value;
    changeColor(red,green,blue);
  }
  changeColor = (red,green,blue) =>{
 //let red = String(Math.random() * 255);
 //let green = String(Math.random() * 255);
 //let blue = String(Math.random() * 255);
 newColor = `rgb(${red},${green},${blue})`;
 document.getElementById("btn0").style.backgroundColor = newColor;
 alert("the RGB color is: " + newColor);
 
 red = Number(red);
 green = Number(green);
 blue = Number(blue);
  //alert("the red color is: " + Red + " the green color is: " + Green + " the blue color is: " + Blue);
  if(red >= green && red >= blue){
    document.getElementById("newColor").innerText = "Red";
    document.getElementById("btn0").textContent = "Red";
  }else if(green >= red && green >= blue){
    document.getElementById("newColor").innerText = "Green";
    document.getElementById("btn0").textContent = "Green";
  }else if(blue >= red && blue >= green){
    document.getElementById("newColor").innerText = "Blue";
    document.getElementById("btn0").textContent = "Blue";
  }
}

  class Animal{
    constructor(nombre,edad){
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  class Mascota extends Animal{
    constructor(nombre,edad,genero){
      super(nombre,edad);
      this.genero = genero;
    }
    hablar(id){
      document.getElementById(id).textContent = `Hola soy ${this.nombre}, soy ${this.genero} y tengo ${this.edad} años`;
    }
  }
  function claffMascota(){

    nombre1 = (document.getElementById("nameMascota1").value || "Michi");
    edad1 = (document.getElementById("ageMascota1").value || '3');
    genero1 = (document.getElementById("genre1").value || "Macho");
    nombre2 = (document.getElementById("nameMascota2").value || "Miah");
    edad2 = (document.getElementById("ageMascota2").value || '7');
    genero2 = (document.getElementById("genre2").value || "Hembra");
    const pio = new Mascota(nombre1,edad1,genero1);
    const mara = new Mascota(nombre2,edad2,genero2);
    console.log(pio);
    pio.hablar("saludo1");
    mara.hablar("saludo2");
    let fecha = new Date();
    const meses = ['yan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    document.getElementById("hora").textContent = `${fecha.getFullYear()},${meses[fecha.getMonth()]},${fecha.getDay()}`;
    document.getElementById("sumaEdades").textContent = `${Math.pow(edad1,2)}`;
    let pruebaEdad = "Se espera que Pio sea mayor que Mara";
    console.assert(edad1>edad2,{edad1,edad2,pruebaEdad}); 
}
