// Notes to self:
//  1. Scope is important!!!!!

// 2. Don't sweat order of sub-function creation - compartmentalise my code and then move things around after / figure out when to call it later?
// 3. choices must have click event for question buttons
// 4. break it down! Speak the questions out loud!

// Debugging process! 
// 1. Console.log the variable causing the error
// 2. Check the documentation
// 3. See if your syntax, and what you are trying to apply, match what the docs say


// Global scope variables 

// HTML elements I will need to pull through and manipulate in JavaScript to provide additional quiz functionality

var highScoresEl = document.getElementById("highScores");
var currentScoreEl = document.getElementById("currentScore");
var timerEl = document.getElementById('timer');
var quizInstructionsEl = document.getElementById('quizInstructions');
var startBtnEl = document.getElementById('startBtn');
var questionOneEl = document.getElementById('questionOne');
var incorrectAnswersEl = document.getElementsByClassName('wrong');
var questionOneCorrEl = document.getElementById('correct-q1');
var questionTwoCorrEl = document.getElementById('correct-q2');
var questionThreeCorrEl = document.getElementById('correct-q3');
var questionFourCorrEl = document.getElementById('correct-q4');
var questionFiveCorrEl = document.getElementById('correct-q5');
var questionTwoEl = document.getElementById('questionTwo');
var questionThreeEl = document.getElementById('questionThree');
var questionFourEl = document.getElementById('questionFour');
var questionFiveEl = document.getElementById('questionFive');
var quizResultEl = document.getElementById('quizResult');
var finalScoreEl = document.getElementById('finalScore');
var submitScoreEl = document.getElementById('submitScore');

// Time allocated at start of quiz - will be manipulated when questions answered incorrectly
var countdownTimer = 90;
// Variable created to default initial score to 0 at the start of the quiz
var score = 0;
// Variable container for an array that will take in any final quiz scores submitted and display them within high scores
var highScores = [];
// Make copious use of console.log to check the flow of my code block within functions and debug as I go!

startBtnEl.addEventListener("click", function(){
    console.log('Button clicked');
    countdownTimerStart();
    console.log('Timer started');
    quizInstructionsEl.classList.add("hide");
    console.log('Quiz instructions now hidden');
    questionOneEl.classList.remove("hide");
    console.log('First question displayed')
    questionOneEl.classList.add("quiz-ans-container");
    console.log('Styling added to center question container visually');
    answerSelection();
})


// Function declared to manipulate countdown as quiz duration begins
function countdownTimerStart() {
// Local variable declared within function to set interval decrement 
    var countdownTimerDecrement = setInterval(function() {
        countdownTimer --;
        timerEl.textContent = countdownTimer;
        // console.log('Timer counting down');
        
    if (countdownTimer === 0) {
        clearInterval(countdownTimerDecrement);
        // as of yet undefined function
        // endQuiz();
    }
}, 1000);
}

//  For loop used to iterate through any incorrect answers selected, as all of have been tagged with the same 'wrong' class selector and therefore make up an array / need a means by which we can target them individually as HTML DOM objects to add Event Listeners
function answerSelection() {
    for (var i = 0; i < incorrectAnswersEl.length; i++) {
        incorrectAnswersEl[i].addEventListener("click", function() {
            console.log('Incorrect Answer');
            // Call a function to handle incorrect answers and subtract time if needed

        });
    }
    // var correctAnswer1 = questionOneCorrEl|questionTwoCorrEl|questionThreeCorrEl|questionFourCorrEl|questionFiveCorrEl.addEventListener("click");
    // if (incorrectAnswer) {
    //     console.log('Incorrect Answer');
    // } else if (correctAnswer) {
    //     console.log('Correct! Move onto the next question!');
    // }
}

// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
