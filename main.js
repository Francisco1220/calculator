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
    if (btn[i].innerHTML === "del") {
        btn[i].setAttribute("id", "backspaceBtn")
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

const displayTxt = document.querySelector(".display");

const digitBtn = document.querySelectorAll(".numBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");

let operatorCounter = 0;
let operator;
let firstVal;
let secondVal;
let clearDisplay = 0;
let b = 0;
let decimalCounter = 0;
let containsNeg = false;
let decBtnPressed = false;
let undefinedMessage = "Who's going to tell him...";

const displayOperator = document.querySelector(".show-operator-clicked");

let operatorBtnClick = () => {
    for (let i = 0; i < operatorBtn.length; i++) {
        operatorBtn[i].addEventListener("click", () => {
            operator = operatorBtn[i].innerHTML;
            displayOperator.innerHTML = operator;
            operatorCounter++;
            decimalCounter = 0;
            if (operatorCounter === 1) {
                firstVal = parseFloat(displayTxt.innerHTML);
                clearDisplay++;
                firstOperator = operator;
            } else if (operatorCounter === 2) {
                secondOperator = operatorBtn[i].innerHTML;
                secondVal = parseFloat(displayTxt.innerHTML);
                if (secondVal === 0 && operator === "/") {
                    displayTxt.innerHTML = undefinedMessage;
                } else if (firstOperator !== secondOperator) {
                    result = +operate(firstOperator, firstVal, secondVal).toFixed(16);
                    firstOperator = operatorBtn[i].innerHTML;
                    displayTxt.innerHTML = result;
                    clearDisplay++;
                } else {
                    result = +operate(operator, firstVal, secondVal).toFixed(16);
                    displayTxt.innerHTML = result
                    clearDisplay++;
                }
            } else if (operatorCounter === 3) {
                firstOperator = secondOperator
                if (b === 1) {
                    firstVal = result;
                    operatorCounter--;
                } else if (b === 2) {
                    if (secondVal === 0 && operator === "/") {
                      displayTxt.innerHTML = undefinedMessage;
                    } else {
                        secondVal = parseFloat(displayTxt.innerHTML);
                        result = +operate(operator, firstVal, secondVal).toFixed(16);
                        displayTxt.innerHTML = result;
                        operatorCounter--;
                    }
                } else {
                    secondVal = parseFloat(displayTxt.innerHTML);
                    secondOperator = operatorBtn[i].innerHTML;
                    if (secondVal === 0 && operator === "/") {
                        displayTxt.innerHTML = undefinedMessage;
                    } else if (firstOperator !== secondOperator) {
                        firstVal = result;
                        result = +operate(firstOperator, firstVal, secondVal).toFixed(16);
                        displayTxt.innerHTML = result;
                        operatorCounter--;
                        clearDisplay++;
                    } else {
                        firstVal = result;
                        result = +operate(operator, firstVal, secondVal).toFixed(16);
                        displayTxt.innerHTML = result;
                        operatorCounter--;
                        clearDisplay++;
                    }
                }
            }
        });
    }
}


let digitBtnClick = () => {
    for (let i = 0; i < digitBtn.length; i++) {
        digitBtn[i].addEventListener("click", () => {
            if (clearDisplay === 1) {
                displayTxt.innerHTML = "";
                displayTxt.innerHTML += digitBtn[i].innerHTML;
                clearDisplay--;
                containsNeg = false;
            } else if (b === 1) {
                displayTxt.innerHTML = "";
                displayTxt.innerHTML += digitBtn[i].innerHTML;
                b--;
                operatorCounter--;
            } else if (b === 2) {
                displayTxt.innerHTML = "";
                displayTxt.innerHTML += digitBtn[i].innerHTML;
                b = 0;
            } else {
                displayTxt.innerHTML += digitBtn[i].innerHTML;
            }
        });
    }
}

let equalBtnClick = () => {
    equalBtn.addEventListener("click", () => {
        displayOperator.innerHTML = "=";
        if (operatorCounter === 1) {
            secondVal = parseFloat(displayTxt.innerHTML);
            result = +operate(operator, firstVal, secondVal).toFixed(16);
            displayTxt.innerHTML = result;
            b++;
            operatorCounter++;
        } else if (operatorCounter !== 1) {
            firstVal = result;
            secondVal = parseFloat(displayTxt.innerHTML);
            result = +operate(operator, firstVal, secondVal).toFixed(16);
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
        operatorCounter = 0;
        b = 0;
        clearDisplay = 0;
        decimalCounter = 0;
        displayOperator.innerHTML = "";
        containsNeg = false;
        operator = 0;
        result = 0;
    });
}

let negBtn = () => {
    makeNegBtn.addEventListener("click", () => {
        let negSign = "-";
        if (displayTxt.innerHTML !== "" && containsNeg === false) {
            currentNum = displayTxt.innerHTML;
            displayTxt.innerHTML = `${negSign}${currentNum}`;
            containsNeg = true;
        }
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
        decimalCounter++;
        decBtnPressed = true;
        if (decimalCounter === 1) {
            displayTxt.innerHTML += ".";
        }
    });
}

let deleteBtn = () => {
    backspaceBtn.addEventListener("click", () => {
        if (b !== 1 && b !== 2) {
                let string = displayTxt.innerHTML;
                displayTxt.innerHTML = string.slice(0, -1);
            if (decBtnPressed === true) {
                decimalCounter--;
                decBtnPressed = false;
            }
        }
    });
}

let changeBgColour = () => {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("mouseover", () => {
            btn[i].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        });
        btn[i].addEventListener("mouseout", (e) => {
            if (e.target.className === "btn numBtn" || e.target.id === "backspaceBtn" || e.target.id === "makeDecBtn") {
                btn[i].style.backgroundColor = "rgb(148, 148, 184)"
            }
            if (e.target.className === "btn operatorBtn" || e.target.id === "clearBtn" || e.target.id === "makeNegBtn" || e.target.id === "makePerBtn" || e.target.id === "equalBtn") {
                btn[i].style.backgroundColor = "rgb(92, 92, 138)";
            }
        });
    }
}

digitBtnClick();
operatorBtnClick();
equalBtnClick();
clearBtnClick();
negBtn();
toPercentageBtn();
deleteBtn();
changeBgColour();
decBtn();