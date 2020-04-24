// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-mcmillank30');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//using filter to find the njumber of male customers in out list
let arrOfMales = _.filter(array, function(customerObj){
 
 return customerObj.gender === "male"
    
})
return  arrOfMales.length
};




var femaleCount = function(array){
//need one return statement for each function scope    
return _.reduce(array, function(sum, customerObj){
          //check if customer obj is a female increment sum by 1
         if(customerObj.gender === "female"){
          sum +=1
         }
          //if customer obj is not female keep current sum
          return sum;
    }, 0)
  
};




//Redo with HOF
//i: array
//o: string
var oldestCustomer = function(array){
//created oldest age seed variable assigned to 0
var oldestAge = 0;
//create variable to assign oldest person name
var oldestAgeName;
// looping array with for loop  
  for(var i = 0; i < array.length; i++){
// if array[i].age > oldestAge, assign new oldest age, and assigning name 
      if(array[i].age > oldestAge){
       
       oldestAge = array[i].age
       
       oldestAgeName = array[i].name
      }
      
  }
  //returning oldest persons name
 return oldestAgeName
};




var youngestCustomer = function(array){
// create variable  
var youngestAge = Infinity 
//create variable for name
var youngestName;
// using for loop to loop array
 for(var i = 0; i < array.length; i++){
// if array[i].age < youngestAge,  youngestAge = array[i].age and youngestName = array[i].name
     if( array[i].age < youngestAge){
      
      youngestAge = array[i].age
      youngestName = array[i].name
     
     }

 }

 // returning youngest name 
 return youngestName
};

//i:array
//o:number


var averageBalance = function(array){
// created a variable for empty array an seed 0
var arrOfNumStr = []
var sum = 0  
// looping using for loop  
  for(var i = 0; i < array.length; i++){
// pushing balances to empty array   
   arrOfNumStr.push(array[i].balance)
  }
 
 
 //looping array of string nums 
  for(var i = 0; i < arrOfNumStr.length; i++){
      // removing $ and assigning to variable  
        var no$ = arrOfNumStr[i].slice(1)
        // spliting strting to array
        var noCom = no$.split(',')
        // rejoining string
        var numStr = noCom.join('')  
        //converting sting to a number
        var num = Number(numStr)
        //assigning the value of num to sum
        sum += num
  }
 // dividing sum by num of objects to get avg
var avgBal = sum / array.length
// returning avg bal
return avgBal
};




var firstLetterCount = function(array, letter){
// created empty array
var arr = [];
// looping array
for(var i = 0; i < array.length; i++){
    // if array[i].name.toUpperCase().startsWith(letter.toUpperCase())
        if(array[i].name.toUpperCase().startsWith(letter.toUpperCase())){
 // push name to array         
            arr.push(array[i].name);
        }
} 
 // returning array length   
return arr.length;   
};





var friendFirstLetterCount = function(array, customer, letter){

var arrObj;  
var nameStartsL = [];
//looping array
    for(var i = 0; i < array.length; i++){
 //if array[i].name.toUpperCase() === customer.toUpperCase() 
           if (array[i].name.toUpperCase() === customer.toUpperCase()){
//if array[i].friends !== undefined)
                  if(array[i].friends !== undefined){ 
//assigning the value of array[i].friends to variable      
                        arrObj = array[i].friends;
                  }
           }  
    } 
//looping array   
     for(var j = 0; j <arrObj.length; j++){;
//if arrObj[j].name.toUpperCase().startsWith(letter.toUpperCase()) 
           if(arrObj[j].name.toUpperCase().startsWith(letter.toUpperCase())){
   // pushing arrObj[j].name          
                  nameStartsL.push(arrObj[j].name);
           }
     } 
// returning array length       
return nameStartsL.length;   

};






var friendsCount = function(array, name){
//create empty array 
 var arrFriendNames = []
 // looping input array
     for(var i = 0; i < array.length; i++){
// assiging friendsArr = array[i].friends      
           var friendsArr = array[i].friends
// looping friendsArr           
              for(var j = 0; j < friendsArr.length; j++){
               
                     // if friendsArr[j].name === name, pushing name to empty array  
                       if(friendsArr[j].name === name){
                       
                       arrFriendNames.push(array[i].name)
                       
                       }
              }
           
     }
     // returning empty array
 return arrFriendNames
};






var topThreeTags = function(array){
// creating empty array 
 var arr = []
 // looping with each
 _.each(array ,function(element, index, collection){
 
 //looping with each 
  _.each(element.tags, function(tag, index, collection){
 // push tag to array  
   arr.push(tag)
   
  })
 })
// assigning the value of reduce function to variable 
  var newObj = _.reduce(arr, function(obj, tags){
 // if obj[tags] resolves to true,  obj[tags] += 1; and return obj
     if(obj[tags]){
      
      obj[tags] += 1;
      
      return obj
//otherwise  obj[tags] = 1, and return obj   
     }else{
      obj[tags] = 1
    
      return obj
   
     }
     
    }, {})
// created empty array    
var sortArr = [];
// looping object
for (var key in newObj){
// pushing {tag: key, occured: newObj[key]} to array
     sortArr.push({tag: key, occured: newObj[key]})
}
//using .sort and returning b.occured - a.occured
sortArr.sort(function (a,b){
    
    
    return b.occured - a.occured
    
})
//returning [sortArr[0].tag, sortArr[1].tag, sortArr[2].tag]
return [sortArr[0].tag, sortArr[1].tag, sortArr[2].tag]
 
};



//i: array
//o: object


var genderCount = function(array){
//assigning value of reduce to variable    
 var gender =   _.reduce(array, function(number, person){
//if person.gender === 'male', number.male = (number.male || 0) + 1       
        if(person.gender === 'male'){
            
            number.male = (number.male || 0) + 1
//otherwise if person.gender === 'female',  number.female = (number.female || 0) + 1      
        }else if (person.gender === 'female'){
            
            number.female = (number.female || 0) + 1
//otherwise person.gender === 'non-binary', number['non-binary'] = (number.nonbinary || 0) + 1        
        }else if (person.gender === 'non-binary'){
            
            number['non-binary'] = (number.nonbinary || 0) + 1
            
        }
//returning number        
 return number       
        
    }, {})
// return gender    
 return gender 
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
