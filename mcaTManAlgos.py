#//*_Testing--Py version...(GitHub Push 1)
#//!_Test-2--i.e., GitHub--Py version

#//*_Day 7: June 23, 2022
#//*_Algos & Jrl Self-Challenge 2022

#//*--1)--"Mean, Median and Mode"; 
#//*--Notes: Question and answer source: CoderByte Bootcamp- & Job-Interview Prep

def meamMedianMode(arr):

    mean = sum(arr) / float(len(arr))

    arr = sorted(arr)
    median = arr[int(len(arr) / 2)]

    mode = None
    hashTable = {}
    for i in arr:
        if i in hashTable:
            hashTable[i] += 1
        else:
            hashTable[i] = 1
        if mode is None or hashTable[i] > mode:
            mode = i
    
    return { 'mean': mean, 'median': median, 'mode': mode }


#//!-------Challenge-Number Divider--------//