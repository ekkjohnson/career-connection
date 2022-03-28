var rooEl=$("#root");


var welcomeText = document.querySelector('.lrgTitle')
var rules = document.querySelector('.intro-Rules')
var beginGame = document.querySelector('.start-btn')
var timeLeft = 10
var blank = document.querySelector('#blankSpace')
var timeDisplay = document.querySelector('timerStart')
var quest = document.querySelector('questions')

const myQuestions = [
    {
      question: "Which is not a data type?",
      answers: {
        a: "alert",
        b: "boolean",
        c: "string"
      },
      correctAnswer: "a"
    },
    {
      question: "What is an array inclosed in?",
      answers: {
        a: "curly braces {}",
        b: "square brackets []",
        c: "parenthases ()"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is a boolean value?",
      answers: {
        a: "true",
        b: "0",
        c: "1",
        d: "all of the above"
      },
      correctAnswer: "d"
    }
  ];