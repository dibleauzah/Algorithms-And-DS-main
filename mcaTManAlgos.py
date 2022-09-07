#//*_Testing--Py version...(GitHub Push 1)
#//_Test-2--i.e., GitHub--Py version

#//! Template 1 Starts Below:
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.

#//! Template 2 Starts Below:
#//*----------------------Day Divider------------------------//
#//*_Day X: [Month] DD, 2022
#//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

#//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
'''
#?2--[Add Details Here]
#?3--[Add Details Here]
#?4--[Add Details Here]
'''
#//*_Algos & Jrl Self-Challenge 2022
#//?_Algo here
#//?_Cont'd
#//?_Cont'd

#//!-------Challenge-Number Divider--------//
#//?_Algo here
#//?_Cont'd
#//?_Cont'd

#//!-------Challenge-Number Divider--------//
#//?_Algo here
#//?_Cont'd
#//?_Cont'd

#//* Template Ends Below (Delete This Line):
#//*----------------------Day Divider------------------------//

#//*_First Day Of Challenge in this file; Some Challenges Are Saved to PC directory and JS file.
#//*_Day 7: June 23, 2022
#//*_Algos & Jrl Self-Challenge 2022

#//*--1)--"Mean, Median and Mode"; 
#//*--Notes: 
#//*--1) Question and answer source: CoderByte Bootcamp- & Job-Interview Prep
#//*--2) As of 11:15 PM, I'm suspending work--i.e., executing this program in the terminal. It's been forever--or, I've probably never done it before--since I ran a Python program. I usually run JS. I've figured out one of the underlying issues: misnaming the file as "mcaTMan..." instead of the intended "macTManAlgos.py". And I have tried Googling the issue, all in vain. So for now: tactical retreat! :-) [Another battle will be waged later.]

# def meamMedianMode(arr):

#     mean = sum(arr) / float(len(arr))

#     arr = sorted(arr)
#     median = arr[int(len(arr) / 2)]

#     mode = None
#     hashTable = {}
#     for i in arr:
#         if i in hashTable:
#             hashTable[i] += 1
#         else:
#             hashTable[i] = 1
#         if mode is None or hashTable[i] > mode:
#             mode = i
    
#     return { 'mean': mean, 'median': median, 'mode': mode }

#     print [1, 2, 5, 4, 5, 5, 7, 8]

#//!-------Challenge-Number Divider--------//

#//*----------------------Day Divider------------------------//

#//*_Day 8: June 24, 2022
#//*_Algos & Jrl Self-Challenge 2022

#//!--1)--"FizzBuzz"; 
#//!--Notes: 1)--Question and answer source: CoderByte Bootcamp- & Job-Interview Prep. 2)--Suspending execution/running of code in the terminal for now, given my issue with that task. For now, the important objective is to get myself used again to Python, after having used JS for so long! :-| But for the record, Python was actually "my first love," vis-a-vis coding languages! :-)

# def fizzBuzz(n):

#     result = []
#     for i in range(1, n + 1):
#         add = ''

#         if i % 3 == 0:
#             add += 'Fizz'        
#         if i % 5 == 0:
#             add += 'Buzz'
#         if add == '':
#             result.append(i)
#         else:
#             result.append(add)
#     return result

    #Sanity Check:
    # print("Hello, World! :-)")
    #//?_I guess my sanity check failed! :-( As in, I'm still unable to execute the program via the terminal below

#//!--2)--"Implement Map"; 
#//!--Notes: 1)--Question and answer source: CoderByte Bootcamp- & Job-Interview Prep. 2)--Suspending execution/running of code in the terminal for now, given my issue with that task. For now, the important objective is to get myself used again to Python, after having used JS for so long! :-| But for the record, Python was actually "my first love," vis-a-vis coding languages! :-)

# def filter(arr, fn):

#     result = []

#     for i in arr:
#         check = fn(i)
#         if check:
#             result.append(i)
    
#     return result

#     #//?_Usage:
#     isPositive = lambda x: x > 0
#     filter([-2, 4, 5, 8, -44, -6], isPositive); #//?_Returns [4, 5, 8]

#//*----------------------Day Divider------------------------//

#//*_Day 9: June 25, 2022
#//*_Algos & Jrl Self-Challenge 2022

#//!--1)--"Implement Filter"; 
#//!--Notes: Question and answer source: CoderByte Bootcamp- & Job-Interview Prep

# def filter(arr, fn):
#     result = []

#     for i in arr:
#         check = fn(i)
#         if check:
#             result.append(i)
#     return result

#     isPositive = lambda x: x > 0
#     filter([-2, 4, 5, 8, -44, -6], isPositive); #?_=> [4, 5, 8]

#//!-------Challenge-Number Divider--------//

#//!--2)--"Switching Light Bulbs Problem";
#//!--Notes: Question and answer source: CoderByte Bootcamp- & Job-Interview Prep

# def lightBulbs(N):

#     #?_Create N lightbulbs and set them to off
#     lightBulbs = [False for i in range(0, N)]

#     #?_Each person i labeled from 1 to N sets each Kth bulb to on or off, where k = 2*i, 3*i, etc.
#     for i in range(1, N + 1):
#         w = 1
#         k = w * 1
#         while k <= N:
#             lightBulbs[k - 1] = lightBulbs[k - 1]
#             w += 1
#             k = w * i
#     return lightBulbs

#//!-------Challenge-Number Divider--------//

#//!--3)--"Two Sum Problem";
#//!--Notes: Question and answer source: CoderByte Bootcamp- & Job-Interview Prep

# def twoSum(arr, S):
#     hashTable = {}

#     #?_Check each element in the array:
#     for i in range(0, len(arr)):
        
#         #?_Calculate S minus current element:
#         sumMinusElement = S - arr[i]
#         if sumMinusElement in hashTable:
#             return True
        
#         #?_Add the current number to the hash table:
#         hashTable[arr[i]] = True
    
#     return False

# twoSum([1, 2, 3, 4, 5], 9)

#//*----------------------Day Divider------------------------//

#//*_Day 10: June 26, 2022
#//*_Algos & Jrl Self-Challenge 2022

#//!--1)--"Calculate the Angle on a Clock"; 
#//!--Notes: 1)--Question and answer source: CoderByte Bootcamp- & Job-Interview Prep. 2)--Suspending execution/running of code in the terminal for now, given my issue with that task. For now, the important objective is to get myself used again to Python, after having used JS for so long! :-| But for the record, Python was actually "my first love," vis-a-vis coding languages! :-)

# def clockAngle (hour, mins):
#     h = 0.5 * (60 * hour + mins)
#     m = 6 * mins
#     angle = abs(h - m)

#     if angle > 180:
#         return 360 - angle
#     else:
#         return angle

#//!--Note 2 Cont'd / Note 3: 
#//!--To anyone seeing this later; please note my genuine intense contrition, re: my inability to execute/test the code in this (Python) file for now! :-(

#//!-------Challenge-Number Divider--------//

#//!--2)--"Is N a Prime Number"; 
#//!--Notes: 1)--Question and answer source: CoderByte Bootcamp- & Job-Interview Prep. 2)--Suspending execution/running of code in the terminal for now, given my issue with that task. For now, the important objective is to get myself used again to Python, after having used JS for so long! :-| But for the record, Python was actually "my first love," vis-a-vis coding languages! :-)

# import math
# import re

# def isPrime(n):

#     if n < 2:
#         return False
    
#     for i in range(2, int(math.ceil(math.sqrt(n)))):

#         if n % i == 0:
#             return False
        
#         return True 

# print (isPrime(3))

#//!--Note 2 Cont'd / Note 3: 
#//!--To anyone seeing this later; please note my genuine intense contrition, re: my inability to execute/test the code in this (Python) file for now! :-(

#//!-------Challenge-Number Divider--------//

#//!--3)--"Check If Valid Number of Parentheses"; 
#//!--Notes: 1)--Question and answer source: CoderByte Bootcamp- & Job-Interview Prep. 2)--Suspending execution/running of code in the terminal for now, given my issue with that task. For now, the important objective is to get myself used again to Python, after having used JS for so long! :-| But for the record, Python was actually "my first love," vis-a-vis coding languages! :-)
#//!_>> This last note written later, i.e. 06-30-2022: I was able to start running code in the terminal below, but apparently, the code below doesn't work! :-(

# def matchingParens(string):
#     counter = 0

#     for c in string:
#         if c == '(':
#             counter += 1r
#         elif c == ')':
#             counter -= 1
    
#     if counter == 0
#         return True
#     else:
#         return False

#//!--Note 2 Cont'd / Note 3: 
#//!--To anyone seeing this later; please note my genuine intense contrition, re: my inability to execute/test the code in this (Python) file for now! :-(

#//*----------------------Day Divider------------------------//

#//*_Day 12: June 28, 2022
#//*_Algos & Jrl Self-Challenge 2022

#//!--1)--"Find Min. Depth of a Binary Tree"; 

#//*--Note 1: Answer source: https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/ 
#//*--Note 3: Code testing suspended.

# class Node:
#     def __init__(self, key):
#         self.data = key
#         self.left = None
#         self.right = None 
    
# def minDepth(root):
#     if root is None:
#         return 0

#     if root.left is None and root.right is None:
#         return 1

#     if root.left is None:
#         return minDepth(root.right) + 1
    
#     return min(minDepth(root.left), minDepth(root.right)) + 1

#     root = Node(1)
#     root.left = Node(2)
#     root.right = None (3)
#     root.left.left = None (4)
#     root.right.right = None(5)
#     print(minDepth(root))

#     #?_This code is contributed by Nikhil Kumar Singh(nickzuck_007)       

#//*----------------------Day Divider------------------------//

#//*_Day 13: June 29, 2022
#//*_Algos & Jrl Self-Challenge 2022

#//!_Challenge #-1:

# def reverse_bits(number, bit_size):
#     max_value = (1 << bit_size) - 1

#     return max_value - number

# if __name__ == "_main_":

# #--Example:
#     num = 156

# #--Choose a binary size you want to reverse:
#     size = 32

# print(reverse_bits(num, size))

#//!-------Challenge-Number Divider--------//
#//!_Challenge #-2:
#//!_Challenge #-2 Note: As I just told my study-group buddies on Discord, at the moment, I really **hate** this "Distribute Candy" challenge. But who knows, that hatred might turn into love in the future! ("Stranger things have been known to happen.")

# class Solution(object):
#     def distributeCandies(self, candies, num_people):
#         res = [0 for i in range(num_people)]
#         index = 0
#         while candies > 0:
#             res[index % num_people] += min(candies, index + 1)
#             candies -= (index + 1)
#             index += 1
#         return res

#     ob1 = Solution()
#     print(ob1.distrubuteCandies(8, 3))

#//!-------Challenge-Number Divider--------//
#//!_Challenge #-3:

#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.

#//*----------------------Day Divider------------------------//
#//*_Day 14: June 30, 2022
#//*_(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

#//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
'''
#//?_Calculate power function--JS
#//?_Wave Array--JS
#//?_Move zeros to an end--Py
'''
#//*_Algos & Jrl Self-Challenge 2022
#//!_Challenge-1 Placeholder:
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.

#//!-------Challenge-Number Divider--------//
#//!_Challenge-2 Placeholder:
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.

#//!-------Challenge-Number Divider--------//
#//!_Challenge-3:
#//!_Note: Answer src: https://www.geeksforgeeks.org/move-zeroes-end-array/

# Python Program to move all zeros to the end
# A = [5, 6, 0, 4, 6, 0, 9, 0, 8]
# n = len(A)
# j = 0
# for i in range(n):
# 	if A[i] != 0:
# 		A[j], A[i] = A[i], A[j] # Partitioning the array
# 		j += 1
# print(A) # Print the array

#//?_Credit: This code is contributed by Tapesh(tapeshdua420)

#//*----------------------Day Divider------------------------//
#//*_Day 15: July 1, 2022
#//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

#//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
'''
#?-Swapping Nodes In A Linked List Without Swapping Data--JS
#?-Find first and last positions of an element in a sorted array--Py
'''
#//!_Challenge-1 Placeholder:
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.

#//!-------Challenge-Number Divider--------//
#//!_Challenge-2:

# def first(arr, low, high, x, n):
#     if(high >= low):
#         mid = low + (high - low) // 2
#         if((mid == 0 or x > arr[mid - 1]) and arr[mid] == x):
#             return mid
#         else if (x > arr[mid]):
#             return first (arr, (mid + 1), high, x, n)
#         else:
#             return first(arr, low, (mid - 1), x, n)
#             return -1

# def last(arr, low, high, x, n):
#     if (high >= low):
#         mid = low + (high - low) // 2
#         if ((mid == n - 1 or x < arr[mid + 1]) and arr[mid] == x):
#             return mid
#         else if (x < arr[mid]):
#             return last (arr, (mid + 1), high, x, n)
        
#         return -1

#//*----------------------Day Divider------------------------//
#//*_Day 16: July 4, 2022
#//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

#//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
'''
#?2--[Add Details Here]
#?3--[Add Details Here]
#?4--[Add Details Here]
'''
#//*_Algos & Jrl Self-Challenge 2022
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.


#//!-------Challenge-Number Divider--------//
#//!_Full disclosure: copied and pasted to save time, instead of manual typing. To be reviewed later. Source: https://tutorialspoint.dev/data-structure/binary-tree-data-structure/root-to-leaf-path-sum-equal-to-a-given-number 

# def hasPathSum(node, s): 
      
#     # Return true if we run out of tree and s = 0  
#     if node is None: 
#         return (s == 0) 
  
#     else: 
#         ans = 0 
          
#         # Otherwise check both subtrees 
#         subSum = s - node.data  
          
#         # If we reach a leaf node and sum becomes 0, then  
#         # return True  
#         if(subSum == 0 and node.left == None and node.right == None): 
#             return True 
  
#         if node.left is not None: 
#             ans = ans or hasPathSum(node.left, subSum) 
#         if node.right is not None: 
#             ans = ans or hasPathSum(node.right, subSum) 
  
#         return ans  
  
# # Driver program to test above functions 
  
# s = 21
# root = Node(10) 
# root.left = Node(8) 
# root.right = Node(2) 
# root.left.right = Node(5) 
# root.left.left = Node(3) 
# root.right.left = Node(2) 
  
# if hasPathSum(root, s): 
#     print "There is a root-to-leaf path with sum %d" %(s) 
# else: 
#     print "There is no root-to-leaf path with sum %d" %(s) 

#//!-------Challenge-Number Divider--------//
# class Node:
#     def __init__(self, val):
#         self.value = val
#         self.left = None
#         self.right = None
    
#     def minimumDepth(root):
#         if root == None:
#             return 0
        
#     q = []
#     q.append({'node': root, 'depth': 1})

#     while len((q)):

#         #?_Incomplete as of 11:56 PM, due to time constraints. To be completed later.

#//*----------------------Day Divider------------------------//
#//*_Day 17: July 5, 2022
#//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

#//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
'''
#?2--Merge two binary tree (#-12 on "Easy List")--JS;
#?3--Sorted Array To Balanced BST (#-13 on '')--JS;
#?4--Minimum absolute difference in BST (#-14 '')--Py.
'''

#//!_Challenge 1 Placeholder.
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.

#//!-------Challenge-Number Divider--------//
#//!_Challenge 2 Placeholder.
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.

#//!-------Challenge-Number Divider--------//
#//!_Challenge 3:
#//!_Testing Suspended.

'''
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
'''

# class Solution(object):
#     max_int = 2 ** 31 - 1
#     def getMinimumDifference(self, root):
#         '''
#         :type root: TreeNode
#         :rtype int
#         '''

#         if root == None
#             return 0
#         return self.helper(root)

#     def helper(self, root):
#         if root == None:
#             return self.max_int
#         val = self.max_int
#         if root.left != None: 
#             left = root.left
#             while left != None and left.right != None:
#                 left = left.right
#             val = min(val, root.val - left.val)
#         if root.right != None:
#             right = root.right
#             while right != None and left.right != None:
#                 right = root.right
#             val = min(val, right.val - root.val)
#         return min(val, min(self.helper(root.left), self.helper(root.right)))

#//*----------------------Day Divider------------------------//
#//*_Day 18: July 7, 2022
#//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
#//*_Another note: for today, I will split the current challenges' write up over two days.

#//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:

'''
#//?_15-Lowest Common Ancestor of a BST--Py
#//?_16-Check if two arrays are equal or not--JS
#//?_17-First Unique Character in a String--Py
'''

#//!_Challenge 1 Placeholder: ZZ
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.


#//!-------Challenge-Number Divider--------//
#//!_Challenge 2:
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein.

#//!-------Challenge-Number Divider--------//
#//!_Challenge 3:

# def firstNon(str1):
#     char_order = []
#     ctr = {}
#     for c in str1:
#         if c in ctr:
#             ctr[c] += 1
#         else:
#             ctr[c] = 1
#             char_order.append(c)
#         for c in char_order:
#             if ctr[c] == 1:
#                 return c
#     return None

# print(firstNon('abcdef'))
# print(firstNon('abcabcdef'))
# print(firstNon('aabbcc'))

#//*----------------------Day Divider------------------------//
#//*_Day 19: July 8, 2022
#//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
#//*_Another note: concluding yesterday's challenges.

#//!_Current Day's Challenge-List Preview; Alternate Between JS & Py, re: 2:1 Ratio Per Day:
'''
#//?_15-Lowest Common Ancestor of a BST--Py
#//?_16-Check if two arrays are equal or not--JS
#//?_17-First Unique Character in a String--Py
'''

#//!_Challenge 1 Placeholder: 

# class Node:
#     def __init__(self, into):
#         self.into = info
#         self.left = None
#         self.right = None
#         self.level = None
    
#     def __str__(self):
#         return str(self.into)
    
# class searchTree:
#     def __init__(self):
#         self.root = None
    
#     def create(self, val):
#         if self.root == None:
#             self.root = Node(val)
#         else:
#             current = self.root

#             while True:
#                 if val < current.info:
#                     if current.left:
#                         current = current.left
#                     else:
#                         current.left = Node(val)
#                         break
#                 elif val > current.info:
#                     if current.right:
#                             current = current.right
#                     else:
#                         current.right = Node(val)
#                         break
#                 else:
#                     break
# # Enter your code here. Read input from STDIN. Print output to STDOUT
# '''
# class Node:
#       def __init__(self,info): 
#           self.info = info  
#           self.left = None  
#           self.right = None 
    
#        // this is a node of the tree , which contains info as data, left , right
# '''

# def lca(root, v1, v2):
#     if(root.info < v1 and root.info > v2) or (root.info > v1 and root.info < v2):
#         return root
#     elif root.info < v1 and root.info < v2:
#         return lca(root.right, v1, v2)
#     elif root.info > v1 and root.info > v2:
#         return lca(root.left, v1, v2)
#     elif root.info == v1 or root.info == v2:
#         return root

# tree = searchTree()

# t = int(input())

# arr = list(map(int, input().split()))

# for i in range(t):
#     tree.create(arr[i])

# v = list(map(int, input().split()))

# ans = lca(tree.root, v[0], v[1])

# print(ans.info)

#//!-------Challenge-Number Divider--------//
#//!_Challenge 2:
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein. Done yesterday.

#//!-------Challenge-Number Divider--------//
#//!_Challenge 3:
#//?_Done Yesterday.

#//*----------------------Day Divider------------------------//

#//*_Day 20 & 21 Combined: July 11 and July 12, 2022
#//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)

'''
#?_18-Climbing Stairs Problem.
#?_19-Distribute Candy Problem.
'''

#//!_Challenge 1:
#//?_Please Note: (Some or all) challenge(s) done via current (Algorithms-And-DS-main) directory's JS file; refer to relevant (day's) entry therein. Done yesterday.

#//!-------Challenge-Number Divider--------//
#//!_Challenge 2:
#//!_Note: Apparently, the solution isn't running successfully.

# class Solution(object):
#     def distributeCandies(self, candies, num_people):
#         res = [0 for i in range(num_people)]
#         index = 0
#         while candies>0:
#             res[index%num_people] += (candies,index+1)
#             candies-=(index+1)
#             index+=1
#         return res
# ob1 = Solution()
# print(ob1.distributeCandies(8, 3))

#//*----------------------Day Divider------------------------//

#//*_Day 36: July 24, 2022
#//!_Challenge 1:
#//!_Note: Also Review Corresponding Challenge in Python File.
#//!_Test Failed: Unfortunately, the code isn't running. I give up for now; "tactical retreat," if you will.

# def Greeting():
#     print("Hi. Have a great day!")

#//*----------------------Day Divider------------------------//
#//* Day 37 & 38: Jul 25 & 26, 2022
#!_Day 37 & 38: Jul 25 & 26, 2022
#!_//!_Algos & Jrl Self-Challenge 2022
#!_>> Relevant Link*: https://github.com/dibleauzah/Algorithms-And-DS-main.git   
#! >> *Waived; instead, I used this online IDE–xx– to do a sanity-check on myself–or, more precisely, my basic understanding of Python. Snippet typed:
#!	   print ("Hello world! :-)")
#!>> And yes! It worked.

#//*----------------------Day Divider------------------------//

#//*_Day 39: July 27, 2022
#//!_Please note: today challenges are in JS file. "'See you' tomorrow! :-)"

#//*----------------------Day Divider------------------------//

#//*_Day 40: July 28, 2022; Done Later, on Jul 29.
#//!_Challenge 1: FizzBuzz; Testing Suspended.
#//!_Note: Requirement of three total algos suspended; only 1 required today.

# def fizzbuzz (n):
#     result = []

#     for i in range(1, n + 1):
#         add = ''

#         if i % 3 == 0:
#             add += 'Fizz'
        
#         if i % 5 == 0:
#             add += 'Buzz'
        
#         if add == '':
#             result.append(i)
#         else:
#             result.append(add)
        
#         return result

#//*----------------------Day Divider------------------------//

#//*_Day 41: July 29, 2022
#//!_Please note: today challenges are in JS file. "'See you' tomorrow! :-)"

#//*----------------------Day Divider------------------------//

#//*_Day 42: July 30, 2022; Done Later, on Jul 29.
#//!_Challenge 1: Algorithms briefly suspended today, and the same measure will be used on an ad-hoc basis in the future. Rationale: In addition to algos, I am trying to make some good progress with this list: https://amankharwal.medium.com/130-python-projects-with-source-code-61f498591bb

#//!_Challenge 1 Note: Test failed.

# import random

# n = random.randrange(1, 10)
# guess = int(input("Enter any number: "))
# while n!= guess:
#     if guess < n:
#         print("Too low! :-(")
#     elif guess > n:
#         print("Sorry! Too high!")
#         guess = int(input("Come on, try again! Enter any number: "))
#     else:
#         break
#     print("Alright! Look at you! You nailed it--good job!")

#//*----------------------Day Divider------------------------//

#//*_Day 47: Aug 3, 2022; Done Later, on Aug 4.
#//*_Note: Testing briefly suspended today, and the same measure will be used on an ad-hoc basis in the future. 

#//!_Challenge 1: Sum of Nested Arrays

# def sumNested(arr):
#     result = 0
#     for i in range(0, len(arr)):
#         if type (arr[i]) is not int:
#             result += sumNested(arr[i])
#         else:
#             result += arr[i]
#     return result

#//!-------Challenge-Number Divider--------//

#//!_Challenge 2: Find Majority Element (Element Appearing [ > n/2 ] times )

# import math
# from pickletools import read_uint1
# def majorityElement(arr):
#     candidate = None
#     count = 0
#     for i in range(0, len(arr)):
#         if candidate is None or count == 0:
#             candidate = arr[i]
#             count = 1
#         elif arr[i] == candidate:
#             count += 1       
#         else:
#             count -= 1
#         count = 0
#         for el in arr:
#             if el == candidate:
#                 count += 1     
#             if count > math.floor(len(arr) / 2):
#                 return candidate
#             else:
#                 return None

#//!-------Challenge-Number Divider--------//

#//!_Challenge 3: Return Mean, Median and Mode of Array

# def meanMedianMode(arr):
#     mean = sum(arr) / float(len(arr))
#     arr = sorted(arr)
#     median = arr[int(len(arr) / 2)]
#     mode = None
#     hashTable = {}
#     for i in arr:
#         if i in hashTable:
#             hashTable[i] += 1
#         else:
#             hashTable[i] = 1
#         if mode is None or hashTable[i] > mode:
#             mode = i
#         return {'mean': mean, 'median': median, 'mode': mode}

#//*----------------------Day Divider------------------------//

#//*_Day 51: Aug 7, 2022
#//*_Note: Testing briefly suspended.

#//!_Challenge 1: "Calculcate the angle on a clock."
#?_Testing suspended.

# def clockAngle(hour, mins):

#     h = 0.5 * (60 * hour + mins)
#     m = 6 * mins
#     angle = abs(h - m)

#     if angle > 180:
#         return 360 - angle
#     else:
#         return angle

#//!-------Challenge-Number Divider--------//

#//!_Challenge 2: "Check if valid number of parentheses."

# def matchingParens(string):
#     counter = 0
#     for c in string:
#         if c == '(':
#             counter += 1r
#         elif c == ')':
#             counter -= 1
    
#     if counter == 0:
#         return True
#     else:
#         return False

#//!-------Challenge-Number Divider--------//

#//!_Challenge 3: "Count words that have at least 3 continuous vowels."

# import re
# def threeVowels(string):
#     arr = string.split(' ')
#     count = 0
#     for word in arr:
#         if re.search(r' [aeiou] {3,}', word) != None:
#             count += 1
#         return count 
#//*----------------------Day Divider------------------------//

#//*_Day 52: Aug 8, 2022
#//!_Please note: today challenges are in JS file. "'See you' tomorrow! :-)"

#//*_Updated With Correct Date For Commit; time: 12:53 AM (Aug 9)

#//*----------------------Day Divider------------------------//

#//*_Day 53: Aug 9, 2022
#//!_Testing still suspended. To be resumed tomorrow / next day of practice.

#//!_Challenge 1: First non-repeating character:

# def firstNonRepeat(string):
#     hashTable = {}

#     #//?_store each character in the hash table with the frequency of times it occurs:
#     for c in string:
#         if c not in hashTable:
#             hashTable[c] = 1
#         else:
#             hashTable[c] += 1

#     #//?_Loop through the string and return the first character with a count of 1 in the hash table: 
#     for c in string:
#         if hashTable[c] == 1:
#             return c
    
#     #//?_Return -1 if no unique character exists:
#     return -1

#//!_Challenge 2: Remove all adjacent matching characters:
#//!_Note: Even without testing the code, it's interesting how Python is very sensitive to white space! Details/explanation: the (VS-Code) editor kept underlining the "return result" (line 931 below), to warn me of a syntax/other problem. And the cause turned out to be a white space issue at the "while i < ..." line (918)!

# def removePairs(string):
#     #//?_A new string will be returned:
#     result = ''
#     i = 0

#     #//?_Loop through the entire string:
#     while i < len(string):
#          #//?_If on last character:
#          if i == len(string) - 1:
#             result += string[i]
        
#          #//?_If characters are not equal, then add to new string:
#          elif string[i] != string[i + 1]:
#             result += string[i]

#          #//?_if adjacent characters are equal to each other, then skip the next character entirely:
#          else:
#             i += 1
#     i += 1
#     return result

#//!_Challenge 3: List of integers that overlap in two ranges:

# def overLapping(range1, range2):
#     overlap = []

#     #//?_Check whether each number within range 1 is within range 2:
#     for i in range(range1[0], range1[1] + 1):
#         if i >= range2[0] and i <= range2[1]:
#             overlap.append(i)
        
#     return overlap

#//*----------------------Day Divider------------------------//

#//*_Day 54: Aug 10, 2022
#//!_Please note: today's challenges are in JS file. "'See you' tomorrow! :-)"

#//*----------------------Day Divider------------------------//

#//*_Day 55: Aug 11, 2022
#//!_Please note: today's challenges are waived. Instead, I am practicing via a Python mini-project.

#//*----------------------Day Divider------------------------//

#//*_Day 56: Aug 10, 2022
#//!_Please note: today's challenges are in JS file. "'See you' tomorrow, or 'next time'! :-)"

#//*----------------------Day Divider------------------------//
#//*_Day 57: Aug 13, 2022
#//!_Please note: today's challenges are waived. Instead, I am practicing via a Python mini-project.

#//*----------------------Day Divider------------------------//
#//*_Day 59: Aug 15, 2022

#//!_Challenge 1: Is N a prime no.?

# import math
# def isPrim(n):
#     #?_All numbers less than 2 are not primes:
#     if n < 2:
#         return False
#     #?_Loop from 2 to sqrt(n):
#     for i in range(2, int(math.ceil(math.sqrt(n)))):
#         #?_Check if (n % i) = 0. If "yes," then there are 2 numbers a & b, which if multiplied = n.
#         if n % i == 0:
#             return False        
#     return True 

#//!-------Challenge-Number Divider--------//
#//!_Challenge 2: Find majority element (i.e., appearing more than n/2 times).

# import math
# def majorityElement(arr):
#     candidate = None
#     count = 0
#     for i in range(0, len(arr)):
#         if candidate is None or count == 0:
#             candidate = arr[i]
#             count = 1
#         elif arr[i] == candidate:
#             count += 1
#         else:
#             count -= 1

#//!-------Challenge-Number Divider--------//
#//!_Challenge 3: List of integers that overlap in two ranges.

# from turtle import end_fill
# def overLapping(range1, range2):
#     overlap = []
#     #?_Check whether each number within range1 is also among those of range2.
#     for i in range(range1[0], range1[1] + 1):
#         if i >= range2[0] and i <= range2[1]:
#             overlap.append(i)
#     return overlap

#//*----------------------Day Divider------------------------//

#//*_Day 60: Aug 16, 2022
#//!_Challenges waived for the day.

#//*----------------------Day Divider------------------------//

#//*_Day 61: Aug 17, 2022
#//!_Please note: today's challenges are in JS file. "'See you' tomorrow, or 'next time'! :-)"

#//*----------------------Day Divider------------------------//

#//*_Day 62: Aug 18, 2022
#//!_Please note: today's challenges are waived. Instead, I am practicing via a Python mini-project; take a looksie in the relevant folder/file! :-) 

#//*----------------------Day Divider------------------------//

#//!_Missing: Days 63 & Day 64, Aug 19 & 20 (2022).

#//*----------------------Day Divider------------------------//

#//*_Day 65: Aug 21, 2022
#//!_Please note: today's challenges are in JS file. "'See you' tomorrow, or 'next time'! :-)"

#//*----------------------Day Divider------------------------//

#//*_Day 66: Aug 22, 2022
#//!_Please note: today's challenges are waived. Instead, I am practicing via a Python mini-project; take a looksie in the relevant folder/file! :-) 

#//*----------------------Day Divider------------------------//
#//*_Day 69: Aug 25, 2022

#?_Challenge 0:
#?_Note: Test successful! (It printed.) :-) 
# print("Sanity Check!")

#!_Challenge 1: Two-Sum Problem: 
#!_Details: You are given an array and some number S. Determine if any two numbers within the array sum to S.

#!_Note 1: For the love of G_d: what am I doing wrong?! Please note that I've tried googling a solution in vain.

#!_Google-search details:
#!_Detail 1: Search term (among others): "correct way of calling a function in python in vs code"
#!_Detail 2: Results = many of course. However, this particular solution isn't helping (!): 
#!_Solution URL: https://stackoverflow.com/questions/67078237/how-do-i-call-a-function-in-vs-code-using-python#:~:text=In%20order%20to%20call%20a,you%20should%20use%20print%20instead.

# def twoSum(arr, S):
#     hashTable = {}

#     for i in range(0, len(arr)):

#         sumMinusElm = S - arr[i]

#         if sumMinusElm in hashTable:
#             return True
        
#         hashTable[arr[i]] = True
    
#     return False

    #!_Note 2: Part of the problem is on this line below; VS-Code is helpfully giving "twoSum" a red squigly line... 
    # print(twoSum[1, 2, 3], 5)


    #//!_Challenges 2 and 3 waived.
    #//!_Reason: Time spent testing challenge 1, all in vain! :-(

#//!-------Challenge-Number Divider--------//

#//*----------------------Day Divider------------------------//

#//*_Day 70: Aug 26, 2022
#//!_Challenges waived today; reason: for physical-mental recuperation.

#//*----------------------Day Divider------------------------//

#//*_Day 71: Aug 27, 2022
#//!__Please note: today's (ordinary--i.e., non-ML/Other) challenges are waived. Instead, I am practicing via a Python mini-project. The "Day's Special (?!):" K-Nearest Neighbor! :-)

#//*----------------------Day Divider------------------------//

#//!_Missing: Days 72 to 77, Aug 28 to Sept 2 (2022).

#//*----------------------Day Divider------------------------//

#//*_Day 78: Sept 3, 2022
#//!_Please note: today's challenges are in JS file. "'See you' tomorrow, or 'next time'! :-)"

#//*----------------------Day Divider------------------------//

#//*_Day 79: Sept 4, 2022
#//!_Please note: Today's challenges were handwritten; please refer to relevant folder for details.

#//*----------------------Day Divider------------------------//

#//*_Day 80: Sept 5, 2022
#//!_Missing

#//*----------------------Day Divider------------------------//

#//*_Day 81: Sept 6, 2022
#//!_Please note: today's challenges are in JS file. "'See you' tomorrow, or 'next time'! :-)"

#//*----------------------Day Divider------------------------//