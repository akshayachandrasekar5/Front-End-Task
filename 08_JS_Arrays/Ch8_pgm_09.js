
// Using the arguments passed by forEach

var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra" ];

showArguments = function (item, index, wholeArray) {
  // 3) Change the first console.log to use wholeArray and index
  console.log("Current item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);

/* Further Adventures
 *
 * 1) Add two more names to the players array.
 */
players.push("Sathya", "Nithya");

/* 2) Run the program.
 *    It will display the current array items, their indices, and the entire array.
 */
players.forEach(showArguments);

/* 3) Change the first console.log so
 *    it uses wholeArray and index
 *    to display the current item in
 *    the array. Don't use the item
 *    parameter.
 */
showArguments = function (item, index, wholeArray) {
  console.log("Current item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);

