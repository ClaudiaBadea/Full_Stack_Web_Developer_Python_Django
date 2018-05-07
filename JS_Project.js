
var fn = prompt("Enter your First Name")
var ln = prompt("Enter your Last Name")
var age = prompt("What age are you?")
var height = prompt("How tall are you?")
var pet = prompt("What's you pet name?")

if (fn[0]==ln[0] && 20<age<30 && height>170 &&
    pet[pet.length-1] === "y") {
    console.log("Welcome Comrade! You've passed the Spy Test");
} else {
    console.log("Sorry, nothing to see here.");
}
