
# *_________________Nov 8, 2022________________*//
# *_Note: Testing suspended for problems 2 to 6.

# !_No.-1: FizzBuzz
# !_Test Unsuccessful.
# def fizzBuzz(n):
#     result = []
#     for i in range(1, n - 1):
#         add = ' '
#     if i % 3 == 0:
#         add += 'Fizz'
#     if i % 5 == 0:
#         add += 'Buzz'
#     if add == ' ':
#         result.append(i)
#     else:
#         result.append(add)
#     return result
# fizzBuzz(100);

# //*_________________Section/Number/Challenge Divider________________*//

# !_Sanity-Check! :-(

# !_Program make a simple calculator;
# !_Source (Copied & Pasted): https://www.programiz.com/python-programming/examples/calculator

# This function adds two numbers
# def add(x, y):
#     return x + y
# # This function subtracts two numbers
# def subtract(x, y):
#     return x - y
# # This function multiplies two numbers
# def multiply(x, y):
#     return x * y
# # This function divides two numbers
# def divide(x, y):
#     return x / y
# print("Select operation.")
# print("1.Add")
# print("2.Subtract")
# print("3.Multiply")
# print("4.Divide")
# while True:
#     # take input from the user
#     choice = input("Enter choice(1/2/3/4): ")
#     # check if choice is one of the four options
#     if choice in ('1', '2', '3', '4'):
#         num1 = float(input("Enter first number: "))
#         num2 = float(input("Enter second number: "))
#         if choice == '1':
#             print(num1, "+", num2, "=", add(num1, num2))
#         elif choice == '2':
#             print(num1, "-", num2, "=", subtract(num1, num2))
#         elif choice == '3':
#             print(num1, "*", num2, "=", multiply(num1, num2))
#         elif choice == '4':
#             print(num1, "/", num2, "=", divide(num1, num2))
#         # check if user wants another calculation
#         # break the while loop if answer is no
#         next_calculation = input("Let's do next calculation? (yes/no): ")
#         if next_calculation == "no":
#           break
#     else:
#         print("Invalid Input")

# !_Sanity-Check Result: The above code executes successfully. This means that I am somehow typing up the wrong solution, or messing it up somehow. IOW/e.g.: 1)--Perhaps the author(s) of the tutorial (from the CoderByte Algorithms book) made a mistake; or 2)--I am not calling the function the right way.

# //*_________________Section/Number/Challenge Divider________________*//
# !_No.-2: Two-Sum Problem

# def twoSum(arr, S):
#     hashTable = {}
#     for i in range(0, len(arr)):
#         sumMinusElement = S - arr[i];
#     if sumMinusElement in hashTable:
#         return True
#     hashTable[arr[i]] = True
#     return False
# //*_________________Section/Number/Challenge Divider________________*//
# !_No.-3: Calculate sum of nested array.

# def sumNested(arr):
#     result = 0
#     for i in range(0, len(arr)):
#         if type(arr[i]) is not int:
#             result += sumNested(arr[i])
#         else:
#             result += sumNested(arr[i])
#     return result;
# //*_________________Section/Number/Challenge Divider________________*//
# !_No.-4: Calculate angle on a clock.

# def clockAngle(hour, mins):
#     h = 0.5 * (60 * hour + mins)
#     m = 6 * mins
#     angle = abs(h - m)
#     if angle > 180:
#         return 360 - angle
#     else:
#         return angle
# //*_________________Section/Number/Challenge Divider________________*//
# !_No.-5: Determine if N is a prime number.

# import math
# def isPrime(n):
#     if n < 2:
#         return False
#     for i in range(2, int(math.ceil(math.sqrt(n)))):
#         if n % i == 0:
#             return False
#     return True;

# //*_________________Section/Number/Challenge Divider________________*//
# !_No.-6: Implement map and filter.

# ?_Part 1; Map:

# def map(arr, fn):
#     result = []
#     for i in arr:
#         applied = fn(i)
#         result.append(applied)
#     return result;

# #?_Usage:
# square = lambda x: x * x
# addZeros = lambda x: int(str(x) + '00')

# map([1, 2, 3, 4], square) #?_Should return => [1, 4, 9, 16]
# map([1, 2, 3, 4], addZeros) #?_Should return => [100, 200, 300, 400]

# ?_Part 2; Filter:

# def filter(arr, fn):
#     result = []
#     for i in arr:
#         check = fn(i)
#         if check:
#             result.append(i)
#     return result;

#     #?_Usage
#     isPositive = lambda x: x > 0
#     filter([-2, 4, 5, 8, -44, -6], isPositive); #?_ Should return => [4, 5, 8]

# //*_________________Section/Number/Challenge Divider________________*//

#print("Just testing...")
#?_Test Successful!

#//?____________________Day Divider_____________________*//

#//*____________________Nov 15, 2022____________________*//

#!_#-7:_Remove characters from array-string.
#!_Test successful.

# def removeChars(arr, string):
#     hashTable = {}
#     for c in arr:
#         hashTable[c] = True
#     result = ''
#     for c in string:
#         if c not in hashTable:
#             result += c
#     return result
# print (removeChars(['h', 'e', 'w', 'o'], "hello world"));

# //*_________________Section/Number/Challenge Divider________________*//

#!_#-8:_Check if valid number of parentheses.
#!_Test successful.

# def matchingParens(string):
#     counter = 0
#     for c in string:
#         if c == '(':
#             counter += 1
#         elif c == ')':
#             counter -= 1
#     if counter == 0:
#         return True
#     else:
#         return False
# print(matchingParens("()()())(())))(()))))))((("));

# //*_________________Section/Number/Challenge Divider________________*//

#!_#-9:_First non-repeating character: Given a string, return the first character that is unique in the entire string. E.g.: for "hello henry," the 1st non-repeating character is "o".

# def firstNonRepeater(string):
# #!_Test partially successful.

#     hashTable = {}
#     for c in string:
#         if c not in hashTable:
#             hashTable[c] = 1
#         else:
#             hashTable[c] += 1
#     for c in string:
#         if hashTable[c] == 1:
#             return c
#     return -1
# print (firstNonRepeater("abda xa dabra"));

# //*_________________Section/Number/Challenge Divider________________*//

