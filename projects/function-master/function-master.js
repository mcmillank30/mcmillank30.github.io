//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// input object
// return object values in array 
function objectValues(object) {
    
    return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// using Object.keys to covert obj keys to array
    var keysArr = Object.keys(object);
  // joining keys with a space and returning  
    return keysArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input object
//return all string values in a string, separated by a space
function valuesToString(object) {

var strVal = [];
//looping object
for(var key in object){
// if value is of string type pushing to array    
    if(typeof object[key] === 'string'){
        
        strVal.push(object[key])
        
    }
    
}
// returning array as a string joined with a space   
return  strVal.join(' ')
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//return 'array' if collection is array
//return 'object' if object
function arrayOrObject(collection) {
 // if collection is an array returning array string
 if(Array.isArray(collection)){
     
     return 'array'
// if collection is not null, date, and is object type return object string 
 } else if(collection !== null && collection instanceof Date !== true && typeof collection === 'object'){
     
    return 'object'
 }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input string
//return string with first letter caps
function capitalizeWord(string) {
  // returning sting with first letter in caps 
   return string[0].toUpperCase() + string.slice(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input string of wordsd
//return string with all words caps
function capitalizeAllWords(string) {
var arr = [];
//converting sting to array of strings
var strArr = string.split(' ');
// looping array
    for(var i = 0; i < strArr.length; i++){
 // pushing each string to array with first letter in caps 
     arr.push(strArr[i][0].toUpperCase() + strArr[i].slice(1));
    
    }
 // returning array of strings joined in to one string with spaces   
return arr.join(' ');    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input object with name property 
//return 'Welcome' + name + '!'
function welcomeMessage(object) {
// concatnating strings with value of object property  with first letter in caps, and returning it
return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!' 

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input object; with a name property, and species
//return  object.name(cap first letter) + is a object.species(cap first letter)
function profileInfo(object) {
//concatnating obj values with first letter in caps to string, and returning
return object.name[0].toLocaleUpperCase() + object.name.slice(1) + ' is a ' + object.species[0].toLocaleUpperCase() + object.species.slice(1) 

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input object
//if object has noises array; return them as a string separated by a space
//if no noises return 'there are no noises'


function maybeNoises(object) {
// if obj noises is undefined or has no value, returning string
    if(object.noises === undefined || object.noises.length === 0){

      return 'there are no noises'

// if values in noises array
    }else if(object.noises.length > 0){

//using .join to convert noises array to a string
        return object.noises.join(' ') 

//if no values in noises array   

    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input: string(of words), and word

function hasWord(string, word) {
//use .split to convert string of wordsd

var arr = string.split(' ');
//console.log(arr)
    for(var i = 0; i < arr.length; i++){
    
   // console.log(arr[i])    
        if(arr[i] === word){
            
            return true
        
        }//else{            line150
//         return false     line151
//      }        
    }
//?????????????????? 
//How do I know when to put "return false" at the bottom of my function, 
//verses an else condition in my if statement?????  See line 150 and 151    
//??????????????????? 
 return false
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input name, object
//add name to object.friends array
//return object

function addFriend (name, object) {
 // push name to friends array   
object.friends.push(name);
//returning objecdt
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input:name, object
//return true if name is friend of object
//return false otherwise
function isFriend(name, object) {
// if no friends return false or if name is not included in friends return false
    if (object.friends === undefined || object.friends.includes(name) === false){
    
             return false 
    }
// returning true    
return true
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input: name, array of objects(list of people)
//return array of all names, not on input name friends array

function nonFriends(name, array) {

var nonFriendArr = [];
//looping array
    for(var i = 0; i < array.length; i++){
// if name is not included in friends array, and the input name is not the name of the object we are looking at    
        if(array[i].friends.includes(name) === false && array[i].name !== name) {
             
// pushing the name to non friends array             
            nonFriendArr.push(array[i].name);
            
        }
    }
//returning array    
return nonFriendArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//input object, key, value
//if key doesn't exist on object create it
//update the property 'key' on 'object' with new 'value'

function updateObject(object, key, value) {
// if  key is a property on object assign value to it , or create it and assign value
    if(object.hasOwnProperty(key) === false || object.hasOwnProperty(key) === true){
//???????Why can't I use dot notation to update the object here, because i am not using a specific property name??????        
            object[key] = value;
        
    }
//returning object  
return object    
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input object, array of strings
function removeProperties(object, array) {
//looping array
    for(var i = 0; i < array.length; i++){
 // if array has not strings, return      
        if(array.length === 0){
            
            return
        
            
         }else if(object.hasOwnProperty(array[i])){
// using bracket notation and delete keyword to remove property      
            delete object[array[i]]
 //??????Why must I use bracket notation to access object[array[i]]; why not dot notation, because we are not using a specific key name?????         
        }
    
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//input array
//returns array with all duplicates removed

function dedup(array) {
// create empty array to push to
var noDoops = []
//using for loop
    for (var i = 0; i < array.length; i ++){
 // if not included in noDoops array, push to noDoops   
                if(noDoops.includes(array[i]) === false){
                    
                    noDoops.push(array[i])
                }
    }
//return array    
return noDoops
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}