var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showMoons = function () {
        this.moons.forEach(function (moon, index) {
            console.log("(" + index + ") " + moon);
        });
    };

    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        console.log("Moons:");
        this.showMoons();
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon); // Adding moons to the beginning
    };

    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return "Invalid moon index";
        }
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.addMoon("Ganymede");

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");
planet2.addMoon("Proteus");

var planet3 = new Planet("Mercury", 1, "Terrestrial");
planet3.addMoon("Phobos");

[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
});

// Testing getMoon method
console.log("Moon at index 1 of planet1:", planet1.getMoon(1)); // Should output "Europa"
console.log("Moon at index 0 of planet2:", planet2.getMoon(0)); // Should output "Triton"
console.log("Moon at index 2 of planet3:", planet3.getMoon(2)); // Should output "Invalid moon index", since there's only one moon