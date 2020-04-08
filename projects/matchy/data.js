/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a variable named `animal` and assign it to an empty object.
// Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
// Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
// Using either notation, give `animal` a **property** called `noises` with a value of empty array.
// Print your `animal` Object to the console by adding, `console.log(animal);`,

var animal = {}; 

animal.species = 'dog';
animal.name = 'Taco';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a variable named `noises` and assign it to an empty array.
// Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
// Using an array function add another noise to the end of `noises`.
// Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
// Look through the functions until you find the one that will place an element at the begining of the array.
// Add an element to `noises` using this function.
// Using **bracket syntax** again, add another element to the end of `noises`.

console.log(animal)
var noises = [];
noises[0] ='bark';
noises.push('roof');
noises.unshift('quack');
noises.push('whimper');


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use bracket notation 
//assign noises property on animal object 
//the value of noises array 
animal.noises = noises;
//add a noise to noises property(add a noise to our array we just add) on animal object
animal.noises.push('ha');
console.log(animal, 'line 41');

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a variable named `animals` and assign it to an empty array.
//`push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
//`console.log` `animals`. What does it look like?
// Create a variable called `duck` and assign it to the data:
// `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
// push` `duck` to `animals`
// console.log` `animals`. What does it look like?
// Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
//`console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {species: 'duck', name: 'Jerome', noises: ["quack", 'honk', 'sneeze', ] };
animals.push(duck);
var cat = {species: 'cat', name: 'garfield', noises: ['purr', 'meow',]};
var rat = {species: 'rodent', name: 'jerry', noises: ['sqweak', 'bleak']};
animals.push(cat);
animals.push(rat);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a ordered list of friends using an array
//create a variable called friends and assign it to an array
// type a function called getRandom
// that takes an input of our animals array
// return a random index of our animals array using Math.random();
var friends = [];
function getRandom(animals) {
return Math.random();
}
// use bracket notation to add friends array to an animal in the animals array
animals[0].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}