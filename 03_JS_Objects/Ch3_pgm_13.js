// Location for a weather app

var geolocation = {
    "city"      : "San Francisco",
    "state"     : "CA",
    "country"   : "US",
    "zip"       : "94101",
    "latitude"  : "37.775",
    "longitude" : "-122.418",
    "elevation" : "47.000"
  };
  
  /* Further Adventures
  *
  * 1) Run the program
  *
  * 2) In the console tab, click after the blue arrow.
  *    Type geolocation.city followed by Enter
  *    to show the city property.
  *
  * Hmmmm, something's not right!
  *
  * 3) Type geolocation and press Enter
  *    to display the whole geolocation object.
  *
  * Okay, that's definitely not our geolocation object.
  *
  * This is an example of a variable collision.
  * Browsers (and jsBin) are programs themselves and
  * create their own variables.
  * Other code, not ours, has declared its own
  * geolocation variable, over-writing ours.
  *
  * 4) Change our geolocation variable, now calling
  *    it anotherName.
  *    Repeat steps 1, 2 and 3, using anotherName
  *    instead of geolocation.
  *
  */
  
  // Instructions are intended to be executed interactively in the console