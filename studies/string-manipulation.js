/*
 * STRING MANIPULATION:
 *
 * 0. In JavaScript strings can be manipulated using the concatenation operator (+), 
 * or verious methods like: .toUpperCase(), .concat(), .slice()
 */

// 1. With operators //
// Manipulating a string with the concat operator.

console.log('I am ' + 'a ' + 'string!');  // combines each string including spaces  prints  ' I am a String'

// Manipulating a string with the += operator.
var string = "I love";
string += " JavaScript!";
console.log(string);    // prints "I love JavaScript!"


// 2. With string methods //
// Manipulating strings with string methods
var anotherString = 'Good';

console.log(anotherString.concat('Afternoon!'));   // combines strings => prints 'Good Afternoon!''

console.log(anotherString.toUpperCase());        //capitalizes string => prints 'GOOD'

console.log(anotherString.slice(1,2));           //slices off before first index and at second  => prints o

console.log(anotherString.split());              //splits the string in to array => prints ['G', 'o', 'o', 'd' ]

console.log(anotherString.toLowerCase());        //lowercases string => prints 'good'

console.log(anotherString.replace('G','H'))      //replaces the first value with the second.  prints "Hood"

console.log(anotherString.charAt(0))             //returns the charactor at specified location => prints g
