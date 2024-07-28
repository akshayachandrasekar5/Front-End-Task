

var showPlayerName = function (playerName) {
  console.log(playerName);
};

var showPlayerHealth = function (playerName, playerHealth) {
  console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
  console.log(playerName + " is in " + playerPlace);
};

var showLine = function () {
  console.log("----------------------------");
};

var showBlankLine = function () {
  console.log("");
};

var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
  showBlankLine();
  showPlayerName(playerName);
  showLine();
  showPlayerPlace(playerName, playerPlace);
  showPlayerHealth(playerName, playerHealth);
  showLine();
  showBlankLine();
};

showPlayerInfo("Kandra", "The Dungeon of Doom", 50);
showPlayerInfo("Dax", "The Old Library", 40);
