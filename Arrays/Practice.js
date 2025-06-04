// For a given array with marks of students -> [85, 97, 4, 37, 76, 60]
// Find the average marks of the entire class.

 let marks = [86, 97, 4, 37, 76, 60];
 let sum = 0;

for(let arr of marks)
{
    sum += arr;
}

console.log("sum of marks: ", sum);
