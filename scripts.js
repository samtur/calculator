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
const btndecimal = document.querySelector("#btndecimal");
const btnadd = document.querySelector("#btnadd");
const btnsub = document.querySelector("#btnsub");
const btnmulti = document.querySelector("#btnmulti");
const btndivi = document.querySelector("#btndivi");
const btnequals = document.querySelector("#btnequals");
const btnclear = document.querySelector("#btnclear");
const btndelete = document.querySelector("#btndelete");
const btnpercent = document.querySelector("#btnpercent");
const caldisplay = document.querySelector("#caldisplay");
const sumdisplay = document.querySelector("#sumdisplay");

// Variables
let num1 = null;
let num2 = null;
let operation = null;
let total = null;
let equals = false;
let clear = null;
let operator = null;

// Event Listeners NumBtns

document.querySelectorAll(".numbtn").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (clear !== null) {
      if (equals === true) {
        sumdisplay.textContent = null;
      }
      equals = false;
      caldisplay.textContent = null;
      clear = null;
    }
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

btndecimal.addEventListener("click", () => {
  if (!caldisplay.textContent.includes(".") && caldisplay.textContent[0]) {
    caldisplay.textContent += ".";
  }
});

// Event Listeners Clear and Delete
btnclear.addEventListener("click", () => {
  operation = null;
  num2 = null;
  num1 = null;
  total = null;
  equals = false;
  caldisplay.textContent = null;
  sumdisplay.textContent = null;
});

btndelete.addEventListener("click", () => {
  if (caldisplay.textContent) {
    caldisplay.textContent = caldisplay.textContent.slice(0, -1);
  }
});

// Event Listeners Operator Buttons
document.querySelectorAll(".opbtn").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (caldisplay.textContent) {
      if (num2 === null && num1 !== null) {
        num2 = parseFloat(caldisplay.textContent);
        caldisplay.textContent = null;
        sumdisplay.textContent += ` ${operator} ${num2}`;
        operate(operation);
      }
      if (num1 === null) {
        num1 = parseFloat(caldisplay.textContent);
        caldisplay.textContent = null;
        if (equals !== true) {
          sumdisplay.textContent += `${num1}`;
        }
        equals = false;
      }
    }
  });
});

btnpercent.addEventListener("click", () => {
  if (operation === null) {
    operation = "percent";
    operator = "%";
  }
});

btnadd.addEventListener("click", () => {
  if (operation === null) {
    operation = "add";
    operator = "+";
  }
});

btnsub.addEventListener("click", () => {
  if (operation === null) {
    operation = "subtract";
    operator = "-";
  }
});

btnmulti.addEventListener("click", () => {
  if (operation === null) {
    operation = "multiply";
    operator = "×";
  }
});

btndivi.addEventListener("click", () => {
  if (operation === null) {
    operation = "divide";
    operator = "÷";
  }
});

btnequals.addEventListener("click", (e) => {
  equals = true;
  if (num2 === null && num1 !== null) {
    num2 = parseFloat(caldisplay.textContent);
    caldisplay.textContent = null;
    operate(operation);
  }
});

// Operator Functions
function percent(value1, value2) {
  total = (value1 * value2) / 100;
  checkEquals(total);
}

function add(value1, value2) {
  total = value1 + value2;
  checkEquals(total);
}

function subtract(value1, value2) {
  total = value1 - value2;
  checkEquals(total);
}

function multiply(value1, value2) {
  total = value1 * value2;
  checkEquals(total);
}

function divide(value1, value2) {
  total = value1 / value2;
  checkEquals(total);
}

function checkEquals(tot) {
  caldisplay.textContent = tot;
  clear = 1;
  operation = null;
  if (equals === false) {
    num2 = null;
    num1 = tot;
    return;
  }
  if (equals === true) {
    sumdisplay.textContent += ` ${operator} ${num2}`;
    num2 = null;
    num1 = null;
    tot = null;
    return;
  }
}

function operate(operation) {
  operation === "add"
    ? add(num1, num2)
    : operation === "subtract"
    ? subtract(num1, num2)
    : operation === "multiply"
    ? multiply(num1, num2)
    : operation === "divide"
    ? divide(num1, num2)
    : percent(num1, num2);
}
