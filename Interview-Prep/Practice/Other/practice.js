//*_________________Nov 8, 2022________________*//
//!_#-1: Print From 1 to 255:
// function justPrint(){
//     for (var i = 0; i <= 255; i++){
//         console.log(i);
//     }
// }
// justPrint();

//*-------------------------------------------//
//!_#-2: Print Odds 1 to 255:
// function printOdds(){
//     for (var i = 1; i <= 255; i += 2){
//         console.log(i);
//     }
// }
// printOdds();

//*-------------------------------------------//
//!_#-3: Print 0 to 255 With Sums.
// function printAndSum(){
//     var sum = 0;
//     for (var i = 0; i <= 255; i++){
//         sum = sum + i;
//         console.log (i + ' | Current Sum: ' + sum);
//     }
// }
// printAndSum();

//*-------------------------------------------//
//!_#-4: Iterate Through Array, Printing Each Value.
// function iterateThroughArray(arr){
//     for (var i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// iterateThroughArray([1, 2, 3]);

//*-------------------------------------------//
//!_#-5: Given an array, find and print its max.

// function printMax(arr){
//     var max = 0;
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }
// printMax([1, 2, 3, 34, 3, 5, 5, 77]);

//*_________________Nov 10, 2022________________*//
//!_#-6: Analyze an array's values and print the average.

// function findAvg(arr){
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     var avg = sum / arr.length;
//     console.log(avg);
// }

// findAvg([1, 2, 3, 4, 5]);

//*-------------------------------------------//

//?_console.log("Just Testing...")

//*-------------------------------------------//

//*_________________Nov 15, 2022______________*//

//!_#-7: Create an array with all odd integers between 1 and 255 (inclusive).

// function returnOdds1To255(){
//     var newArr = [];
//     for (let i = 1; i <= 255; i += 2){
//         newArr.push(i);
//     }
//     return newArr;
// }

// console.log(returnOdds1To255());

//*-------------------------------------------//*
//!_#-8: Square each value in a given array, returning the array, returning the array with changed--i.e., squared--values.

// function squareArrValues(arr){
//     for (var i = 0; i < arr.length; i++){
//         var numSquared = arr[i] * arr[i];
//         arr[i] = numSquared;
//     }
//     return arr;
// }
// console.log(squareArrValues([1, 2, 3, 4, 5]));

//*-------------------------------------------//*
//!_#-9: Given an array and a value Y, count and print the number of array values greater than Y.

// function greaterThanY(arr, y){
//     var numCount = 0;
//     var values = [];
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] > y){
//         numCount = numCount + 1;
//         values.push(arr[i]);
//         }
//     }
//     console.log(values);
// }
// greaterThanY([1, -2, 3, 0, -5, 5, 7], 3);

//*-------------------------------------------//*
//!_#-10: Zero out the negative numbers. Create an array, and return as 0 any values less than 0.

// function returnZeros(arr){
//     var zero = 0;
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] < zero){
//             arr[i] = zero;
//         }
//     }
//     return arr;
// }
// console.log(returnZeros([1, 2, 0, -3, 9, 10, -45], 3));

//*-------------------------------------------//*
