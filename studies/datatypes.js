/*
 * DATATYPES:
 *
 * 0. Data types are the different types of values in JavaScript.
 * Data types can be either simple or complex. Complex data types consist of Numbers, Strings, Booleans, null, undefined.
 * Complex data types consist of functions, arrays, and objects. Simple data types are restricted in size. Complex data types can be infinite in size.
 * Simple data types are store by value, complex data types by reference.
 */






// 1. Number //
// Numbers are numberical data in JavaScript. 
// Numbers values can be opertated on using Arthmatic operators

1                      // simple number data type

console.log(1 + 1)     // using plus operator to add to number to get new value. Prints 2 to console.    




// 2. String //
// Strings are character data in JavaScript.
// Strings have a length property as well as methods that can be used in order to manipulate them.

var stringExample = 'Im a string. Manipulate me!'      // string value being assigned to a variable

console.log(stringExample.length)                      // using the string length property. Logs value of 27 to console.

var stringArray = stringExample.split(' ')             // spliting string to an array    

console.log(stringArray)                               // prints ['Im','a','string.', 'Manipulate me!'] to console



// 3. Boolean //
// Booleans are true and false values. Booleans are simple data types.

var truthy = true               //assigning a boolean of true to the variable truthy

var falsey = false              //assigning a boolean of false to the variable falsey







// 4. Array //
// Array are a type of collection in JavaScript, and are complex data, therefor they can be infinite in size.
// Arrays can be thought of as zero index list. Values of arrays can be accessed using bracket notation

var exampleArray = [1, 2, 3, 'a', true, true];      // assigning array value to variable

console.log(exampleArray[0])                        // accessing the first value of exampleArray using bracket notation
 
exampleArray.push(false)                            // using push method to push a new value on to end of array


console.log(exampleArray)                           // logs the exampleArray with include new value [1, 2, 3, 'a', true, true, false]
            






// 5. Object //

// Objects are another type of collection in JavaScript, and are complex data types.
// The data within the object are organized in key/value pairs. Each key of an object are of string data type.
// Object values can be accessed using Dot Notation(if name of key is known), and Bracket Notation



var exampleObject = {key1: 'Ayyy', key2: 'Beee', key3: 'Ceee'}   //assigning an object to variable


console.log(exampleObject.key1)                                  //accessing object using dot notation. prints 'Ayyy' to console
 





// 6. Function //
// Functions can be thought of as miniature programs within the larger program. Once a function is created, it can be called as many times
// as necessary in order to perform the action it was created for. Functions can be Named, stored in a variable called a Function Expressions, or created on the fly while 
// being passed to another function as an Anonymous Function.



function exampleFunc(x){                                    // a named function has been declared using the function keyword
    
    return x * x * x + 1
}



var funcExpress = function(x){                              //an anonomys function is being assigned to a variable creating a function expression
    
    return 'Im a function expression'
}



function doStuff(number, stuff){
    
    console.log(stuff(number));
    
}

doStuff(3, function(x){ return x + '' })                    //an anonomys function is being used here as a parameter for the doStuff function. Prints '3' to console
    
    

 

// 7. undefined //
// Undefined is a simple data type in JavaScript which is assigned to a variable declaration that has yet to be assigned a value

var play1;

console.log(play1)                          //this will log the undefined do to the fact that player1 has not yet been assigned a value


// 8. null //
// Null is a simple data type, which represents the value of having no value.

var empty = null

console.log(empty)                          //this will log the value of null to the console.



// 9. NaN //
// In JavaScript NaN is a value that represents 'not a number'. Nan is a value that is returned when math operators are used on non-numerical data(with the exception of +)
 
console.log('cat' - 'dog')                  // this will log the value NaN to the console





// 10. Infinity and- Infinity //
// Positive infinity and negative infinity represent the positive and negative limits of number values

console.log(Infinity + 1)                   //this will log infinity to the console because the value of infinity is the positive numerical limit




// 11. What is the difference between primitive/simple and complex data types? //

// Primitive data types are limited in size, which includes: numbers, strings, booleans, undefined, null, NaN.
// Complex data types can be infinity in size which includes: arrays, objects, functions.


var simpleVar = true                                                                        //simple boolean data type


var complexVar = [ 1, 2, 7, 8, 'pineapple', 'sharks', '                              ']     //complex array data type
 




// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?

// Primitive values are passed by copy, meaning that when the variable that contains the value is being used(reassigned or passed to a function, etc), a copy of that data
// being used, not the original value.
// Complex data types are copy by reference, this means when the variable that contains the value is being used(reassigned, altered, etc), a reference to where the
// original data is stored is being passed. This means any variable that holds a reference to where that data is store can be used to alter that date.


var numberExample = 1

var numberExample2 = numberExample + 1

console.log(numberExample2)                     //adding to numberExample variable does not affect its original value, because it is copied by value. Prints 2 to console.

console.log(numberExample)                      // prints 1 to console




var arrayExample = [7, 8, 9]


var updateArrayExample = arrayExample.push(11)

console.log( arrayExample)                      // the value of arrayExample is altered because both updateArrayExample and arrayExample point to the same value.