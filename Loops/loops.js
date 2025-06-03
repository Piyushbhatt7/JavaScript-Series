// Loops are used to execute a piece of code again & again

// for loop
 
// for(let count = 1; count <= 5; count++)
// {
//     console.log("Count is: " + count) // 5 time executed
// }


// Calculated sum of 1 to 5
// let sum = 0;
// for(let i = 1; i<=5; i++)
// {
//   sum += i;
// }

// console.log("Sum = ", sum);

// while loop

// while(condition)
// {
//     // do some work
// }

// let i = 1;
// while(i<=10)
// {
//     console.log("i = ", i);
//     i++;
// }

// do-while Loops

// do {
//      do some work

// }while(condition)

// let i = 1;
// do {
//     console.log("I love India");
//     i++;
// }
// while(i<=10);

// for-of loop


// for(let val of strVar)
// {
//      do some work
// }

let str = "Hello world";
let size = 0;
for(let i of str)
{
    console.log(i);
    size++;
}

console.log(size);