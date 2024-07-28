var showMessage;

// Define the showMessage function to display the message prefixed on a new line
showMessage = function (message) {
	console.log("The message is:\n" + message); // Prefix "The message is:" on a new line
};

// Call the showMessage function with different messages
showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");

/* Further Adventures
 *
 * 1) Updated showMessage function to display its prefix on a separate line:
 *    console.log("The message is:\n" + message);
 *
 * 2) Declare a myMessage variable and assign it a string value:
 */
var myMessage = "This is my custom message.";

// 3) Call the showMessage function with myMessage as the argument
showMessage(myMessage);