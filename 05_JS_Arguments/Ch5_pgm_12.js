
// Displaying a player's location via object properties

var player1;
var player2;
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 1) + " is in " + playerPlace);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerPlace(player1.name, player1.place);
showPlayerPlace(player2.name, player2.place);

/* Further Adventures
 *
 * 1) In the console.log parentheses, change
 *    playerName to playerName.substring(0, 1)
 *    Run the program. What do you think
 *    the substring function does?
 *    - The substring function extracts the first character of the `playerName` string.
 *
 * 2) Change the arguments to the substring
 *    function to (0, 2), then (0, 3) and so on.
 *    - `substring(0, 2)` extracts the first two characters of `playerName`.
 *    - `substring(0, 3)` extracts the first three characters of `playerName`, and so on.
 *
 * 3) Change the arguments to
 *    (1, 2), then (1, 3) and so on.
 *    - `substring(1, 2)` extracts the second character of `playerName`.
 *    - `substring(1, 3)` extracts characters 2 and 3 of `playerName`, and so on.
 *
 * 4) What role do you think the two arguments
 *    to the substring function have?
 *    - The first argument specifies the start index (inclusive) from which to begin extraction.
 *    - The second argument specifies the end index (exclusive) where extraction should stop.
 *
 */
