//?_Testing--JS version...(GitHub Push 1)
//?_Test-2--i.e., GitHub

//*_Day 5: June 21, 2022
//*_Algos & Jrl Self-Challenge 2022

//*_1)--Print all integers from 1 to 255
//*_Note to Prof. Alex: I'll explain what I mean later, but please note that I am very disappointed with myself, re: my performance on this simple challenge! :-(
// function printNums(){
//     for (let i = 0; i <= 255; i++){
//         console.log(i);
//     }
// }
// console.log(printNums());

//!-------Challenge-Number Divider--------//

//*_2)--MinMaxAvg; given an array, write a function to return said array's "min," "max," and "average."
//*_Note to Prof. Alex: Ditto this challenge; again, details later.

// function minMaxAvg(arr) {
//     var min = Infinity;
//     var max = -Infinity;
//     var sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//         if (arr[i] < min){
//             min = arr[i];
//         }
//         else if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     var avg = sum / arr.length;
//     console.log ("Min: " + min + "; Max: " + max + "; Avg: " + avg+ ". All done! :-)");
//   }

// minMaxAvg([1, 2, 3, 4, 5]);

//!3)--FAIL! :-| [/Angry Face Emoji]
//!_The goal is to do **THREE** algos total, per day. Unfortunately, I was so exhausted last night, I only ended at that last one--i.e., #-2, above! Mea culpa.

//*----------------------Day Divider------------------------//

//*_Day 6: June 22, 2022
//*_Algos & Jrl Self-Challenge 2022

//*--1)--Re-attempt of minMaxAvg;
//*--Notes: I was really disappointed in my performance with this algorithm yesterday, considering the fact that I have done it so many times before. And even now, I had to correct a mistake that was causing a bug, i.e., the proper placement of "var avg" and "console.log" in the right space between the last partition and the function-closing curly brace.

// function mma(arr){
// 	let min = Infinity;
// 	let max = -Infinity;
// 	let sum = 0;

// 	for (let i = 0; i < arr.length; i++){
// 		sum =  sum + arr[i];

// 		if (arr[i] < min){
// 			min = arr[i];
// 		}
// 		else if (arr[i] > max){
// 			max =  arr[i];
// 		}
// 	}
// 	var avg = sum / arr.length;
// 	console.log ("Hi! Please note that your min is " + min + ", and your max is " + max + ", and finally, your average is " + avg + "! :-) Good job!");
// }
// mma([1, 2, 3, 4, 5]);

//!-------Challenge-Number Divider--------//

//*--2)--New challenge; source of challenge and particular algorithm-answer: the "Leaflet" iOS app. Details of challenge/question: given a binary search tree and a number "n", return "true" if you can find two numbers in the tree that sum up to n.
//*--Notes--1: N/A ("No Comment")--as of 11:33 PM, first completion-attempt.
//*--Notes--2: After finishing the write-up of the given solution, I'm now stuck, v-z-v how to test it! :-| Challenge suspended for now, with self-awarded credit for the attempt (i.e., "grade" = PASS). I'm somewhat suspicious of this solution, but I'm not sure why.

// var findTarget = function(root, k){
// 	const helper = (root) => {
// 		if (!root){
// 			return;
// 		}
// 		helper(root.left);
// 		res.push(root.val);
// 		helper(root.right);
// 	}
// 	let res = [];
// 	helper(root);
// 	let left = 0;
// 	let right = res.length - 1;
// 	while (left < right){
// 		let target = res[left] + res[right];
// 		return true;
// 	}
// 	if (target < k){
// 		letf++;
// 	} else {
// 		right--;
// 		}
// 		return false;
// 	};
//console.log(findTarget_//!_(Not sure what or how to put said what, here, to test the algo!))

//!-------Challenge-Number Divider--------//

function waveSort(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  for (var i = 1; i < arr.length; i += 2) {
    if (arr[i - 1] < arr[i]) {
      var temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
    if (i + 1 < arr.length && arr[i + 1] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}
var waved = waveSort([1, 2, 3, 5, 6, 7]);
console.log(JSON.stringify(waved));

//*----------------------Day Divider------------------------//

//*_Day 7: June 23, 2022
//*_Algos & Jrl Self-Challenge 2022

//*--1)--"Mean, Median and Mode";
//*--Notes: Question and answer source: CoderByte Bootcamp- & Job-Interview Prep
//*--For actual text of answer-attempt, please look at the relevant entry in this directory/folder's Python (`mcaTManAlgos...`) file.

//!-------Challenge-Number Divider--------//

//*--2)--"Implement Map and Filter--Part 1: Map";
//*--Notes: Question and answer source: CoderByte Bootcamp- & Job-Interview Prep
//*--11:58 PM: Unfortunately, the solution isn't working the way it's supposed to; instead of returning [1, 4, 9, 16] and [100, 200, 300, 400] respectively for fn(s) "square" and "addZeros", I get the following result:
//?_Line 1 of result = [2,1,5,3,7,6]
//?_Line 2 of result = [Function: map]
//*--Notes conclusion: I guess I just have to do another tactical retreat! **Shrugs**

function map(arr, fn) {
  let result = [];

  //Apply the function to each element and store the result
  for (let i of arr) {
    let applied = fn(i);
    result.push(applied);
  }
  return result;

  //Usage
  let square = (x) => x * x;
  let addZeros = (x) => parseInt((x += "00"));

  map([1, 2, 3, 4], square);
  map([1, 2, 3, 4], addZeros);
}

console.log(map);

//!-------Challenge-Number Divider--------//

//*--3)--"Implement Map and Filter--Part 2: Filter";
//*--Notes: Question and answer source: CoderByte Bootcamp- & Job-Interview Prep

//?_xx

//!-------Challenge-Number Divider--------//

//*----------------------Day Divider------------------------//
