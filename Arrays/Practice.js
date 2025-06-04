// For a given array with marks of students -> [85, 97, 4, 37, 76, 60]
// Find the average marks of the entire class.

//  let marks = [86, 97, 4, 37, 76, 60];
//  let sum = 0;

// for(let arr of marks)
// {
//     sum += arr;
// }
// let avg  = sum / marks.length;
// console.log("average of marks are: ", avg);
// console.log("sum of marks: ", sum);


// For a given array with prices of 5 items -> [250, 645, 300, 900, 50];
// All items are offer of 10% OFF on them. Change the array to store final prices after applying the offer.

let items = [250, 645, 30, 900, 50];
let idx = 0;
for(let val of items)
{
    console.log(`value at index ${idx} = ${val}`);
    let offer = val / 10;
    items[idx] = items[idx] - offer;
    idx++;
}