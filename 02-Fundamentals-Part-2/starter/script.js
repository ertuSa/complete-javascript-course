'use strict';
/*
-----------------------------
Activating Strict Mode lesson
-----------------------------
// By activating Strict Mode we will see errors like variable name type showed below, when without Strict Mode code will execute but condition check result is false (example 1).
//It will also inhibit of creation of variable name using feture reserved key words (example 2).
*/

// Example 1
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive a car');

// Example 2
// let private = true;
// let interface = false;

/*
----------------
Functions lesson
----------------
*/

function logger() {
    console.log('My name is Krzysztof!');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 0));