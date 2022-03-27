var rooEl=$("#root");

var welcomeText = document.querySelector('.lrgTitle')
var rules = document.querySelector('.intro-Rules')
var beginGame = document.querySelector('.start-btn')
var timeLeft = 10
var blank = document.querySelector('#blankSpace')
var timeDisplay = document.querySelector('timerStart')
var quest = document.querySelector('questions')

beginGame.addEventListener('click', function () {
    var timer = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer)
        }
        else if (timeLeft === 0) {
            // alert('Game Over!')
            // document.textContent(timeDisplay) = (timeLeft);
            timeDisplay.textContent= (timeLeft)
            timeDisplay.textContent = (" ")
        }
        else (
        // document.textContent(timeDisplay) = (timeLeft);
        timeDisplay.textContent= (timeLeft)
        )
         } , 1000)
    
})

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz 
buildQuiz();

// show results
submitButton.addEventListener('click', showResults);


  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }