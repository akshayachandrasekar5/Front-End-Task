// Manipulating arrays with push, pop and join

var items = [];
var item = "The Pyramids";
var removed;

// Pushing items onto the array
items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items); // Output: [ 'The Pyramids', 'The Grand Canyon', 'Bondi Beach' ]

// Popping an item from the array
removed = items.pop();

console.log(removed + " was removed"); // Output: Bondi Beach was removed
console.log(items.join(" and ")); // Output: The Pyramids and The Grand Canyon

/* Further Adventures
 *
 * 1) Push another item onto the array.
 */
items.push("The Taj Mahal");

/* 2) Log the joined items. */
console.log(items.join(" and ")); // Output: The Pyramids and The Grand Canyon and The Taj Mahal

/* You can set an array element by using its index. */
items[2] = "The Statue of Equality";

/* 3) Set one of the items using square brackets. */
console.log(items.join(" and ")); // Output: The Pyramids and The Grand Canyon and The Statue of Equality

/* 4) Can you push more than one item at a time? */
items.push("Cartoon", "Motu Patlu");
console.log(items.join(" and ")); // Output: The Pyramids and The Grand Canyon and The Statue of Equality and Cartoon and Motu Patlu