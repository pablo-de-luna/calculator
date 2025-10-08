"use strict"

const screenResult = document.querySelector("#screen-result")
const numberButtons = document.querySelectorAll("#number-buttons button");
const operatorButtons = document.querySelectorAll("#operator-buttons button");

const getNumButtonValue = () => {
    numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        screenResult.textContent = button.textContent; 
    });
    });
};

const getOperatorBtnValue = () => {
    operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        screenResult.textContent = button.textContent; 
    });
    });
};

getNumButtonValue();
getOperatorBtnValue();