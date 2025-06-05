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

let arr = [1,2,3,4,5];
arr.forEach((val) => {

    console.log(val);
});