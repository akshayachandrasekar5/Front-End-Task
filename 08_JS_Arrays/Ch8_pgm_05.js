// Passing an array to a function

var getVisitorReport = function(visitorArray, dayInWeek) {
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
  
    var index = dayInWeek - 1;
    var visitorReport = "There were ";
    visitorReport += visitorArray[index];
    visitorReport += " visitors on " + days[index];
  
    return visitorReport;
  };
  
  var visitors = [354, 132, 210, 221, 481, 312, 189]; // Including Saturday and Sunday data
  
  // 1) Run the report for Friday.
  var reportFriday = getVisitorReport(visitors, 5); // Friday is the 5th day in the days array
  console.log(reportFriday); // Outputs: "There were 481 visitors on Friday"
  
  // 2) Update the function to include Saturday and Sunday.
  
  // A month of visitor info could be represented as an
  // array of arrays: [ week1, week2, week3, week4 ]
  // where each week could be an array of visitor numbers.
  
  // 3) Write a new function with three parameters,
  //    the month array, the week wanted and the day wanted.
  //    The new function should return the visitor report specified.
  //    You can call getVisitorReport from your function if you want.
  
  var getMonthVisitorReport = function(monthArray, weekIndex, dayInWeek) {
    var weekArray = monthArray[weekIndex - 1]; // Get the specific week array
    return getVisitorReport(weekArray, dayInWeek);
  };
  
  // 4) Create four arrays of week visitor numbers
  //    and a month array of the four weeks.
  //    Test your function from 3) for different weeks and days.
  
  var week1 = [354, 132, 210, 221, 481, 312, 189]; // Monday to Sunday
  var week2 = [432, 178, 198, 245, 511, 289, 201];
  var week3 = [398, 156, 222, 215, 499, 301, 211];
  var week4 = [411, 145, 201, 232, 488, 299, 188];
  
  var monthArray = [week1, week2, week3, week4];
  
  // Test cases
  console.log(getMonthVisitorReport(monthArray, 2, 5)); // Week 2, Friday
  console.log(getMonthVisitorReport(monthArray, 3, 7)); // Week 3, Sunday
  console.log(getMonthVisitorReport(monthArray, 4, 3)); // Week 4, Wednesday