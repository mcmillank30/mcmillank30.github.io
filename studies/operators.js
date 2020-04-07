
/*
 * OPERATORS:
 *
 * 0.Operators help us perform actions on values.
 * Assignment,  Arithmetic, Comparison, Conditional, Logical, Unary, and Ternary are all different types of operators in JavaScript. 
 */



// 1. Assignment operators //
// The Assignment Operator in JavaScript it is used to assign a values to a variable. 
var age = 25;        // The assignment operator here, is assigning the value of 25 to the variabale age
console.log(age);    // prints the value 25

age += 1;            // The plus equals assignment operator adds to current value of age, and reassigns the new value to age
console.log(age);    // prints the value 26

age -= 1;            // The minus equals assignment operator subtracts from current value of age, and reassigns the new value to age
console.log(age);    // prints the value 25

age *= 2;            // The multiply equals assignment operator multiplies the current value of age, and reassigns the new value to age
console.log(age);    // prints the value 50

age /= 2;            // The divid equals assignment operator divides the current value of age, and reassigns the new value to age
console.log(age);    // prints the value 25


// 2. Arithmetic operators //
/* Arithmatic operator performs similar functions as in math, with slight differences in some cases. The Additon operator adds numbers(+). The Subtraction operator subtract numbers(-).
 * The multiplication operator mutiplies numbers(*). The division operatior divids numbers(/). A number can be increase by 1 using the Increment operator (++). 
 * A number can be decrease by 1 using the Decrement operator(--). The Modulus can be used to find the reminder of a number(%).
 */
console.log(1+1);  //Using  Addition operator to add 1 and 1 => prints the number 2
console.log(2-1);  //Using  subtraction operator to subtract 1 from 2 => prints the number 1
console.log(4*2);  //Using  Multiplication operator to mutiply 4 and 2 => prints the number 8
console.log(6/3);  //Using  Divison operator to divid 6 by 3 => prints the number 2

console.log(10 % 3);  //Using the Modulus operator to check for a remainder => prints the number 1

var x = 2;
x++;
console.log(x);  //Using  Increment operator to increase x by 1 => prints the value 3

var z = 5;
z--;
console.log(z);  //Using  Decrement operator to decrease z by 1 => prints the number 4




// 3. Comparision operators //
/* Comparision operators compare values, and reslove to a boolean value true or false. Comparision operators are used in conditional statement.
 * There are different types of comparision operators;   == equality operator, === strick equality operator, != not equal operator, !== strickly not equal, 
 * < less than, > greater than, >= greater than or equal to, <= less than or equal to.
 * When loosely comparing two values both values can be converted to a simalar type before comaparing. 
 * With strict comparions both value and type are being check for.
 */

console.log('string1'=='string2');  //comparing two strings values using equality operator => prints true

console.log(1===1);                 //comparing two number values using strick equality operator => prints true

console.log(4!=2);                  //comparing two numbers using not equal operator => prints true

console.log(1!==1);                 //comparing two numbers using not strictly equal operator  => prints false

console.log(4 > 2);                 //comparing two numbers using greater than operator => prints true

console.log(4 < 2);                 //comparing two numbers using less than operator => prints false

console.log(20 >= 2);               //comparing two numbers using greater than or equal operator => prints true

console.log(1 <= 2);                //comparing two numbers using less than or equal operator => prints true

var num = 0;

console.log(num += 2);              // adding 2 to num and assigning the new value to num => prints 2

console.log(num *= 2);              // mutiplies 2 * num and assigning the new value to num => prints 4

console.log(num -= 2);              // subtracts  2 from num and assigning the new value to num => prints 2




// 4. Logical operators //
/* Logic operators are also used in condition statement. 
 * Logical operators can be combined with comparision expressions in a conditional statement to evaluate multiple conditions to a single true or false value.
 * And, Or, Bang (&&, ||, !) are Logical Operators
 */
console.log(1===1 &&'string1'=='string1' );  //both comparison expresses are eveluate to true => prints true

console.log(4 > 2 || 1 === 17 );             //one of the comparison expresses eveluates to true => prints true

console.log(!(4===2));                       //comparison expresses are eveluates to not true => prints true



// 5. Unary operators(!, typeOf, -) //
/* Unary operators can operate on a single value. The Typeof operator produces a string value that names the type of value that was given.
 * The bang operator is used to negate a logical expression. The minus operator is used to negate a number.
 */
console.log(typeof 100);  // evaluates the type of value => prints "number"

console.log(!true);       // evaluates the value, then negates it => prints false

var abc = 5;
console.log(-abc);        // evaluates variable abc, then negates it => prints -5



// 6. Ternary operator(a?b:c) //
/* The Ternary operator acts on three values. It can be thought of somewhat like a shorthand If Statement. 
 * The syntax;  begins with a condition, follow by a question mark, then an expression to evaluate if the intial condition is true, 
 * then a colon followed by an expression to evaluate if the initial condition is false.
 */
var sunny = 10;
var cloudy = 5;
console.log(sunny > cloudy ? "bring shades" : "leave shades");  // evaluates if sunny is greater than cloudy. => print first value

