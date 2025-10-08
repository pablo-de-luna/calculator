"use strict"

const numButtons = document.querySelectorAll("#number-buttons button");

let screenResult = document.querySelector("#screen-result")

const getNumButtonOutput = () => {
    numButtons.forEach(button => {
    button.addEventListener("click", () => {
        screenResult.textContent = button.textContent; 
    })
    })
};

getNumButtonOutput()