var rootEl = $('#root');
var welcomeTxt= document.querySelector('#lrgTitle')
var rules= document.querySelector('#intro-Rules')
var beginGame= document.querySelector('#start-btn')
var timeLeft= 30
var timeDisplay= document.querySelector('#timerStart')
var quest= document.querySelector('#questions')
var container= document.querySelector('#content')
var userChoice= document.querySelector('#answers')
var questionContainer= document.querySelector('#questionContainer')
var nextBtn= document.querySelector('#nextBtn'); 
var timer;

questionContainer.style.display= "none"
// Element.addEventListener('click'), function(){
  //save array of questions
var questions = [
  
  {
    question: "Which is not a data type?",
    answers: [
       "alert",
       "boolean",
       "string"
    ],
    correctAnswer: "alert"
  },
 {
    question: "What is an array inclosed in?",
    answers: [
       "curly braces {}",
       "square brackets []",
       "parenthases ()"
    ],
    correctAnswer: "square brackets []"
  },
 {
    question: "Which of the following is a boolean value?",
    answers: [
       "true",
       "0",
       "1",
       "all of the above"
    ],
    correctAnswer: "all of the above"
  },
  {
    question: "Which of the following is a javascript file?",
    answers: [
       ".css",
       ".js",
       ".html",
    ],
    correctAnswer: ".js"
  },
  {
    question: "javascript is the same as Java?",
    answers: [
       "true",
       "false",
    ],
    correctAnswer: "false"
  }
];

//sort through question index and display questions 
var questionIndex= 0

function showQuestion(index) {
  questionContainer.style.display= "flex"
    quest.textContent= ""
    userChoice.textContent= ""
    
        var Q= (questions[index].question)
        var answerList= (questions[index].answers)
        quest.textContent= Q
    
    answerList.forEach(function(ans) {
        var answerButton= document.createElement("button"); 
        answerButton.style.position = "inline";
        answerButton.style.left = "49%";
        answerButton.style.transform = "translateX(-49%)";
            answerButton.classList.add("answer-btn")
            answerButton.textContent= ans
            userChoice.appendChild(answerButton)
            answerButton.addEventListener('click', function (e){
                e.preventDefault
                //console.log(answerButton.textContent)
                ansCheck(answerButton.textContent)}
            )
            
    })
}
    //decrement timer
var checker= document.createElement("h2")
function ansCheck(answer) {
        if (answer === questions[questionIndex].cAnswer) {
            console.log("correct")
            checker.textContent= "Correct"
        }
            else {
                console.log("wrong")
                checker.textContent= "Incorrect"
                 timeLeft -= 5;
            }
            questionContainer.appendChild(checker)
            questionIndex++;
            next(questionIndex)
            console.log(questionIndex)
}
function next(index) {
    // nextBtn.addEventListener('click', function() {
       if (index === questions.length) {
           alert("Finish!")
           clearInterval(timer)
           timeDisplay.textContent = timeLeft;
          
           questionContainer.style.display = 'none'
       }
       else {
        checker.textContent= " "
        showQuestion(index)
       }
    }

    function timeCheck() {
      console.log(timeLeft);
      timeLeft--;
      timeDisplay.textContent = timeLeft;
     if (timeLeft <= 0) {
        alert("Game Over!");
        timeDisplay.textContent = timeLeft;
        questionContainer.style.display = 'none'
        clearInterval(timer)
      }
    }



function startGame( ){
 timer = setInterval(timeCheck, 1000);
 next(questionIndex)

  console.log(timeLeft);
}

beginGame.addEventListener("click", startGame );



var user_initial_input=document.querySelector('#intials').value()
var scoreInput=document.querySelector('#score').value()
var saveBtnInput=document.querySelector('#saveBtnInput')
var scoreForm=document.querySelector('#score-form')
var records = [];

let userRecord= {
  Initials: user_initial_input,
  Score: scoreInput
}

records.forEach(function(records){
  var saveBtnInput =document.createElement("button");
  saveBtnInput.classList.add("save-btn")
saveBtnInput.textContent=userRecord.push(records)
saveBtnInput.appendChild(saveBtnInput)
userRecord.appendChild(saveBtnInput)
saveBtnInput.addEventListener('click', function(){
  renderMessage(saveBtnInput)
})
})

saveBtnInput.addEventListener("click", function(event){
  event.preventDefault();
  records.push(userRecord);

  localStorage.setItem(userRecord, JSON.stringify(records));
  renderMessage();

  console.log(records)
}
)
function renderMessage(playerRecords) {
  var playerListFromStorage = JSON.parse(localStorage.getItem("userRecord"));  
 
 
  for (var i = 0; i < playerListFromStorage.length; i++) {
      console.log(playerListFromStorage[userRecord]);
      allData += playerListFromStorage[userRecord];
  }
  var allData = "";
  
  document.querySelector(".scoreInfo").innerHTML = allData;
     }
//element to display questions
const questTitle= document.createElement("h3");
quest.appendChild(questTitle).textContent= ('QUESTIONS')

// localStorage.setItem('myCat', 'Tom');