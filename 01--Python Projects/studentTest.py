students = {846563: ["Cute Princess",89, 67, 98, 100],
            736542: ["Fairy Queen",76,56,83,99],
            287563: ["Evil Don",52,81,79,27],
            294512: ["Fussy Cat",27,38,100,75],
            975321: ["Lazy Daisy",88,99,66,77]}

print(students[975321])
print(students[846563])

# calculate the average test score of Lazy Daisy
s = students[975321]
averageTestScore = (s[1]+s[2]+s[3]+s[4])/4
print("Lazy Daisy average test score is",
	averageTestScore)

# adding one more record to the dictionary 'students'
students[625342] = ["Glad Lad",98,76,48,80]

# display the students dictionary
print(students)

# delete the record about Fussy Cat from the dictionary
del students[294512]
print(students)