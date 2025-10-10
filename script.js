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
                if (firstValue == "0" && button.textContent !== ".") firstValue = "";

// FIX ERROR FIRSTVALUE.INCLUDES IS NOT A FUNCTION

                if (firstValue.includes(".") && button.textContent === ".") return;
                firstValue += button.textContent;
            }
            if (operator) {
                if (button.textContent === "." && secondValue === "") secondValue = "0";
                if (secondValue.includes(".") && button.textContent === ".") return;
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

const roundNumber = (number) => {
    return Math.round(number * 10000) / 10000;
};

const add = () => {result = roundNumber(firstValue + secondValue)};
const subtract = () => {result = roundNumber(firstValue - secondValue)};
const multiply = () => {result = roundNumber(firstValue * secondValue)};
const divide = () => {result = roundNumber(firstValue / secondValue)};


const operate = () => {
        changeValuesToNumber();

        if (operator === "+") add();
        if (operator === "-") subtract();
        if (operator === "x") multiply();
        if (operator === "÷") divide();

        updateFirstValue();
        screen.textContent = firstValue;
};

// FIX OR MAKE FUNCTION TO KEEP OPERATING WHILE CLICKING EQUAL BUTTON

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

    console.clear();
    console.log(`FV = ${firstValue}, OP = ${operator}, SV = ${secondValue}`)
};

getValues();
handleOperatorInput();
handleEqualButton();
updateScreen();
clearScreen();