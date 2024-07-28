
// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

// 1) Create a getBig function that accepts a
//    string as an argument and returns it
//    converted to upper case.
var getBig = function (str) {
    return str.toUpperCase();
};

console.log(getBig("Earth")); // Output: "EARTH"
console.log(getBig("Neptune"));  // Output: "NEPTUNE"

// 2) Create a getSmall function that accepts a
//    string as an argument and returns it
 
var getSmall = function (str) {
    return str.toLowerCase();
};

console.log(getSmall("VENUS"));  
console.log(getSmall("MARS"));  
