
var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var timeString = "(" + this.startTime + " - " + this.endTime + ")";
      
        console.log(this.title + ": " + this.startDate + " - " + timeString);
    };
};

var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

calEvent1.showEvent();

var calEvent2 = new CalendarEvent(
    "Team Meeting",
    "3/6/16",
    "10.00am",
    "11.00am"
);

calEvent2.showEvent();
