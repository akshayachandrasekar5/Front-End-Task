// Two more function definitions and assignments

var findTotal;
var displayMenu;
var number1, number2, result;

findTotal = function () {
    result = number1 + number2;
};

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(9) Quit");
};

// Step 1: Declare number1, number2, and result variables
number1 = 5;
number2 = 7;

// Step 3: Run the findTotal function
findTotal();

// Step 4: Display the result on the console
console.log("Result of findTotal: " + result);

// Step 5: Run the displayMenu function
displayMenu();