"use strict"

const screenResult = document.querySelector("#screen-result")
const numberButtons = document.querySelectorAll("#number-buttons button");
const operatorButtons = document.querySelectorAll("#operator-buttons button");
const allButtons = document.querySelectorAll("#buttons-layout div button")

const getFirstOperand = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            firstOperand += button.textContent;
        });
    });
};

const getSecondOperand = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            secondOperand += button.textContent;
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

let firstOperand = "";
let secondOperand = "";
let operator = "";
let result;

const updateScreen = () => {
    allButtons.forEach(button => {
        button.addEventListener("click", () => {
            screenResult.textContent = `${firstOperand} ${operator} ${secondOperand}`;
        });
    });
};

getFirstOperand();
getOperator();
updateScreen();