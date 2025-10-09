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

const operate = () => {
    equalButton.addEventListener("click", () => {
        getSum()
    });
};

const getSum = () => {
    result = Number(firstValue) + Number(secondValue);
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