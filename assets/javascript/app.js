$("#start").on("click", function () {
  $("#start").remove();
  game.loadQuestion();
});

$(document).on("click", ".answer-button", function (e) {

  game.clicked(e);

});

$(document).on("click", '#reset', function () {
  game.reset();
});

var questions = [
  {
    question: "According to Greek Mythology, who was the god of wine?",
    answers: ["Hypnos", "Tyche", "Dionysos", "Hades"],
    correctAnswer: "Dionysos",
  },

  {
    question: "What is the world's largest ocean?",
    answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correctAnswer: "Pacific",
  },

  {
    question: "In what month is the Earth closest to the sun?",
    answers: ["December", "January", "February", "March"],
    correctAnswer: "January",
  },

  {
    question: "In what year did the Titanic sink?",
    answers: [1908, 1912, 1916, 1920],
    correctAnswer: 1912,
  },

  {
    question: "Who is the only US president to serve more than two terms?",
    answers: ["Bill CLinton", "Richard Nixon", "Franklin Delano Roosevelt", "Guy Fieri"],
    correctAnswer: "Franklin Delano Roosevelt",
  },
]

var game = {
  questions: questions,
  currentQuestion: 0,
  counter: 30,
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  countdown: function () {
    game.counter--;
    $("#counter").html(game.counter);

    if (game.counter <= 0) {
      console.log("Time is up :(")
      game.timeUp();
    }
  },
  loadQuestion: function () {
    timer = setInterval(game.countdown, 1000);

    $("#subwrapper").html("<h2>TIME REMAINING: <span id='counter'>30</span> Seconds </h2>");
    $("#subwrapper").append("<h2>" + questions[game.currentQuestion].question + "</h2>");
    for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
      $("#subwrapper").append("<button class='answer-button'  id='button-" + i + "' data-name= '" + questions[game.currentQuestion].answers[i] + "'>" + questions[game.currentQuestion].answers[i] + "</button>")
    }
  },
  nextQuestion: function () {
    game.counter = 30;
    $("#counter").html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },
  timeUp: function () {
    clearInterval(timer);
    game.unanswered++;
    $("#subwrapper").html("<h2> OUT OF TIME</h2>");
    $("#subwrapper").append("<h3> The correct answer was:" + questions[game.currentQuestion].correctAnswer + "</h3>");
    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  results: function () {
    clearInterval(timer);
    $("#subwrapper").html("ALL DONE");
    $("#subwrapper").append("<h3>Correct: " + game.correct + "</h3>");
    $("#subwrapper").append("<h3>Incorrect: " + game.incorrect + "</h3>");
    $("#subwrapper").append("<h3>Unanswered: " + game.unanswered + "</h3>");
    $("#subwrapper").append("<button id='reset'>RESET</button>");

  },
  clicked: function (e) {
    clearInterval(timer);
    if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
      game.answerCorrectly();
    } else {
      game.answerIncorrectly();
    }
  },
  answerCorrectly: function () {
    clearInterval(timer);
    game.correct++;

    $("#subwrapper").html("<h2> YOU GOT IT </h2>");

    if (game.currentQuestion == questions.length - 1) {

      setTimeout(game.results, 3 * 1000);

    } else {
      setTimeout(game.nextQuestion, 3 * 1000);

    }
  },
  answerIncorrectly: function () {
    clearInterval(timer);
    game.incorrect++;
    $("#subwrapper").html("<h2> YOU GOT IT WRONG </h2>");

    $("#subwrapper").append("<h3> The correct answer was:" + questions[game.currentQuestion].correctAnswer + "</h3>");
    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  reset: function () {
    game.currentQuestion = 0;
    game.counter = 0;
    game.correct = 0;
    game.incorrect = 0;
    game.unanswered = 0;
    game.loadQuestion();
  }
}
