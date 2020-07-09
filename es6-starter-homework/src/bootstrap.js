// import classChallenge { name } from './classChallenge';
// // import * as classChallenge from './classChallenge';

// console.log(classChallenge())
// console.log(name)

// X Create a new es6-starter project
// X Call that project: es6-starter-homework
// X Change into that folder
// X Open that folder into vscode
// X Install your dependencies
// X Start your server
// X Check to make sure your project is working in the browser
// Inside your bootstrap.js file create three functions 
// Write three functions that compute the sum of the numbers in an array: using a for-loop, a while loop, and a do-while loop.

// EXTRA CREDIT
// Initialize git for your folder
// Create a .gitignore file and add node_modules to that file
// Create a GitHub repo
// Push your code up to GitHub

// Importing / Exporting
// Create a new file in your src folder called classChallenge.js
// Inside the classChallenge.js file make a default export and two named exports
// default function needs to return <div>classChallenge</div>
// one of the named exports needs to be a variable that has a value of a string "welcome"
// one of the named exports needs to be a function that returns the sum of two numbers
// Inside the bootstrap.js file, I want you to import the classChallenge file and use the default function along with the two named exports
// console.log() the default function along with the two named exports
// commit your code if you did the extra credit from above



// Function Declaration sumList
// Make that function accept an argument

//  forEach-loop,
// function sumList(numbers) {
//   let sum = 0
//   numbers.forEach((number) => {
//     debugger
//     sum = sum + number
//   })
//   return sum
// }

// sumList([1, 2, 3, 4, 5])

// // Arrow Function
// // while loop

// const arrowSum = (numbers) => {
//   while (numbers.length) i = i + 1

// }


// Function Expression
//  do-while loop.
// const expressionSum = function(numbers) {
  

// }

// var nums = [10, 30, 40, 60, 50], 
//     num = 0;

// for (var i = 0; i < nums.length; i++) {
//     num += nums[i];
// }
// console.log(num);



// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }



//   do {
//     text += "The number is " + i;
//     i++;
//   }
//   while (i < 10);

// function toThePowerOf(numbers) {
//   let i = 1
//   numbers.forEach((number) => {
//       let reducedNum = numbers.reduce(i++ * i)
//   })
//   return reducedNum
// }

// console.log(toThePowerOf(2, 3))

//  forEach-loop,
// function sumList(numbers) {
//   let sum = 0
//   numbers.forEach((number) => {
//     // debugger
//     sum = sum + number
//   })
//   return sum
// }

// console.log(sumList([1, 2, 3, 4, 5, 6]))


// Joel's solution: (not working)


// function expSolve(numbers) {
//   let expo = 1;

//   numbers.forEach((number) => {
//     expo = expo * number
//   })
//   return expo
// }

// console.log(expSolve([2, 3]))

// let arr = Array(3).fill(2)

// console.log(arr)





// Jordan's solution:

const toThePowerOf = (num, exp) => {
  const items = Array(exp).fill(num);
  const reducer = (total, currentValue) => total * currentValue;
  return items.reduce(reducer);
}

toThePowerOf(2, 3);

// Array(3).fill(2);
// 2 * 2 * 2