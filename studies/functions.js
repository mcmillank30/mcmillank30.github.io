/*
 * FUNCTIONS: 
 *
 * 0. Functions are reusable code. When writing a program we create functions to help eliminate redundancy in our code. If you find yourself writing code that performs a particular action multiple time, 
 * this is usually a good indicator that a function could be created to do this. Functions are complex datatype. 
 * Named Functions, Function Expressions, and Anonymous Functions are three different types of functions.
 *
 *
 */



// 1. The two phases to using functions: First we must ___? Next, we can execute (or two other words for executing a function?) a function by? //

// When using a function, first we must call the function.
// Next one must invoke the function by passing arguments into the function call.

var arg= "abc "
var argAlso= '123'

function func(arg1, arg2){
    
    arg1 + arg2
    
};

func(arg, argAlso)              //Using func function by calling the function and passing arguments arg and argAlso



// 2. What’s the difference between a function’s parameters and arguments PASSED to a function? //

//The difference between function parameters and arguments; when creating a function parameters are used as placeholders for the values that will be passed into the function when calling it.
//The values that are passing into a function when invoking it are called arguments


var arg= "abc "
var argAlso= '123'

function func(arg1, arg2){      //arg1 and arg2 are the parameter holding the place for the argument that will be passed in when the function is called
    
    arg1 + arg2
    
};

func(arg, argAlso)             //arg and argAlso are the arguments being passed into the func function






// 3. What’s the syntax for a NAMED function? //

//To create a named function first type the function keyword, then a space followed by the function name. Next a pair of parentheses which will hold the parameters for the function, follow by a pair of curly braces the will
//contain the code block of the function


function aFunction(aArg,anotherArg){
   
   console.log("I just log this message")
    
}





// 4. How do we assign a function to a variable? //

// A function assigned to a variable is called a function expression. To make a Function Expressions first create a variable name and use the assignment operator to set the value of an anonymous function to the variable


var funcExpress = function(x){ return x * 2}       // anonymous function being assigned to the variavle funcExpress
    

console.log(funcExpress(2))                        // print the value of 4 to console    






// 5. Functions can OPTIONALLY take inputs and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs? //

// Function inputs are specified by the arguments passed to the function(if any) when being called.
// Function outputs are specified using the return statement within the function. The return keyword is using to specify the value that is returned out of the function when called.

function sounds(){
    
    return "I'm making sounds!"                     // when the function is called will return string "I'm making sounds!"
}


 sounds()                                           // sound function is being called with no argument passed in




// 6. Scope: Functions can see and modify variables in parent/global scopes. The inverse is NOT true. 

// A function nested within another function can borrow and even change the value of function in its outer/parent scope. " Kids can take money from there parents, but parents can't take money from there kids."


function parentFunc(money){
    
    var parentsMoney = money
    
        function kidFunc(){
            
             
            
            return parentsMoney = "my money now!"   //kidFunc is modifying the variable from parent scope
        }
    
}




// 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures!

// A closure is created when a nested function uses variables in their parent scope. In the nested kidFunc function, within the parentFunc function, the variable parentsMoney is a closure.





function parentFunc(money){
    
    var parentsMoney = money
    
        function kidFunc(){
            
             
            
            return parentsMoney = "my money now!"   //here parentsMoney is a closure because it is borrowing the variable from parent scope
        }
    
}