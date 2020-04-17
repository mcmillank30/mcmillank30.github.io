////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//input Start and End Number
//output return array containing all number from start to including end

function range(start, end, increment) {
//create empty array
var numbers = [];
// if start === end, then return numbers
  if(start === end){
    
      return numbers
 //otherwise if increment > 0 
  }else if(increment > 0){
 // using for loop to count from start to end, pushing i to numbers array   
         for(var i = start; i <= end; i = i + increment){
      
                numbers.push(i)
      
          }
  // increment < 0 ,       
  }else if (increment < 0){
 //using for loop count from start to end, pushing j to numbers array   
          for( var j = start; j >= end; i = i + increment){
            
                numbers.push(j)
            
          }
 //otherwise if increment === undefined, count start to end, push k to numbers         
  }else if (increment === undefined){
    
    for(var k = start; k <= end; k++){

            numbers.push(k)

    }


  } 
//return numbers  
return numbers
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Input: array number
//Output: sum of numbers
function sum(array) {
var sum = 0

//looping array  
  for(var i = 0; i< array.length; i++){
//adding array[i] assigning new value to sume    
    sum += array[i]
  }
//returning sum
return sum
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
function reverseArray(array) {
var arr = []

//using for loop to iterate array backwards, and push to empty array
    for(var i = array.length - 1; i>= 0; i--){
        arr.push(array[i])
    }
//returning arr
return arr

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
//using .reverse to return array in rev
return array.reverse();


}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {

var list = null;
//looping decrementing by 1
  for(var i = array.length - 1; i >= 0; i--){
 // assing the value of {value: array[i], rest: list} to list  
    list = {value: array[i], rest: list}
    
    }
//returning list
return list
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {

var arr = []
//loop sublist and pushing node.value to array
  for (var node = list; node;  node = node.rest){
    
    arr.push(node.value)
    
  }
// returning arr
return arr

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
//using listToArray function passing list, assigning to arrList variable
var arrList = listToArray(list)
// adding value to begining of arrList
  arrList.unshift(value)
 // using arrayToList passing arrList, and assigning to ListObj 
  var listObj = arrayToList(arrList)
//return listObj  
  return listObj
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
//if not list resolves to true, returning undefined
if(!list){
  
  return undefined
 //otherwise n == 0 returning list.value 
} else if (n == 0) {
  
  return list.value
//otherwise returning nth(list.rest, n -1)  
}else{
  
  return nth(list.rest, n - 1)
}
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
// if a === b, return true
if(a === b){
  
  return true
//otherwise if a === null || typeof a !== 'object' || b === null || typeof b !== 'object' ; returning false  
}else if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object'){
  
  return false;
  
}
// assigning object keys to variable
var keysA = Object.keys(a)
var keysB = Object.keys(b)

// returning false if keysA.length != keysB.length
if(keysA.length != keysB.length){
  
  return false
  
}
//using loop to loop object
  for(var key of keysA){
//Returning false if !keysB.includes(key) || !deepEqual(a[key], b[key]))   
    if(!keysB.includes(key) || !deepEqual(a[key], b[key])){
      
        return false
    }
  }
//otherwise returning tre  
  return true
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
