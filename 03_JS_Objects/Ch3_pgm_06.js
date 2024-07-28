
// Using a variable as a property value

var book;
var bookName;

bookName = "The Adventures of Tom Sawyer";

book = {
    title: bookName
};

/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, type 'book'
 *    and press enter.
 *
 * The book object should be displayed on the console.
 * Its title property should have the same
 * value as the bookName variable.
 *
 * 3) Change the value of the bookName variable
 *    and try steps 1 and 2 again.
 *
 */

// 1) Running the program will set up the book object with the title property
console.log(book);

// 2) Typing 'book' in the console and pressing enter will display the book object

// 3) Change the value of bookName and repeat steps 1 and 2
bookName = "The Catcher in the Rye";
book.title = bookName;

console.log(book);
