
// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3)); // Logs "Moo"

// Further Adventures

// 1) Using indexOf to find the index of 'go'
var indexOfGo = message.indexOf("go");
console.log("Index of 'go':", indexOfGo); 

// 2) Using indexOf and substr to display 'choose'
var indexOfChoose = message.indexOf("choose");
console.log(message.substr(indexOfChoose, 6)); 

// 3) Using lastIndexOf to find the index of 'oo' in 'Moon'
var lastIndex = message.lastIndexOf("oo");
console.log("Last index of 'oo':", lastIndex);  
