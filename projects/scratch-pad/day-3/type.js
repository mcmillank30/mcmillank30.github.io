// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
  /* Using the isArray method to determine if the value being passed in to the function is an Array or not. 
    The isArray method takes in the input value and resolve to true if the input is an array, and resolves
    to false if the input is not an array. Using the return keyword to return the true or false value out of the isArray function */
  return  Array.isArray(value);
    

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
 /* Using If/Else statememnt with an if condition that uses typeof operator to test if value being passed in to the isObject function is strictly equal to an object,
    and is not null,
    and is not an array(using the is.Array method which evaluates to true if value is an array), 
    and value is not a date(using the instanceof operate which evaluates to true if value is a date).
   If the If condition evaluates to true the if statement will return true in the first code block. Else the if statement will return false */
   
    if(typeof value === "object" && value != null && Array.isArray(value) != true && value instanceof Date != true){
        
        return true;
    }else{
        
        return false;
    }
       
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
 /* Using If/Else statememnt with an if condition that uses typeof operator to test if value being passed in to the isCollection function is strictly equal to an object,
    and is not null, and value is not a date(using the instanceof operate which evaluates to true if value is a date).
   If the If condition evaluates to true the if statement will return true in the first code block. Else the if statement will return false */
   
    if(typeof value === "object" && value != null && value instanceof Date != true){
        
        return true;
    }else{
        
        return false;
    }
    
       
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
   /* Using If/Else-if/Else statememnt with an if condition that uses the typeof operator to test if value being passed into the typeof function is strictly equal to an object,
    and is not null, and is not an array, and value is not a date.
   If the If condition evaluates to true the if statement will return the "object" in the first code block. If not, the following Else-if statement is evaluate, comparing is 
   if isArray evaluates to true and returns "array" if true. Else if we use instanceof method to check if value is a date, and returns "date" if so. Else if, evaluate if value
   has the value of null and if so returns "null". Else we return typeof value*/
      
      if(typeof value === "object" && value != null && Array.isArray(value) != true && value instanceof Date != true){
        
        return "object";
    
          
      }else if(Array.isArray(value) == true){
          
           return "array";
      
          
      }else if(value instanceof Date == true){
          
          return "date";
          
      }else if(value == null){  
          
          return "null";
          
      }else{
          
          return typeof value;
      }
         
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
