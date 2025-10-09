"use strict"

const screen = document.querySelector("#screen")
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");
const allButtons = document.querySelectorAll("#buttons-layout button")

let firstValue = "";
let secondValue = ""; 
let operator = "";
let result;

const getValues = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (!operator) {
                firstValue += button.textContent;
            }
            if (operator) {
                secondValue += button.textContent;
            }
            updateScreen();
        });
    });
};

const getOperator = () => {
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            operator = button.textContent;

            clearSecondValue();
            updateScreen();
        });
    });
};

const changeValuesToNumber = () => {
    firstValue = Number(firstValue);
    secondValue = Number(secondValue);
};

const add = () => {result = firstValue + secondValue};
const subtract = () => {result = firstValue - secondValue};
const multiply = () => {result = firstValue * secondValue};
const divide = () => {result = firstValue / secondValue};

const operate = () => {
    equalButton.addEventListener("click", () => {
        changeValuesToNumber();

        if (operator == "+") add();
        if (operator == "-") subtract();
        if (operator == "x") multiply();
        if (operator == "÷") divide();

        updateFirstValue();
        screen.textContent = result;
    });
};

const clearScreen = () => {
    clearButton.addEventListener("click", () => {
        firstValue = "";
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
getOperator();
operate();
updateScreen();
clearScreen();