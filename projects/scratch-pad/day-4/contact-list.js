// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//Inputs: id, nameFirst, nameLast
//Outputs: returns a contact object
//I want to create an object name "contact", 
//Object keys are; id, nameFirst, nameLast 
 
      var contactObj = {};
//using dot notation to add each input as a key in contactObj      
  
  
  
     contactObj.id = id, contactObj.nameFirst = nameFirst, contactObj.nameLast = nameLast; 

//using return statement to return contact object     
      return contactObj;


} 

    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    
// create object
// returns Object that manages contacts

  var contacts = [];
    return {
         // we implemented the length api for you //
         length: function() { return contacts.length;
             
         },
         //using .push to move object to contacts array
         addContact: function(object){ contacts.push(object);
             
         },
         
         findContact: function(fullName){
// using for loop to loop through contacts array to find object with matching contact and return contact
            for(var i = 0; i < contacts.length; i++) {
                 if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]){
                     return contacts[i]
                 }
             }
         },
// using .shift to remove contact
         removeContact: function(object) { 
             contacts.shift(object);
             
         },
         
         printAllContactNames: function(){
// assigning the variable contactName the value of empty string
             var contactName = '';
// using for loop to iterate through contacts array
             for(var i = 0; i < contacts.length; i++){ 
// assigning the name variable to the value of nameFirst, space, nameLast concatnated 
                 var name = contacts[i].nameFirst + ' ' + contacts[i].nameLast; 
// using if statement to check i === the last index of contacts array, if so reassigning contactName the value of contactName + name. Else seperating with newline
                 if(i === contacts.length - 1){  
                     contactName += name;        
                     
                 }else{
                     contactName += name + '\n'; 
                 }
                 
            }
// using return keyword to return contact name            
            return contactName; 
        }
     };
       
        




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
