// Calling the showMovieInfo function

var movie1;
var showMovieInfo;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Assign movie1 to movie and display its info
movie = movie1;
showMovieInfo();

/* Further Adventures
 *
 * 1) Without declaring a movie2 variable,
 *    assign movie2 to the movie variable
 *    instead of movie1.
 *    i.e. movie = movie2;
 *    What happens when you call showMovieInfo?
 */

// 1) Assign movie2 to movie and call showMovieInfo
var movie2 = {
    title: "Titanic",
    actors: "Leonardo DiCaprio",
    directors: "James Cameron"
};

movie = movie2;
showMovieInfo();

/* 2) Create an empty object and
 *    assign it to a movie2 variable.
 *    What happens when you call showMovieInfo now?
 */

// 2) Assign an empty object to movie2 and call showMovieInfo
movie2 = {};
showMovieInfo(); // This will likely show "undefined" for title, actors, and directors

/* 3) Fill out movie2 with the properties
 *    needed by showMovieInfo.
 *    What happens when you call showMovieInfo now?
 */

// 3) Fill out movie2 and call showMovieInfo
movie2.title = "Blue Jasmine";
movie2.actors = "Natalie Portman";
movie2.directors = "Darren Aronofsky";

showMovieInfo();