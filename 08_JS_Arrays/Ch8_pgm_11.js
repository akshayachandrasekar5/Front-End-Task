// Function to calculate total bill using itemCosts and itemCounts arrays
var getTotalBill = function (itemCosts, itemCounts) {
    var total = 0;

    itemCosts.forEach(function (cost, i) {
        total += cost * itemCounts[i];
    });

    return total;
};

// Original arrays
var costs = [ 1.99, 4.95, 2.50, 9.87 ];
var numOfEach = [ 2, 1, 5, 2 ];

// 1) Add an extra item to the shopping trip
costs.push(3.75); // Adding an extra item
numOfEach.push(3); // Adjusting counts accordingly

console.log("1) The total cost is $" + getTotalBill(costs, numOfEach));

// 2) Change the function to iterate over itemCounts instead of itemCosts
var getTotalBillByCounts = function (itemCosts, itemCounts) {
    var total = 0;

    itemCounts.forEach(function (count, i) {
        total += itemCosts[i] * count;
    });

    return total;
};

console.log("2) The total cost is $" + getTotalBillByCounts(costs, numOfEach));

// 3) Using a single array of objects for items with cost and numberBought properties
var getTotalBillWithObjects = function (items) {
    var total = 0;

    items.forEach(function (item) {
        total += item.cost * item.numberBought;
    });

    return total;
};

var items = [
    { cost: 1.99, numberBought: 2 },
    { cost: 4.95, numberBought: 1 },
    { cost: 2.50, numberBought: 5 },
    { cost: 9.87, numberBought: 2 },
    { cost: 3.75, numberBought: 3 } // Adding an extra item
];

console.log("3) The total cost is $" + getTotalBillWithObjects(items));