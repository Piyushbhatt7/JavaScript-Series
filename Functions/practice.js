// Functions in JS
// Block of code that performs a specific task, can be invoked whenever needed

// Function Definations

// function functionName(){
     // do some work
// }

// function functionName(para1, para2..)
// {
     // do some work
// }

// Function Call

// functionName();

// function myFu()
// {
//     console.log("Welcome to JS");
//     console.log("Hii my friends");
// }

// myFu();

// Function to calculate 2 number

// function sum(x, y)
// {
//     console.log(x+y);
// }

// sum(57, 89);

// Arrow function
// Compact way of writing a function

// const funName = (para1, para2) => {
//      do some work
// }

// sum fun
// const sum = (a,b) => {
//    console.log(a+b);
// }

// sum(2,2);

// Q1) Practice a function using "function" keyword that takes a String as an argument & returns the number of vowels in the string.

// Q2) Create an arow function to perform the same task.

// function countVowels(str)
// {
//     let count = 0;
//     // "HelloWorld"
//     for(const char of str)
//     {
//        if(
//         char === "a" || 
//         char === "e" || 
//         char === "i" || 
//         char === "o" || 
//         char === "u"
//     )
//        {
//         count++;
//        }
//     }

//     console.log(count);
// }

// countVowels("helloworld");

// forEach Loop in Array

// arr.forEach(callBackFunction)
// CallbackFunction: Headers, it is a function to execute for each element in the Array

// A callback is a function passed as an argument to another function

// let arr = [1,2,3,4,5];
// arr.forEach((val) => {

//     console.log(val);
// });

// For a given array of numbers, print the square of each

// let nums = [2, 3, 4, 5, 6];

// nums.forEach((num) => 
// {
//      console.log(num * num);
     
// });

// Filter create a new array of elements that give true for a condition/ filter.
// eg. all even elements

// let newArr = arr.filter((value) => {
//      return val % 2 === 0;
// })

// let arr = [1,2,3,,45,6];
// let evenArr = arr.filter((val) => {
//      return val  > 2;
// });

// console.log(evenArr);


// We given an array of marks of students. Filter out the marks of students that scored 90+.

// let stumarks = [87, 93, 64, 99, 86];

// let newarr = stumarks.filter((value) => {
//      return value > 90;
// });

// console.log(newarr);

// take a number n as input from user. Create an array of number from 1 to n.
// Use the reduce method to calculate sum of all number in the Array.
// Uae the reduce method to calculate product of all number in the array.

let n = prompt("enter a number: ");
let arr = [];

for(let i=1; i<=n; i++)
{
     arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((prev, curr) => {
     return prev * curr;
});

console.log(sum);