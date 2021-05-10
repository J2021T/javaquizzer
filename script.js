var highScore = 0;
var score = 'timer value';
var questionsArr = [
    {
        question: "Which is NOT a JavaScript date type?",
        answers: ['boolean', 'string', 'infinity', 'number'],
        correctChoice: 2
    },
    {
        question: 'An undefined variable is a variable that has been given a value.',
        answers: ['True', 'False'],
        correctChoice: 1
    },
    {
        question: 'Which symbol is used for single line comments in JavaScript?',
        answer: ['//', '+', "/*", '$'],
        correctChoice: 0
    },
    {
        question: 'Which is not a looping structure in JavaScript?',
        answers: ['For', 'While', 'Do-While', 'If'],
        correctChoice: 3
    },
    {
        question: 'Which is one of the types of Pop up boxes available in JavaScript?',
        answers: ['Window', 'Alert', 'Id-Box', 'Pop'],
        correctChoice: 1
    },
    {
        question: 'If you want to know the number of elements in an array, what property should you use?',
        answers: ['prototype property', 'reverse property', 'length property', 'shift property'],
        correctChoice: 2
    }
];

var currentQuestion = 0;
var userChoice = [];


const timerStart = 90;
var timePassed = 0;
var timeLeft = timerStart;
var timerInterval = null;
var correctAnswer = questionsArr[currentQuestion].correctChoice;
var correct = questionsArr[currentQuestion].answers[correctAnswer];

document.getElementById('questionContainer').style.visibility = 'hidden';
document.getElementById('start-btn').addEventListener('click', countdown);
document.getElementById('start-btn').addEventListener('click', quiz);


function quiz() {
    document.getElementById('introContainer').style.visibility = 'hidden';
    document.getElementById('questionContainer').style.visibility = 'visible';

    displayQuestions();
    if (document.getElementsByClassName('li-btn btn').clicked == true) {
        alert('button was clicked');
    }
}

function answerQuestion() {
    if (timeLeft > 0) {
        if (document.getElementById(''+ ansOpt[i] +'').clicked === correct) {
            currentQuestion++;
            displayQuestions();
        }
        else {
            currentQuestion++;
            displayQuestions();
            timeLeft = timeLeft - 5;
        }
    }
    else if (timeLeft === 0) {
        onTimesUp();
    }
}

function displayQuestions() {    
    var question = questionsArr[currentQuestion].question;
    var questionId = document.getElementById('question');
    var choicesId = document.getElementById('choices');
    var numAnswers = questionsArr[currentQuestion].answers.length;
    var ansOpt = questionsArr[currentQuestion].answers
    questionId.innerHTML = question;
    choicesId.innerHTML = '';

    for (var i = 0; i < numAnswers; i++) {
        document.getElementById('choices').innerHTML += '<button id="li '+ ansOpt[i] +'" class="li-btn btn">' + ansOpt[i] + '</button>';
     }
};

function onTimesUp() {
    clearInterval(timerInterval);
    alert('Time is up and your score is 0');
};

function countdown() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = timerStart - timePassed;
        document.getElementById('timer').innerHTML = " " + timeLeft;
    }, 1000);
}