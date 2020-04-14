// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
//using .length to return string length    
return string.length

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

// Using the toLowerCase method to return the string value in all lowercase characters 
return string.toLowerCase(); 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

//Using the toUpperCase method to return the string value in all Uppercase characters

return string.toUpperCase(); 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

//Using .split method to split the string into an array . 
//Then using the .join method to join the array back into a string while inserting a dash between the two elements
return string.split(" ").join("-").toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
   // Create variable firstChar to hold the value of the first index of string. 
 var firstChar = string[0];
     
     //Then create if/else statement with a condition that sets both firstChar variable and char to uppercase then compare if the values are equal to one another.
     //It returns true if equal, and returns false if not equal.
 if(firstChar.toUpperCase() == char.toUpperCase()) {
     
     return true;
 }else{
     
     return false;
 }
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

// Create variable lastChar to hold the value of the last index of string
var lastChar = string[string.length-1];
// Then create if/else statement with an argument that sets both lastChar and char to uppercase then compare if the if the values are equal to one another. 
 if(lastChar.toUpperCase() == char.toUpperCase()) {
  //return true if equal   
     return true;
 }else{
 
//returns false if not equal.    
     return false;
 }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// using the concatenation operator to combine stringOne and stringTwo, then using a return statement to return the value.
return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
 //using the .join method to concatenate all the elements of the args variable, 
 //then returning the value.
return (args.join(""));
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// Create variable strOneLength to store the value of the length of stringOne.
var strOneLength = stringOne.length;
//Create variable strTwoLength to store the value of the length of stringTwo.
var strTwoLength = stringTwo.length;
// Used if/else statement compare the values of strOneLength and strTwoLength and return stringTwo 
if(strOneLength < strTwoLength) {
//if strTwoLength  greater value return    
    return stringTwo;
}else{
// else return stringOne    
    return stringOne;
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



//Used if statement to compare the values of stringOne and stringTwo and return -1 if stringOne was greater
if(stringOne > stringTwo){
    
    return -1;
//else if return 1 if the if stringOne is lower    
}else if(stringOne < stringTwo){
    
    return 1; 
}else{
//else return 0 which will happen if stringOne and stringTwo values are equal    
    return 0;
}


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




//Used if statement to compare the values of stringOne and stringTwo and return -1 if stringOne less than
if(stringOne < stringTwo){
    
    return -1;
//else if return 1 if the stringOne is greater    
}else if(stringOne > stringTwo){
    
    return 1; 
}else{
//else return 0 which will happen if stringOne and stringTwo values are equal    
    return 0;
}


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
