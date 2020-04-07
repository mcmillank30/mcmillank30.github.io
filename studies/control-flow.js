/*
 * CONTROL FLOW:
 *
 * 0. Control flow is the order in which the computer executes code. 
 * If/Else-if/Else/Switch statement can affect control flow, by instructing the computer to execute particular code blocks
 * base on whether a conditions evaluate to true or false.
 */

// 1. If //
// To create an If Statement, begin with the If keyword. The If keyword is followed by opening and closing parentheses, then curly braces.
// The condition to be evaluated goes within the parentheses. The curly braces represents the body of the If Statement,
// and is where the code block is located that is executed base on the condition.

var num = 30;

if(num > 12) {                 //condition evaluating if num is greater than 12
    
    console.log("Greater!");  // above if condition evaluates to true = prints "Greater!"
}



// 2. Else-if //
// Else if allows us to expand on our if statement, connecting additional conditions to be evaluated if the previous condition is not met.
// Multiple Else if can be chained to an If Statement by adding the Else if key word to the above closing curly brace,
// then a set of opening parentheses which holds the condition, followed by a set of curly braces which enclose the additional block of code you wish to run.

var num = 3;

if(num > 12) {                 
    
    console.log("Greater!");  // if condition evaluates to false, code block will not be executed

    
}else if(num< 12){             //else if condition evaluating if num is less than 12
    
    console.log("Smaller!");  
}



// 3. Else //
// Else can be thought of as a default in an IF/Else-if change.
// Else doesn't evaluate a particular conditon. 
// The else code block is executed on in the event that the former If/Else-if conditions are not met.

var numAgain = 'I am not a number';

if(numAgain > 4) {                 
    
    console.log("Greater!");                        // if condition evaluates to false, code block will not be executed

    
}else if(numAgain< 4){                                //else if condition evaluates to false, code block will not be executed
    
    console.log("Smaller!");                        

    
}else{
    
    console.log("Invalid Entry! Not A Number!");    //former If/Else-if statement weren't executed. Default Else code block will run
}



// 4. Switch //
// Switch Statements are similar to the If/Else-if/Else change, 
// but are more appropriate when checking for exact values and can require less code than the former.
// To create a Switch statement, start by using the Switch keyword followed by parethesis which contains the condition being checked for.
// Then a pair of curly braces that will contain the code for the switch statement. Inside the curly braces, begin with the keyword case, 
// then space and the value to check follow by a colon. On next line include the code you wish to execute(indinted from above line)
// On next line(directly beneath above line) include the break keyword follow by semicolon. Repeat this proccess for each additional case.
// Lastly include a default using default keyword, and the default coide to run indinted on next line.

var trafficLightColor = 'green';

switch(trafficLightColor){          
    
    case "red":
        console.log("stop");      //If case is "red" => prints "stop"
        break;
        
    case "yellow":
        console.log("slow down");   //If case is "yellow" => prints "slow down"
        break;
        
    default:
        console.log("go");        //If previous cases were not executed. Default will execute => prints "go"
    
}