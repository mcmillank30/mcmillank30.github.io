// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
 //returning testValueIsGreBase function with value parameter.
   return function testIfValueIsGreBase (value) {
  // it has a return statement that compares value to base. If value is greater the comparison evaluates to true and returns true, if not evaluates to false and returns false.     
       return value > base;
       
   };
       
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
 //returning testValueLessBase function with value parameter.
    return function testValueLessBase(value){
//return statement compares value to base. If value is less the comparison evaluates to true and returns true, if not evaluates to false and returns false.        
        return value< base;
        
    };    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
 //returning testStringStarts function with string parameter.
    return function testStringStarts(string){
 // it has a return statement that takes the first character of a given string and capitalizes using the .toUpperCase method and also capitalize the given startsWith character and does a strick equality comparision. 
 //If the character are equal, the function returns true, otherwise returns false. 
        return string[0].toUpperCase() === startsWith.toUpperCase();
        
    };   
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
 //returning testStringEnds function with string parameter.
    return function testStringEnds(string){
 //return statement takes the last character of a given string and capitalizes using the .toUpperCase method
 // and also capitalize the given endsWith character and does a strick equality comparision. 
 // If the character are equal, the function returns true, otherwise returns false. 
      return string[string.length-1].toUpperCase() === endsWith.toUpperCase();  
        
    };
        
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
  // Create an array myArray
const myArray=[];
    // Using a For Loop to interate through the given array of stings.
   
for (let i = 0; i < strings.length; i++){

 // the strings get passed throught the modify function include in the code block of the For Loop, and pushed to myArray using the .push method.
      myArray.push(modify(strings[i]));
      
}
 // Then returning myArray, which includes the modified strings.   
    return myArray;   
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // Using a For Loop to interate through the given array of stings.
      for(var i = 0; i < strings.length; i++){
   // the strings get passed throught the test function include in the code block of the For Loop, and are assigned to the variable outcome
            var outcome = (test(strings[i]));
            
  // Then strickly comparing the value of outcome variable to false. If any string value failed the test,           
            if(outcome === false){
  // the condition evaluates to false and false will return out of the function; if not we exit out of If Statement and return true.
                    return false;
         
            }
     
      }
     return true;    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}