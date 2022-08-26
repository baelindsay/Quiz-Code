const quizContainer = document.querySelector('#question');
const answerA =  document.getElementById('answer-A');
const answerB =  document.getElementById('answer-B');
const answerC =  document.getElementById('answer-C');
const answerD =  document.getElementById('answer-D');
const finalScoreEl = document.getElementById('fin-score');
const nicknameEl = document.getElementById('nickname');
const highScoreListEl = document.getElementById('highscore-list');
const timerEl = document.getElementById('timer');

let secondsLeft = 60;
let currentScore = 0;
let currentQ = -1;
let finalScore;

// Move from current to next div
function changeDiv(curr, next) {
    document.getElementById(curr).classList.add('hidden');
    document.getElementById(next).removeAttribute('class');
};

// Start Button Click
function startGame() {
    changeDiv('home', 'question-container');
    nextQuestion();
    startTimer();
};

startButton.addEventListener('click', start)

// Timer function
function startTimer() {
    timerEl.textContent = secondsLeft;
    let timerInterval  = setInterval(
        () => {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }
    )
};

// Question Function 
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion == shuffledQuestions.length) {
        secondsLeft = 0;
        endQuiz();
    } else {
        questionEl.textContent = shuffleQuestions[currentQuestion].question;
        let arr = [answerA, answerB, answerC, answerD];
        let i =0;
        arr.forEach(element => {
            element.textContent = shuffleQuestions[currentQuestion].answersArray[i].answer;
            i++
        }, i);
    };
};

// When human clicks answer button
function handleAnswerClick(event) {
    // this gets the correct answer sting
    let rightAnswer = getRightAnswer(currentQ);
    //  t
    if (event.target.textContent === rightAnswer) {
        currentScore += 10;
    } else {
        //this subtracts time when human clicks wrong answer
        secondsLeft -= 10;
    }
};

function getRightAnswer (currentQuestion) {
    let arr = suffleQuestions[currentQuestion].answerArray;
    // this is a loop that goes through answerArray 
    for (let x = 0; x < arr.length; x++) {
        if (arr[x].right) {
            // this returns the right answer
            return arr[x].answer
        }
    }
};


//Array that holds all my questions
const questionsBank = [
    {
        question: 'What is an array in JavaScript?',
        answerArray: [
            {answer: 'the thing in bows', correct: false },
            {answer: 'A function for element', correct: false},
            {answer: 'A Boolean', correct: false},
            {answer: 'an ordered list of value', correct: true}]
    },

    {
        question: 'Which one is the correct HTML element to define emphasized text?',
        answers: [
            {answer: '<i></i>', correct: false },
            {answer: '<em></emt', correct: true},
            {answer: '<bold></bold>', correct: false},
            {answer: '<ital></ital>', correct: false}]
    },   

    {
        question: "How does a 'for' loop start?",
        answers: [
            {answer: 'for (i=0; i <= 5)', correct: false },
            {answer: 'for(i = 0; i <=5; i++)', correct: false},
            {answer: 'for i = 1 to 5', correct: false},
            {answer: '(i <=5; i++)', correct: true}]
    }
];