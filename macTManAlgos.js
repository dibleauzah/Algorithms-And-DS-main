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
//*_Day 18: July 7, 2022 
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
//*_Another note: for today, I will split the current challenges' write up over two days.

//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
//?_15–Lowest Common Ancestor of a BST--Py
//?_16–Check if two arrays are equal or not--JS
//?_17–First Unique Character in a String--Py

//!_Challenge 1:
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.


//!-------Challenge-Number Divider--------//
//!_Challenge 2: 

// function areEqual(arr1, arr2){
//     let n = arr1.length;
//     let m = arr2.length;
// }

// if (n != m)
//     return false;

// let map
//     = new Map();
// let count = 0;
// for (let i = 0; i < n; i++){
//     if (map.get(arr1[i]) == null)
//     map.set(arr1[i], 1)
//     else {
//     count = map.get(arr1[i]);
//     count++;
//     map.set(arr1[i], count);
//     }
// }

// for (let i = 0; i < n; i++){
//     if (map.get(arr2[i] == 0))
//     return false;

//     count = map.get(arr2[i]);
//     --count;
//     map.set(arr2[i], count);
// }
// return true;

// let arr1 = [3, 5, 2, 5, 2];
// let arr2 = [2, 3, 5, 5, 2];
//     if (areEqual(arr1, arr2))
//         document.write("Yes");
//     else
//         document.write("No");

//!-------Challenge-Number Divider--------//
//!_Challenge 3: 
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//*----------------------Day Divider------------------------//
//*_Day 19: July 8, 2022 
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
//*_Another note: concluding yesterday's challenges.

//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
//?_15–Lowest Common Ancestor of a BST--Py
//?_16–Check if two arrays are equal or not--JS
//?_17–First Unique Character in a String--Py

//!_Challenge 1:
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein.

//!-------Challenge-Number Divider--------//
//!_Challenge 2: 
//?_Done Yesterday.


//!-------Challenge-Number Divider--------//
//!_Challenge 3: 
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein. Done yesterday.

//*----------------------Day Divider------------------------//
//*_Day 20 & 21 Combined: July 11 and July 12, 2022
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
/*
?_18–Climbing Stairs Problem.
?_19–Distribute Candy Problem.
*/

//!_Challenge 1:

// var climbStairs = function(n){
//     if(n == 1 || n == 0) return 1

//     let first = 1;
//     let second = 2;

//     for (let i = 3; i <= n; i++){
//         let third = first + second
//         first = second;
//         second = third;
//     }
//     return second; 
// };

// console.log(climbStairs(10));

//!-------Challenge-Number Divider--------//
//!_Number 2:
//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's Python file; refer to relevant (day's) entry therein. Done yesterday.


//*----------------------Day Divider------------------------//
//*_Day 34: July 22, 2022
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

//!_Challenge 1:

/*
?_Min, Max, & Avg.
?_Testing (of solution[s] suspended.)
*/

// let myArr = [];

// var min = -Infinity;
// var max = Infinity;
// let sum = 0;

// for (let i = 0; i < myArr.length; i++){
//     sum = 0 + arr[i];
//     if (arr[i] > max){
//         max = arr[i];
//     }
//     if (arr[i] < min){
//         min = arr[i];
//     }
//     avg = sum / myArr.length;
// }

// console.log("Min is : " + min);
// console.log("Max is : " + max);
// console.log("Average is : " + avg);

//*----------------------Day Divider------------------------//
//*_Day 35: July 23, 2022
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

//!_Challenge 1:


//?"Min, Max, & Avg" Algo:
//?_Unfortunately, the algo isn't working! But I'll have to move on for now.

//_?_Could some1 plz help T-man run this via VSCode or somethin'?! :|

// function minMaxAvg ([arr]){

// let arr = [];

// var min = Infinity;
// var max = -Infinity;
// var sum = 0;

// for (let arr[i] = 0; arr[i] < arr.length; i++){
// sum = sum + arr[i];

//  if (arr[i] < min){
// 	min = arr[i];
// }
//  if (arr[i] > max){
// 	max = arr[i];
// }
// let avg = sum / arr.length;

// return ("[Using British Accent: ] Ola! :-) Please note madam/sire, that min = ; " + min + " and guess what [?!], max = " + max + " and finally, avg = " + avg " ! Thanks, and have a lovely day!")

//     }
// }

// console.log(minMaxAvg([1, 2, 3]));

//*----------------------Day Divider------------------------//
//*_Day 36: July 24, 2022
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

//!_Challenge 1:
//!_Also Review Corresponding Challenge in Python File.
//!_Test Successful.


//?_Just Print Something. :-( 

//? console.log("Hi. Have a great day!");

//*----------------------Day Divider------------------------//

//*_Day 37 & 38: Jul 25 & 26, 2022
//!_Please note: these days' challenges are in Py file. "'See you' tomorrow! :-)"

//*----------------------Day Divider------------------------//
//*_Day 39: July 27, 2022
//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

//!_Challenge 1:

// for (let i = 1; i <= 255; i++){
//     console.log(i);
// }

//!_Challenge 2:
//!_Source: Grepper

// var myArray = [];
// for (var i = 1; i <= 5; i++){
//     myArray.push(i);
// } 
// console.log(myArray) // console output [ 1, 2, 3, 4, 5 ]

//!_Challenge 3:
//!_Note: This is very frustrating, still being unable to do this after 100s or 1000s of practice.

// let myArray = [1, 2, 3, 4, 5];

// function minMaxEtc(myArray){

// var min = myArray[0];
// var max = myArray[0];
// var avg = 0;

// for (let i = 0; i < myArray.length; i++){
//     if (myArray[i] < min) min = myArray[i];
//     if (myArray[i] > max) max = myArray[i];
//     avg += myArray[i];
// }

// avg /= myArray.length;

// }

// console.log("Min is : " + min);
// console.log("Max is : " + max);
// console.log("Average is : " + avg);

// minMaxEtc([1, 2, 3, 4, 5]);

//*----------------------Day Divider------------------------//

//*_Day 40: Jul 28, 2022
//!_Please note: these days' challenges are in Py file. "'See you' tomorrow! :-)"

//*----------------------Day Divider------------------------//
//*_Day 41: July 29, 2022
//*_(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
//*_Note: Requirement of three total algos suspended; only 1 required today.

//!_Challenge 1: "Min, Max, Avg"; Solution-Testing To Be Implemented 
//!_Note: Requirement of three total algos suspended; only 1 required today.

//!_Challenge 1 Note: Test failed.

// function minMaxAvg(arr){
//     var min = Infinity;
//     var max = -Infinity;
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//         if (arr[i] > max){
//             max = arr[i];  
//         }
//         else if (arr[i] < min){
//             min = arr[i];
//         }
//     }
//     var avg = sum / arr.length;
//     console.log ("Hi! Please note that your min is " + min + " ; your max is " + max + " ; and finally, your avg is " + avg + " . Have a great day!")
// }

// minMaxAvg([1, 2, 3, 4, 5]);

//*----------------------Day Divider------------------------//

//*_Day 42: Jul 30, 2022
//!_Please note: these days' challenges are in Py file. "'See you' tomorrow! :-)"

//*----------------------Day Divider------------------------//

//*_Day 48: Aug 4, 2022
//*_Note: Testing briefly suspended today, and the same measure will be used on an ad-hoc basis in the future. 

//!_Challenge 1: Implement Map & Filter.

// function map(arr, fn){
//     let result = [];

//     for (let i of arr){
//         let applied = fn(i);
//         result.push(applied);
//     }
//     return result;
// }
// let square = (x) => x * x;
// let addZeros = (x) => parseInt(x += '00')

// map ([1, 2, 3, 4], square); 
// map ([1, 2, 3, 4], addZeros);

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Switching Light Bulbs.

// function lightBulbs(N){
//     let lightBulbs = [];
//     for (let i = 0; i < N; i++){
//         lightBulbs.push(false);
//     }

// for (let i = 1; i <= N; i++){
//     let w = 1;
//     let k = w * i;
//     while (k <= N){
//         lightBulbs[k - 1] = !lightBulbs[k - 1];
//         w += 1;
//         k = w * i;
//     }
// }
// return lightBulbs;

// }

//!-------Challenge-Number Divider--------//
//!_Challenge 3: Convert Array of Strings Into An Object

// function convert(string){

//     //?_Create empty object:
//     let obj = {};

//     //?_Split the string at each person:
//     const people = string.split(' ');

//     //?_Loop through all people:
//     for (let p of people){

//         //?_Split information for each person:
//         const info = p.split(',');

//         //?_Store this information in the user object:
//         let userObj = {
//             'email': info[1] || null,
//             'age': parseInt(info[2]) || null,
//             'occupation': info[3] || null
//         };
//         //?_Store key-value in object of users now:
//         obj[info[0]] = userObj;
//     }
//     return obj;
// }

// //?_Usage:

// let s = "Daniel,me@test.com,56,Coder John,,,Teacher Michael,mike@test.com,,";
// let people = convert(s);

// //?_Testing:

// people['Daniel']['age']; //?_Should return => 56

// people['Michael']['Occupation'] //?_Should return => null

//*----------------------Day Divider------------------------//

//*_Day 51: Aug 7, 2022
//!_Please note: these days' challenges are in Py file. "'See you' next time! :-)"

//*----------------------Day Divider------------------------//

//*_Day 52: Aug 8, 2022
//*_Testing Suspended

// //!_Challenge 1: (A/The) Two Sum Problem.

// function twoSum(arr, S){
//     let hashTable = {};
//     //?_Check each element in array:
//     for (let i = 0; i < length; i++)

//         //?_Calculate S - current element:
//         var sumMinusElement = S - arr[i];

//     //?_Check if this number exists in has table:
//     if (hashTable [sumMinusElement] !== undefined){
//         return true;
//     }
//     //?_Add the current number to the hash table:
//     hashTable[arr[i]] = true;
// }

// //!_Challenge 2: Determine In N is Prime.

// function isPrime(n){
//     //?_Check if all numbers less than 2 are not primes:
//     if (n < 2) { return false; } // loop from 2 to sqrt(n)
//     for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {

//     //?_check if (n mod i) is equal to 0, if so then there are // two numbers, a and b, that can multiply to give n
//     if (n % i === 0) { return false; }
// }
// return true; 

// }

//!_Challenge 3: Climbing Stairs:

// var climbStairs = function(n){
//     if(n == 1 || n == 0) return 1

//     let first = 1;
//     let second = 2;

//     for (let i = 3; i <= n; i++){
//         let third = first + second
//         first = second;
//         second = third;
//     }
//     return second; 
// };

// console.log(climbStairs(10));

//*_Updated With Correct Date For Commit; time: 12:53 AM (Aug 9)

//*----------------------Day Divider------------------------//

//*_Day 53: Aug 9, 2022
//!_Note 1--Please note: these days' challenges are in Py file. "'See you' next time! :-)"
//!_Note 2--Testing still suspended. To be resumed tomorrow / next day of practice.

//*----------------------Day Divider------------------------//

//*_Day 54: Aug 10, 2022
//!_Note: **_Selective / optional_** testing resumed.

//!_Challenge 1: FizzBuzz

// function fizzBuzz(n){
//     let result = [];

//     for (let i = 1; i <= n; i++){
//         let add = '';
    
//     if (i % 3 === 0){add += 'Fizz';}
    
//     if (i % 5 === 0){add += 'Buzz';}

//     if (add === ''){result.push(i); }
//     else {result.push(add); }
//     }
//     return result;
// }

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Switching Lights Problem

// function lightBulbs(N){
//     //?_Create N lightbulbs and set them to off:
//     let lightBulbs = [];
//     for (let i = 0; i < N; i++){
//         lightBulbs.push(false);
//     }
//     //?_Each person i labeled 1 to N sets each Kth lightbulb on or off where k = 2*i, 3*i, etc.:
//     for (let i = 1; i <= N; i++){
//         let w = 1;
//         let k = w * i;
//         while(k <= N){
//             lightBulbs[k - 1] = !lightBulbs[k - 1];
//             w += 1;
//             k = w * i;
//         }
//     }
//     return lightBulbs;
// }

//*----------------------Day Divider------------------------//

//*_Day 55: Aug 11, 2022
//!_Please note: today's challenges are waived. Instead, I am practicing via a Python mini-project.

//*----------------------Day Divider------------------------//

//*_Day 56: Aug 12, 2022

//!_Challenge 1: Encode consonants within a string

// function encodeConsonants(string){
//     let result = '';
//     //?_Store array of vowels for later use.
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     //?_Loop through the entire string.
//     for (let i of string){
//         //?_Special case for Z.
//         if (i === 'z'){
//             result += 'b';
//             break;
//         } 
//         //?_If letter is not a vowel or a space...
//         else if (vowels.indexOf(i) === -1 && i !== ' '){
//         //?_Convert each letter to its character code.
//         let newCode = i.charCodeAt(0) + 1;
//         //?_Perform check to make sure new letter is not a vowel by seeing if // the new letter exists in an array of vowels:
//         if (vowels.indexOf(string.fromCharCode(newCode)) !== -1){
//             newCode += 1;
//         }
//         //?_Get new letter and add to new string:
//         result += string.fromCharCode(newCode);
//         }
//         else{
//             result += i;
//         }
//     }
//     return result;
// }

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Switching Lights Problem
//!_Note: Instruction-comments waived.

// function threeSum(arr, S){
//     var arr = arr.sort();

//     for (let i = 0; i < arr.length - 2; i++){        
//         let ptr_start = i + 1;
//         let ptr_end = arr.length - 1;

//         while(ptr_start < ptr_end){
//             let add = arr[i] + arr[ptr_start] + arr[ptr_end]; 
//             if (add === S){return true; }
//             else if (add < S){ptr_start += 1; }
//             else{ptr_end -= 1; }
//         }
//     }
//     return false;
// }
//*----------------------Day Divider------------------------//

//*_Day 57: Aug 13, 2022
//!_Please note: today's challenges are waived. Instead, I am practicing via a Python mini-project.

//*----------------------Day Divider------------------------//

//*_Day 58: Aug 14, 2022
//*_Testing suspended.

//!_Challenge 1: FizzBuzz.

// function fizzBuzz(n){
//     let result = [];
//     for (let i = 1; i <= n; i++){
//         let add = '';
//     if (i % 3 === 0){add += 'Fizz';}
//     if (i % 5 === 0){add += 'Buzz';}
//     if (add === ''){result.push(i);}
//     else{result.push(add);}
//     }
//     return result;
// }

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Check if valid number of parentheses.

// function matchingParens(string){
//     let counter = 0;
//     for (let c of string){
//         if (c === '('){counter += 1;}
//         if (c === ')'){counter -= 1;}
//     }
//     return (counter === 0) ? true : false;
// }

//!-------Challenge-Number Divider--------//
//!_Challenge 3: Convert array of strings into object.

// function covert(string){
//     let obj = {};

//     const people = string.split(' ');
//     for (let p of people){
//         const info = p.split(',');

//         let userObj = {
//             'email': info[1] || null,
//             'age': parseInt(info[2]) || null,
//             'occupation': info[3] || nulll
//         };
//         obj[info[0]] = userObj;
//     }
//     return obj;
// }

// usage
// let s = "Daniel,me@test.com,56,Coder John,,,Teacher Michael,mike@test.com,,"; 
// let people = convert(s); 

//*----------------------Day Divider------------------------//

//*_Day 60: Aug 16, 2022
//!_Challenges waived for the day.

//*----------------------Day Divider------------------------//

//*_Day 61: Aug 17, 2022
//*_Testing suspended.

//!_Challenge 1: Sum up nested arrays.
//!_"From the looks of it," testing this successfully will be fun!

// function sumNested(arr){
//     let result = 0;
//     //?_Sum up all the numbers in the array:
//     for (let i = 0; i < arr.length; i++){
//         if (typeof arr[i] != 'number'){
//             result += sumNested(arr[i]);
//         } else {
//             result += arr[i];
//         }
//     }
//     return result;
// }

//!-------Challenge-Number Divider--------//
//!_Challenge 2: First non-repeating character.

// function firstNonRepeatChar(string){
//     let hashTable = {};
//     //?_Store each character in the hashtable with the frequency of times it occurs.
//     for (let c of string){
//         if (hashTable[c] === undefined){
//             hashTable[c] = 1;
//         } else {
//             hashTable[c] += 1;
//         }
//     }
//     //?_Loop through the string and return first character with a count of 1 in the hash table.
//     for (let c of string){
//         if(hashTable[c] === 1){
//             return c;
//         }
//     }
//     //?_Return -1 if no unique character exists.
//     return -1;
// }

//!-------Challenge-Number Divider--------//
//!_Challenge 3:

// function lightBulb(N){
//     //?_Create N lightbulbs and set them to off.
//     let lightBulb = [];
//     for (let i = 0; i < N; i++){
//         lightBulb.push(false);
//     }
//     //?_Each person i labelled from 1 to N sets each Kth lightbulb to on or off, where k = 2*i, 3*i, etc.
//     for (let i = 1; i <= N; i++){
//         let w = 1;
//         let k = w * i;
//         while (k <= N){
//             lightBulb[k - 1] = !lightBulb[k - 1];
//             w += 1;
//             k = w * i;
//         }
//     }
//     return lightBulb;
// }

//*----------------------Day Divider------------------------//

//*_Day 62: Aug 18, 2022
//!_Please note: today's challenges are waived. Instead, I am practicing via a Python mini-project.

//*----------------------Day Divider------------------------//

//!_Missing: Days 63 & Day 64, Aug 19 & 20 (2022).

//*----------------------Day Divider------------------------//

//*_Day 65: Aug 21, 2022
//*_Testing suspended.

//!_Challenge 1: Two-sum problem.

// function twoSum(arr, S){
//     let hashTable = {};

//     //?_Check each element in array:
//     for (let i = 0; i < arr.length; i++){

//         //?_Calculate S minus current element:
//         let sumMinusEl = S - arr[i];
        
//         //?_Calculate if this # exists in hash table:
//         if(hashTable [sumMinusEl] !== undefined){
//             return true;
//         }
//         //?_Add current number to the hash table:
//         hashTable[arr[i]] = true;
//     }
//     return false;
// }

// //?_Not actually doing this today, but I would call my function below, thus:
// //?_twoSum ([1, 2, 3], 5);

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Count words with 3 continuous vowels.
//?_Instruction comments Waived.

// function threeVowels(string){
//     let arr = string.split(' ');
//     let count = 0;

//     const pattern = /[aeiou]{3,}/gi;

//     for(let word of arr){
//         if(word.match(pattern) !== null){
//             count += 1;
//         }
//     }
//     return count;
// }

// //?_Not actually doing this today, but I would call my function below, thus:
// //?_threeVowels ("Aabda, caa daaa braaa!");
//?_I'm actually really curious, re: whether or not it will work, given my cute/cheeky string above! Doesn't matter, regardless; the fatigue "cancels out" the curiousity! :-(

//!-------Challenge-Number Divider--------//
//!_Challenge 3:

//?_Waived (and yes, due to laziness/fatigue!).

//*----------------------Day Divider------------------------//

//*_Day 66: Aug 22, 2022
//!_Please note: today's challenges are waived. Instead, I am practicing via a Python mini-project.

//*----------------------Day Divider------------------------//

//*_Day 67: Aug 23, 2022
//!_"Back to the basics"! :-)
//!_But testing is still suspended for challenges 1 and 2. And if you're judging me, I don't blame you! 
//!_Test successful for challenge 3.

//!_Print from 1 to 255:
// function justPrint(){
//     for (let i = 1; i <= 255; i++){
//         console.log(i);
//     }
//     return;
// }
// justPrint();

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Print **odds** from 1 to 255:

// function printOdds(){
//     for (let i = 1; i <= 255; i += 2){
//         console.log(i);
//     }
//     return;
// }
// printOdds();

//!-------Challenge-Number Divider--------//
//!_Challenge 3: Print and sum from 1 to 255.

// function printSum(){
//     var sum = 0;
//     for (let i = 0; i <= 255; i++){
//         sum = sum + i;
//         console.log(i + ' Hi! Please note dear human, that the current sum is ' + sum + '. Have an awesome day/night! :-)');
//     }
// }
// printSum();

//*----------------------Day Divider------------------------//

//*_Day 68: Aug 24, 2022
//*_Testing mostly successful; 90% / PASS ("Without Distinction"). Reason: It printed to 254, instead of 255

//!_Challenge 1: Print to 255.
// function justPrintNowAndeleAndele(){
//     for (let i = 1; i < 255; i++){
//         console.log(i);
//     }
//     return;
// }

// justPrintNowAndeleAndele();

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Print Odds to 255.

//!_Note 1: My onw approach, vs. that of Coding Dojo book. 
//!_Note 2: Result: UN-F-ING BELIEVABLE!!! O-m-G!!! Yiippeee! (Um...in case you haven't figured it out, it worked! Whoo-hoo!)
// function printOdds(n){
//     for (let i = 0; i <= 255; i++){
//         if (i % 2 === 0){
//             i === null;
//         } else {
//         console.log(i);
//         } 
//     }
// }
// printOdds(255);

//!-------Challenge-Number Divider--------//
//!_Challenge 3: Min, Max, Avg; attempted from memory and/or previous practice. [Sigh; "here goes nothing!" :-( ] 
//!_Note 1: Honor system in use here; test attempted unsuccessfully! :-(
//!_Note 2: To be reviewed later. 

// function minMaxAvg(arr){
//     min = Infinity;
//     max = -Infinity;
//     sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     if (min < arr[i]){
//         min = arr[i];
//     } else {
//     if (max > arr[i]){
//         max = arr[i];
//     }
//     //?_Regardless of whatever else is wrong with this poor code-block, I know that the next two lines are probably NOT supposed to be together--i.e., within the same curly-bracket sub-block, so to speak (sorry; amateur-buoy here has to often make up his own technical vocabulary!).
//     let avg = sum / arr.length;
//     return ("Hello! Please note: your min is " + min + ", your max is " + max + ", and finally, your average is " + avg + ". Have an awesome day, dear human! :-)"); 
//     }
// }
// console.log(minMaxAvg([1, 2, 3, 4, 5]));

//*----------------------Day Divider------------------------//

//*_Day 69: Aug 25, 2022
//!_Please note: these days' challenges are in Py file. "'See you' next time! :-)"

//*----------------------Day Divider------------------------//

//*_Day 70: Aug 26, 2022

//!_Please note: Challenges waived today; reason: for physical-mental recuperation.

//*----------------------Day Divider------------------------//

//*_Day 71: Aug 27, 2022
//!_Please note: today's (ordinary--i.e., non-ML/Other) challenges are waived. Instead, I am practicing via a Python mini-project. The "Day's Special (?!):" K-Nearest Neighbor! :-)

//*----------------------Day Divider------------------------//

//!_Missing: Days 72 to 77, Aug 28 to Sept 2 (2022).

//*----------------------Day Divider------------------------//
//*_Day 78: Sept 3, 2022

//!_Challenge 1: Print to 55.

// function justPrintNowAndeleAndele(){
//     for (let i = 1; i < 55; i++){
//         console.log(i);
// }
// //?_Not Tested

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Print Odds, 1 to 50

// function printOdds1To50(){
//     for (let i = 1; i <= 50; i += 2){
//         console.log(i);
//     }
// }
// printOdds1To50();
// //?_Tested successfully! Yay! :-)

//!-------Challenge-Number Divider--------//
//!_Challenge 3: Iterate through given array backwards, printing each element from last to first.

// arr = [1, 2, 7, 9, 34]

// function printBackwards(){
//     for (let i = arr.length; i >= 0; i--){
//         console.log(arr[i]);
//     }
// }
// printBackwards(arr);
// //?_Again, tested successfully (!); and again, yay! :-)

//*----------------------Day Divider------------------------//

//*_Day 79: Sept 4, 2022
//!_Please note: Today's challenges were handwritten; please refer to relevant folder for details.

//*----------------------Day Divider------------------------//

//*_Day 80: Sept 5, 2022
//!_Missing

//*----------------------Day Divider------------------------//

//*_Day 81: Sept 6, 2022

//!_Given an integer x, find it’s square root. If x is not a perfect square, then return floor(√x).
//?_Testing Suspended

// function countSquares(x){
//     var sqr = parseInt(Math.sqrt(x));
//     var result = parseInt(sqr);
//     return result;
// }
//     var x = 9;
//         document.write(countSquares(x));

// console.log(countSquares(5));

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Find GCD or HCF of 2 numbers

// function gcd(a, b){
//     if (a == 0)
//     return b;
//     if (b == 0)
//     return a;

//     if (a == b)
//         return a;
    
//     if (a > b)
//         return gcd(a - b, b);
//     return gcd(a, b - a);
// }

// //?_Test apparently successful; result" "GCD of 98 and 56 is 14"

// let a = 98, b = 56;

// console.log("GCD of " + a + " and " + b + " is " + gcd(a, b));

//*----------------------Day Divider------------------------//

//*_Day 82: Sept 7, 2022
//!_Please note: these days' challenges are in Py file. "'See you' next time! :-)"

//*----------------------Day Divider------------------------//
//*_Day 83: Sept 8, 2022

// function clockAngle(hour, min){
//     var h = 0.5 * (60 * hour + min);
//     var m = 6 * min;
//     var angle = Math.abs(h - m);
//     return (angle > 180) ? 360 - angle: angle;
// }

// console.log(clockAngle(4, 30));
//?_Test Successful

//*----------------------Day Divider------------------------//
//*_Day 86: Sep 11, 2022

//!_Waived; done instead: 
//?_Link: https://colab.research.google.com/drive/1jYfFSmkmRA7TvexRgR0_Ni7g6R5UrfRh?usp=sharing 

//*----------------------Day Divider------------------------//

//!_Missing: Days 85 to 89: Sep 12 to Sep 17.

//*----------------------Day Divider------------------------//
//*_Day 90: Sep 17 [Late--Pushed to GH technically on Sep 18! :-( ]

//!_Challenge 1: Print to 55.

// function print1To55(){
//     for (let i = 0; i <= 55; i++){
//         console.log("Ola! :-) Your magic number is " + i);
//     }
// }
// print1To55();

//!-------Challenge-Number Divider--------//
//!_Challenge 2: FizzBuzz--Part 1
//?_My attempt at my own solution; test result: FAILED! :-(

// function fizzBuzz(n){
//     let result = [];
// for (let i = 0; i <= n; i++){
//         let add = " ";
//     if (i % 3 === 0){
//         add += "Fizz";
//     }
//     if (i % 5 === 0){
//         add += "Buzz"
//     }
//     if (add === " "){
//         result.push(i);
//        }
//        else { result.push (add); }
//     }
//     return add;
// }
// console.log(fizzBuzz(100));

//!-------Challenge-Number Divider--------//
//!_Challenge 2: FizzBuzz--Part 2

// function fizzBuzz(n) { 
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         let add = ' ';
//     if (i % 3 == 0) { add += 'Fizz'; }
//     if (i % 5 == 0) { add += 'Buzz'; }
//     if (add == '') { result.push(i); } 
//     else { result.push(add); }
//     }
//     return result; 
// }

// console.log(fizzBuzz(50));

//?_Another attempt, trying to use the book's answer, but copying and pasting some code, and trying to clean it up instead of typing it all out. Result:
/*
[
  ' ',         ' ',         ' Fizz',     ' ',
  ' Buzz',     ' Fizz',     ' ',         ' ',
  ' Fizz',     ' Buzz',     ' ',         ' Fizz',
  ' ',         ' ',         ' FizzBuzz', ' ',
  ' ',         ' Fizz',     ' ',         ' Buzz',
  ' Fizz',     ' ',         ' ',         ' Fizz',
  ' Buzz',     ' ',         ' Fizz',     ' ',
  ' ',         ' FizzBuzz', ' ',         ' ',
  ' Fizz',     ' ',         ' Buzz',     ' Fizz',
  ' ',         ' ',         ' Fizz',     ' Buzz',
  ' ',         ' Fizz',     ' ',         ' ',
  ' FizzBuzz', ' ',         ' ',         ' Fizz',
  ' ',         ' Buzz'
]
*/
//?_LOL! 
//?_Gotta love coding, I tell you...(!)...

//*----------------------Day Divider------------------------//
//*_Day 91: Sept 18, 2022
//!_Please note: these days' challenges are in Py file. "'See you' next time! :-)"
//*----------------------Day Divider------------------------//
//*_Day 93: Sept 20, 2022
//!_Please note: these days' challenges are in Py file. "'See you' next time! :-)"
//*----------------------Day Divider------------------------//

//*_Day 94: Sept 21, 2022
//!_Just one challenge today.

//!_Challenge 1 of 1: Min, Max, And Avg:
//?_Test SUCCESSFUL! Yyiiippeee! :-) Had a couple of bugs at first, caused by misplaced code--as in, in the wrong curly-brace-demarcated block, and a "NaN" caused by "i <= arr.length", instead of [the correct/current] "i < arr.length".
//?_This--folkx, feels very, very good indeed. Finally mastering this basic algo. I know--I know; might seem like a silly accomplishment to most. But to "Turtle-man" here; heavenly! :-)
// function minMaxAvg(arr){
//   var min = Infinity;
//   var max = -Infinity;
//   var sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//     if (arr[i] < min){
//       min = arr[i];
//     } else {
//     if (arr[i] > max){
//       max = arr[i];
//     }
//     var avg = sum / arr.length;   
//   }
// }
//?_console.log ("Hi! Please note that your min is " + min + " and your max is " + max + " and finally, your avg is " + avg + ". Bye-bye! :-)" );
// }
// minMaxAvg([1, 2, 3]);
//*----------------------Day Divider------------------------//

//*_Day 101: Sep 28, 2022
//!_Please note: today's challenges are in JS file. "'See you' tomorrow, or 'next time'! :-)"

//*----------------------Day Divider------------------------//

//*_10/21/2022
// console.log("Testing...");

//*----------------------Day Divider------------------------//

//*_Day 124: Oct 22, 2022
//*_"A toast," to new beginnings, and/or never giving up.

//!_Challenge 1: Print to 55.

// function justPrint(i){
//   for(let i = 1; i <= 255; i++){
//   console.log (i);
//   }
// }
//  justPrint();

//!-------Challenge-Number Divider--------//
//!_Challenge 2: Nested Arrays.

// function sumNested(arr){
//   let result = 0;

// for (let i = 0; i < arr.length; i++){
//   if (typeof arr[i] !== 'number'){
//     result += sumNested(arr[i]);
//   } else {
//     result += arr[i];
//   }
//   }
//   return result;
// }

// console.log(sumNested([1, 1, 3, [3, 4, [8]], [5]]));

//!-------Challenge-Number Divider--------//
//!_Challenge 3: Print Odds (1 to 257)

// function printOdds(){
//   for (let i = 1; i <= 257; i += 2){
//     console.log (i);
//   }
// }

// printOdds();

//*----------------------Day Divider------------------------//

//*_Day 125: Oct 23, 2022
//!_Please note: today's challenges are in JS file. "'See you' tomorrow, or 'next time'! :-)"

//*----------------------Day Divider------------------------//

//*_Day 1 of "N"--2023: Jan 6, 2023

//!_Challenge 1, minMaxAvg;
//!_Purpose: Warm up before MERN course tutorial.
//!_Post-test notes: Test successful.

// function minMaxAvg (arr){
//   var min = Infinity;
//   var max = -Infinity;
//   var sum = 0;
//   for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//         if (arr[i] < min){
//           min = arr[i];
//       } else {
//       if (arr[i] > max)
//         if (arr[i] > max){
//           max = arr[i];
//         }
//       }
//   } 
//   var avg = sum / arr.length;
//   return ("Hi! Please note; your min is " + min + " and your max is " + max + " and last (but not least), your average is " + avg + " bye-bye! :-)");      
// }

// console.log(minMaxAvg([1, 2, 3, 4, 5]));

//*----------------------Day Divider------------------------//

// function sadnessOflife(){
//   while(alive){
//     eat();
//     sleep();
//     code();
//     repeat();
//   }
// }

// console.log(sadnessOflife);