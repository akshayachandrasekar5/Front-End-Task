
// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };
  
  console.log(line(30));
  console.log(line(40));
  console.log(line(50));
  
  // 1) Test line lengths from -20 to 60 in steps of 10.
  for (var i = -20; i <= 60; i += 10) {
    console.log(line(i));
  }
  
  // 2) Define a spaces function that returns a string
  //    made up of a specified number of space characters.
  //    The line of spaces returned can have a length
  //    between 0 and 40.
  var spaces = function (spaceLength) {
    spaceLength = Math.max(0, spaceLength);
    spaceLength = Math.min(40, spaceLength);
    return " ".repeat(spaceLength);
  };
  
  console.log(spaces(10)); 
  // 3) Add an emptyBox function
  //    that draws an empty box of specified
  //    width and height 5.
  var emptyBox = function (width) {
    var topBottom = "=" + "=".repeat(width - 2) + "=";
    var middle = "=" + spaces(width - 2) + "=";
  
    console.log(topBottom);
    for (var i = 0; i < 3; i++) {
        console.log(middle);
    }
    console.log(topBottom);
  };
  
  emptyBox(12);
  
  // Using Math.min and Math.max to constrain an argument
  