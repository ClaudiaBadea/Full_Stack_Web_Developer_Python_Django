// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(name){
    var name = prompt('Please type a name to add:')
    roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove(name){
    var nameRemove = prompt('Please type the name you want to delete:')
    var index = roster.indexOf(nameRemove);
    roster.splice(index, 1);
}
// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display(){
    console.log(roster)
}
// Start by asking if they want to use the web app
var startApp = prompt('Would you like to use the app?(y/n)')
var action ='empty'
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
if (startApp == 'y') {
    while( action != "quit"){
        action = prompt('Please choose an action(add,remove,display or quit)')
        if (action == 'add'){
            addNew();
        } else if (action == 'remove') {
            remove();
        } else if (action == 'display') {
            display();
        }
    }
}
alert('Thank you for using our app!')
