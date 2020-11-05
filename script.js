var questions = [
    {
      question: "When adding boost to an engine it is common to....",
      answers: {
        a: "Increase the compression ratio",
        b: "Update the exhaust springs",
        c: "Add more fueling",
        d: "Add blinker fluid"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is not a way to increase airflow to the throttle body?",
      answers: {
        a: "Adding a larger intake manifold",
        b: "Adding a bigger air intake",
        c: "Adding hi-flow charge pipes",
        d: "Removing the headlight and connecting the intake"
      },
      correctAnswer: "a"
    },
    {
      question: "What does OBD-II stand for?",
      answers: {
        a: "on-board diagnostics",
        b: "operating bank detection",
        c: "on-board detection",
        d: "operating bank diagnostics"
      },
      correctAnswer: "a"
    },
    {
        question: "What will make you fail California smog?",
        answers: {
          a: "Muffler delete",
          b: "Resonator delete",
          c: "Racing intake",
          d: "High-flow downpipe"
        },
        correctAnswer: "d"
    },
    {
        question: "Forced induction systems produce more horsepower by",
        answers: {
          a: "Forcing more fuel into the combustion chamber",
          b: "Speeding up engine revolution",
          c: "Forcing more heat into the combustion chamber",
          d: "Forcing more air into the combustion chamber"
        },
        correctAnswer: "d"
    },
    {
        question: "A turbocharger is powered by _____, while a supercharger is powered by",
        answers: {
          a: "belts and pulleys; gases",
          b: "gases; belts and pulleys",
          c: "oil cooling, water cooling",
          d: "nitrous; belts and pulleys"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is not a common suspension component?",
        answers: {
          a: "Swaybars",
          b: "Bushings",
          c: "Gaskets",
          d: "Endlinks"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is unique to forward wheel drive?",
        answers: {
          a: "Differential",
          b: "CV Joints",
          c: "Coilover suspension",
          d: "Power Steering"
        },
        correctAnswer: "b"
    },
    {
        question: "Car A has a large single turbo kit producing 600whp and Car B has a sequential turbo kit with two smaller turbines, also producing 600 whp. The cars are otherwise identical. In a straight line which car will accelerate faster?",
        answers: {
          a: "Car A",
          b: "Car B",
          c: "Neither",
        },
        correctAnswer: "b"
    },
  ];

var $startButton = document.getElementById("start-btn");
var $nextButton = document.getElementById("next-btn");
var $answerBtnPad = document.getElementById("answer-btn-pad");
var $currentScore = document.getElementById("current-score");
var $quizStatusText = document.getElementById("quiz-status-text");
var $quizBlockText = document.getElementById("quiz-block-text");
var $currentScoreValue = document.getElementById("current-score-value");
var currentQuestion = 0;
var currentScore = 0;
var $aButton = document.getElementById("a");
var $bButton = document.getElementById("b");
var $cButton = document.getElementById("c");
var $dButton = document.getElementById("d");

$startButton.addEventListener('click', startQuiz);
$nextButton.addEventListener('click', nextQuestion);

function startQuiz() {
    console.log("Quiz started")
    $startButton.classList.add("hide");
    $nextButton.classList.remove("hide");
    $answerBtnPad.classList.remove("hide");
    $currentScore.classList.remove("hide");
    nextQuestion()
};

function nextQuestion () {
    console.log("Next question loaded");
    showQuestion(questions[currentQuestion]);
    console.log(currentQuestion);
};

function showQuestion () {
    $quizBlockText.innerText = questions[currentQuestion].question;
    $aButton.innerText = questions[currentQuestion].answers.a;
    $bButton.innerText = questions[currentQuestion].answers.b;
    $cButton.innerText = questions[currentQuestion].answers.c;
    $dButton.innerText = questions[currentQuestion].answers.d;

}

$answerBtnPad.addEventListener('click', function(event){
    event.preventDefault();
    console.log(questions[currentQuestion].correctAnswer);
    console.log(event.target.id);
    if(event.target.matches("button")){
        if(questions[currentQuestion].correctAnswer===event.target.id) {
            currentScore+=10;
            $currentScoreValue.innerText=currentScore.toString();
            console.log("Answer correct");
        } else {
            console.log("Answer incorrect");
        };
    };
    currentQuestion++
    console.log(currentQuestion);
})