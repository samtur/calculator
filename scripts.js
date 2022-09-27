// Query Selectors
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
const totaldisplay = document.querySelector("#totaldisplay");

// Variables
let num = null;
let value = [];

// Event Listeners NumBtns
document.querySelectorAll(".numbtn").forEach((item) => {
  item.addEventListener("click", (e) => {
    item === btn1
      ? (caldisplay.textContent += 1)
      : item === btn2
      ? (caldisplay.textContent += 2)
      : item === btn3
      ? (caldisplay.textContent += 3)
      : item === btn4
      ? (caldisplay.textContent += 4)
      : item === btn5
      ? (caldisplay.textContent += 5)
      : item === btn6
      ? (caldisplay.textContent += 6)
      : item === btn7
      ? (caldisplay.textContent += 7)
      : item === btn8
      ? (caldisplay.textContent += 8)
      : item === btn9
      ? (caldisplay.textContent += 9)
      : (caldisplay.textContent += 0);
  });
});

// Event Listeners Operator Buttons
btnadd.addEventListener("click", () => {
  if (num === null) {
    num = caldisplay.textContent;
    num = parseInt(num);
    value.push(num);
    caldisplay.textContent = null;
    console.log(value);
  } else {
    num = caldisplay.textContent;
    num = parseInt(num);
    value.push(num);
    caldisplay.textContent = null;
    console.log(value);
    return add(value);
  }
});

btnsub.addEventListener("click", () => {
  if (num === null) {
    num = caldisplay.textContent;
    num = parseInt(num);
    value.push(num);
    caldisplay.textContent = null;
    console.log(value);
  } else {
    num = caldisplay.textContent;
    num = parseInt(num);
    value.push(num);
    caldisplay.textContent = null;
    console.log(value);
    return subtract(value);
  }
});

// btnmulti.addEventListener("click", () => {
//   if (num1 === null) {
//     num1 = caldisplay.textContent;
//     caldisplay.textContent = null;
//     console.log(num1);
//   }
//   btnequals.addEventListener("click", () => {
//     num2 = caldisplay.textContent;
//     caldisplay.textContent = null;
//     console.log(num2);
//     multiply(num1, num2);
//   });
// });

// btndivi.addEventListener("click", () => {
//   if (num1 === null) {
//     num1 = caldisplay.textContent;
//     caldisplay.textContent = null;
//   }
//   btnequals.addEventListener("click", () => {
//     num2 = caldisplay.textContent;
//     caldisplay.textContent = null;
//     divide(num1, num2);
//   });
// });

// Opertaor Functions
function add(array) {
  array.reduce((num1, num2) => {
    total = num1 + num2;
    return total;
  });
  console.log(total);
  totaldisplay.textContent = total;
  value = [];
  value.push(total);
  console.log(value);
}

function subtract(array) {
  array.reduce((num1, num2) => {
    total = num1 - num2;
    return total;
  });
  console.log(total);
  totaldisplay.textContent = total;
  value = [];
  value.push(total);
  console.log(value);
}

// function multiply(num1, num2) {
//   let total = 0;
//   num1 = parseInt(num1);
//   num2 = parseInt(num2);
//   total = num1 * num2;
//   caldisplay.textContent = total;
//   return total;
// }

// function divide(num1, num2) {
//   let total = 0;
//   num1 = parseInt(num1);
//   num2 = parseInt(num2);
//   total = num1 / num2;
//   caldisplay.textContent = total;
//   return total;
// }

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

/* Push num to the total array (num becomes total)
   Listen for the operation
   Push num to the total array
   Perform the operation on total and num in arrray. 
   Listen for the operation
   Push num to the total array
   Perform the operation 
   Push num to the total array
   Perform the operation
   ....
  If equals is pressed
  Perform the operation
  pressed display total from the array.
     */
