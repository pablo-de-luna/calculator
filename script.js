"use strict"

// THE LORD IS MY SHEPPARD, I LACK NOTHING

const screen = document.querySelector("#screen")
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");
const backspaceButton = document.querySelector("#backspace");
const plusMinusButton = document.querySelector("#plus-minus");
const allButtons = document.querySelectorAll("#buttons-layout button")

let firstValue = "0";
let secondValue = ""; 
let operator = "";
let result;

const getValues = () => {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (screen.textContent === "ERROR") {
                clearAllValues();
                return;
            }
            if (!operator) {
                if (firstValue == "0" && button.textContent !== ".") {
                    firstValue = "";
                }
                if (firstValue.includes(".") && button.textContent === ".") {
                    return;
                };
                firstValue += button.textContent;
            } else {
                if (button.textContent === "." && secondValue === "") {
                    secondValue = "0";
                }
                if (secondValue.includes(".") && button.textContent === ".") {
                    return;
                };
                secondValue += button.textContent;
            }
            updateScreen();
        });
    });
};

const handleOperatorInput = () => {
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (screen.textContent === "ERROR") {
                clearAllValues();
                return;
            }
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

const convertToScientificNotation = () => {
    let maxResultLength = 11;
    let resultStr = result.toString();
    if (resultStr.length > maxResultLength) {
        result = result.toExponential(3);
    }
};

const updateFirstValue = () => {firstValue = result.toString()};

const clearSecondValue = () => {secondValue = ""};

const add = () => {result = roundNumber(firstValue + secondValue)};
const subtract = () => {result = roundNumber(firstValue - secondValue)};
const multiply = () => {result = roundNumber(firstValue * secondValue)};
const divide = () => {result = roundNumber(firstValue / secondValue)};

const operate = () => {
        changeValuesToNumber();
        if (operator === "+") add();
        if (operator === "-") subtract();
        if (operator === "x") multiply();
        if (operator === "÷" && secondValue !== 0) divide();
        if (operator === "÷" && secondValue === 0) {
            screen.textContent = "ERROR";       
            return;
        }
        convertToScientificNotation();
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

const clearAllValues = () => {
        firstValue = "0";
        secondValue = "";
        operator = "";
        updateScreen();
};

const handleClearButton = () => {
    clearButton.addEventListener("click", () => {
        clearAllValues();
    });
};

const handleBackspaceButton = () => {
    backspaceButton.addEventListener("click", () => {
        if (secondValue) {
            secondValue = secondValue.substring(0, secondValue.length - 1);
            if (secondValue === "-") {
                secondValue = "";
            }
        } else if (operator) {
            operator = "";
        } else {
            if (firstValue === "0") {
                return;
            }
            firstValue = firstValue.substring(0, firstValue.length - 1);
            if (firstValue === "" ||
                firstValue === "-" ||
                firstValue.includes("e")) {
                firstValue = "0";
            }
        }
        updateScreen();
    });
};

const handlePlusMinusButton = () => {
    plusMinusButton.addEventListener("click", () => {
        if (screen.textContent === "ERROR") {
            clearAllValues();
            return;
        }
        if (secondValue === "0") {
            return;
        } else if (secondValue) {
            secondValue = Number(secondValue) * -1;
            secondValue = String(secondValue);
        } else if (firstValue && firstValue !== "0") {
            firstValue = Number(firstValue) * -1;
            firstValue = String(firstValue);
        } else {
            return;
        }
        updateScreen();
    });
};

const updateScreen = () => {
    screen.textContent = `${firstValue}${operator}${secondValue}`;
    // showInfoInConsole();
};

// const showInfoInConsole = () => {
//     console.log(firstValue, operator, secondValue, result)
// };

getValues();
handleOperatorInput();
handleEqualButton();
handleClearButton();
handleBackspaceButton();
handlePlusMinusButton();
updateScreen();