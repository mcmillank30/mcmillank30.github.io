/*
 * LOOPS:
 *
 * 0. Loops are used in order to execute a block of code many times. 
 * Loops allow for iterating through arrays and objects. For loop, for in loop, and while loop are three types of commonly used loop 
 * in Javascript.
 */




// 1. Explain while, for, and for-in loops //

/* 
While loop executes a particular block of code while a condition remains true. Create a while loop beginning with the "while" keyword followed by a set of paratheses which include the condition, followed by a set of curly braces contain the code block to be executed. Within the code, block is the code that will be repeatedly executed
also an expression to increment or decrement the value.
 */

/* 
For loops can be useful for iterating over arrays. Creating a for loop begins with the "for" keyword followed by a set of paratheses which include the start, stop, and increase or decrease values to be assigned to an index variable(usually represented by i ), 
followed by a set of curly braces contain the code block to be executed. 
 */

/* 
For in loops can be useful for iterating over objects. Creating a for-in loop begins with the "for" keyword followed by a set of paratheses 
which include a variable declaration for key, the "in" keyword, then the name of the object(all separated by a space)
followed by a set of curly braces contain the code block to be executed. 
 */
 
 

// 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0 //


    for(var i = 0; i < 11; i ++){            //using for loop to loop from 0 to 10
        
        console.log(i);                      //logging each value to console.
                
    }



    for(var i = 10; i >= 0; i --){            //using for loop to loop backwards from 10 to 0
        
        console.log(i);                       //logging each value to console.
                
    }




// 3. Loop over an Array, forwards and backward //

var exampleArr = [1,2, 3, 4, 'five'];


    for(var i = 0; i < exampleArr.length; i ++){            //using for loop to iterate throught exampleArr 
        
        console.log(i);                                     //logging each value of i
                
    }




    for(var i = exampleArr.length -1; i > -1; i --){       //using for loop to iterate throught exampleArr backwards
        
        console.log(i);                                     //logging each value of i
                
    }



// 4. Loop over an Object //


    var exampleObj = {key1: "value1", key2: "value2", key3: 'value3'} 
 
    for(var key in exampleObj){                             //using a for in loop to interate throught exampleObj
        
        console.log(exampleObj[key])                        //logging the value of each key to the console
        
    }

