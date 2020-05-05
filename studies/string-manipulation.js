/*
 * STRING MANIPULATION:
 *
 * 0.String Manipulation is the way in which we can alter string values in JavaScript, using operators or various string methods
 * for example: concat, toUppercase, toLowerCase, slice, split, charAt.
 */




// 1. With operators //

// The concat operator can be used in order to combine string value to create a new value.
// The concat/assignment operator can be used to combine string values while reassigning the existing variable the new string value. 



var oldVal = 'Happy'

var anotherOldVal = ' Day!'

var newVal = oldVal + anotherOldVal                     //Using the concat operator to combine string values of oldVal and anotherOldVal

console.log(newVal)                                     // "Happy Day!" will print to console


var reAssignMe = 'New '

reAssignMe += 'Value'                                   // concating and reassigning string value 

console.log(reAssignMe)                                 // prints string 'New Value' to console




// 2. With string methods //

// String values can be altered using various string methods in JavaScript

var songString = "oh happy day"

var capSongString = songString.toLocaleUpperCase()      //capitalizing string value and assigning it to new variable

console.log(capSongString)                              //prints "OH HAPPY DAY"



var backToOldString = capSongString.toLocaleLowerCase() // lowcasing string value and assigning it to new variable

console.log(backToOldString)                            //prints "oh happy day"



var songArray = songString.split(' ')                   //spliting songString in to an array and saving value to new variable

console.log(songArray)                                  //logs ['oh', 'happy', 'day'] to console



var noOh = songString.slice(3)                          //slicing off the first 3 characters of the string and saving to new variable

console.log(noOh)                                       //longs 'happy day' to console




var firstChar = noOh.charAt(0)                          //saving the first charactor of string to new variable

console.og(firstChar)                                   //prints 'h' to console



var extraSpaces = '  trim me  '

console.log(extraSpaces.trim())                         //using trim method to remove extra spaces on ends of string