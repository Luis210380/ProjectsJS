const calculate = () =>{
let info =  document.getElementById("info").value.concat(' '); 
let pattern =  document.getElementById("pattern").value; 
let split = document.getElementById("split").value;
let numRepeat = document.getElementById("repeat").value;
let expReg = RegExp(pattern, "ig");
let infoMatch = (info.match(expReg)||'');
let coincidences = infoMatch.length;
let arrayInfo = info.split("");
let arrayPattern = pattern.split("");
let index = [];
let test = 0;
let characters;
let newExpr, repExpr;

for (let i = 0; i < arrayInfo.length; i++) {
  for(let j = 0; j < arrayPattern.length; j++){
    let z = i+j;
    if(arrayInfo[z] === arrayPattern[j]){
       test++;
       console.log(test);
    }else{
      test = 0;
    }
    if(test === arrayPattern.length){
      index[i] = i;
      test = 0;
    }
  }
}
filterIndex = index.filter(Element => Element !== "");
characters = info.length;
newExpr = info.slice(0,split);
words = info.split(" ");
repExpr = info.repeat(numRepeat);
document.getElementById("sameWords").textContent = coincidences;
document.getElementById("sameIndex").textContent = filterIndex;
document.getElementById("numberCharacteres").textContent = characters;
document.getElementById("newExpression").textContent = newExpr;
document.getElementById("words").textContent = words;
document.getElementById("repExp").textContent = `${repExpr}`;
}