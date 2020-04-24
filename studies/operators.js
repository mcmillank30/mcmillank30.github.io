
/*
 * OPERATORS:
 *
 * 0 In Javascript operators are used to act on data similar to how operators can be used in math to perform operations on numbers
 * Assignment, Arithmetic, Comparison, Logical, Unary, and Ternary are all different types of operators in JavaScript.
 */





// 1. Assignment operators //
// Assignment operators include: =, +=, -=, *=, /=

var assignVar = "Assign me. "     //using assignment operator to assign string value

assignVar += "Add me"             //using plus assignment operator to  add and assign new value
console.log(assignVar)            //'Assign me. Add me.' prints to console

var subtractMe = 10
subtractMe -= 7                   //using subtract assignment operator to subtract and  assign new value
console.log(subtractMe)           //prints to console 3


var multiplyMe = 70
multiplyMe *= 3                   //using  multiplication assignment operator to multiply and assign new value
console.log(multiplyMe)           //210 prints to console



var divideMe = 30
divideMe /= 3                     //using division assignment operator to divide and assign new value
console.log(divideMe)             //logs 10 to console








// 2. Arithmetic operators //
// Arithmetic operators, operate on number values similar to how the might in mathamatics.
// Frequently use JavaScript operators include: +, -, /, *, ++, --


console.log(5 + 5)                //using plus operator to add two number values. Prints 10 to console

console.log(15 - 5)               //using subtraction operator to subtract two number values. Prints 10 to console

console.log(5 * 2)                //using multiplication operator to multiply two number values. Prints 10 to console

console.log(20 / 2)               //using divide operator to divide two number values. Prints 10 to console


var value = 9

value++                           //using ++ operator to increment value by 1

console.log(value)                //Prints 10 to console
                    
value--                           //using -- operator to decrement value by 1            

console.log(value)                // Prints 9 to console









// 3. Comparision operators //
// Comparision operator are useful for comparing to value. They are used in conditional statements, and resolve to a true of false value.
// JavaScript comparisiom operators include: <, >, >=, <=, ==, ===, !=, !==




console.log(1 < 2)                //using less than comparison operator. Resolves to true

console.log(1 > 5)                //using greater than comparison operator. Resolves to false

console.log(5 >= 5)               //using greater than or equal comparison operator. Resolves to true

console.log(2 == '2')             //using lose comparision operator. Converts value you to simalar type. Resolves to true.

console.log(2 === '2')            //using strict comparision operator. Resolves to false.

console.log(2 !== 'cat')          //using  not strict equal comparision operator. Resolves to true.








// 4. Logical operators //
// Logical operators are also useful with in conditional statemetment. Logial operators allow for combining multiple conditions 
// to resolve to a single boolean value.
// Javascript Logical Operatiors include: &&, ||, !

console.log('cat' === 'Cat' || 1 < 2)        //The second condition resolves to true, so print true to console.

console.log(1 < 5 && 5 === 5 )               //Both conditions resolves to true, so print true to console.

console.log(!true)                           //using bang operator (mean not). Resolves to false








// 5. Unary operators(!, typeOf, -) //
// Unary Operators operate on one operand
// The typeof unary operator will return a string representation of the value it operates on
// The bang unary operator will negate the value it operates on
// The minus unary operator converts a value to a number and negate the value 


console.log(typeof 3)                         //print the string value 'number' to console


console.log(!false)                           //negates the boolean value, prints true to console


console.log(-'100')                           //print -100 to console







// 6. Ternary operator(a?b:c) //
// The Ternary operator operates on three operands. It can be thought of as a shorthand if statement.
// It begins with the condition to be evaluated, then ? the value to return if condition is true : then the value to return if condition is false

var x = 'cat'

x === 'dog' ? 'Yayyy!!!' : 'oooh'              //resolve to false, returns 'oooh'
