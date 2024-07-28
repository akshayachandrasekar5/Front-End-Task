// Displaying a menu

var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(3) Delete item"); // Step 1
	console.log("(4) View settings"); // Step 1
	console.log("(9) Quit");
};

displayMenu();

// Step 2: Create your own displayMyMenu function
var displayMyMenu = function () {
	console.log("Welcome to the Fitness App:");
	console.log("(1) View Workout Plan");
	console.log("(2) Log Workout");
	console.log("(3) View Diet Plan");
	console.log("(4) Track Progress");
	console.log("(9) Log Out");
};

// Step 3: Call your function and run the program
displayMyMenu();