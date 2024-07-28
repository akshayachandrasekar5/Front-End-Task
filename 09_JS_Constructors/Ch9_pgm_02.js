
// Adding methods to our constructed object

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };
  
    return planet;
};

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

planet1.showPlanet();

// Further Adventures

// 1) Create a second planet.
//    Use the buildPlanet function.

var planet2 = buildPlanet(
    "Mars",
    4,
    "Terrestrial"
);

// 2) Call the showPlanet method on your
//    new planet.
planet2.showPlanet();
