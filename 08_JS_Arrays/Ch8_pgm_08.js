// Calling forEach with an inline function

var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

console.log("Dream destinations:");

items.forEach(function (item) {
	console.log(" – " + item);
});

/* Further Adventures
 *
 * 1) Change the program to show the number of
 *    places to visit as well as the places themselves.
 */
console.log("\nNumber of places to visit: " + items.length);
items.forEach(function (item) {
	console.log(" – " + item);
});

/* 2) Wrap the display code in a function
 *    and assign it to the showItems variable.
 */
var showItems = function () {
    console.log("\nNumber of places to visit: " + items.length);
    items.forEach(function (item) {
        console.log(" – " + item);
    });
};

/* 3) Click after the prompt on the console,
 *    type showItems() and press Enter.
 *    Can you run your function from the console?
 */
// Yes, you can run showItems() from the console once it's defined.

/* 4) Add and remove array items via the console
 *    and display the current state of the array
 *    with the showItems function.
 */

// Example interactions in the console:
// Adding an item
items.push("Taj Mahal");
// Removing an item
items.splice(1, 1); // Removes "The Grand Canyon"

// Now, run showItems() to display the current state of the array
showItems();