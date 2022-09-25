/*
----------
    Data Types
----------

let js = "amazing";
console.log(40 + 5 + 23 - 10);
console.log("Krzysztof");

const firstName = "Krzysztof";
console.log(firstName);

let country = "Poland";
let continent = "Europe";
let population = 37.95;

console.log(country);
console.log(continent);
console.log(population);

let description = `${country} is in ${continent}, ad its ${population} milion people speak in Polish.`

console.log(description);
*/

/*
----------------------
let, const, var lesson
----------------------

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 10);
console.log(typeof 666488128472646371659364591634956348976591634958691384659136598162394619238736258763408756187346508761348756918346751345134513465.6491832659639569183465123512351354193764508136240163208751380750817325087132087501823750871320876132048761023876408176340876139824698732581059471983591);
console.log(typeof "Krzysztof");
console.log(typeof null);

let year;
console.log(year);
console.log(typeof year);

year = null;
console.log(typeof year);
console.log(year);
*/

/*
const PI = 3.1415;

lastName = "Rejment";
console.log(lastName);
*/

/*
----------------------
Basic Operators lesson
----------------------

const actualYear = 2022;
const ageKrzysiek = actualYear - 1985;
const ageKarolina = actualYear - 2005;
console.log(ageKrzysiek, ageKarolina);

console.log(ageKrzysiek * 2, ageKarolina / 10, 2 ** 3);

const firstName = "Krzysztof";
const lastName = "Rejment";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x ^= 3; // x = x xor 3
console.log(x);

console.log(typeof (ageKarolina < ageKrzysiek)); // >, <, >=, <=
console.log(ageKarolina >= 18);
const isFullAge = ageKarolina >= 18;
*/

/*
---------------------------
Operator Precedence lessson
---------------------------

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
*/
/*
-----------------
Code Challange 1
----------------

let markHigherBmi = false;
let markBmi;
let johnBmi;
let markWeight;
let markHeight;
let johnWeight;
let johnHeight;

// TEST DATA 1
markWeight = 78;
markHeight = 1.69;

johnWeight = 92;
johnHeight = 1.92;

markBmi = markWeight / markHeight ** 2;
johnBmi = johnWeight / johnHeight ** 2;
markHigherBmi = markBmi > johnBmi;

// TEST DATA 1
markWeight = 78;
markHeight = 1.69;

johnWeight = 92;
johnHeight = 1.92;

console.log("TEST DATA 1");
markBmi = markWeight / markHeight ** 2;
console.log("Mark BMI = ", markBmi);
johnBmi = johnWeight / johnHeight ** 2;
console.log("John BMI = ", johnBmi);
markHigherBmi = markBmi > johnBmi;
console.log("Mark have higher BMI - ", markHigherBmi);

// TEST DATA 1
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

console.log("TEST DATA 2");
markBmi = markWeight / markHeight ** 2;
console.log("Mark BMI = ", markBmi);
johnBmi = johnWeight / johnHeight ** 2;
console.log("John BMI = ", johnBmi);
markHigherBmi = markBmi > johnBmi;
console.log("Mark have higher BMI - ", markHigherBmi);
*/

/*
------------------------------------
Strings and Template Literals lesson
------------------------------------

const firstName = "Krzysztof";
const job = "programmer";
const birthYear = 1985;
const actualYear = 2022;
const age = actualYear - birthYear;

const chris = "I'm " + firstName + ", a " + age + " year old " + job + "!";
console.log(chris);

const chrisNew = `I'm ${firstName}, a year old ${age} ${job}!`;
console.log(chrisNew);

console.log('String with\nmultiple\nlines.');

console.log('String with \n\
multiple \n\
lines.')

console.log(`String with
multiple
lines.`);
*/

/*
-----------------------
Taking Decisions lesson
-----------------------

const age = 37;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Krzysztof can start driving license 🚙");
} else {
    let yearsLeft = 18 - age;
    console.log(`Krzysztof is to yound. Wait another ${yearsLeft} years.`);
}

const birthYear = 2005;
let century;
if (2000 > birthYear) {
    century = "XX";
} else {
    century = "XXI";
}
console.log(`Krzysztof was born in ${century} century.`);
*/

/*
-------------------
Coding Challange #2
-------------------

let markHigherBmi = false;
let markBmi;
let johnBmi;
let markWeight;
let markHeight;
let johnWeight;
let johnHeight;
let description;

// TEST DATA 1
markWeight = 78;
markHeight = 1.69;

johnWeight = 92;
johnHeight = 1.92;

markBmi = markWeight / markHeight ** 2;
johnBmi = johnWeight / johnHeight ** 2;
markHigherBmi = markBmi > johnBmi;

// TEST DATA 1
markWeight = 78;
markHeight = 1.69;

johnWeight = 92;
johnHeight = 1.92;

console.log("TEST DATA 1");
markBmi = markWeight / markHeight ** 2;
johnBmi = johnWeight / johnHeight ** 2;
markHigherBmi = markBmi > johnBmi;
if (markHigherBmi) {
    description = `Mark's BMI(${markBmi}) is higher than John's BMI(${johnBmi}).`;
} else {
    description = `John's BMI(${johnBmi}) is higher than Mark's BMI(${markBmi}).`;
}
console.log(description)


// TEST DATA 1
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

console.log("TEST DATA 2");
markBmi = markWeight / markHeight ** 2;
johnBmi = johnWeight / johnHeight ** 2;
markHigherBmi = markBmi > johnBmi;
if (markHigherBmi) {
    description = `Mark's BMI(${markBmi}) is higher than John's BMI(${johnBmi}).`;
} else {
    description = `John's BMI(${johnBmi}) is higher than Mark's BMI(${markBmi}).`;
}
console.log(description)

*/

/*
-----------------------------------
Type Conversion and Coercion lesson
-----------------------------------

// Type conversion
const inputYear = '1985';
console.log(Number(inputYear) + 18, inputYear);
console.log(inputYear + 18);

console.log(Number('Krzysztof'));
console.log(typeof NaN);
console.log(typeof 19);

console.log(String(25 + 30));

// Type coercion
console.log("I'm " + 37 + " years old!");
console.log("37" - "0" + '3');
console.log("37" + 3 - "0" + 3 + 4 + 5 + 6); // Everything with plus operator are converted to String but from minus operator eveyrthing is converted to Numbers
console.log("10" * "2");
console.log("10" / "2");
let n = "1" + 1;
n -= 1;
console.log(n)


console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // "617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
*/

/*
------------------------------
Truthy and False Values lesson
------------------------------

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // explicitly converted to Boolean
console.log(Boolean('')); // explicitly converted to Boolean
console.log(Boolean(undefined)); // explicitly converted to Boolean
console.log(Boolean(null)); // explicitly converted to Boolean
console.log(Boolean(NaN)); // explicitly converted to Boolean
console.log(Boolean({})); // empty object is true, explicitly converted to Boolean

const money = 6000;
if (money) { // implicitly converter to Boolean
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height; // this or '= 0;' result will false and '= 1.69;' result will be true in if condition below. implicitly converter to Boolean
if (height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is UNDEFINED.")
}

let age = 18;
console.log(age);
if (18 === age) console.log('You just became an adult :D (sreict)');
if (18 == age) console.log('You just became an adult :D (loose)');

age = '18'
console.log(age);
if (18 === age) console.log('You just became an adult :D (sreict)');
if (18 == age) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favorit number?"));
console.log(favorite);
console.log(typeof favorite);

if (69 === favorite) {
    console.log('Cool! 69 is an amazing number.');
} else if (23 === favorite) {
    console.log('23 is also a cool number.');
}

if (69 !== favorite) console.log('Why not the 69?');


const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (1 === numNeighbours) {
    console.log('Only 1 border!');
} else if (1 < numNeighbours) {
    console.log('More than 1 border!');
} else {
    console.log('No borders!');
}
*/

/*
-----------------------
Logical Operator lesson
-----------------------


const hasDrivingLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense && hasGoodVision);

if (hasDrivingLicense && hasGoodVision) {
    console.log('Sara is able to drive.');
} else {
    console.log('Someone else should drive!');
}

const isTired = true;
*/

/*
----------------
Code challange 3
----------------

// Data 1
let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];
let dolphinsAverageScore = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
let koalasAverageScore = (koalas[0] + koalas[1] + koalas[2]) / 3;

if (dolphinsAverageScore > koalasAverageScore) {
    console.log('Dolphins won a trophy 🏆.');
} else if (dolphinsAverageScore === koalasAverageScore) {
    console.log('There was a draw.');
} else {
    console.log('Koalas won a trophy 🏆.');
}

// Bonus Data 1
dolphins = [97, 112, 101];
koalas = [109, 95, 123];
dolphinsAverageScore = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
koalasAverageScore = (koalas[0] + koalas[1] + koalas[2]) / 3;

let winner;
let winnersScore;
if (dolphinsAverageScore > koalasAverageScore) {
    winner = 'Dolphins';
    winnersScore = dolphinsAverageScore;
} else if (dolphinsAverageScore === koalasAverageScore) {
    winner = 'draw';
    winnersScore = dolphinsAverageScore;
} else {
    winner = 'Koalas';
    winnersScore = koalasAverageScore;
}

if (100 <= winnersScore) {
    if ('draw' == winner) {
        console.log(`There was a draw, both teams had average score ${winnersScore}.`);
    } else {
        console.log(`${winner} won a throphy 🏆 with average score ${winnersScore}.`);
    }
} else {
    console.log("No one won a trophy, because none of the teams collected more than 100 average score.");
}

// Bonus Data 2
dolphins = [97, 112, 101];
koalas = [109, 95, 106];
dolphinsAverageScore = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
koalasAverageScore = (koalas[0] + koalas[1] + koalas[2]) / 3;

winner;
winnersScore;
if (dolphinsAverageScore > koalasAverageScore) {
    winner = 'Dolphins';
    winnersScore = dolphinsAverageScore;
} else if (dolphinsAverageScore === koalasAverageScore) {
    winner = 'draw';
    winnersScore = dolphinsAverageScore;
} else {
    winner = 'Koalas';
    winnersScore = koalasAverageScore;
}

if (100 <= winnersScore) {
    if ('draw' == winner) {
        console.log(`There was a draw, both teams had average score ${winnersScore}.`);
    } else {
        console.log(`${winner} won a throphy 🏆 with average score ${winnersScore}.`);
    }
} else {
    console.log("No one won a trophy, because none of the teams collected more than 100 average score.");
}
*/

/*
-----------------------
Switch Statement lesson
-----------------------

const day = 'saturday';

switch (day) {
    case 'monday': // strict comparison here - day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare teory video.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
    case 'friday':
        console.log('Record videos.');
    case 'saturday':
    case 'sunday':
        console.log('Meet with friends 😁');
        break;
    default:
        console.log('Not a valid day!');
        break;
}

const language = prompt("What's your language?");

switch (language) {
    case 'chinese':
    case 'mandarine':
        console.log('MOST number of native speakers.');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers.');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language.');
        break;
    default:
        console.log('Greate language too 😁.');
        break;
}
*/

/*
-------------------------------------
Conditional (Ternary) Operator lesson
-------------------------------------

const age = 37;

const drink = (18 <= age) ? 'wine 🍷' : 'water 💧';
console.log(drink);

console.log(`I like to drink ${18 <= age ? 'wine 🍷' : 'water 💧'}.`);
*/

/*
----------------
Code Challenge 4
----------------
*/

const bill = 430;
const tip = bill * (((50 <= bill) && (300 >= bill)) ? 0.15 : 0.2);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`)