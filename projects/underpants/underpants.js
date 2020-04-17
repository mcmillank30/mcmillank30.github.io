// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
// returning value    
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
 // if value is === null, returnin "null"   
    if (value === null){
        
        return "null"
//otherwise if value is array, return array        
    }else if (Array.isArray(value)){
        
        return 'array'
//otherwise if value is object, return object        
    }else if (typeof value === "object" && value instanceof Date !== true){
        
        return 'object'
    }else{ 
//otherwise check type of value and return that value type        
        return typeof value
   
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/


_.first = function(array, number){
  var resultsArr =[]  
  
 // if not an array retun [] 
    if(Array.isArray(array) === false){
        
        return [];
//otherwise if number is undefined or not a number returning  first element of array        
    }else if ( number === undefined || isNaN(number) === true){
        
        return array[0];
        
    }else{
 // looping array       
        for(var i = 0; i < array.length; i++){
// if i is not negitive and i less than number            
            if(i > -1 && i < number){
//push array[i] to array                
                resultsArr.push(array[i])
            }
        }
    }
// return array    
 return resultsArr;   
}









/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/




_.last = function(array, number){
  var lastElements;
  // if not an array and number is negative return []
    if(Array.isArray(array) === false || number < 0){
        
        return [];
    
  //otherwise if number is undefined or not a number return last value of array      
    }else if ( number === undefined || isNaN(number) === true){
        
        return array[array.length - 1];
// otherwise return the last number elements of array        
    }else{
        
        return lastElements = array.slice(-number)
    }
 
}








/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/




_.indexOf = function(array, value){
 //loop array   
    for(var i = 0; i < array.length; i++){
 // if array[i] === to value return i       
        if(array[i] === value){
           
           return i
        }
            
    }
 // otherwise returning -1   
return -1    
    
    
}




/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


_.contains = function(array, value){
 //if value is included in array returns true, otherwise false   
    return (array.includes(value)) ? true : false;
    
    
}








/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collection, func){
  //if collection is an array, looping array  
    if(Array.isArray(collection)){
        
        for(var i = 0; i < collection.length; i++){
  //passing each element of array to function           
            func(collection[i], i, collection);
            
        }
        
 //otherwise if collection is an object, looping object, passing each value to function        
    }else if (collection instanceof Date === false && collection !== null){
        
        for(var key in collection){
            
            func(collection[key], key, collection);
            
        }
        
    }
    
}







/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    
    var result = []
//looping array    
    for(var i = 0; i < array.length; i++){
// passing each element to indexOf        
            if(_.indexOf(array, array[i]) === i){
  //pushing array[i] to array              
                result.push(array[i]);
                
            }
    }
    //returning array
return result;   
}










/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


 _.filter = function(array, func){
     
     var arr = []
  //using each function passing in array, and function   
         _.each(array, function (value,index,collection){
//passing each value to input function, pushing results to array        
        if(func(value,index,collection)){
            arr.push(value);
        }
    });
    //returning array
    return arr;
};
     
 






/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
var arr = []
  //using each function passing in array, and function     
      _.each(array, function (value,index,collection){
//passing each value to input function, pushing results to array        
        if(!func(value,index,collection)){
            arr.push(value);
        }
    });
    
 //returning array    
return arr;


}



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

 _.partition = function (array, func ){
     
var arr = []     
// passing array and func params to filter and reject function
//push out to array
    arr.push(_.filter(array, func),_.reject(array, func))    
// returning array     
return arr;
 }






/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
var arr = []   
 //using each function passing in collection, and function     
     _.each(collection, function (value,index,collection){
//passing value to input function and assigning value to val
        var val = func(value,index,collection)
// pushing val to array   
            arr.push(val); 
     });
//returning array     
return arr
    
}



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = function (array, string){
  var arr = [];  
// using map function passing input array of objects, and anonymous function
 _.map(array, function(value, index, collection){
// looping objects, checking of key matchsing input string, if so pushing value to array
      for(var keys in value)
       if(keys === string){
       arr.push(value[keys]);       
       }
  }) 
  
  //return array
  return arr;  
 };






/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function(collection, func){
var arr = [];
//using each function passing collection, and and anonymous function
_.each(collection, function(value, index, array){
//if func is undefined, if value is true push true to array
     if(func === undefined){
        if(value === true){
           arr.push(true)
//otherwise if value is false, push false to array 
        }else if (value === false){
           arr.push(false)
        }
  
//  otherwise if func(value, index, array === true, push to true to array
     }else if(func(value, index, array)=== true){
          arr.push(true)
//  otherwise if func(value, index, array === false, push to false to array  
     }else if(func(value, index, array)=== false){
            arr.push(false)
     } 
 });
// return !_.contains(arr, false) 
return !_.contains(arr, false)  
};





/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){
 var arr = [];   
 //using each function passing collection, and and anonymous function   
    _.each(collection, function(element, index, array){
 //if not func, if element true push true to array, otherwise false     
        if(!func) {
            if(element){
                arr.push(true)
            }else{
                arr.push(false)
            }
//otherwise if func(element, index, array) === true, push true to array,
        }else if (func(element, index, array) === true){
            arr.push(true)
//otherwise if func(element, index, array) === false, push false to array, 
        }else if (func(element, index, array) === false){
            
        }
    })
    
// return _.contains(arr, false)     
return _.contains(arr, true)    
};








/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
// using each function    
    _.each(array, function(element, index, arr){
 //if seed is undefined assing first elememt of array to seed       
        if(seed === undefined){
            
            seed = array[0];
//otherwise if seed resloves to true,   seed = func(seed, element, index) 
        }else if (seed){
            
            seed = func(seed, element, index)
        }
    })
    //return seed
 return seed;   
    
}








/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

 _.extend = function(object){
 //using each to loop object    
     _.each(arguments, function(element, index, array){
//using Object.assign() to copy all properties to object      
         Object.assign(object, element)
         
     })
//returning object     
return object     
 }




//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
