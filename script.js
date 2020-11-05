var score = 0;
var timeLeft = 90000;
var quizContainer = document.getElementById("quiz-container");
var quizButton = document.getElementById("quiz-button");
var highScores = []
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
        question: "What does OBD-II stand for?",
        answers: {
          a: "on-board diagnostics",
          b: "operating bank detection",
          c: "on-board detection",
          d: "operating bank diagnostics"
        },
        correctAnswer: "a"
    }
  ];