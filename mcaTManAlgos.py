#//*_Testing--Py version...(GitHub Push 1)
#//!_Test-2--i.e., GitHub--Py version

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