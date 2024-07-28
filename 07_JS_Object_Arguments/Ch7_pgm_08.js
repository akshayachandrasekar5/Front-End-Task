// Finding substrings

var message = "We choose to go to the Moon!";

console.log(message.substr(17)); // Logs "Moon!"
console.log(message.substr(11, 6)); // Logs "go to the"
console.log(message.substr(0, 10)); // Logs "We choose"

// Further Adventures

// 2) Using substr without the second argument
console.log(message.substr(14));  

// 3) Using negative numbers as arguments
console.log(message.substr(-7)); 
console.log(message.substr(-10, 5));  