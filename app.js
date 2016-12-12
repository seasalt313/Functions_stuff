// FUNCTIONS
// Functions are names for processes
// Variables are names for data
//
// Benefits:
// -Naming
// -Grouping similar ideas
// -DRY
// -etc.
//
//
// doubleMyMoney is the name of the Function;
// money is a parameter, parameter is a fancy name for an input to a function;
// return is a special keyword that means 'heres the answer'


// function doubleMyMoney(money, taxRate) {
//   return money * 2;
// };
//
// function product(second, first) {
//   return first * second;
// };
//
// function makeChange(money) {
//   let change = [0,0,0,0];
//
//   change[0] = Math.floor(money/20);
//   money = money % 20;
//   change[1] = Math.floor(money/10);
//   money = money % 10;
//   change[2] = Math.floor(money/5);
//   money = money % 50;
//   change[3] = Math.floor(money/1);
//   money = money % 10;
//
//   return change;
//
// }
//
// let b = makeChange(66);
// let c = makeChange(100);
// let m = makeChange(13);
//
// console.log(b);
// console.log(c);

// 1) XWORD PRACTICE
// Write a function that returns the number of x's in a string
// inputs one string
// outputs one number

// let counter = 0;
//
//     function xword(input) {
//       for (var i = 0; i < input.length; i++) {
//         if (input[i] === "x") {
//           console.log("Yes there is an x in this string");
//           counter ++;
//         }
//       }
//       return counter;
//     }
//
//     let first = xword("texmex");
//     console.log("There are " + first + " x's in this string");



// 2) Another Practice Problem
// WRite a function that accepts an array of number and returns the average.

// Inputs: array of numbers
// output: number
//
// function average(array) {
//   let sum = 0;
//   for (var i = 0; i < array.length; i++) {
//    sum = sum + array[i];
//   }
//   // return sum;
//   // return sum/array.length;
//   console.log("The sum of this array is: " + sum);
//   console.log("The average of this array is: " + sum/array.length);
//   }


    // average([1, 3, 5]);
    // average([1, 1, 1, 1]);

// console.log(average[1, 2, 4]);
