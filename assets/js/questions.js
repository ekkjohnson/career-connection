
// // // questionContainer.style.display= "none"
// // // var questions = [
// // //   {
// // //     question: "Which is not a data type?",
// // //     answers: {
// // //       a: "alert",
// // //       b: "boolean",
// // //       c: "string"
// // //     },
// // //     correctAnswer: "a"
// // //   },
// // //  {
// // //     question: "What is an array inclosed in?",
// // //     answers: {
// // //       a: "curly braces {}",
// // //       b: "square brackets []",
// // //       c: "parenthases ()"
// // //     },
// // //     correctAnswer: "b"
// // //   },
// // //  {
// // //     question: "Which of the following is a boolean value?",
// // //     answers: {
// // //       a: "true",
// // //       b: "0",
// // //       c: "1",
// // //       d: "all of the above"
// // //     },
// // //     correctAnswer: "d"
// // //   }
// // // ];

// // var rootEl = $('#root');
// // var welcomeTxt= document.querySelector('.lrgTitle')
// // var rules= document.querySelector('.intro-Rules')
// // var beginGame= document.querySelector('.start-btn'); beginGame.style.position = "sticky";
// // beginGame.style.left = "50%";
// // beginGame.style.transform = "translateX(-50%)";
// // var timeLeft= 60
// // var timeDisplay= document.querySelector('.timerStart')
// // var quest= document.querySelector('#questions')
// // var container= document.querySelector('#content')
// // var userChoice= document.querySelector('.answers')
// // var questionContainer= document.querySelector('#questionContainer')
// // var nextBtn= document.querySelector('.nextBtn'); nextBtn.style.position = "sticky";
// // nextBtn.style.left = "49%";
// // nextBtn.style.transform = "translateX(-49%)";
// // questionContainer.style.display= "none"
// // var questions= [
// //     {
// //         question: "What is the correct abbreviation for JavaScript?",
// //         answers: ["JS", "JV", "JVS", "JA"],
// //         cAnswer: "JS"
// //     },
// //     {
// //         question: "What does 'var' stand for in JavaScript Language?",
// //         answers: ["Variety", "Variable", "Varietal", "Varying"],
// //         cAnswer: "Variable"
// //     },
// //     {
// //         question: "What kind of punctuation follows the word 'function'?",
// //         answers: ["( ) and ' '", "{ } & //", "( ) & { }", "# & [ ]"],
// //         cAnswer: "( ) & { }"
// //     },
// //     {
// //         question: "What kind of Primitive Data Type involves 'true' or 'false' conditions?",
// //         answers: ["Null", "Undefined", "String", "Boolean"],
// //         cAnswer: "Boolean"
// //     },
// //     {
// //         question: "What does the 'concat( )' method do?",
// //         answers: ["Multiply", "Join", "Subtract", "Discard"],
// //         cAnswer: "Join"
// //     },
// // ]
// // var questionIndex= 0
// // function showQuestion(index) {
// //     quest.textContent= ""
// //     userChoice.textContent= ""
// //     for (var i = 0; i < questions.length; i++) {
// //         var Q= (questions[index].question)
// //         var answerList= (questions[index].answers)
// //         quest.textContent= Q
// //     }
// //     answerList.forEach(function(ans) {
// //         var answerButton= document.createElement("button"); 
// //         answerButton.style.position = "inline";
// //         answerButton.style.left = "49%";
// //         answerButton.style.transform = "translateX(-49%)";
// //             answerButton.classList.add("answer-btn")
// //             answerButton.textContent= ans
// //             userChoice.appendChild(answerButton)
// //             answerButton.addEventListener('click', function () {
// //                 //console.log(answerButton.textContent)
// //                 ansCheck(answerButton.textContent)
// //             })
            
// //     })
// // }
    
// // var checker= document.createElement("h2")
// // function ansCheck(answer) {
    
// //         if (answer === questions[questionIndex].cAnswer) {
// //             console.log("correct")
// //             checker.textContent= "Great work! Your selection is correct."
// //         }
// //             else {
// //                 console.log("wrong")
// //                 checker.textContent= "Sorry! Your selection is incorrect. Please refresh the browser to try again."
// //                 timeLeft= timeLeft-5;
// //             }
            
// //             questionContainer.appendChild(checker)
// //             questionIndex++;
// //             next(questionIndex)
// //             console.log(questionIndex)
// // }
// // function next(index) {
// //     nextBtn.addEventListener('click', function() {
// //        if (index >= questions.length) {
// //            alert("You're Done!")
// //            clearInterval(timer)
// //        }
// //        else {
// //         checker.textContent= " "
// //         showQuestion(index)
// //        }
// //     })
// // }
// // //made prompt with rules for creating an element to hold the text
// // const procedures = document.createElement("p");
// // rules.appendChild(procedures).textContent= alert('Welcome to the TIMED QUIZ GAME! This is a multiple choice game. Please read the question(s) carefully before selecting ONE of the FOUR answers provided to proceed. You are given 60 seconds to answer all five questions. If you finish answering all the given questions before the timer reaches ZERO, you win! Although, if you DO NOT finish within the alotted time- YOU LOSE! Please refresh the browser to try again.')
// // var timer;
// // //start button function to also begin timer
// // beginGame.addEventListener('click', function () {
// //     questionContainer.style.display= "block"
// //     showQuestion(questionIndex)
// //      timer = setInterval(function () { 
// //         timeLeft--;
// //         if (timeLeft < 0) {
// //             clearInterval(timer)
// //         }
// //         //if time runs out and user did not finish all the questions the alert shows
// //         else if (timeLeft === 0) {
// //             alert('Game Over!')
// //             timeDisplay.textContent= timeLeft
// //             timeLeft.textContent = ""
// //         }
// //         else (
// //             timeDisplay.textContent = timeLeft
        
// //      )} , 1000)
       
// // })
// // var userInitialInput= document.querySelector('#inital')
// // var userScoreInput= document.querySelector('#score').value
// // var saveButtonInput= document.querySelector('#saveButton').value
// // var scoreForm= document.querySelector('#score-form')
// // var playerRecords= [];
// // let userRecord= {
// //     Intials: userInitialInput,
// //     Score: userScoreInput,
// // };
// // playerRecords.forEach(function(playerRecords) {
// //     var saveButtonInput= document.createElement("button"); 
// //         saveButtonInput.classList.add("save-btn")
// //         saveButtonInput.textContent= userRecord.push(playerRecords)
// //         saveButtonInput.appendChild(saveButtonInput)
// //         userRecord.appendChild(saveButtonInput)
// //         saveButtonInput.addEventListener('click', function () {
            
// //             renderMessage(saveButtonInput)
// //         })
// //     })
// // saveButtonInput.addEventListener("click", function (event) {
// //     event.preventDefault();
// //     playerRecords.push(userRecord);
// //     console.log(event)
// //     localStorage.setItem("userRecord", JSON.stringify(playerRecords));
// //     renderMessage();
// //     console.log(playerRecords)
// // });
// // function renderMessage(playerRecords) {
// //     var playerListFromStorage = JSON.parse(localStorage.getItem("userRecord"));  
   
   
// //     for (var i = 0; i < playerListFromStorage.length; i++) {
// //         console.log(playerListFromStorage[userRecord]);
// //         allData += playerListFromStorage[userRecord];
// //     }
// //     var allData = "";
    
// //     document.querySelector(".scoreInfo").innerHTML = allData;
// //        }
// // //created h3 element to display questions
// // const questTitle= document.createElement("h3");
// // quest.appendChild(questTitle).textContent= ('QUESTIONS')
// <div class="container-fluid"></div>
//     <section>
//         <div class="lrgTitle">Timed Javascript Quiz Game!</div>
//         <div class="intro-Rules"></div>
//         <button class="start-btn">Click to Start</button>
//     </section>
//     <section>
//         <div class="gameSection">
//             <div id="blankSpace"></div>
//         </div>
//     </section>
//     <section>
//         <div class="card-timer">
//             <div class="timerMsg">
//                 <p class="timerStart" id="timer-start"> 10 </p>

//                 <h3>seconds remaining!!!</h3>
//             </div>
//     </section>
//     <div class="questions"></div>
//     <div class="content"></div>
//     <div id="quiz"></div>
//     <div id="answers"></div>
//     <!-- <button id="submit">Submit Quiz</button>
//     <div id="results"></div> -->

//     <div class="quiz-container">


//     </div>
//     <button id="previous">Previous Question</button>
//     <button id="next">Next Question</button>
//     <button id="submit">Submit Quiz</button>
//     <div id="results">Results</div>
//     <div id="'initial">Input</div>
//     <div id="score">Score</div>
//     <button id="saveButton">Save Score</button>
//     <div id="score-form">Score Form</div>


//     </div>


//     <section>
//     </section>
//     </div>