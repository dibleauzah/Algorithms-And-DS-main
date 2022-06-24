#//*_Testing--Py version...(GitHub Push 1)
#//!_Test-2--i.e., GitHub--Py version

#//*_Day 7: June 23, 2022
#//*_Algos & Jrl Self-Challenge 2022

#//*--1)--"Mean, Median and Mode"; 
#//*--Notes: 
#//*--1) Question and answer source: CoderByte Bootcamp- & Job-Interview Prep
#//*--2) As of 11:15 PM, I'm suspending work--i.e., executing this program in the terminal. It's been forever--or, I've probably never done it before--since I ran a Python program. I usually run JS. I've figured out one of the underlying issues: misnaming the file as "mcaTMan..." instead of the intended "macTManAlgos.py". And I have tried Googling the issue, all in vain. So for now: tactical retreat! :-) [Another battle will be waged later.]

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

    print [1, 2, 5, 4, 5, 5, 7, 8]

#//!-------Challenge-Number Divider--------//