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

/* updates text on display screen
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        if (btn[i].innerHTML === "%" ||
            btn[i].innerHTML === "/" ||
            btn[i].innerHTML === "x" ||
            btn[i].innerHTML === "-" ||
            btn[i].innerHTML === "+") {
            displayTxt.innerHTML += "";
            // Note: parseInt is not returning a decimal number. Only an integer. Fix later
            let firstVal = parseInt(displayTxt.innerHTML);
            let operator = e.target.innerHTML;
            console.log(operator);
            console.log(firstVal);
        } else {
            displayTxt.innerHTML += e.target.innerHTML;
        }
    });
} */

let j = 0;
let operator;
let firstVal;
let secondVal;
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        if (btn[i].innerHTML !== "%" &&
            btn[i].innerHTML !== "/" &&
            btn[i].innerHTML !== "x" &&
            btn[i].innerHTML !== "-" &&
            btn[i].innerHTML !== "+" &&
            btn[i].innerHTML !== "AC" &&
            btn[i].innerHTML !== "+/-") {
                displayTxt.innerHTML += e.target.innerHTML;
        } else if (btn[i].innerHTML === "%" ||
                   btn[i].innerHTML === "/" ||
                   btn[i].innerHTML === "x" ||
                   btn[i].innerHTML === "-" ||
                   btn[i].innerHTML === "+" ||
                   btn[i].innerHTML === "AC"||
                   btn[i].innerHTML === "+/-") {
            j++;
              if (j === 1) {
                // Note: parseInt is not returning a decimal number. Only an integer. Fix later
                firstVal = parseInt(displayTxt.innerHTML);
                displayTxt.innerHTML = "";
                operator = e.target.innerHTML;
                console.log(operator);
                console.log(firstVal);
              } else if (j === 2) {
                secondVal = parseInt(displayTxt.innerHTML);
                displayTxt.innerHTML = "";
                console.log(secondVal);
                j = 0;
                result = operate(operator, firstVal, secondVal);
                displayTxt.innerHTML = `${result}`;
                firstVal = result;
              }
           }
    });
}
