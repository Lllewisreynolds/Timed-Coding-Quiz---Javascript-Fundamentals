# 04 Web APIs: Code Quiz

## Description

Taking inspiration from atypical coding assessments presented during the application/interview processes for full-stack web developer roles, this Challenge has been designed to showcase responsive, interactive JavaScript code that dynamically updates the HTML and CSS of the application through a timed quiz component that allows you to cycle through several multiple-choice questions and view the high scores of those who have taken the quiz thus far. This has been achieved through the deployment of the following coding practices, methods and techniques, all of which involve the manipulation of the Document Object Model (DOM), an application programming interface (API) native to the browser that provides us with a structure and means by which to affect the structure and content of a web page.

1. Pulling through HTML elements I will need to manipulate in JavaScript in order to create additional quiz functionality via their unique id tags through the getElementById() method of the document interface.

2. Used the native addEventListener() method to register a click event directly to the start button that initiates our quiz and its overall code block function. Event listeners have also been used in conjunction with a for loop to iterate through any incorrect answers selected (all of which have been tagged with the same 'wrong' class selector), so that we can penalise the user with time deducted off the seconds remaining to complete the quiz.

3. Use of the native JavaScript method of setInterval() to execute some code upon the start of each quiz attempt (triggered by the start button) for a set period of time through its callback function (as defined by myself) and an interval as its parameters. This ensures the quiz only goes on for its alloted amount of time and displays its current remaining the user as a visual aid. This is then cleared at the end of the alloted time with the corresponding clearInterval() method to ensure the code does not run indefinitely.

4. 

5. 

## Screenshot of Finalised Application - Usage

![img](./)

![img](./)

## Link to Deployed Application

## Credits

As this challenge is testing our ability to use and deploy Javascript, styling and formatting for my HTML and CSS has been largely cribbed from the third-party assets available on codepen.io.

Attribution to [Angel Nguyen](https://codepen.io/AngelNguyen) in particular, whose Javascript quiz front-end application has provided the majority of my styling and formatting beyond some minor cosmetic tweaks and additional sections added.



