
console.log("hello world!")

console.log("========================")
console.log("variables")
console.log("========================")

var i = 4;
console.log("i =", i, "typeofi(i):", typeof(i))

i = "sting";
console.log("i =", i, "typeofi(i):", typeof(i))

i = 3.1415
console.log("i =", i, "typeofi(i):", typeof(i))

//console.log(i)

console.log("========================")
console.log("numbers")
console.log("========================")


console.log("Hello, world!")

console.log("====================")
console.log("== Variables")
console.log("====================")

var theVariable = 4
console.log("== theVariable:", theVariable, "typeof(theVariable):", typeof(theVariable))

theVariable = "string"
console.log("== theVariable:", theVariable, "typeof(theVariable):", typeof(theVariable))

theVariable = 3.1415
console.log("== theVariable:", theVariable, "typeof(theVariable):", typeof(theVariable))

console.log("====================")
console.log("== Numbers")
console.log("====================")

var n = 9
var m = 5

console.log("n/m:", n/m)

console.log("========================")
console.log("comparisons")
console.log("========================")

console.log("== 2 == 2", 2==2)
console.log("== 2 == 3", 3==2)
console.log("== 2 == '2'", 2=="2")
console.log("== 2 == '2'", 2==="2")
console.log("== 2 !== '2'", 2!=="2")


console.log("========================")
console.log("strings")
console.log("========================")

var str1 = "This is \"string\" 1"
var str2 = 'This is string 2'
var concatenation = str1 + str2
console.log("adding str1 + str2", concatenation)
console.log("adding str1 + 16:", str1 + 16)

console.log("== n / m:", n / m)

console.log("====================")
console.log("== Comparisons")
console.log("====================")

console.log("== 2 == 2:", 2 == 2)
console.log("== 2 == 3:", 2 == 3)
console.log("== 2 == '2':", 2 == '2')
console.log("== 2 === '2':", 2 === '2')
console.log("== 2 !== '2':", 2 !== '2')

console.log("====================")
console.log("== Strings")
console.log("====================")

var str1 = "This is a \"string\""
var str2 = 'This is also a "string"'
var concatenation = str1 + str2
console.log("== concatenation:", concatenation)
console.log("== str1 + 16:", str1 + 16)
console.log("== 16 + str1:", 16 + str1)

str1[3] = 'x'
console.log("== str1[3]:", str1[3])
console.log("== str1.replace('s', 'x'):", str1.replace('s', 'x'))
console.log("== 'decathlon'.indexOf('cat'):", 'decathlon'.indexOf('cat'))
console.log("== 'team'.indexOf('i'):", 'team'.indexOf('i'))

console.log("====================")
console.log("== functions")
console.log("====================")

function addStuff(a, b, c){
    console.log("== In addStuff, arguments: ", arguments)
    return a + b + c
}

console.log("== addStuff(1, 2, 3): ", addStuff(1, 2, 3))
console.log("== addStuff: ", addStuff('1', '2', '3'))
console.log("== addStuff(1, 2, '3'): ", addStuff(1, 2, '3'))
console.log("== typeof(addStuff: ", typeof(addStuff))
console.log("== addStuff(1, 2): ", addStuff(1, 2))                      //c becomes undefined
console.log("== addStuff(1, 2, 3, 4): ", addStuff(1, 2, 3, 4))          //can pass more values than in the function

var foo = addStuff;
console.log("== foo(1, 2, 3): ", foo(1, 2, 3))

var bar = function () {                                                 //anonymous function
    console.log("== Inside out anonymous function")
}

console.log("====================")
console.log("== arrays")
console.log("====================")

var array = [1, "2", foo, ['a', 'b', 'c']]
console.log("== array: ", array)
console.log("== array.length: ", array.length)
console.log

for (var i = 0; i < array.length; i++){                                 //array loop
    console.log("== array[" + 1 + "]:" , array[i])
}

array.forEach(function (elem) {                                         //forEach element in the array
    console.log("== In forEach(), elem: ", elem)
})

console.log("====================")
console.log("== object")
console.log("====================")

var obj = {}                                                             //mapping objects to their discriptions       
console.log("== object: ", obj)                                          

var mapping = {
    'cat': 'cute',
    'dog': 'loyal'
}

console.log("== mapping: ", mapping)
console.log("== mapping ['cat']: ", mapping['cat'])

var student = {
    name: 'Luke Skywalker',
    gpa: 3.14,
    email: 'thelastjedi@gmail.com'
}

console.log("== student: ", student)
console.log("== student['name']: ", student['name'])
console.log("== student.name: ", student.name)

var field = 'gpa'
console.log("== student[field]: ", student[field])