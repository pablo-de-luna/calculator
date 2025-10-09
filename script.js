"use strict"

const screen = document.querySelector("#screen")
const numberButtons = document.querySelectorAll("#number-buttons button");
const operatorButtons = document.querySelectorAll("#operator-buttons button");
const equalButton = document.querySelector("#equal-button");
const allButtons = document.querySelectorAll("#buttons-layout div button")

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
        });
    });
};

const getOperator = () => {
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            operator = button.textContent;
        });
    });
};

const add = () => {
    result = Number(firstValue) + Number(secondValue);
};

const subtract = () => {
    result = Number(firstValue) - Number(secondValue);
};

const multiply = () => {
    result = Number(firstValue) * Number(secondValue);
};

const divide = () => {
    result = Number(firstValue) / Number(secondValue);
};

const operate = () => {
    equalButton.addEventListener("click", () => {
        if (operator == "+") add();
        if (operator == "-") subtract();
        if (operator == "x") multiply();
        if (operator == "÷") divide();

        updateFirstValue();
        clearSecondValue();
    });
};

const updateFirstValue = () => {
    firstValue = result;
};

const clearSecondValue = () => {
    secondValue = ""; 
};

const updateScreen = () => {
    allButtons.forEach(button => {
        button.addEventListener("click", () => {
            screen.textContent = `${firstValue} ${operator} ${secondValue}`;
        });
    });
    equalButton.addEventListener("click", () => {
        screen.textContent = result;
    });
};

getValues();
getOperator();
operate();
updateScreen();