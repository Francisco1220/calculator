// 3 variables for each: 1 for the first number. 1 for the operator. 1 for the second number

let add = function(a,b) {
    return a + b;
}

let subtract = function(a, b) {
    return a - b;
}

let multiply = function(a, b) {
    return a * b;
}

let divide = function(a, b) {
    return a / b;
}

// Takes an operator and 2 numbers and then calls one of the above functions on the numbers
let operate = function(operator, first, second) {
    if (operator == "+") {
        let result = add(first, second);
        return result;
    } else if (operator == "-") {
        let result = subtract(first, second);
        return result;
    } else if (operator == "*") {
        let result = multiply(first, second);
        return result;
    } else {
        let result = divide(first, second);
        return result;
    }
}

// Adds respective classes and ids for each button
const btn = document.querySelectorAll("button");
for(let i = 0; i < btn.length; i++) {
    if (btn[i].innerHTML !== "+" ||
        btn[i].innerHTML !== "-" ||
        btn[i].innerHTML !== "/" ||
        btn[i].innerHTML !== "x" ||
        btn[i].innerHTML !== "%" ) {
            btn[i].setAttribute("class", "btn");
        }
    if (btn[i].innerHTML === "+" ||
        btn[i].innerHTML === "-" ||
        btn[i].innerHTML === "/" ||
        btn[i].innerHTML === "x" ||
        btn[i].innerHTML === "%") {
            btn[i].setAttribute("class", "btn operatorBtn");
        }
    if (btn[i].innerHTML === "=") {
        btn[i].setAttribute("id", "equalBtn");
    }
    if (btn[i].innerHTML === "AC") {
        btn[i].setAttribute("id", "clearBtn");
    }
    if (btn[i].innerHTML === "+/-") {
        btn[i].setAttribute("id", "makeNegBtn");
    }
    if (btn[i].innerHTML === ".") {
        btn[i].setAttribute("id", "makeDecBtn");
    } 
    if (btn[i].innerHTML === "0" ||
        btn[i].innerHTML === "1" ||
        btn[i].innerHTML === "2" ||
        btn[i].innerHTML === "3" ||
        btn[i].innerHTML === "4" ||
        btn[i].innerHTML === "5" ||
        btn[i].innerHTML === "6" ||
        btn[i].innerHTML === "7" ||
        btn[i].innerHTML === "8" ||
        btn[i].innerHTML === "9") {
        btn[i].setAttribute("class", "btn numBtn");
    }
}

const changeColourBtn = function() {
    for(let i = 0; i < btn.length; i++) {
        if (btn[i].innerHTML === "AC" ||
            btn[i].innerHTML === "+/-" ||
            btn[i].innerHTML === "%" ||
            btn[i].innerHTML === "x" ||
            btn[i].innerHTML === "/" ||
            btn[i].innerHTML === "+" ||
            btn[i].innerHTML === "-") {
            btn[i].style.backgroundColor = "rgb(255, 213, 153)";
            }
    }
}

const displayTxt = document.querySelector(".display");

const digitBtn = document.querySelectorAll(".numBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");

let j = 0;
let operator;
let firstVal;
let secondVal;
let n = 0;

let operatorBtnClick = () => {
    for (let i = 0; i < operatorBtn.length; i++) {
        operatorBtn[i].addEventListener("click", () => {
            operator = operatorBtn[i].innerHTML;
            j++;
            if (j === 1) {
                firstVal = parseInt(displayTxt.innerHTML);
                n++;
            } else if (j === 2) {
                secondVal = parseInt(displayTxt.innerHTML);
                result = operate(operator, firstVal, secondVal);
                displayTxt.innerHTML = result;
                n++;
            } else if (j === 3) {
                firstVal = result;
                secondVal = parseInt(displayTxt.innerHTML);
                result = operate(operator, firstVal, secondVal);
                displayTxt.innerHTML = result;
                j--;
                n++;
            }
        });
    }
}

let digitBtnClick = () => {
    for (let i = 0; i < digitBtn.length; i++) {
        digitBtn[i].addEventListener("click", () => {
            if (n === 1) {
                displayTxt.innerHTML = "";
                displayTxt.innerHTML += digitBtn[i].innerHTML;
                n--;
            } else {
                displayTxt.innerHTML += digitBtn[i].innerHTML;
            }
        });
    }
}

digitBtnClick();
operatorBtnClick();


