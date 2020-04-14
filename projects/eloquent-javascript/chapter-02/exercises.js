
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(rows) {
// start i at the value of '#', incrementing i by '#'
    for(var i = '#'; i.length <=rows; i = i + '#'){
// prints i  
          console.log(i)
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



function fizzBuzz() {

//use for loop
  for(var i = 1; i <= 15; i++){
//for num % 3 ===0 && num % 5 ===0 console.log('FizzBuzz')  
        if(i % 3 === 0 && i % 5 === 0){
          
              console.log('fizzbuzz')
//for num % 3 ===0, console.log('Fizz')          
        }else if(i % 3 === 0){
          
              console.log('fizz')
//for num % 5 ===0, console.log('Buzz')          
        }else if(i % 5 === 0){
          
              console.log('buzz')
// log i              
        }else{
              console.log(i)
          
        }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
var chessBP = ''
// use nested for loop
    for(var i = 0; i < number; i++){
    
        for(var j = 0; j < number; j++){
// if((i + j) % 2 == 0) add space and assign chessBP         
            if((i + j) % 2 == 0){
                
                chessBP += ' ';
                
            }else{
//otherwise assign # to chessBP,           
                chessBP += '#';
            }
            
        }
//then add new line and reassign that value to chessBP              
        chessBP += '\n';
    } 
//log chessBP    
console.log(chessBP)
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
