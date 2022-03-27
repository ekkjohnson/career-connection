var rooEl=$("#root");

var welcomeText = document.querySelector('.lrgTitle')
var rules = document.querySelector('.intro-Rules')
var beginGame = document.querySelector('.into-Rules')
var timeLeft = 10
var blank = document.querySelector('#blankSpace')
var timeDisplay = document.querySelector('.timerStart')
var quest = document.querySelector('questions')

beginGame.addEventListener('click', function () {

    var timer = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer)
        }
        else if (timeLeft === 0) {
            alert('Game Over!')
            document.textcontent(timeDisplay) = ("timeLeft");
            
        }
        else (
            timeDisplay.textContent = blank
        
     )} , 1000)
})

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);