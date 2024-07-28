// Using a property in a calculation

var player1;

player1 = {
    name: "Max",
    score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */

// 1) Increasing player1's score by 10%
player1.score = player1.score * 1.1;

// 2) Adding a second player
var player2 = {
    name: "Akshaya",
    score: 200
};

// 3) Calculating and logging the sum of players' scores
var totalScore = player1.score + player2.score;
console.log(player1.name + " and " + player2.name + " have a total score of " + totalScore);