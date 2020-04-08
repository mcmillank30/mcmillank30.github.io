/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function called search
// takes an array as the parameter
// takes a parameter of a string, a name of a animal
function search(animals, name) {
// loop through array    
    for(var i = 0; i < animals.length; i++){
// check if name === animals[i].name    
        if (name === animals[i].name) {
// return the animal object if name exsist            
            return animals[i];
            
            
        }
    }
//???????????????????????Why can't I return null in code block of else condition in the if statement ????????????????????????    
return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create function replace, signature replace(animalsArr,nameStr, replacementObj){}
function replace(animals,name, replacement){
    
    for(var i = 0; i< animals.length; i++){
// if an animal with name exist in animalsArr        
            if(name === animals[i].name){
//replace it with the replacementObj                
               animals[i] = replacement 
            }
    }
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write function remove; remove(animals, name)
//loop through animals array,



function remove(animals, name){
    
        
    for(var i = 0; i< animals.length; i++){
//Check if name exist in animals array        
            if(name === animals[i].name){
//if name exist remove it                
               animals.splice(i, 1);
            }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function add; add(animalsArr, animalObj)
//   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
function add(animals, animal){
 
    for(var i = 0; i < animals.length; i++){
//   - Checks that the animal Object has a `name` property with(with a value) a length > 0.
//   - Checks that the animal Object has a `species` property with(with a value) a length > 0.
//   - Has a **unique** name, meaning no other animals have that name: Loop animals array. if animals[i].name !== animal.name
            if(animal.hasOwnProperty('name') && animal.name.length > 0 && animal.hasOwnProperty('species') && animal.species.length > 0 && animals[i].name !== animal.name){
//   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.   
                            animals.push(animal);
       
            }else{
//why do these work also????                
//return animals.shift(animal);
//return animals 
            return 
            }
 
     
    }  

    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
