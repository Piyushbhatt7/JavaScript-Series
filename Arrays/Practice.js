// For a given array with marks of students -> [85, 97, 4, 37, 76, 60]
// Find the average marks of the entire class.

 let marks = [86, 97, 4, 37, 76, 60];
 let sum = 0;

for(let arr of marks)
{
    sum += arr;
}
let avg  =sum / marks.length;
console.log("average of marks are: ", avg);
console.log("sum of marks: ", sum);
