// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
  directors: "Christopher Nolan"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");

/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */

// 1) Adding a fourth movie
// Already added movie4 above

// 2) Adding space between movies
console.log("\n"); // Adding a blank line between movies for better readability

// 3) Creating objects for calendar events
var event1 = {
  name: "Transforming Industries and Society",
  date: "2024-09-22",
  location: "Dubai"
};

var event2 = {
  name: "Innovations in Education and e-Learning",
  date: "2024-07-28",
  location: "Tokyo"
};

var event3 = {
  name: "Cybersecurity Conference",
  date: "2024-12-15",
  location: "Houston"
};

// 4) Displaying info from the three events
console.log("Event: " + event1.name);
console.log("Date: " + event1.date);
console.log("Location: " + event1.location);
console.log("------------------------------");

console.log("Event: " + event2.name);
console.log("Date: " + event2.date);
console.log("Location: " + event2.location);
console.log("------------------------------");

console.log("Event: " + event3.name);
console.log("Date: " + event3.date);
console.log("Location: " + event3.location);
console.log("------------------------------");