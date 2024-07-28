// A collection of functions that return values

var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I’m going on an adventure!"; 
};

getHelloTo = function (name) {
    return "Hello to " + name;
};

sum = function (number1, number2) {
    return number1 + number2;
};

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

/* Further Adventures
 *
 * 1) Run the program.
 *    - There is nothing logged to the console.
 *      However, the functions are now defined and ready for use.
 *
 * 2) At the console prompt, type
 *    getMessage()
 *    and press enter.
 *    - The return value of the function will be logged to the console.
 *
 * 3) At the console prompt, type
 *    getHelloTo("Dax")
 *    and press enter.
 *    - The argument, "Dax", forms part of the return value.
 *
 * 4) Call the getHelloTo function
 *    with different arguments.
 *    - Example: `getHelloTo("Kandra")`, `getHelloTo("John")`, etc.
 *
 * 5) Call the sum and totalCost functions,
 *    using different arguments each time.
 *    - Example: `sum(10, 20)`, `sum(-5, 8)`, `totalCost(30, 40, 3)`, etc.
 *
 */

// Example interactions:

console.log(getMessage()); 

console.log(getHelloTo("Dax"));  
console.log(sum(10, 20));  

console.log(totalCost(30, 40, 3)); 