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
let num1 = null;
let num2 = null;
let operation = null;
let total = null;
let equals = false;

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

document.querySelectorAll(".opbtn").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (caldisplay.textContent) {
      if (num2 === null && num1 !== null) {
        num2 = caldisplay.textContent;
        num2 = parseInt(num2);
        caldisplay.textContent = null;
        operate(operation);
      }
      if (num1 === null) {
        num1 = caldisplay.textContent;
        num1 = parseInt(num1);
        caldisplay.textContent = null;
      }
    }
  });
});

btnadd.addEventListener("click", () => {
  console.log(num1, num2, total, equals);
  if (operation === null) {
    operation = "add";
  }
});

btnsub.addEventListener("click", () => {
  console.log(num1, num2);
  if (operation === null) {
    operation = "subtract";
  }
});

btnmulti.addEventListener("click", () => {
  console.log(num1, num2);
  if (operation === null) {
    operation = "multiply";
  }
});

btndivi.addEventListener("click", () => {
  console.log(num1, num2);
  if (operation === null) {
    operation = "divide";
  }
});

btnequals.addEventListener("click", (e) => {
  equals = true;
  operate(operation);
});

// Opertaor Functions
function add(value1, value2) {
  total = value1 + value2;
  totaldisplay.textContent = total;
  if (!equals) {
    operation = null;
    num2 = null;
    num1 = total;
    return;
  }
  if (equals) {
    operation = null;
    num2 = null;
    num1 = null;
    total = null;
    equals = false;
    console.log(num1, num2, total, equals);
    return;
  }
}

function subtract(value1, value2) {
  total = value1 - value2;
  totaldisplay.textContent = total;
  operation = null;
  console.log(operation);
  num2 = null;
  num1 = total;
  console.log(num1, num2);
  return;
}

function multiply(value1, value2) {
  total = value1 * value2;
  totaldisplay.textContent = total;
  operation = null;
  console.log(operation);
  num2 = null;
  num1 = total;
  console.log(num1, num2);
  return;
}

function divide(value1, value2) {
  total = value1 / value2;
  totaldisplay.textContent = total;
  operation = null;
  console.log(operation);
  num2 = null;
  num1 = total;
  console.log(num1, num2);
  return;
}

function operate(operation) {
  if (operation === "add") {
    add(num1, num2);
  }
  if (operation === "subtract") {
    subtract(num1, num2);
  }
  if (operation === "multiply") {
    multiply(num1, num2);
  }
  if (operation === "divide") {
    divide(num1, num2);
  }
}
