
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
#//!_Note: Testing Suspended.

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
#//!_Note: Testing Suspended.

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

# list1 = [1, 2, 3, 4, 5, 6, 7]
# frequency = {}
# for i in list1:
#     frequency.setDefault(i, 0)
#     frequency[i] += 1

# frequent = max(frequency.values())
# for i, j in frequency.items():
#     mode = i
# print(mode)

#//*-----------------Challenge Divider--------------------//
#//*_Aug 27, 2022
#//!_Challenge: The "Day's Special (?!):" K-Nearest Neighbor! :-)
#//!_Note: Testing Suspended.
#//!_Credit/Source: https://www.geeksforgeeks.org/k-nearest-neighbor-algorithm-in-python/
#?_Gosh, it's so hard to do this stuff without testing it--I feel like I'm walking in the dark, or walking in a hazardous area with my eyes blinded!

#//?_Import necessary modules
# from sklearn.neighbors import KNeighborsClassifier
# from sklearn.model_selection import train_test_split
# from sklearn.datasets import load_iris
# import numpy as np
# import matplotlib.pyplot as plt

# irisData = load_iris()

#?_Create feature and target arrays:
# X = irisData.data
# Y = irisData.target

#?_Split into training and test sets:
# X_train, X_test, y_train, y_test = train_test_split(
#     x, y, test_size = 0.2, random_state = 42)

# neighbors = np.arrange(1, 9)
# train_accuracy = np.empty(len(neighbors))
# test_accuracy = np.empty(len(neighbors))

# #?_Loop over the K values:
# for i, k in enumerate(neighbors):
#     knn = KNeighborsClassifier(n_neighbors = k)
#     knn.fit(X_train, y_train)

#     #?_Compute training and test data accuracy:
#     train_accuracy[i] = knn.score(X_train, y_train)
#     test_accuracy[i] = knn.score(X_test, y_test)


# #?_Generate plot
# plt.plot(neighbors, test_accuracy, label = 'Testing dataset Accuracy')
# plt.plot(neighbors, train_accuracy, label = 'Training dataset Accuracy')
  
# plt.legend()
# plt.xlabel('n_neighbors')
# plt.ylabel('Accuracy')
# plt.show()

#//*-----------------Challenge Divider--------------------//