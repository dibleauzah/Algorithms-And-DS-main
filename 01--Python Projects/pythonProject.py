
#//!_Template 1 Starts Below:
#//*-----------------Challenge Divider-------------------//
#//*_Day X: [Month] DD, 2022
#//!_[Name of Challenge Here]
#//?--[Add Code/Details Here]
#//*-----------------Challenge Divider--------------------//
#//!_Template Ends Above.

#//*---------------Launch Date: Aug 11, 2022-------------//
#//*_Aug 11, 2022
#//*_Algos & Jrl Self-Challenge 2022; Python Projects--i.e., In Lieu of Algos:
#//*(Important Note[!!!]: Pay Attn to the Solution-Options' Complexity Analyses!)
#//!_Challenge: Number Guessing Game using Python
#//!_Note: Testing suspended.

# import random
# n = random.randrange(1, 10)
# guess = int(input("Please enter any number([!]:-)]: "))
# while n != guess:
#     if guess < n:
#         print("Too low! Sorry; try again!")
#         guess = int(input("Go on, please enter any number([!]:-)]: "))
#     elif guess > n:
#         print("Too high! Sorry; try again!")
#         guess = int(input("Go on, please enter any number([!]:-)]: "))
#     else:
#         break
# print("Alright! Good job! :-) ")

#//*-----------------Challenge Divider--------------------//
#//*_Aug 13, 2022
#//!_Challenge: Group Elements of Same Indices
#//!_Note: Test: unsuccessful; output: "Invalid Syntax".

# inputLists = [[10, 20, 30], [40, 50, 60] [70, 80, 90]]
# outputLists = []
# index = 0
# for i in range(len(inputLists[0])):
#     outputLists.append([])
#     for j in range(len(inputLists)):
#         outputLists[index].append(inputLists(inputLists[j][ index ]))
#     index = index + 1
# a, b, c = outputLists[0], outputLists[1], outputLists[2]
# print (a, b, c)

#//*-----------------Challenge Divider--------------------//
#//*_Aug 18, 2022
#//!_Challenge: Calculate mean, median, and mode.
#//!_Note: Testing suspended.

#//!_Part I--Mean:
#//!_Note, added after completion of solution: Despite the suspension of testing--i.e., without proving it works or not, I have to say: this is quick and sweet! :-)

# list1 = [1, 2, 3, 4, 5]
# mean  = sum(list1)/len(list1)
# print(mean)

#//!-------Internal-Challenge Part Divider--------//
#//!_Part II--Median:

# list1 = [1, 2, 3, 4, 5, 6, 7]
# list1.sort()
# if len(list1) % 2 == 0:
#     m1 = list1[len(list1)//2]
#     m2 = list1[len(list1)//2 - 1]
#     median = (m1 + m2) / 2
# else:
#     median = list1[len(list1)//2]
# print(median)

#//!-------Internal-Challenge Part Divider--------//
#//!_Part III--Mode:

#//?_To be done later / on another day.

#//*-----------------Challenge Divider--------------------//
#//*_Aug 22, 2022
#//!_Challenge: "Calculate mean, median, and mode" concluded--i.e., with mode.
#//!_Note: Testing still suspended.

list1 = [1, 2, 3, 4, 5, 6, 7]
frequency = {}
for i in list1:
    frequency.setDefault(i, 0)
    frequency[i] += 1

frequent = max(frequency.values())
for i, j in frequency.items():
    mode = i
print(mode)

#//*-----------------Challenge Divider--------------------//