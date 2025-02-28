import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateSandwhich()
};
const generateSandwhich = () => {
  let bread = ["White", "Wheat", "Rye", "Whole Grain", "Oat"];
  let butter = ["Peanut Butter", "Almond Butter", "Nutella", "Cashew Butter", "Garlic Butter"];
  let jelly = ["Grape", "Strawberry", "Apple", "Mixed Berry", "Honey"];

  //               round down. random # 0-1     * decimal by length of array to get whole number
  let breadIndex = Math.floor(Math.random() * bread.length)
  let butterIndex = Math.floor(Math.random() * butter.length)
  let jellyIndex = Math.floor(Math.random() * jelly.length)

  //                getting the item of an array at the random index
  let randomBread = bread[breadIndex];
  let randomButter = butter[butterIndex];
  let randomJelly = jelly[jellyIndex];

  // let get the html elments and add these items to it
  document.querySelector(".top").innerHTML = randomBread;
  document.querySelector(".butter").innerHTML = randomButter;
  document.querySelector(".jelly").innerHTML = randomJelly;
  document.querySelector(".bottom").innerHTML = randomBread;
}
