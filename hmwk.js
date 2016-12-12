//
// 1) Sum - done
// Write a function called sum that takes two parameters and returns the sum of those 2 numbers.
//
// function sum(a, b) {
//   return a + b;
// }
//
// console.log(sum(2, 3));
//
// // 02 | Avg - done
//
// // Write a function named avg that takes 3 parameters and returns the average of those 3 numbers.
//
// function avg(a, b, c){
//   return ((a+b+c)/3);
// }
// console.log(avg(5, 6, 7));
//
// // 03 | greaterThan- Done
// //
// // Write a function called greaterThan that takes two parameters and returns true if the second parameter is greater than the first. Otherwise the function should return false.
//
// function greaterThan(a, b){
//   if(b > a) {
//     return true;
//     console.log("true");
//   }
// }
// console.log(greaterThan(5, 6));

// 04 | secondLargest
//
// Write a function called secondLargest that takes an array and returns the second largest number

// let array = [10, 3, 13, 9, 11];
// let largest = 0;
// let secondLg = null;
// //
// function secondLargest(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (largest < array[i]) {
//       largest = array[i];
//     } else if (secondLg < array[i]) {
//       secondLg = array[i];
//     }
//   }
//   return secondLg;
// }
//
// var test = secondLargest(array);
// console.log(test);
//
// console.log("The largest number is " + largest);
// console.log("The second largest number is " + secondLg);


// 05 | containsVowel, not correct***
//
// Write a function called containsVowel that takes a single string and returns true if there is at least one value or false otherwise.

// let sentance = "what";
// let vow = "";
//
// function containsVowel(string) {
//   let letter = string.split("");
//   for (var i = 0; i < letter.length; i++) {
//     if (letter[i] !== "a" || letter[i] !== "e" || letter[i] !== "i" || letter[i] !== "o" || letter[i] !== "u") {
//       console.log("This word contains no vowels");
//     } else {
//       vow = letter[i];
//       console.log("This word contains a vowel, the first one is " + vow);
//     return true;
//   }
// }
// }
// containsVowel(sentance);

//
// 06 | piglatin - Incomplete, cant get the first letter off
//
// Write a function called piglatin that takes a single string and returns the piglatin version of that string.
//
// Hint: look into the split() function that you can call on strings.

// let str = "Bring your laptop";
// let pig = str.split(" ");
//
//
//  function piglatin(string) {
//
//    for (var i = 0; i < pig.length; i++) {
//       console.log(pig[i] + "ay");
//       let word = pig[i];
//
//       console.log(word);
//       let letter = word.split("");
//
//       console.log(letter[0]);
//
//         for (var x = 0; x < word.length; x++) {
//           console.log();
//         }
//    }
//  }
//
// console.log(piglatin(str));


// 07 | longestWord - worked this out in class and its still not right...
//
// Write a function called longestWord that takes a single string and returns the longest word in the string.
//
// Hint: look into the split() function that you can call on strings.

//
// function longestWord(sentance){
// // 1) Convert sentance into an array
// // 2) Search through words for the largest letter count
// // 3) Once we have checked them all, return the largest one
//
//   let words = sentance.split(" "); //array of strings
//   let longest = 0; //the length of the longest word so far
//   let keeper = null; // the longest word itself
//
//     for (var i = 0; i < words.length; i++) {
//       if (longest < words[i].length) { //if this word is longer than the longest so far
//         longest = words[i].length; // we have a new longest word
//         keeper = words[i];
//         console.log("The longest word in this string is " + longest + " letters long, it is " + keeper); //return longest
//       }
//       return keeper;
//     }
// }
//
//
// let winner = longestWord("How much would a woodchuck chuck");
// console.log(winner);


//
// 08 | divisors - save this
//
// Write a function called divisors that accepts a number and returns an array of all of the numbers that divide evenly into it.

// 09 | weave - Not solved
//
// Write a function called weave() that accepts an input string and number. The function should return the string with every xth character replaced with an 'x'.

// let sentance = "This is a string";
//
//     function weave(string, number) {
//       let ltr = string.split("");
//       for (var i = 0; i < ltr.length; i++) {
//         if (ltr[i] === number) {
//           ltr[i] = number;
//           console.log(ltr);
//           // console.log(ltr[i]);
//         }
//       }
//     }
//
// let hello = weave("how are you", 2);
// console.log(hello);

// 10 | bonus - DONE
//
// Jeb eats out at restaurants all the time but is horrible at math. He decides to write a function called bonus() that accepts a single parameter (the cost of the meal), and should return the tip Jeb should give his waiter. Jeb uses two rules to calculate tips:
//
// First he always tips 20% on the original bill.
// He then rounds up to the nearest dollar. For example, if the total with tip is $22.78, he'd round up to $23.00.

// function bonus(cost) {
//   let twenty = cost * .20;
//   console.log("The tip should be " + twenty);
//   let total = cost + twenty;
//   console.log("The exact total is " + total);
//   let rounded = Math.ceil(total);
//   console.log("The total with it rounded up is " + rounded);
// }
//
// console.log(bonus(15.2));

// 11 | pokemon - NOt solved
//
// Write a function called pokemon that accepts an array of numbers. Each element in the array represents a day, and the number represents the number of Pokemon caught on that day. Return an array of the same length that contains the number of total Pokemon caught up to that day.
//
// For example,
//
// pokemon([1, 2, 5, 1, 3]); // returns [1, 3, 8, 9, 12]

// let pokies = [1, 3, 4, 14];
//
// function pokemon(array) {
//   for (var i = 0; i < array.length; i++) {
//     let day = array.findIndex(function(index){
//       console.log(index);
//     });
//   }
// }
// console.log(pokemon(pokies));

//
// Hard mode
//
// 12 | hamming -- UGH
//
// Write a function called hamming that accepts two strings. If the lengths of the strings are not equal, the function should return zero. Otherwise, return the number of letters that are in the same position in both words.

// function log(element, index) {
//   console.log(" the letter at index: [' + index + '] = " + element);
// }
//
// function hamming(string1, string2) {
//   var first_line = string1.split("");
//   var second_line = string2.split("");
//   if (string1.length === string2.length) {
//     for (var i = 0; i < first_line.length; i++) {
//       if (first_line[i] === second_line[i]) {
//         console.log("One of the letters in each word match in the same place");
//         console.log(first_line[i]);
//         // console.log(first_line);
//         // console.log(first_line[i].index());
//         // [first_line[i]].forEach(log(first_line[i], i));
//         // console.log(Math.valueOf(first_line[i]));
//         return true
//       } else {
//       console.log("The strings arent equal");
//       return 0
//       }
//     }
//   }
// }
//
// console.log(hamming("whats", "whats")); //when the string is multiple words then it doesnt work? it only works if both strings are just a word.

// 13 | multiples - solved except I couldnt put in array ** .push?
//
// Write a function called multiples that accepts two numbers and returns an array of all numbers from 1 - 100 that are evenly divisible by both
//

// // let arr = [];
// function multiples(num1, num2){
//   for (var i = 0; i < 100; i++) {
//     if (i%num1 === 0 || i%num2 === 0) {
//       // i.push(arry[]);
//       // return arr[i];
//       // console.log(arr);
//       console.log(i);
//     }
//   }
// }
//
// var mult = multiples(7,9);
// console.log(mult);
//
// 15 | sprint
//
// Write a function called sprint that accepts a single array of objects representing Olympic sprinters, each which has a name (string) and time (in seconds, so a number). Return the name of the athlete with the fastest time.
//
// let object1 = {
//   name: mariam, time: 5],
//   [name: maple, time 7]
// }
//
// function sprint(name, time){
// if (true) {
//
// }
// }
