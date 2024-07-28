// Using an argument to determine the return value

var getHelloTo;
var fullMessage;

getHelloTo = function (name1, name2) {
    return "Hello to " + name1 + " and " + name2;
};

fullMessage = getHelloTo("Kandra", "Dax");

console.log(fullMessage);

/* Further Adventures
 *
 * 1) Change the definition of getHelloTo
 *    to accept two parameters, name1 and name2.
 *
 * 2) Make the function return a string of
 *    the form "Hello to Kandra and Dax"
 *
 */