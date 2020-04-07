/*
 * FUNCTIONS:
 *
 * 0. Functions are reusable code stored in a variable that can be called and use throughout a program.
 */



// 1. The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by? //
// First we must call/invoke a function in order to use it.
// Next we can use a function by passing arguments into it.

var name = "Karrim";
function whoAreYou(firstName){
    
    var introduction = "I'm ";
    console.log(introduction + firstName);
}
whoAreYou(name);        // Calling whoAreYou function and passing in args name




// 2. What’s the difference between a function’s parameters and arguments PASSED to a function? //
// Function parameters are like place holders for the functions input value, before the function is called.
// Once the function is called values are passed in to a function as arguments.


var name = "Karrim";
function whoAreYou(firstName){          //firstName is the parameter
    
    var introduction = "I'm ";
    console.log(introduction + firstName);
}
whoAreYou(name);                        // name is the argument being passed in




// 3. What’s the syntax for a NAMED function? //
// Syntax for a named function, begins with the keyword function, then space function name. 
// Followed by a set of paratheses with parameter, then a set of curly braces enclosing the functions code.

function myFunction(parameter){ 
    
    console.log("Hi " + parameter);
    
}



// 4. How do we assign a function to a variable? //
// A function can be assigned to a variable, by first declaring the variable,
// then using the assignment operator followed by the function keyword, 
// then a set of paratheses with any specified parameter, and a set of curly braces enclosing the function body.

var greetFunc = function(string){ 
    
    console.log("Hi " + string);
    
};

var greeting = greetFunc("Jess")

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs? //
// A function input placeholder are parameter, which are optional to include in the declaration of a function. 
// Function can return a single value using a return statement, which specifies what to return out of the function once it is used


function someWords() {            //no parameters include in declaration of function
    
    return "word, word, words";   //function returns a single string value
    
}

someWords()                       //"word, word, words"





// 6. Scope: Functions can see and modify variables in parent/global scopes. The inverse is NOT true. 

// If a declaration is made within a function, that declaration is scoped locally to that function
// Declarations made outside of that particular function will have global scope to that function
// When function are created within functions they create nested scopes
var favNum = 42;

function addToFavNum (x){
    
    var favNum = 4;          
    return favNum + x;       //function is modifying variable favNum
}

addToFavNum(1);              //returns 5. Not 43.





// 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
//that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) //

// Closures  are functions that carry reference to varaibles declared in there parent scope.




function todaysColor (color){
 
 var colorOfDay = color ;          // parent function variable
              
    return () => {
        
        console.log(colorOfDay);   // anonymous function is referencing colorOfDay variable in parent function
    }
    
    
   
}