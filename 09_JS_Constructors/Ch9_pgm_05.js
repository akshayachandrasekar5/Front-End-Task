// Planet constructor with moons array and methods

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };

    this.removeMoon = function () {
        if (this.moons.length > 0) {
            return this.moons.pop(); // Remove and return the last moon
        } else {
            console.log("No moons to remove.");
        }
    };
};

// Creating a new planet instance and adding moons
var planet1 = new Planet( "Jupiter", 5, "Gas Giant" );
planet1.addMoon("Io");
planet1.addMoon("Europa");

planet1.showPlanet(); // Display planet info with moons

// Creating a second planet instance and adding moons
var planet2 = new Planet( "Saturn", 6, "Gas Giant" );
planet2.addMoon("Titan");
planet2.addMoon("Rhea");
planet2.addMoon("Enceladus");

planet2.showPlanet(); // Display planet info with moons

// Testing removeMoon method
planet2.removeMoon(); // Remove the last moon "Enceladus"
planet2.showPlanet(); // Display updated planet info with moons