// Declaring and assigning in one step

var player = "Rohit Sharma";
var teamName = "Mumbai Indians";

console.log(player + " is in " + teamName);

/* Further Adventures
 *
 * 1) Declare a health variable and assign it
 *    a value in one step.
 *
 * 2) Declare a message variable.
 *
 * 3) Assign message a value created by joining
 *    variables and text to say something like
 *    "Kandra has health 50 and is in The Dungeon of Doom"
 *
 * 4) Replace the current console.log statement
 *    with a new one to display the message variable.
 *
 */

// 1) Declare a health variable and assign it a value in one step
var health = 250;

// 2) Declare a message variable
var message;

// 3) Assign message a value created by joining variables and text
message = player + " has health " + health + " and is in " + teamName;

// 4) Replace the current console.log statement with a new one to display the message variable
console.log(message);