//Here I am identifying my questions object, as a global variable so i can just call them up when I need to, without creating a new variable under every funtion(?)
$(document).ready(function() {

var qAndA = [
    { 
      question:"According to Greek Mythology, who was the god of wine?",
        choices:["Hypnos", "Tyche", "Dionysos", "Hades"],
          answer: 2,
     },

    {
      question:"What is the world's largest ocean?",
        choices:["Pacific", "Atlantic" ,"Indian", "Arctic" ],
          answer: 0,
    },

    {
      question:"In what month is the Earth closest to the sun?",
        choices:["December", "January", "February", "March"],
          answer: 1,
    },
    
    {
      question:"In what year did the Titanic sink?",
        choices:[1908, 1912, 1916, 1920],
          answer: 1,
    },

    {
      question:"Who is the only US president to serve more than two terms?",
        choices:["Bill CLinton", "Richard Nixon", "Franklin Delano Roosevelt", "Guy Fieri"],
          answer: 2,
    },
  ];
 // Starting everything off with the function to load the page
 
//global variables along with the array if questions above
 var trivia = {
  correctAnswers = 0,
  incorrectAnswers = 0,
  unansweredAnswers = 0,
  questionCounter: 0,
  clock: "",
  timeCounter: 10,
  }
//First OnCLicks starting + ending games
  $(document).on("click", "#start", function(event){
    startGame();
  });
  
  $(document).on("click", "#startOver", function(event){
    startOver();
  });

  //Now giving value to these functions
function startGame() {
  setTimer =  $(".timeRemaining").text("00:00");
  $("#questionAsked").text("Question One: " + qAndA[0].question); // START GAME FUNCTION IS HERE !!!!!!!

 }

 // display one question // create forloop for questions



// timer --------- 

function timer(){
  trivia.qAndA = setInterval(tenSeconds, 1000);

  function tenSeconds(){
    if  (trivia.timeCounter === 0){
        timeOutLoss();
        clearInterval(trivia.clock);
    }
    if(trivia.timeCounter > 0) {
      trivia.timeCounter --;
    }
    $(".timer").html(trivia.timeCounter);
  }
};






//-----------------
  
  // for (var i = 0; i < qAndA.length;i++)
    

// var intervalId;
// var clockRunning = false;
// var timer = {
//   time: 0,

//   reset: function (){
//     timer.time = 0;
//          $(".timeRemaining").text("00:00");
// },

//   start: function() {
//     if (!clockRunning) {
//       intervalId = setInterval(time.count, 30000);
//       clockRunning = true;
//     }
//   },
  // function startTrivia

//   $("#start").on("click", function() {
//       $(".hideThese").hide();

// }















})
