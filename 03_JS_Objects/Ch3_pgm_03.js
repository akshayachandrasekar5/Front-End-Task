// A book as an object

var book;

book = {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    published: 1937
};

console.log(book);

/* Further Adventures
 *
 * 1) Change the title of book to
 *    "The Hobbit, or There and Back Again".
 *    Run the program again.
 *
 * 2) Try creating a book2 object.
 *
 * 3) Log book2 to the console.
 *
 */

// 1) Change the title of book to "The Hobbit, or There and Back Again"
book.title = "The Hobbit, or There and Back Again";
console.log(book);

// 2) Create a book2 object
var book2 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    published: 1990
};

// 3) Log book2 to the console
console.log(book2);