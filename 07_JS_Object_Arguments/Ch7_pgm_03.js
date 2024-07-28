
// A function to create cars

var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color, mileage) {
    return {
        make: make,
        model: model,
        year: year,
        color: color,
        mileage: mileage
    };
};

getCarInfo = function (car) {
    return car.year + " " + car.make + " " + car.model + ", Color: " + car.color + ", Mileage: " + car.mileage + " miles";
};

// Example usage
car1 = buildCar("Toyota", "Camry", 2022, "Silver", 15000);
car2 = buildCar("Honda", "Civic", 2020, "Blue", 20000);

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));

/* Further Adventures
 *
 * 1) Add more properties to the buildCar function
 *    such as price, transmission type, and fuel type.
 *    Update the getCarInfo function to include these
 *    properties when displaying car information.
 *
 * 2) Create additional car objects and display their
 *    information using getCarInfo.
 *
 * 3) Experiment with different ways to format the
 *    output in getCarInfo to make it more readable
 *    or detailed.
 *
 */
