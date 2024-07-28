// Passing a function an object as an argument

var planet1;
var planet2;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

planet2 = {
    name: "Mars",
    position: 4,
    type: "Terrestrial",
    radius: 3389,
    sizeRank: 7
};

getPlanetInfo = function (planet) {
    var info = "";
    info += planet.name + ": planet number " + planet.position + "\n";
    info += "Type: " + planet.type + "\n";
    info += "Radius: " + planet.radius + " km\n";
    info += "Size Rank: " + planet.sizeRank;

    return info;
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

/* Further Adventures
 *
 * 1) Create a second planet object.
 *    - Done, with planet2 (Mars).
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *    - Added console.log(getPlanetInfo(planet2)); to display Mars details.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *    - Updated getPlanetInfo to include type, radius, and sizeRank for each planet.
 *
 */