// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/* -------------------------------------- *
 * Setting up Prettier and VS Code lesson *
 * -------------------------------------- */

// let testVariable = 23;
// let ts = `${testVariable} asdasdajsvdjavsd, sjhbdi asbdabsdiah iwbadibaida`;
// let ts1 = 'asdasdad';
// let ts3 = "adasfsf'asdasd";

// /* TODO adnajn */
// console.log('test run / 2022.08.15');

/* ---------------------------------------------------------- *
 * Installing Node.js and Setting Up a Dev Environment lesson *
 * ---------------------------------------------------------- */

/* --------------------------- *
 * Learnign How to Code lesson *
 * --------------------------- */

/* ------------------------------------------------------------- *
 * How to Think Like a Developer: Become a Problem Solver lesson *
 * ------------------------------------------------------------- */

/* ------------------------------------------- *
 * Using Google, Stackoverflow and MDN lesson *
 * ------------------------------------------- */
/*
const temp1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temp2 = [5, -1, -7, -10, 'error', -9, -8, -7, -5, 4, 9, 5];
const calcTempAplitude = function (t1, t2) {
  let temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; ++i) {
    let curTemp = temps[i];
    if ('error' === curTemp) continue;
    else if (max < curTemp) max = curTemp;
    else if (min > curTemp) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAplitude(temp1, temp2));
*/
/* ------------------------------------------------- *
 * Debugging with the Console and Breakpoints lesson *
 * ------------------------------------------------- */

// const measureKelvine = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: 10, // Number(prompt('Degrees celsius: ')),
//   };

//   console.table(measurement);

//   console.warn(measurement.value);
//   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvine());

// const temp1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temp2 = [5, -1, -7, -10, 'error', -9, -8, -7, -5, 4, 9, 5];
// const calcTempAplitudeBug = function (t1, t2) {
//   let temps = t1.concat(t2);
//   let max = 0; // temps[0];
//   let min = 0; // temps[0];
//   for (let i = 1; i < temps.length; ++i) {
//     let curTemp = temps[i];
//     if ('error' === curTemp) continue;

//     if (max < curTemp) max = curTemp;
//     if (min > curTemp) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(calcTempAplitudeBug([1, 4, 5], [4, 7, 8]));
// console.log(calcTempAplitudeBug(temp1, temp2));

/* -------------------------- *
 * Codding challenge 3.1      *
 * -------------------------- */

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; ++i) {
    forecast = forecast + `... ${arr[i]}℃ in ${i + 1} days `;
  }
  forecast = forecast.concat('...');

  console.log(forecast);
};

printForecast(data1);
printForecast(data2);
