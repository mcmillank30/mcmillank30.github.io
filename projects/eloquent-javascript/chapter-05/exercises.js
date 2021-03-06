// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
var arr
//using reduce to loop     
    array.reduce(function(flat, current){
 //using concat to add array      
      arr = flat.concat(current)
//returning arr      
      return arr
    })
    
    //returning arr
return arr
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
//using loop and passing array to function
        for(var value = start; test(value); value = update(value)){
          
          body(value)
        }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predFunc) {
//using for in loop
  for( var element of array){
 // if !predFunc(element resolve true, returing false
      if(!predFunc(element)){
      
      return false
      }
  }
// returning true  
return true
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
// assign count variable 
var count = countBy(text, char => {
// assigning script variable. Find script for each char    
    var script = characterScript(char.codePointAt(0));
    
          return script ? script.direction : "none";
  
    
  }).filter(({name}) => name != "none");
 
//if count length === 0 returning "ltr"
        if (count.length == 0){
  
            return "ltr";
}
//returning count .reduce passing a,b to fuction
//Ternary: If a.count > b.count returing a : otherwise b   
return count.reduce((a, b) => a.count > b.count ? a : b).name;
}






// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
