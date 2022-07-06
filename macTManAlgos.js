//_Testing--JS version...(GitHub Push 1)
//_Test-2--i.e., GitHub

//! Template 1 Starts Below:
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//! Template 2 Starts Below:
//*----------------------Day Divider------------------------//
//*_Day X: [Month] DD, 2022 
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
/*
?2–[Add Details Here]
?3–[Add Details Here]
?4–[Add Details Here]
*/
//*_Algos & Jrl Self-Challenge 2022
//?_Algo here
//?_Cont'd
//?_Cont'd

//!-------Challenge-Number Divider--------//
//?_Algo here
//?_Cont'd
//?_Cont'd

//!-------Challenge-Number Divider--------//
//?_Algo here
//?_Cont'd
//?_Cont'd

//! Template Ends Below (Delete This Line):
//*----------------------Day Divider------------------------//

//*_First Day Of Challenge on Mac; Some Challenges Are Saved to PC directory and Py file.
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

// function waveSort(arr) {
//   arr = arr.sort(function (a, b) {
//     return a - b;
//   });
//   for (var i = 1; i < arr.length; i += 2) {
//     if (arr[i - 1] < arr[i]) {
//       var temp = arr[i];
//       arr[i] = arr[i - 1];
//       arr[i - 1] = temp;
//     }
//     if (i + 1 < arr.length && arr[i + 1] < arr[i]) {
//       temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   return arr;
// }
// var waved = waveSort([1, 2, 3, 5, 6, 7]);
// console.log(JSON.stringify(waved));

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

// function map(arr, fn) {
//   let result = [];

//   //Apply the function to each element and store the result
//   for (let i of arr) {
//     let applied = fn(i);
//     result.push(applied);
//   }
//   return result;

//   //Usage
//   let square = (x) => x * x;
//   let addZeros = (x) => parseInt((x += "00"));

//   map([1, 2, 3, 4], square);
//   map([1, 2, 3, 4], addZeros);
// }

// console.log(map);

//!-------Challenge-Number Divider--------//

//*--3)--"Implement Map and Filter--Part 2: Filter";
//*--Notes: Question and answer source: CoderByte Bootcamp- & Job-Interview Prep

//?_Incomplete! (Bad Seif!)

//!-------Challenge-Number Divider--------//

//*----------------------Day Divider------------------------//

//*_Day 8: June 24, 2022
//*_Algos & Jrl Self-Challenge 2022

//?_Please Note: This day's challenges have been done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//*----------------------Day Divider------------------------//

//*_Day 9: June 25, 2022
//*_Algos & Jrl Self-Challenge 2022

//?_Please Note: This day's challenges have been done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//*----------------------Day Divider------------------------//

//*_Day 11: June 27, 2022
//*_Algos & Jrl Self-Challenge 2022

//*--1)--"Find Majority Element (Appearing More Than n/2 times)";
//*--Note 1: Question source: https://afteracademy.com/problems/merge-two-sorted-lists
//*--Note 2: Answer source: https://towardsdev.com/how-to-solve-min-stack-optimally-with-javascript-eb81a7ae3bb5 
//*--Note 3: Code testing suspended till tomorrow.

// function last(stack){
//   return stack[stack.length - 1]
// }
// class minStack {
//   constructor(){
//     this.stack = []
//     this.minStack = []
//   }

// push(x){
//   if(this.minStack.length === 0 || x <= last(this.minStack)){
//     this.minStack.push(x)
//   }
//   this.stack.push(x)
// }

// pop(){
//   if(last(this.minStack) === last(this.stack)){
//     this.minStack.pop()
//   }
//   return this.stack.pop()
// }

// top(){
//   return last(this.stack)
// }

// getMin(){
//   return last(this.minStack)
//   }
// }

//!-------Challenge-Number Divider--------//
//*--2)--"Merge Two Sorted Lists";
//*--Note 1: Question source: https://afteracademy.com/problems/merge-two-sorted-lists 
//*--Note 2: Answer source: Talhadev; https://www.codegrepper.com/profile/talha-bin-khalil
//*--Note 3: Code testing suspended till tomorrow.

// let arrOne = [0, 3, 4, 31];
// let arrTwo = [4, 6, 30, 31, 33];

// let j = 0;
// let k = 0;
// let mergedArray = [];

// let length = arrOne.length + arrTwo.length;

// console.log(lenght)

// for(let i = 0; i <= length - 1; i++){
//   if(arrOne[j] < arrTwo[k]){
//     mergedArray.push(arrOne[j]);
//     j++;
//   }
//   else if (arrOne[j] > arrTwo[k]){
//     mergedArray.push(arrTwo[k]);
//     k++;
//   }
//   else if (arrOne[j] == arrTwo[k]){
//     mergedArray.push(arrOne[j]);
//     mergedArray.push(arrTwo[k]);
//     j++;
//     k++;
//   }
// }
// console.log(mergedArray);

//!-------Challenge-Number Divider--------//
//*--3)--"Find the Majority Element (Which Appears < n/2 Times)";
//*--Note 1: Question and answer source: CoderByte Bootcamp- & Job-Interview Prep
//*--Note 2: Code testing suspended till tomorrow.

// function majorityElement(arr){
//   let candidate = null;
//   var count = 0;

//   for (let i = 0; i < arr.length; i++){
//     if(candidate === null || count === 0){
//       candidate = arr[i];
//       count = 1;
//     } else if (arr[i ===  candidate){
//       count += 1;
//     } else {
//       count -= 1;
//     }
//   }
//   count = 0;
//   for (let el of arr){
//     if (el === candidate){
//       count += 1;
//     }
//   }
//   return (count > Math.floor(arr.length / 2)) ? candidate : null;
// }

//*----------------------Day Divider------------------------//

//*_Day 12: June 28, 2022
//*_Algos & Jrl Self-Challenge 2022

//!--1)--"Sorted Array to Balanced BST"; 
//*--Note 1: Answer source: https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/ 
//*--Note 2: Code testing suspended.

// class Node
// {
//   constructor(d)
//   {
//     this.data = d;
//     this.left = null;
//     this.right = null;
//   }
// }

// var root = null;

// function sortedArraytoBST(arr, start, end)
// {
//   if (start > end)
//   {
//     return null;
//   }
//   var mid = parseInt((start + end) / 2);
//   var node = new Node(arr[mid]);
//   node.left = sortedArraytoBST(arr, start, mid - 1);
//   node.right = sortedArraytoBST(arr, mid + 1, end);
//   return node;
// }

// function preOrder(node)
// {
//   if (none == null)
//   {
//     return;
//   }
//   document.write(node.data + " ");
//   preOrder(node.left);
//   preOrder(node.right);
// }

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var n = arr.length;
// root = sortedArraytoBST(arr, 0, n - 1);
// document.write("Preorder traversal of constructed BST<br>");
// preOrder(root);

//*----------------------Day Divider------------------------//

//*_Day 13: June 29, 2022//*_Algos & Jrl Self-Challenge 2022

//!_Challenge-1 Placeholder:
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//!-------Challenge-Number Divider--------//
//!_Challenge-2 Placeholder:
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//!-------Challenge-Number Divider--------//
//!_Challenge-3 Placeholder:
//!_Challenge-3 Note: Answer-Source: https://towardsdev.com/how-to-solve-min-stack-optimally-with-javascript-eb81a7ae3bb5.

// function last(stack){
//   return stack[stack.length - 1]
// }

// class minStack {
//   constructor(){
//     this.stack = []
//     this.minStack = []
//   }
// }

// push(x){
//   if (this.minStack.length === 0 || x <= last(this.minStack)){
//     this.minStack.push(x)
//   }
//   this.stack.push(x)
// }

// pop(){
//   if(last(this.minStack) === last(this.stack)){
//     this.minStack.pop()
//   }
//   return this.stack.pop()
// }

// top(){
//   return last(this.stack)
// }
// getMin(){
//   return last(this.minStack)
// }

//*----------------------Day Divider------------------------//

//*_Day 14: June 30, 2022//*_Algos & Jrl Self-Challenge 2022
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
/*
?2–Calculate power function--JS
?3–Wave Array--JS
?4–Move zeros to an end--Py
*/
//!_Challenge-1:
//!_Challege-1 Note 1: For some reason, running the code below in the terminal returns "Infinity"! :-(
//!_Challenge-1 Note 2; Answer Src: https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/ 

// function power(x, y)
// {
//     var temp;
//     if (y == 0)
//         return 1;
//     temp = power(x, y/2);
//     if (y % 2 == 0)
//         return temp*temp;
//     else
//         return x*temp*temp;
// }

// console.log(power(5, 2));

//!-------Challenge-Number Divider--------//
//!_Challenge-2:
//!_Challenge-2 Note 1: "Whoo-hoo!" I just tested this particular challenge, and it works! :-)
//!_Challenge-2 Note 2; Answer Src: https://www.geeksforgeeks.org/sort-array-wave-form-2/

// function swap(arr, x, y){
//     let temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp; 
// }

// function sortInWave(arr, n){
//     arr.sort((a, b) => a - b);
//     for (let i = 0; i < n - 1; i += 2)
//         swap (arr, i, i + 1);
// }

// arr = [10, 90, 49, 2, 1, 5, 23];
// let n = arr.length;

// sortInWave(arr, n);

// for(let i = 0; i < n; i++)
//     console.log(arr[i] + " ");

//!-------Challenge-Number Divider--------//
//!_Challenge-3 Placeholder:

//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//*----------------------Day Divider------------------------//

//*_Day 15: July 1, 2022 
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
/*
?–Swapping Nodes In A Linked List Without Swapping Data--JS
?–Find first and last positions of an element in a sorted array--Py
*/

//!_Challenge-1:
//!_Challenge-1 note-1, July 1: https://www.geeksforgeeks.org/javascript-program-for-swapping-nodes-in-a-linked-list-without-swapping-data/.
//!_Challenge-1 note-2, ``: Because of the adjustments I had to make--especially, re: trying to properly get the program to work via "console.log" vs. the "document.write" that the author(s) use(s) on the site shared above, unfortunately, the code below isn't working when I test it here: https://jsfiddle.net/. 

// class Node {
//     constructor(val){
//         this.data = val;
//         this.next = null;
//     }
// }

// var head = null;
// var tail = null;

// function addNote(data){
//     var newNode = new Node(data);

//     if (head === null){
//         head = newNode;
//         tail = newNode;
//     }
//     else {
//         tail.next = newNode;
//         tail = newNode;
//     }
// }

// function swap(n1, n2){
//     var prevNode1 = null;
//     var prevNode2 = null;
//     node1 = head, node2 = head;

//     if (head == null){
//         return;
//     }

//     if (n1 == n2);
//         return;
    
//     while (node1 != null && node1.data != n1){
//         prevNode1 = node1;
//         node1 = node1.next;
//     }

//     while(node2 != null && node2.data != n2){
//         prevNode2 = node2;
//         node2 = node2.next;
//     }
//     if (node1 != null && node2 != null){
//         if (prevNode1 != null)
//         prevNode1.next = node2;
//         else
//             head = node1;

//         var temp = node1.next;
//         node1.next = node2.next;
//         node2.next = temp;
//     }
//     else {
//         console.log("Sorry, no can't do! :-(")
//         return;
//     }
//     while (current != null){
//         console.log(current.data + " ");
//         current = current.next;
//     }
//     return;
// }

// node1 = 1;
// node2 = 2
// node3 = 3;
// node4 = 4;
// node5 = 5;
// node6 = 6;

// console.log();
// display();

// swap(6, 1)

// console.log();
// display();

//!-------Challenge-Number Divider--------//
//!_Challenge-2 Placeholder:
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//*----------------------Day Divider------------------------//
//*_Day 16: June 4, 2022 
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
/*
?2–0--Not on my list, but added ad-hoc iteration vs. recursion and time-complexity learning: Fibonacci algorithm using both iterative and recursive solutions. To be done later. Source: https://medium.com/quick-code/fibonacci-sequence-javascript-interview-question-iterative-and-recursive-solutions-6a0346d24053 
?_1--Merge Two Sorted Lists; You are given two sorted lists having head as head1 and head2 , write a program to merge them into one big sorted list
?_2-xx
?_3–xx
*/
//*_Algos & Jrl Self-Challenge 2022
//!_Challenge 1:
//!_Note: Note tested as of 11:42 PM, completion time.
// function sortedMerge(a, b){
//     let result = null;
// }
// let lastPtrRef = result;

// while (1){
//     if (a == null){
//         lastPtrRef = b;
//         break;
//     }
//     else if (b == null){
//         lastPtrRef =  a;
//         break;
//     }
//     if (a.data <= b.data){
//         moveNode(lastPtrRef, a);
//     } else {
//         moveNode(lastPtrRef, b);
//     }
//     lastPtrRef = ((lastPtrRef).next);
// }
// return (result);

//!-------Challenge-Number Divider--------//
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//!-------Challenge-Number Divider--------//
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//*----------------------Day Divider------------------------//
//*_Day 17: July 5, 2022 
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
/*
?2--Merge two binary tree (#-12 on "Easy List")--JS;
?3--Sorted Array To Balanced BST (#-13 '')--JS;
?4--Minimum absolute difference in BST (#-14 '')--Py.
*/
//*_Algos & Jrl Self-Challenge 2022

console.log(mergeTrees(t1, t2));

//!_Challenge 1: Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. Write a program to merge them into a new binary tree.
//!_Testing Suspended. 

// var mergeTrees = function(t1, t2){
//     if (t1 === null)
//         return t2;
//     if (t2 === null)
//         return t1;
//     t1.val += t2.val;
//     t1.left = mergeTrees(t1.left, t2.left);
//     t1.right = mergeTrees(t1.right, t2.right);
//     return t1;

// }
// console.log(mergeTrees(t1, t2));

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Given an array, arr[] having all the elements sorted in ascending order, write a program to convert it to a height balanced BST.
//!_Testing Suspended.

// var sortedArr = function(nums){
//     if (nums.length === 0) retun null;
//     let middle = Math.floor(nums.length / 2);
//     let root = new TreeNode(nums[middle]);

//     root.left = sortedArr(nums(0, middle));
//     root.right = sortedArr(nums.slice(middle + 1));

//     return root;
// }

//!-------Challenge-Number Divider--------//
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.


//*----------------------Day Divider------------------------//