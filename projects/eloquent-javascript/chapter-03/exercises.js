////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(minNum, maxNum) {
//returning Math.min(minNum, maxNum)
return Math.min(minNum, maxNum)
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
// returning num % 2 === 0

  return num % 2 === 0
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//input string
//output return num of uppercase B chars in string
function countChars(string, char) {
var num = 0
//using for loop, looping string
  for(var i = 0; i < string.length; i++){
  //if string.charAt(i) === char, add 1 to charB and assign charB that new val  
    if(string.charAt(i) === char){
      
        num += 1;
      
    }
    
  }
//retun num
return num
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) {
//assigning count value of 0
var count = 0;
//using for loop to loop string   
    for(var i = 0; i < str.length; i++){
//if str[i] === "B", then increment count by 1 
        if (str[i] === "B"){
          
            count++
        }
    }
//returning count    
return count
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
