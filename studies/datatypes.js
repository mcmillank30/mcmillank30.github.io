/*
 * DATATYPES:
 *
 * 0. Datatypes are a type of value in JavaScript. JavaScript has two kinds of datatypes Primitive Datatypes and Complex Datatypes.
 * Primitive Datatypes are strings, number, booleans, NaN(not a number), null
 * Complex Datatypes are functions, Arrays, and Objects.
 */


// 1. Number //
// In JavaScript number values can be used to do arithmetic by using arithmetic operators to produce new number values
// Number values can be positive, negative, or non whole numbers


1000;                    // number datatype

let num = 1000;        //saving number datatype in memory by declaring a variable num, and assigning it the number value of 1000

console.log(num);      // prints => 1000

1000 * 7                  // prints => 7000



// 2. String //
/*
Strings are used to represent text in JavaScript. Strings are created by enclosing any type of text(including spaces) in Single or Double Parentheses
as well as Back Tiks.
Strings can be concatenated/combined together to create a new string using the concatenation operator +
Bracket Notation can be used to access individual characters in a string
*/

'string';                 // string datatype created using single parentheses

let myString = 'My ';
let favString = 'favorite string';        //saving string datatype in memory by declaring a variable favString, and assigning it the string value of 'string'
console.log(myString + favString);        //prints 'My favorite string'



// 3. Boolean //
/*Booleans are true or false values in JavaScript
Booleans are used to distinguish between two mutually exclusive possibilities, such as hot or cold.
Comparison Operators can be used to create Boolean Expression, which compares values and resolve to boolean values true or false.
*/

true;                          // boolean value

if (2<10){                     // if statement with a boolean expression resolves to the boolean true, activating the first code block
    
    console.log(true);         //=> prints boolean true to the console
}else{
    
    console.log(false);
}


// 4. Array //
/*Arrays are ordered list for storing datatypes, including other arrays. An array is created using an open and closing square bracket. Arrays are complex datatypes, 
 *because they store other data. Each datatype within an Arrays is stored as an element in a list with index. 
 *The first element of an array is indexed at 0, which is the first index in an array. 
 */
 
 [];         // an array literal 
 
 let karrimFavThingsArray = ['coding', 'ballons', 'Salsa', 'MMA']; // array with 4 elements
 
 console.log(karrimFavThingsArray[1]);   // prints => 'ballons' 




// 5. Object //

/*Objects like array are list, but instead of being ordered by index; objects are ordered by key.
 *Each key which is a string datatype(can not be number) stores a value, which is of any datatype including other objects.
 *An object is created using an open and closing curly brace. Each value within an object can be access by using Dot Notation
 */
 
 {};     // an object literal 
 
 let groceriesObject = { eggs: 12, veggies: 4, cookies: 19};   // groceriesObject with 3 Key/Value pairs
 
 console.log(groceriesObject.cookies);   // prints => 19 



// 6. Function //
/*Functions are complex datatypes.They are reusable code that takes other datatypes as input(arguments), runs the arguments through the program within the function.
 *The first step in creating a function is declaration, using the function keywords, and naming the function. This is followed by open and closing parentheses, 
 *then curly braces(the functions body) in which the code is placed. 
 *In order to use a function you must call it, using the functions name and passing argument in to the function.
 */
 
function goodbyeFunction(name){  //function declaration, including one parameter
 
 return 'Goodbye ' + name;       // function body
};  

goodbyeFunction('Joe');          //calling goodbyeFunction, and passing in a string argument Joe => returns "Goodbye Joe"
 
 
 
// 7. undefined //
/* Undefined is a simple datatype. Variable that have not been assigned a value yet, are by default assigned undefined.
 * 
 */
var x;             // variable x declaration 
console.log(x);    // prints undefined



// 8. null //
/* Null is a simple datatype. Null is different from undefined, in that it is a value that can be assign to a variable. 
 * Null is value that can be assigned to a variable, to represent having no value.
 * 
 */
var y = null;      // variable y declaration, and assigned a value of null
console.log(y);    // prints null




// 9. NaN //
/* NaN means "Not a Number". When operaions like mutiplication or subraction are attemped on none numerical values, the result is NaN .
 * 
 * 
 */
 
 console.log('string1' - 'string2');     // substraction is an operation that can only be evaluated using two number; attempting to subtract strings => prints NaN




// 10. Infinity and- Infinity //
/* Infinity and -Infinity are number values that represent positive infinity and negative infinity.
 * In JavaScript when a number exceeds the upper or lower limit of numbers, positive infinity or negative Infinity will be displayed
 * 
 */

var x = Infinity;      // variable x declaration, and assigned a value of positive Infinity
console.log(x);    // prints Infinity



// 11. What is the difference between primitive/simple and complex data types? //
/* A major difference between simple and complex data types is complex datatype can store other datatypes, simple datatypes can not.
 * Simple datatypes are limited in size. Complex data types are not limited in the amount of data they can collect.
 * Complex datatypes (functions, objects, arrays) can hold datatypes of the same kind. 
 */
 
var simpleDataType = 4;  // simple number datatype

var complexDataType = [4, {}, []]; // complex datatype => nested array 




// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that  mean, and how are they different?
/* When simple/primitive values are passed by copy, the actual value of the variable is copied. 
 * With complex datatypes like an array or object, value are passed by reference, which means the actually value is not being passed only the "address" in which the value is stored is being passed. 
 * This means that any variable that points to that particular reference address can be used to alter the value that it refers to.
 */


//Copy by value

var str1 = 2 ;

var str2 = str1;

str2 += 1

console.log(str2)                 // str2 now has a value of 3

console.log(str1)                 // str1 still has a value of 1.  Altering str2 will not effect str1 because the value of the variable was copied by reference



//Copy by referece 

var partyGuest = ['Tony', 'Jess', 'Tiffany', 'Kim', 'Jon'];                    

var copyOfPartyGuest = partyGuest;

copyOfPartyGuest.pop()

console.log(copyOfPartyGuest)      // copyOfPartyGuest will print ['Tony', 'Jess', 'Tiffany', 'Kim']
console.log(partyGuest)            // partyGuest will also print ['Tony', 'Jess', 'Tiffany', 'Kim'], because both variable refer to the same value, so altering the value of one variable will show when access the value of another varible that points to the same value.

 
