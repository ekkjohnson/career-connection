// 
var welcomeTxt= document.querySelector('#lrgTitle')
var rules= document.querySelector('#intro-Rules')
var beginGame= document.querySelector('#start-btn')

var timeDisplay= document.querySelector('#timerStart')
var quest= document.querySelector('#questions')
var container= document.querySelector('#content')
var userChoice= document.querySelector('#answers')
var questionContainer= document.querySelector('#questionContainer')
var nextBtn= document.querySelector('#nextBtn'); 

// ScoreBoard Elements
var user_initial_input = document.querySelector('#initials')
var scoreInput=document.querySelector('#score')
var saveBtnInput=document.querySelector('#saveBtnInput')
var scoreForm=document.querySelector('#score-form')
var scoreboardEl=document.getElementById('scoreboard');
var highscoresBtn = document.getElementById('highscores')

var records = [];
var timer;
var timeLeft= 30

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
       if (index === questions.length) {
           alert("Finish!")
           clearInterval(timer)
           timeDisplay.textContent = timeLeft;
          
           questionContainer.style.display = 'none'
       }
       else {
        checker.textContent= ""
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

scoreForm.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(user_initial_input)
  document.querySelector("#scoreInfo").innerHTML = timeLeft
  let newRecord= {
    Initials: user_initial_input.value.trim(),
    Score: timeLeft
  }


  let records = JSON.parse(localStorage.getItem('userRecords')) || [];

  records.push(newRecord);

  localStorage.setItem( 'userRecords' , JSON.stringify(records));
  
}
)

function renderScores() {
  var playerListFromStorage = JSON.parse(localStorage.getItem("userRecords")) || [];  
  playerListFromStorage.forEach((player)=>{

    let username = player.Initials;
    let score = player.Score;
    let scoreLiEl = document.createElement('li');
    scoreLiEl.textContent = `${username} | ${score}`
    scoreboardEl.appendChild(scoreLiEl)
  })
}
highscoresBtn.addEventListener('click',renderScores)

//element to display questions
// const questTitle= document.createElement("h3");
// quest.appendChild(questTitle).textContent= ('QUESTIONS')

// localStorage.setItem('myCat', 'Tom');