
// Function to display a player's name
var showPlayerName = function(playerName) {
    console.log("The player's name is " + playerName);
};

// Testing showPlayerName function
showPlayerName("Kandra");  // Output: The player's name is Kandra
showPlayerName("Dax");     // Output: The player's name is Dax

// Function to display the number of letters in the player's name
var showNameLength = function(playerName) {
    var length = playerName.length;
    console.log("The player's name has " + length + " letters");
};

// Testing showNameLength function
showNameLength("Kandra");  // Output: The player's name has 6 letters
showNameLength("Dax");     // Output: The player's name has 3 letters
