
// A function with three arguments

var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount = 0) {
	var total = callOutCharge + costPerHour * numberOfHours;
	total -= discount; // Subtract discount from total

	return total;
};

console.log("$" + totalCost(30, 40, 3));

// What is the cost for 12 hours work?
console.log("$" + totalCost(30, 40, 12));

// Using a discount coupon
var couponAmount = 20; // $20 off coupon
console.log("After applying a $20 off coupon, the total cost is $" + totalCost(30, 40, 3, couponAmount));

/* Further Adventures
 *
 * 1) What is the cost for 12 hours work?
 *    - Use `totalCost(30, 40, 12)` to find the cost for 12 hours of work.
 *
 * 2) Add a fourth parameter to the totalCost
 *    function definition to account for discounts.
 *    - Added `discount = 0` to the function parameters.
 *
 * 3) Update the function to subtract the discount
 *    from the total before returning it.
 *    - Incorporated `total -= discount;` before returning `total`.
 *
 * 4) If a customer has a $20 off coupon,
 *    update the call to totalCost
 *    to display the total cost.
 *    It should now be $130 for 3 hours.
 *    - Defined `couponAmount = 20;` and adjusted the call to `totalCost` to include `couponAmount`.
 *
 */
