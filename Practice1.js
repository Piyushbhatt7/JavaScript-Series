// Get user to input a number using prompt ("Enter a number: ") .Check if the number is a multiple of 5 or not.

let num = Number(prompt("Enter a number"));

if(num % 5 === 0)
{
    console.log(`The ${num} is multiple of 5`);
}

else {
    console.log(`The ${num} is not a multiple of 5`);
    
}