"use strict"

const screen = document.querySelector("#screen")
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");
const allButtons = document.querySelectorAll("#buttons-layout button")

let firstValue = "0";
let secondValue = ""; 
let operator = "";
let result;

const getValues = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (!operator) {
                if (firstValue == "0" && button.textContent !== ".") {
                    firstValue = "";
                }
                firstValue += button.textContent;
            }
            if (operator) {
                if (button.textContent === "." && secondValue === "") {
                    secondValue = "0"
                }
                secondValue += button.textContent;
            }
            updateScreen();
        });
    });
};

const handleOperatorInput = () => {
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (secondValue) operate();
            clearSecondValue();
            operator = button.textContent;
            updateScreen();
        });
    });
}

const changeValuesToNumber = () => {
    firstValue = Number(firstValue);
    secondValue = Number(secondValue);
};

const add = () => {result = firstValue + secondValue};
const subtract = () => {result = firstValue - secondValue};
const multiply = () => {result = firstValue * secondValue};
const divide = () => {result = firstValue / secondValue};

const operate = () => {
        changeValuesToNumber();

        if (operator === "+") add();
        if (operator === "-") subtract();
        if (operator === "x") multiply();
        if (operator === "÷") divide();

        updateFirstValue();
        screen.textContent = firstValue;
};

const handleEqualButton = () => {
    equalButton.addEventListener("click", () => {
        if (!secondValue) return;
        operate();
        clearSecondValue();
        operator = "";
    });
};

const clearScreen = () => {
    clearButton.addEventListener("click", () => {
        firstValue = "0";
        secondValue = "";
        operator = "";
        updateScreen();
    })
};

const updateFirstValue = () => {firstValue = result};

const clearSecondValue = () => {secondValue = ""};

const updateScreen = () => {
    screen.textContent = `${firstValue} ${operator} ${secondValue}`;
};

getValues();
handleOperatorInput();
handleEqualButton();
updateScreen();
clearScreen();