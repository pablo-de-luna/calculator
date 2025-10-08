"use strict"

const screenResult = document.querySelector("#screen-result")
const numberButtons = document.querySelectorAll("#number-buttons button");
const operatorButtons = document.querySelectorAll("#operator-buttons button");
const allButtons = document.querySelectorAll("#buttons-layout div button")

const getFirstValue = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            firstValue.push(button.textContent)
            console.log(firstValue)
        });
    });
};

const getSecondValue = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            secondValue += button.textContent;
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

let firstValue = [];
let secondValue = []; 
let operator = "";
let result;

const updateScreen = () => {
    allButtons.forEach(button => {
        button.addEventListener("click", () => {
            const firstValueStr = firstValue.join("");
            screenResult.textContent = `${firstValueStr} ${operator} ${secondValue}`;
        });
    });
};

getFirstValue();
getOperator();
updateScreen();