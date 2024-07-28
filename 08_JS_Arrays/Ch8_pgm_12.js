// Function to display a multiple choice question
var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
        function (answer, i) {
            console.log(options[i] + " - " + answer);
        }
    );
  };
  
  // Question objects
  var question1 = {
    question: "What is the capital of France?",
    answers: [
        "Bordeaux",
        "F",
        "Paris",
        "Brussels"
    ],
    correctAnswer: "Paris"
  };
  
  var question2 = {
    question: "Which planet is known as the Red Planet?",
    answers: [
        "Jupiter",
        "Mars",
        "Venus",
        "Saturn"
    ],
    correctAnswer: "Mars"
  };
  
  var question3 = {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
        "Leo Tolstoy"
    ],
    correctAnswer: "William Shakespeare"
  };
  
  // Array of questions
  var questions = [question1, question2, question3];
  
  // Display each question using forEach
  questions.forEach(function(question, index) {
    console.log("\nQuestion " + (index + 1) + ":");
    displayQuestion(question);
  });
  
  // To execute a command at the prompt to display a particular question, you could access the specific question object in the array:
  // displayQuestion(questions[1]); // This would display the second question in the array