/*
 * LOOPS:
 *
 * 0. Loops are useful for executing a block of code many times.  
 * There are 3 types of Loops; For Loop, For-in-loop, and While Loop.
 * For Loops are used to loop over Arrays. For-in-loops, loop over objects.
 * While Loops continue to loop while a specific condition remains true.
 */




// 1. Explain while, for, and for-in loops //

/* WHILE LOOPS are declared using the While Keyword. This is followed by parentheses which hold the condition,
 * then an open curly brace, next the code to be executed, and variable(THIS MUST BE INCREMENTED OR DECREMENTED otherwise the loop will not end),
 * then a closing curly brace.
 *
 * FOR LOOPS are declared using the For Keyword. Followed by open parenthese, 
 * then the declaration of an i variable assigned the value of the array index in which to begin the loop.
 * This is followed by a semicolon then the stopping condition for i. Next a semicolon and the value to increase or decrease i by.
 * Last are open and closing curly braces that hold the code which to execute during the loop.
 *
 * FOR IN LOOPS: like the For Loop, For In Loops are declared using the for Keyword. Followed is an open parenthese,
 * then var(keyword) space, key(represent the object key) space, object (name of object you wish to loop over) then closing parenthese. Last are open and 
 * closing curly braces which in close the code that we wish to execute while looping through the object.
 *
 *
 */
 
 
 

// 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0 //

//Counting to 100
var num = 0;
while(num < 101) {
    
    console.log(num);  // prints numbers 0 to 100
    
    num++;
}

//Counting backwards from 1000
var num = 1000;
while(num >= 0) {
    
    console.log(num);  // prints numbers 1000 to 0
    
    num--;
}



// 3. Loop over an Array, forwards and backwards //

var karrimsArray = ['string1', 'string2', 'string3'];


// Looping forward
for(var i = 0; i < karrimsArray.length; i++){
    
    console.log(karrimsArray[i]);               // prints all strings in karrimsArray 
}


// Looping Backward
for(var i = karrimsArray.length-1; i > -1; i--){
    
    console.log(karrimsArray[i]);               // prints all strings in karrimsArray backwards
}





// 4. Loop over an Object //

var groceriesObj = {cupcakes: 9, candyBars: 13, veggies: 0};

for(var key in groceriesObj){
    
  console.log(key);                              // prints groceriesObj key
  console.log(groceriesObj[key]);                // prints groceriesObj key value
    
}


