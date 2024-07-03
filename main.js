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

// Adds classes to each button
const btn = document.querySelectorAll("button");
for(let i = 0; i < btn.length; i++) {
    btn[i].setAttribute("class", "btn");
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

changeColourBtn ();

const displayTxt = document.querySelector(".display")

// checks if equalSign is clicked, and increments accordingly
let equalBtn = document.querySelector("#equal");
let equalCounter = 0;

// updates text on display screen
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        if (btn[i].innerHTML === "%" ||
            btn[i].innerHTML === "/" ||
            btn[i].innerHTML === "x" ||
            btn[i].innerHTML === "-" ||
            btn[i].innerHTML === "+" ||
            btn[i].innerHTML === "AC" ||
            btn[i].innerHTML === "+/-" ||
            btn[i].innerHTML === "=") {
            displayTxt.innerHTML += "";
            // firstVal stores first value of calculation
            let firstVal = parseInt(displayTxt.innerHTML);
            console.log(firstVal);
            return firstVal
        } else {
            displayTxt.innerHTML += e.target.innerHTML;
        }
    });
}
