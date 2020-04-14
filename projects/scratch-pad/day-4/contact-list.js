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

//return a contact object
 var object = {id: id, nameFirst: nameFirst, nameLast: nameLast};

return object; 
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
   console.log(contacts, 'line 53') 
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
      // create function that adds contact input to contacts array  
        addContact: function(contact){ 
            return contacts.push(contact);
        },
      // create a function that takes fullName a string
 
      
   
        findContact: function(fullName){ 
            
      // returns contact obj if found in contacts array. For loop contacts array.
                for(var i = 0; i < contacts.length; i++){
                    
      // if (fullName.toUpperCase() === contacts[i].firstName.toUpperCase() + ' ' + contacts[i].lastName.toUpperCase()){ return contacts[i]}                  
                        if(fullName.toUpperCase() === contacts[i].nameFirst.toUpperCase() + ' ' + contacts[i].nameLast.toUpperCase()){
                            
                                return contacts[i]
                        
      // returns undefined if string doesn't match anything
      // else{ return undefined}                      
                        }else{
                            
                            return undefined;
                        }
                }
        },
        
        removeContact: function(contact){
            
      // For loop contacts array.
                for(var i = 0; i < contacts.length; i++){
      // if input contact is === object in array              
                    if(contact === contacts[i]){
      // returning contacts with input contact removed                  
                       return  contacts.splice(i, 1)
                    }
                }
            
        },
        
        printAllContactNames: function(){
        var contactName = ''
      // For loop contacts array.
                for(var i = 0; i < contacts.length; i++){
       // assigning first name space last name to name variable            
                    var name = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
       // using if statement to check if i is the last index in array            
                        if(i === contacts.length -1){
       // if last index of contacts array, assigning name to contactName                      
                            contactName += name
                        
                         }else{
        //otherwise assign name + new line to contactName                     
                            contactName += name + '\n' 
                         }
                } 
        //return contactName            
           return contactName 
        }

        
    }


    
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
