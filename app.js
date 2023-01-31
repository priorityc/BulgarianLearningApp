"use strict";
// A string with Random letters
// create an object where each letter is connected to picture and they show randomly
// const display = document.getElementById("displayLetters");
// GET THE DATA

const levelOne = document.getElementById("level-1");
const levelTwo = document.getElementById("level-2");
const randomDiv = document.querySelector(".random-div");
const secondrandomDiv = document.querySelector(".second-randomDiv");
const card = document.querySelector(".Card1");
const randomLBTN = document.querySelector(".random-letter-Btn");
const randomlBTN2 = document.querySelector(".random-letter-Btn2");
const randomlBTN3 = document.querySelector(".random-letter-Btn3");
const randomDivBTN = document.querySelector(".startBtn");
const h1letters = document.querySelector(".letters");
const h2letters = document.querySelector(".letters2");
const l1Img = document.querySelector(".level1img");
const l2Img = document.querySelector(".level2img");
const l1Letter = document.querySelector(".letter2");
const letterCard = document.querySelector(".Card2");
const testCard = document.querySelector(".Card3");
const testBTN = document.getElementById("test");
const testP = document.querySelector(".letter");
const testL = document.querySelector(".testLetter");
const testT = document.querySelector(".testTitle");

// call the functions at the same btn

let itemsData = [];
let itemsData2 = [];

// toggle betean divs
const showInitialDiv = () => {
  if (card.style.display === "none") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
};
levelOne.addEventListener("click", showInitialDiv);

const showInitialDiv2 = () => {
  if (letterCard.style.display === "none") {
    letterCard.style.display = "block";
  } else {
    letterCard.style.display = "none";
  }
};
levelTwo.addEventListener("click", showInitialDiv2);

const showInitialDiv3 = () => {
  if (testCard.style.display === "none") {
    testCard.style.display = "block";
  } else {
    testCard.style.display = "none";
  }
};
testBTN.addEventListener("click", showInitialDiv3);

function showRandomLetter() {
  fetch(`./learningData.json`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.level1.length; i++) {
        let result =
          data.level1[Math.floor(Math.random() * data.level1.length)];
        console.log(result);
        l1Img.src = `${result.image}`;
        l1Img.alt = `${result.title}`;
        h1letters.innerHTML = `${result.title}`;
        l1Letter.innerHTML = `${result.letter}`;
        letterCard.style.display === "none";
      }
    });
}
randomLBTN.addEventListener("click", showRandomLetter);

// // function toggle() {

// // }

// // the level2
const level2 = [
  "ан",
  "ен",
  "на",
  "не",
  "но",
  "Ана",
  "Ани",
  "Нена",
  "Баба",
  "Емо",
  "Мое",
  "има",
  "ние",
  "мие",
];

const level2Func = () => {
  for (let i = 0; i < level2.length; i++) {
    let result2 = level2[Math.floor(Math.random() * level2.length)];
    console.log(result2);
    l2Img.src =
      "https://images.unsplash.com/photo-1584270845190-c371857dc5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIxfHxraWRzJTIwcmVhZGluZyUyMGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

    l2Img.alt = "reading books";
    h2letters.innerHTML = "Четене";
    l1Letter.innerHTML = `${result2}`;
    card.style.display === "none";
  }
};
randomlBTN2.addEventListener("click", level2Func);
// test level1
function guesLetter() {
  fetch(`./learningData.json`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.level1.length; i++) {
        let result =
          data.level1[Math.floor(Math.random() * data.level1.length)];

        testT.innerHTML = "Тест";

        testL.innerHTML = `${result.letter}`;

        letterCard.style.display === "none";
        card.style.display === "none";
      }
    });
}
randomlBTN3.addEventListener("click", guesLetter);
