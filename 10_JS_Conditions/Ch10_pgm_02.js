var secret = 8;

var guess = function (userNumber) {
  if (userNumber !== secret) {
    console.log("Incorrect guess, try again.");
  } else {
    console.log("Correct guess, well done!");
  }
};


guess(5);
guess(8); 
guess(10); 