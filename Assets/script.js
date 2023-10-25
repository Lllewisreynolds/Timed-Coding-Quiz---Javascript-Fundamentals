// Scope is important! Scope is important!!!!!

// Don't sweat order of sub-function creation - compartmentalise my code and then move things around after / figure out when to call it later?


// Global scope variables 

// HTML elements I will need to pull through and manipulate in JavaScript to provide additional quiz functionality

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

// Time allocated at start of quiz - will be manipulated when questions answered incorrectly
var countdownTimer = 90;
// Boolean declared in global scope as false. Once state is switched by triggering of 'Start Quiz' button master function, countdown will display and decrement
var quizTimerStart = false;

// Function declared to manipulate countdown as quiz duration begins
function countdownTimerStart() {
// Local variable declared within function to set interval decrement 
    var countdownTimerDecrement = setInterval(function() {
        !quizTimerStart;
        countdownTimer --;
        timerEl.textContent = countdownTimer;
        
    if (countdownTimer === 0) {
        clearInterval(countdownTimerDecrement);
        // as of yet undefined function
        endquiz();
    }
}, 1000);
}



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
