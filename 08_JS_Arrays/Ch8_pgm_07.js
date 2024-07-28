// Iterating over an array with forEach

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow + " (" + itemToShow.length + " letters)");
};

// Iterating over the items array and displaying each item and its length
items.forEach(showInfo);

/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 */
items.push("Cartoon");
items[3] = "Motu Patlu";

// Displaying all items with their lengths again after additions
console.log("\nAfter additions:");
items.forEach(showInfo);

/* 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 */

// Updated showInfo function already displays the number of letters

// Function to find the total number of letters in the items array
var getTotalLetters = function () {
    var total = 0;
    items.forEach(function (item) {
        total += item.length;
    });
    return total;
};

console.log("\nTotal number of letters in all items: " + getTotalLetters());