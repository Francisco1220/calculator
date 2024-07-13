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
    } else if (operator == "x") {
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
        btn[i].innerHTML === "x") {
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
    if (btn[i].innerHTML === "%") {
        btn[i].setAttribute("id", "makePerBtn" )
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
let b = 0;
let d = 0;
let undefinedMessage = "Who's going to tell him...";

let operatorBtnClick = () => {
    for (let i = 0; i < operatorBtn.length; i++) {
        operatorBtn[i].addEventListener("click", () => {
            operator = operatorBtn[i].innerHTML;
            j++;
            if (j === 1) {
                firstVal = parseFloat(displayTxt.innerHTML);
                n++;
                console.log(firstVal);
                console.log(secondVal);
            } else if (j === 2) {
                if (secondVal === 0 && operator === "/") {
                    displayTxt.innerHTML = undefinedMessage;
                } else {
                    secondVal = parseFloat(displayTxt.innerHTML);
                    console.log(firstVal);
                    console.log(secondVal);
                    result = operate(operator, firstVal, secondVal);
                    displayTxt.innerHTML = result;
                    n++;
                }
            } else if (j === 3) {
                if (b === 1) {
                    firstVal = result;
                    j--;
                } else if (b === 2) {
                    if (secondVal === 0 && operator === "/") {
                      displayTxt.innerHTML = undefinedMessage;
                    } else {
                        secondVal = parseFloat(displayTxt.innerHTML);
                        result = operate(operator, firstVal, secondVal);
                        displayTxt.innerHTML = result;
                        j--;
                    }
                } else {
                    if (secondVal === 0 && operator === "/") {
                        displayTxt.innerHTML = undefinedMessage;
                    } else {
                    firstVal = result;
                    secondVal = parseFloat(displayTxt.innerHTML);
                    result = operate(operator, firstVal, secondVal);
                    displayTxt.innerHTML = result;
                    j--;
                    n++;
                    }
                }
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
                d = 0;
            } else if (b === 1) {
                displayTxt.innerHTML = "";
                displayTxt.innerHTML += digitBtn[i].innerHTML;
                b--;
                j--;
                d = 0;
            } else if (b === 2) {
                displayTxt.innerHTML = "";
                displayTxt.innerHTML += digitBtn[i].innerHTML;
                b = 0;
                d = 0;
            } else {
                displayTxt.innerHTML += digitBtn[i].innerHTML;
            }
        });
    }
    decBtn();
}

let equalBtnClick = () => {
    equalBtn.addEventListener("click", () => {
        if (j === 1) {
            secondVal = parseFloat(displayTxt.innerHTML);
            result = operate(operator, firstVal, secondVal);
            displayTxt.innerHTML = result;
            b++;
            j++;
        } else if (j !== 1) {
            firstVal = result;
            secondVal = parseFloat(displayTxt.innerHTML);
            result = operate(operator, firstVal, secondVal);
            displayTxt.innerHTML = result;
            b++;
        }
        if (secondVal === 0 && operator === "/") {
            displayTxt.innerHTML = undefinedMessage;
        }
    });
}


let clearBtnClick = () => {
    clearBtn.addEventListener("click", () => {
        displayTxt.innerHTML = "";
        firstVal = 0;
        secondVal = 0;
        j = 0;
        b = 0;
        n = 0;
        d = 0;
        operator = 0;
        result = 0;
    });
}

let negBtn = () => {
    makeNegBtn.addEventListener("click", () => {
        let currentNum = displayTxt.innerHTML;
        let negSign = "-"
        displayTxt.innerHTML = `${negSign}${currentNum}`
    });
}

let toPercentageBtn = () => {
    makePerBtn.addEventListener("click", () => {
        let currentNum = parseFloat(displayTxt.innerHTML);
        firstVal = currentNum / 100;
        displayTxt.innerHTML = firstVal;
    });
}

let decBtn = () => {
    makeDecBtn.addEventListener("click", () => {
        d++;
        if (d === 1) {
            displayTxt.innerHTML += ".";
        }
    });
}

digitBtnClick();
operatorBtnClick();
equalBtnClick ();
clearBtnClick();
negBtn();
toPercentageBtn();
