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

function logger() {
    console.log('My name is Krzysztof!');
}

// calling / running / invoking
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(10, 15));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// -----------
// Assignement
// -----------
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
const polandData = describeCountry('Poland', 37, 'Warszawa');
console.log(polandData);
*/

/*
-------------------------------------------
Function Declaration vs. Expressions lesson
-------------------------------------------


// Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

console.log(calcAge1(1985));

// Function expression
const calcAge2 = function (birthyear) {
    return 2022 - birthyear;
}
const age2 = calcAge2(1985);
console.log(age2);

//-----------
// Assignment
//-----------

const worldPopulation = 7900;

function percentageOfWorld1(countryPopulation) {
    return (countryPopulation * 100) / worldPopulation;
}

console.log(percentageOfWorld1(1441));

const percentageOfWorld2 = function (countryPopulation) {
    return (countryPopulation / worldPopulation) * 100;
}

console.log(percentageOfWorld2(1441));

*/

/*
----------------------
Arrow Functions lesson
----------------------

const calcAge3 = birthYear => 2022 - birthYear;
console.log(calcAge3(1985));

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 67 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1985, 'Krzysztof'));

//-----------
// Assignment
//-----------

const percentageOfWorld3 = countryPopulation => (countryPopulation / 7900) * 100;
console.log(percentageOfWorld3(1441));
*/

/*--------------------------------------
Functions Calling Other Functions lesson
--------------------------------------*/
/*

function cutFruitPiaces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPiaces(apples);
    const orangePieces = cutFruitPiaces(oranges);

    const juice = `Juice with ${apples} apples cut into ${applePieces} pieces and ${oranges} oranges cut into ${orangePieces} pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 4));
*/

/*---------------------
Functions Review lesson
---------------------*/
/*
const calcAge = birthYear => 2022 - birthYear;

const retirement = age => 67 - age;

const yearUntilRetirement = function (birthYear, firstName) {
    const retire = retirement(calcAge(birthYear));
    if (0 >= retire) {
        `${firstName} has already retired 🎉`;
        console.log(`${firstName} has already retired 🎉`);
        return retire;
    } else {
        console.log(`${firstName} retires in ${retire} years.`);
        return -1;
    }
}

console.log(yearUntilRetirement(1985));
*/
/*----------------------------------------------------------------
 Coding Challenge 2.1
----------------------------------------------------------------*/
/*
const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

const avgDolphins = calcAverage(44, 23, 71);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(65, 54, 49);
const avgKoalas2 = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins2, avgKoalas2);
*/

/*-------------------------------
 * Introduction to Arrays lessson
 *-----------------------------*/
/*
const friend1 = 'Arek';
const friend2 = 'Lukasz';
const friend3 = 'Szymon';

const friends = ['Arek', 'Lukasz', 'Przemek'];
console.log(friends);

friends[2] = 'Szymon';
console.log(friends[2]);

// friends = years; if array was declared as const, then whole array can't be mutated, but each element of this array can.
const firstName = 'Krzysztof'
const krzysiek = [firstName, 'Rejment', 2022 - 1985, 'SW Developer', friends];
console.log(krzysiek);

// Exercise
const calcAge = birthYear => 2022 - birthYear;
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/* ------------------------------------------
 * Basic Arrays Operations (Methods) lesson
 * ----------------------------------------*/
/*
const friends = ['Arek', 'Lukasz', 'Przemek'];
// Add elements at the end
let newLength = friends.push('Przemek');
console.log(friends);
console.log(newLength);

// Add elements at the begining
newLength = friends.unshift('Bartek');
console.log(newLength);

// Remove last element
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);

// Remove first element
const shifted = friends.shift();
console.log(friends);
console.log(shifted);

console.log(friends.indexOf('Arek'));
console.log(friends.indexOf('Przemek'));

friends.push(23);
console.log(friends.includes('Lukasz'));
console.log(friends.includes('Przemek'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Arek')) {
    console.log('You have a friend called Arek.');
}
*/

/*----------------------------------------------------------------
 Coding Challenge 2.2
----------------------------------------------------------------*/
/*
const calcTip = (bill) => 50 <= bill && 300 >= bill ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
// using 'for' loop
const tips = [];
const total = [];
for (let i = 0; i < bills.length; ++i) {
    tips.push(calcTip(bills[i]));
    total.push(tips[i] + bills[i]);
    console.log(`${i}. Bill - ${bills[i]}$; Tip - ${tips[i]}$; Total - ${total[i]}$.`);
}
*/

/* ------------------------------------------
 * Objects - Dot vs. Bracket Notation lesson
 * ----------------------------------------*/
/*
const user = {
    firstName: 'Krzysztof',
    lastName: 'Rejment',
    age: 2022 - 1985,
    job: 'SW Developer',
    friends: ['Arek', 'Lukasz', 'Szymon']
};
console.log(user);
console.log(user.lastName);
console.log(user['lastName']);

const nameKey = 'Name';

console.log(user['first' + nameKey]);
console.log(user['last' + nameKey]);

const interestedIn = prompt('What do you want to know about user? Choose between: firstName, lastName, age, job and friends');


if (user[interestedIn]) {
    console.log(user[interestedIn]);
} else {
    console.log(`'${interestedIn}' in not a valid property name. Choose between: firstName, lastName, age, job and friends`);
}

user.location = 'Poland';
console.log(user);

console.log(`${user.firstName} has ${user.friends.length} friends, and his best friend is called ${user.friends[0]}.`);
*/

/* ----------------------
 * Object Methods lesson
 * --------------------*/
/*
const user = {
    firstName: 'Krzysztof',
    lastName: 'Rejment',
    birthYear: 1985,
    hasDriverLicense: true,
    job: 'SW Developer',
    friends: ['Arek', 'Lukasz', 'Szymon'],

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear; // this line will be calculated only once
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license. ${this.firstName} has ${this.friends.length} friends, and his best friend is called ${this.friends[0]}.`
    }
};

// both notation works properly dot and brackets
console.log(user.calcAge())
console.log(user.getSummary())
*/

/*----------------------------------------------------------------
 Coding Challenge 2.3
----------------------------------------------------------------*/
/*
const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.92,

    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};
const markBmiHigher = mark.calcBMI() > john.calcBMI()

console.log(`${markBmiHigher ? mark.fullName : john.fullName}'s BMI (${markBmiHigher ? mark.bmi : john.bmi}) is higher than ${markBmiHigher ? john.fullName : mark.fullName}'s BMI (${markBmiHigher ? john.bmi : mark.bmi}).`);
*/

/* ---------------------------------
 * Iteration: The 'for' Loop lesson
 * -------------------------------*/
/*
for (let rep = 1; rep <= 10; ++rep) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

/* -----------------------------------------------
 * Looping Arrays, Breaking and Continuing lesson
 * ---------------------------------------------*/
/*
const user = [
    'Krzysztof',
    'Rejment',
    2022 - 1985,
    'SW Developer',
    ['Arek', 'Lukasz', 'Szymon'],
    true,
];

const types = []

for (let i = 0; i < user.length; ++i) {
    if ('number' === typeof user[i]) break;
    if ('string' !== typeof user[i]) continue;
    console.log(user[i]);
    // types.push(typeof (user[i])); // or types[i] = typeof user[i]
    // console.log(types[i]);
}

const years = [1946, 1949, 1973, 1976, 1985];
const ages = [];

for (let i = 0; i < years.length; ++i) {
    ages.push(2022 - years[i]);
}

console.log(ages);
*/

/*---------------------------------------------
 * Looping Backwards and Loops in Loops lesson
 --------------------------------------------*/
/*
const user = [
    'Krzysztof',
    'Rejment',
    2022 - 1985,
    'SW Developer',
    ['Arek', 'Lukasz', 'Szymon'],
];

for (let i = user.length - 1; i >= 0; --i) {
    console.log(user[i], i);
}

for (let exercise = 1; exercise <= 3; ++exercise) {
    console.log(`---------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; ++rep) {
        console.log(`Exercise ${exercise} - Lifting weight repetition ${rep}`);
    }
}
*/
/*-----------------------
 * The While Loop lesson
 ----------------------*/
/*
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
*/

/*----------------------------------------------------------------
 Coding Challenge 2.4
----------------------------------------------------------------*/
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    tips.push(bill * (((50 <= bill) && (300 >= bill)) ? 0.15 : 0.2));
    totals.push(bill + tips[tips.length - 1]);
}

for (let i = 0; i < 10; ++i) {
    calcTip(bills[i]);
    console.log(bills[i], tips[i], totals[i])
}


const calcAver = function (values) {
    let sum = 0;
    for (let i = 0; i < values.length; ++i) {
        sum += values[i];
    }
    return sum / values.length;
}

console.log(calcAver(totals));
*/