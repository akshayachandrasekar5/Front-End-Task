
var player1;
var player2;
var showPlayerName;

showPlayerName = function(playerName) {
    console.log(playerName);
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

showPlayerName(player1.name);
showPlayerName(player2.name);

showPlayerName = function(playerName) {
    console.log(playerName.toUpperCase());
};

showPlayerName(player1.name);
showPlayerName(player2.name);

showPlayerName = function(playerName) {
    console.log(playerName.toLowerCase());
};

showPlayerName(player1.name);
showPlayerName(player2.name);
