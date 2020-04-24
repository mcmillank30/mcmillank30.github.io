/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

//At the declaration phase, the variable myName is undefined because we have NOT initialized it to anything
 
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob





// 4. var //
// var is a keyword that can be used to declare a variable name. Values declared with var have global scope unless they are within a function.
// var variable can be both redeclared and reassigned a new value without error.

var variable = 'Im a variable'          //var variable being declared and assigned a string value

var variable = 'I am also a variable'   // var variable being redecaled and assigned a new value


function exampleFunc(){
    
    var anotherVar = 'I am anthother variable'
}

//console.log(anotherVar)                // this will log undefined because anotherVar can not be accessed outside the function



 
// 5. let //
// Let is a keyword that can be used to declare a variable. Values declared with let are block scope
// Let variables can be reassigned, but will through an error if attempting to redeclare using let keyword

 
let variable2 = 'Im a variable agin'          //let variable being declared and assigned a string value

    variable2 = 'I am also a variable agin'   //let variable being reassigned a new value

 
 
for(let i = 0; i < variable2.length; i++){

        console.log(variable2[i])

}
// console.log(i)                             //this will return an error because i is block scope
 
 


// 6. const //

// Const is a keyword that can be used to declare a variable. Values declared with const are block scope
// Const variables can not be reassigned. 


const x = 100

// x = 500                  //x can not be reassigned, this will through an error




 
// 7. Hoisting //
// Hoisting refers to how var declarations(and functions) are brought to the top of there scope before the interpreter executing any code.
// For variables declared with var, this means that their declaration can be recognized in their scope above where they are declared.


console.log(imHoisted)                          //this will log undefined to the console

var imHoisted = 'Im the value, so I am not hoisted'