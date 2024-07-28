// Concatenating string properties

var book1;
var book2;

book1 = {
    title: "The Hobbit",
    author: "J. R. R. Tolkien"
};

book2 = {
    title: "Northern Lights",
    author: "Philip Pullman"
};

console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);

/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */

// 1) Adding a third book
var book3 = {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    genre: "Fiction"  // Adding a third property
};

// 2) Logging details of book3
console.log(book3.title + " by " + book3.author + ", Genre: " + book3.genre);

// 4) Updating messages to include the genre property
console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);
console.log(book3.title + " by " + book3.author + ", Genre: " + book3.genre);