var highScore = 0;
var score = 'timer value';
var questionsArr = [
    {
        question: "Which is NOT a JavaScript date type?",
        answers: ['boolean', 'string', 'infinity', 'number'],
        correctAns: 2
    },
    {
        question: 'An undefined variable is a variable that has been given a value.',
        answers: ['True', 'False'],
        correctAns: 1
    },
    {
        question: 'Which symbol is used for single line comments in JavaScript?',
        answer: ['//', '+', "/*", '$'],
        correctAns: 0
    },
    {
        question: 'Which is not a looping structure in JavaScript?',
        answers: ['For', 'While', 'Do-While', 'If'],
        correctAns: 3
    },
    {
        question: 'Which is one of the types of Pop up boxes available in JavaScript?',
        answers: ['Window', 'Alert', 'Id-Box', 'Pop'],
        correctAns: 1
    },
    {
        question: 'If you want to know the number of elements in an array, what property should you use?',
        answers: ['prototype property', 'reverse property', 'length property', 'shift property'],
        correctAns: 2
    }
];

var currentQuestion = 0;
var userChoice = [];


const timerStart = 90;
var timePassed = 0;
var timeLeft = timerStart;
var timerInterval = null;

document.getElementById('start-btn').addEventListener('click', countdown);

function onTimesUp() {
    clearInterval(timerInterval);
    alert('Time is up and your score is 0');
};

function countdown() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = timerStart - timePassed;
        document.getElementById('timer').innerHTML = " " + timeLeft;
        console.log(timeLeft);
        if (timeLeft === 0) {
            onTimesUp();
        }
    }, 1000);
};




