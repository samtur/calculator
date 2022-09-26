const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn0 = document.querySelector("#btn0");
const btnadd = document.querySelector("#btnadd");
const btnsub = document.querySelector("#btnsub");
const btnmulti = document.querySelector("#btnmulti");
const btndivi = document.querySelector("#btndivi");
const btnequals = document.querySelector("#btnequals");
const btnclear = document.querySelector("#btnclear");
const caldisplay = document.querySelector("#caldisplay");

let num1 = 0;
let num2 = 0;

function add(num1, num2) {
  let total = 0;
  total = num1 + num2;
  return total;
}

function subtract(num1, num2) {
  let total = 0;
  total = num1 - num2;
  return total;
}

function multiply(num1, num2) {
  let total = 0;
  total = num1 * num2;
  return total;
}

function divide(num1, num2) {
  let total = 0;
  total = num1 / num2;
  return total;
}

// function operate(num1, num2, operate) {
//     if(operate === /* add */) {
//         add(num1, num2)
//     }
//     if(operate === /* subtract */) {
//         subtract(num1, num2)
//     }
//     if(operate === /* multiply */) {
//         multiply(num1, num2)
//     }
//     if(operate === /* divide */) {
//         divide(num1, num2)
//     }
// }

btn1.addEventListener("click", () => {
  caldisplay.textContent += 1;
});
btn2.addEventListener("click", () => {
  caldisplay.textContent += 2;
});
//  CONTINUE MAKING EVENT LISTENERS FOR BUTTONS
// MAKE A FUNCTION THAT SAVES THE INPUTS AND CALLS AN OPERATION ON THEM

// display();
