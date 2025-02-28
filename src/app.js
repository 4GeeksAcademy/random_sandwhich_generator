import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#sandwhichBtn").addEventListener("click", generateSandwhich)
};
const generateSandwhich = () => {
  const jellyDiv = document.querySelector(".jelly")
  let bread = ["White", "Wheat", "Rye", "Whole Grain", "Oat"];
  let butter = ["Peanut Butter", "Almond Butter", "Nutella", "Cashew Butter", "Garlic Butter"];
  let jelly = ["Grape", "Strawberry", "Apple", "Mixed Berry", "Honey"];

  let randomBread = bread[Math.floor(Math.random() * bread.length)]
  let randomButter = butter[Math.floor(Math.random() * butter.length)];
  let randomJelly = jelly[Math.floor(Math.random() * jelly.length)];

  if(randomJelly == 'Grape') {
    jellyDiv.style.color = "purple"
  }
  else if(randomJelly == 'Strawberry'){
    jellyDiv.style.color = "pink"
  }
  else if(randomJelly == 'Apple'){
    jellyDiv.style.color = "red"
  }
  else if(randomJelly == 'Mixed Berry'){
    jellyDiv.style.color = "maroon"
  }
  else if(randomJelly == 'Honey'){
    jellyDiv.style.color = "gold"
  }
  else {
    jellyDiv.style.color = "black"
  }
  //               round down. random # 0-1     * decimal by length of array to get whole number
  document.querySelector(".top").innerHTML = randomBread;
  document.querySelector(".butter").innerHTML = randomButter;
  jellyDiv.innerHTML = randomJelly;
  document.querySelector(".bottom").innerHTML = randomBread;
}
