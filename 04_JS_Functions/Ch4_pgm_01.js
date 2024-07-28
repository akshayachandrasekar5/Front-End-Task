// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */

// 1) Adding a second movie
var movie2 = {
  title: "The First Omen",
  actors: "Tim Smith, Keith Levine",
  directors: "Arkasha Stevenson"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

// 2) Creating an object to represent a blog post
var blogPost = {
  title: "The Ultimate Book On Indian Cuisine",
  author: "Pat Chapman",
  published: "2007-05-05",
  content: "In this post, I'll share tips and tricks on how to explore the world without breaking the bank."
};

// 3) Displaying info about the blog post
console.log("Blog Post: " + blogPost.title);
console.log("------------------------------");
console.log("Author: " + blogPost.author);
console.log("Published Date: " + blogPost.published);
console.log("Content: " + blogPost.content);
console.log("------------------------------");