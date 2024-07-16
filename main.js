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

let j = 0;
let operator;
let firstVal;
let secondVal;
let n = 0;
let b = 0;
let d = 0;
let c = 0;
let containsNeg = false;
let decBtnPressed = false;
let undefinedMessage = "Who's going to tell him...";

let operatorBtnClick = () => {
    for (let i = 0; i < operatorBtn.length; i++) {
        operatorBtn[i].addEventListener("click", () => {
            operator = operatorBtn[i].innerHTML;
            j++;
            c = 0;
            if (j === 1) {
                firstVal = parseFloat(displayTxt.innerHTML);
                n++;
                firstOperator = operator;
            } else if (j === 2) {
                secondOperator = operatorBtn[i].innerHTML;
                secondVal = parseFloat(displayTxt.innerHTML);
                if (secondVal === 0 && operator === "/") {
                    displayTxt.innerHTML = undefinedMessage;
                } else if (firstOperator !== secondOperator) {
                    result = +operate(firstOperator, firstVal, secondVal).toFixed(16);
                    displayTxt.innerHTML = result;
                    n++;
                } else {
                    //
                    result = +operate(operator, firstVal, secondVal).toFixed(16);
                    displayTxt.innerHTML = result
                    n++;
                }
            } else if (j === 3) {
                firstOperator = secondOperator
                if (b === 1) {
                    firstVal = result;
                    j--;
                } else if (b === 2) {
                    if (secondVal === 0 && operator === "/") {
                      displayTxt.innerHTML = undefinedMessage;
                    } else {
                        secondVal = parseFloat(displayTxt.innerHTML);
                        result = +operate(operator, firstVal, secondVal).toFixed(16);
                        displayTxt.innerHTML = result;
                        j--;
                    }
                } else {
                    secondOperator = operator;
                    secondVal = parseFloat(displayTxt.innerHTML);
                    if (secondVal === 0 && operator === "/") {
                        displayTxt.innerHTML = undefinedMessage;
                    } else if (firstOperator !== secondOperator) {
                        firstVal = result;
                        result = +operate(firstOperator, firstVal, secondVal).toFixed(16);
                        displayTxt.innerHTML = result;
                        j--;
                        n++;
                    } else {
                        firstVal = result;
                        result = +operate(operator, firstVal, secondVal).toFixed(16);
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
                containsNeg = false;
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
}

let equalBtnClick = () => {
    equalBtn.addEventListener("click", () => {
        if (j === 1) {
            secondVal = parseFloat(displayTxt.innerHTML);
            result = +operate(operator, firstVal, secondVal).toFixed(16);
            displayTxt.innerHTML = result;
            b++;
            j++;
        } else if (j !== 1) {
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
        j = 0;
        b = 0;
        n = 0;
        d = 0;
        c = 0;
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
        c++;
        decBtnPressed = true;
        if (c === 1) {
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
                c--;
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