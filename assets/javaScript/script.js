

//1. start screen with title, rules, start button, timer
//2. question screen container with question text, buttons, timer, feddback based on answer selected
//3. end of game container with final score, form to enter intitals, and a submit button
//4. high score page

//js

//1. declaire vairables to reference DOM elements in HTML document
    //startQuizBtn, StartScreenE1, timerE1, highScoreE1
    //QuestionE1, questionTitleE1, answerChoicesE1

//2. create an array of objects that hold all questions--can store this in seperate js file
    //answer choices
    //question text
    //correct answer

//3. creat a startQuiz() function trierred by the StartQuizBtn
    //hide start screen
    //unhide questions screen
    //starts timer
    //grab first question in array

//4. create a function to getQuestion()
    //renders title, choices, and buttons

//5. create a function to check if an answer is correct
    //if the answer is correct, then move to next question
    //if answer is wrong, decrement the timer and move to next questions
    //keep track of score
    //increment index in array of questions to move on

//6. creat a function to end the quiz
    //unhide this QuestionE1
    //unhide End of quiz element
    //unhide final score element, form, submit btn

//7. create functionality to save high scores to localStorage
