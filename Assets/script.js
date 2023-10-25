var highScoresEl = document.getElementById("highScores");
var currentScoreEl = document.getElementById("currentScore");
var timerEl = document.getElementById('timer');
var quizInstructionsEl = document.getElementById('quizInstructions');
var startBtnEl = document.getElementById('startBtn');
var questionOneEl = document.getElementById('questionOne');
var questionTwoEl = document.getElementById('questionTwo');
var questionThreeEl = document.getElementById('questionThree');
var questionFourEl = document.getElementById('questionFour');
var questionFiveEl = document.getElementById('questionFive');
var quizResultEl = document.getElementById('quizResult');
var finalScoreEl = document.getElementById('finalScore');
var submitScoreEl = document.getElementById('submitScore');


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
