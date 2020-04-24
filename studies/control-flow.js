/*
*
* Control Flow:
*
* 0. Control Flow is the order in which code is executed. This can be determined in our program using conditional statements.
* Conditional statements include if, else if, else and chain as well as switch statements. These statements use expressions that resolve to a true or false value,
* which indicate which blocks of code to execute within the if/else if/ else or switch statement.
* 
*
*/



//1. If //
/*
In order to create an if statement you must begin with 'if' keyword; this is followed paratheses which contains an expression that should resolve to a boolean value.
Next, this is followed by a set of curly brace which will contain the code that you wish to execute in the event that our condition resolves to true

*/

var name = "Tom"

if(name === 'Tom'){                         //here the condition resolves to true, therefore the code within the code block will be excuted
    
    console.log('Hello Tom!')               //'Hello Tom' will print to console
}






//2. else if //
/*
Else if can be used in order to link addition conditions and blocks of code to an if statement. Else if will contain an additional condition to be evaluted along with corresponding code block to execute in the event that the previous if statement condition does not resolve to true. Multiple else if's can be linked after a single if statement.
This is done using the else if keyword and a set of paratheses contain the new condition follow the new code block; directly after the closing curly brace of the if statement. Repeat this process for adding addition else if's

*/





var name = "Kelly"                          

if(name === 'Tom'){                         //if condition resolves to false
    
    console.log('Hello Tom!')       
    
}else if (name === 'Kelly'){                //the else if condition resolves to true
    
    console.log('Heeyyy Kelly!')            //'Heeyyy Kelly!' will print to console
}





//3. else //
/*
Else can be thought of like a default in an If/else if/ else chain. Else contains no condition. Else can be linked to the end of an else if condition
and its code block will be executed in the event that the if condition and any of its following else if conditions all resolve to false. 
Using the Else keyword and curly braces containing the default code block, directly after the else if code block in order to link Else to an If/else if/ else chain.

*/


var name = undefined                        

if(name === 'Tom'){                         //if condition resolves to false
    
    console.log('Hello Tom!')       
    
}else if (name === 'Kelly'){                //the else if condition resolves to false
    
    console.log('Heeyyy Kelly!')   
    
}else{

    console.log('Ummm Hey')                 //'Ummm Hey' will print to console by default
    
}    




//4. Switch //
/*
Switch Statements are similar to If/else if/else in regard to their purpose of use. 
In some scenarios using a Switch Statement may allow for clearer code, making it an ideal alternative to using an If/else if/ else chain.
The switch keyword is used to start a switch statement, follow by a pair of parentheses which will contain the condition to check for followed by a set of curly braces.
Within the curly braces are a series of Cases, each indicating a case that is being checked for, each one followed by the code to be executed if that particular case is true, then the break key beneath it.
Followed by the list of all the cases will be a default, that includes a default code block to be ran(similar to the else, in the If/else if/ else chain)

*/

var dayOfTheWeek = 'Monday'


switch(dayOfTheWeek){                           //dayOfTheWeek has a value of "Monday"
    
    
    case 'Monday':
        console.log('Chicken')                  //"Chicken" will print to console
        break;
    
    case 'Monday':
        console.log('Beef')
        break;
        
    case 'Friday':
        console.log('Pizza')
        break;   

     default:
        console.log('Leftovers')
       
}

