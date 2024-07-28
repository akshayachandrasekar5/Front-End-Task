
// Guess the number - using local scope

var getGuesser = function () {
    var secret = 8;
  
    return function (userNumber) {
      if (userNumber === secret) {
        console.log("Well done!");
      } else {
        console.log("Unlucky, try again.");
      }
    };
  };
  
  var guess = getGuesser();
  
  // 1) Run the program.
  
  // 2) At the prompt, type 'getGuesser' and press Enter.
  console.log(getGuesser);
  
  // Output: function () { ... }
  
  // 3) At the prompt, type 'guess' and press Enter.
  console.log(guess);
  
  // Output: function (userNumber) { ... }
  
  // 4) At the prompt, type 'secret' and press Enter.
  console.log(secret);
  
  guess(8); 
  guess(5); 
  