"use strict"

function add7 (input) {
    return input + 7;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function capitalise (input) {
    return input.slice(0,1).toUpperCase() + input.slice(1).toLowerCase();
}

function lastLetter (input) {
    return input.charAt(input.length-1);
}

function main () {
    console.log(capitalise("ALLCAPS"));
    console.log(capitalise("MixedCaseSentence"));
    console.log(lastLetter("abcd"));
}
