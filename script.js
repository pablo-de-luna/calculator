"use strict"

const screenResult = document.querySelector("#screen-result")
const numberButtons = document.querySelectorAll("#number-buttons button");
const operatorButtons = document.querySelectorAll("#operator-buttons button");
const allButtons = document.querySelectorAll("#buttons-layout div button")

const getValues = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (!operator) {
                firstValue += button.textContent;
                console.log("first = " + firstValue);
            }
            if (operator) {
                secondValue += button.textContent;
                console.log("second = " + secondValue);
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

let firstValue = "";
let secondValue = ""; 
let operator = "";
let result;

const updateScreen = () => {
    allButtons.forEach(button => {
        button.addEventListener("click", () => {
            screenResult.textContent = `${firstValue} ${operator} ${secondValue}`;
        });
    });
};

getValues();
getOperator();
updateScreen();