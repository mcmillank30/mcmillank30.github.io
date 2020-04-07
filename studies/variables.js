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

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


// 4. var //
// var is a keyword used to declare a variable. 
var firstName; // variable being declared with var 


// Variables declared with the var can be reassigned a new value. 
var firstName = 'Karrim'; //variable  firstName assigned a string value 'Karrim' 


var firstName = 'Jamal'; // variable being reassigned the value 'Jamal' 
console.log(firstName); //prints => Jamal

// Variables declared with var have globescope unless otherwise declared with in the code block of a function
var name = "Jay"
function whatIsYourName(studentsName){
    
    var introduction = "My name is ";
    console.log(introduction + studentsName);
}

whatIsYourName(name); // Using the global name variable; returns => "My name is Jay" 

// console.log(introduction); => introduction variable is scoped to whatIsYourName function. prints => ref error undefined


 
// 5. let //
// let is a keyword used to declare a variable. 
let lastName; // variable being declared with let keyword


// Variables declared with the let keyword can be reassigned a new value. Be careful not to redeclare when reassigning values, because this will throw an error
let age = 20; //variable age assigned a value 20


age = 27; // variable age being reassigned the value 27 
console.log(age); //prints => 27


// Variables declared with let have only localscope, meaning that particular variable declaration and its value is limited to the code block which it is declared
function whatIsYourAge(yourAge){
    
    let myAgeString = "My age is ";
    console.log(myAgeString + yourAge);
}

whatIsYourAge(age); // We are using the localscope myAgeString variable, when calling the whatIsYourAge Function; returns => "My age is 27" 

//console.log(whatIsYourAgeString); =>  myAgeString variable is scoped to whatIsYourName function. Console log outside function prints => ref error undefined
 
 
 
 
// 6. const //
// const is a keyword used to declare a variable. Variables declared with const are used to create a constant reference to a value.
// Variables declared with const must be assigned a value at the time it is declared. Variables declared with the const keyword can't be reassigned or redeclared.

const country = "USA"; // variable being declared with const keyword and initialize with the string value "USA"


// Like let, variables declared with const have only localscope, meaning that particular variable declaration and its value is limited to the code block which it is declared
function greeter(name){
    
    const greeting = "Hello ";
    
    return greeting + name;
  
}

greeter('Sam'); // We are using the localscope greeting variable, when calling the greeter Function; returns => "Hello Sam" 

// console.log(greeting); => greeting variable is scoped to greeter function. Console log outside function prints => ref error undefined
 
 
 
// 7. Hoisting //
// Before any line of code is ran, all var and function declarations are brought to the top of the program; this is called hoisting.  
// Anywhere the variable is referenced above the line of its declared, will print to the console as undefined.

console.log(firstName); //Variable declaration is hoisted => undefined

var firstName = 'Karrim'; //variable  firstName assigned a string value 'Karrim' 

console.log(firstName); //prints => Karrim
 