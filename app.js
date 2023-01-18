"use strict";
// A string with Random letters
// create an object where each letter is connected to picture and they show randomly
// const display = document.getElementById("displayLetters");
// GET THE DATA
// const funcLocalData = (cards) => {
//

//   cards.map((c) => {
//     cardsData.push({
//       level1: c,
//       level2: c,
//     });
//   });
//   console.log(cardsData);
//   JSON.stringify(cardsData);
// };

// document.getElementById("level-1").onclick = function () {
//   alert("button was clicked");
let itemsData = [];
let itemsData2 = [];
function showRandomLetter() {
  fetch(`./learningData.json`)
    .then((res) => res.json())
    .then((data) => {
      // convert to na Arrey

      // map tru arrey acessing the index and
      for (let i = 0; i < data.level1.length; i++) {
        let result =
          data.level1[Math.floor(Math.random() * data.level1.length)];
        document.getElementById(
          "random-div"
        ).innerHTML = `<div class="letterCard">
            <img
              src="${result.image}"
              alt="${result.title}"
            />
            <div class="letterCardDetails">
     <h2>${result.title}</h2>
     <h1>${result.letter}</h1>
  </div>
  <p>Кликни на бутона за да научиш буквите.</p>
 </div>`;

        // let item2 = itemsData[1];
        // let result1 = item2[Math.floor(Math.random() * itemsData[1].length)];
        // console.log(result, result1);
      }
    });
}
document.getElementById("level-1").addEventListener("click", showRandomLetter);

// the level2
const level2 = ["ан", "ен", "на", "не", "Ана", "Ани", "Нена"];

const level2Func = () => {
  document.querySelector(".letterCard").style.display = "none";
  for (let i = 0; i < level2.length; i++) {
    let result2 = level2[Math.floor(Math.random() * level2.length)];

    document.getElementById("second-randomDiv").innerHTML = `<div>
    <div class="letterCard">
            <img
              src="https://images.unsplash.com/photo-1526634332515-d56c5fd16991?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="reading"
            />
     
      <h1 id='colored'>Готов ли си да четеш?</h1>
      <h1>${result2}</h1>
    </div>`;
    // for (let i = 0; i < level2.length; i++) {
    //   result2 = level2[i][Math.floor(Math.random() * level2.length)];
    // }
  }
};
document.getElementById("level-2").addEventListener("click", level2Func);
