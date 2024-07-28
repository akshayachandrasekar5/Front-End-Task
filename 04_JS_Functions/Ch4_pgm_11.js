// Creating quiz question objects
var question1;
var question2;
var question3;
var question;
var showQuestionInfo;

question1 = {
    questionText: "What is the capital of France?",
    options: "A: Berlin, B: Madrid, C: Paris, D: Rome",
    correctAnswer: "C: Paris"
};

question2 = {
    questionText: "Which planet is known as the Red Planet?",
    options: "A: Earth, B: Mars, C: Jupiter, D: Venus",
    correctAnswer: "B: Mars"
};

question3 = {
    questionText: "What is the largest ocean on Earth?",
    options: "A: Atlantic Ocean, B: Indian Ocean, C: Arctic Ocean, D: Pacific Ocean",
    correctAnswer: "D: Pacific Ocean"
};

// Function to display question and options
showQuestionInfo = function () {
    console.log("Question: " + question.questionText);
    console.log("Options: " + question.options);
    console.log("Correct Answer: " + question.correctAnswer);
    console.log("------------------------------");
};

// Displaying all three quiz questions
question = question1;
showQuestionInfo();

question = question2;
showQuestionInfo();

question = question3;
showQuestionInfo();