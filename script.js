
// remove title page when quiz starts
function titleDisplay() {
    var quizTitleDisplay = document.getElementById("quiz-title");
    quizTitleDisplay.style.display = "none";
  }
  
  // timer interval
  var time = 60;
  function setTimer() {
    setInterval(function () {
      var timer = document.getElementById("time-display");
      if (time > 0 && i < 5) {
        time = time - 1;
        timer.textContent = "Time Remaining: " + time;
      } //else {
      //endQuiz()
      //}
    }, 1000);
  }
  
  // set html document variables
  var submitBtn = document.querySelector("#start-btn");
  var questionSection = document.querySelector(".question-section");
  var finalSection = document.querySelector(".final-section");
  var highScoreSection = document.querySelector(".highscore-page");
  var returnToQuizBtn = document.getElementById("refresh-btn");
  var clearScoreBtn = document.getElementById("clear-data-btn");
  var enterResultsBtn = document.getElementById("end-btn");
  var input = document.getElementById("input-box")
  
  // set question variables
  var questionOne = {
    question: "Commonly used data types DO NOT include:",
    choices: ["A. strings ", "B. booleans", "C. alerts", "D. numbers"],
    answer: "C. alerts",
  };
  var questionTwo = {
    question:
      "String values must be enclosed within __________ when being associated with variables.",
    choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
    answer: "C. quotes",
  };
  
  var questionThree = {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "A. javascript",
      "B. terminal/bash",
      "C. for loops",
      "D. console.log",
    ],
    answer: "D. console.log",
  };
  var questionFour = {
    question: "The condition in an if / else statement is enclosed with",
    choices: [
      "A. quotes",
      "B. parenthesis",
      "C. curly brackets",
      "D. square brackets",
    ],
    answer: "C. curly brackets",
  };
  var questionFive = {
    question: "Arrays in JavaScript can be used to store _________.",
    choices: [
      "A. numbers and strings",
      "B. other arrays",
      "C. booleans",
      "D. all of the above",
    ],
    answer: "D. all of the above",
  };
  
  // create question array with set question variables
  var questionArray = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
  ];
  var i = 0;
  
  // start quiz function
  
  var quizStart = function () {
    titleDisplay();
    if (i === 0) {
      setTimer();
    }
  
    if (i === 5){
      endQuiz();
      return;
    }
  
  // question array
    var questionOneDiv = document.createElement("div");
    questionOneDiv.textContent = questionArray[i].question;
    questionOneDiv.className = "question-div";
    questionSection.append(questionOneDiv);
  
    // choices array
    for (j = 0; j < questionArray[i].choices.length; j++) {
      var choicesDiv = document.createElement("button");
      choicesDiv.textContent = questionArray[i].choices[j];
      choicesDiv.className = "button-style";
      choicesDiv.addEventListener("click", answerValidation);
      questionSection.append(choicesDiv);
    }
  };
  // check answer section
  var answerValidation = function (event) {
    if (i > 4) return;
  
    if (event.target.textContent === questionArray[i].answer && i < 5) {
      alert("CORRECT!");
    } else {
      alert("Incorrect, time has been subracted by 5 seconds");
      time -= 5;
    }
  
    i++;
    questionSection.innerHTML = "";
    quizStart();
  };
 
  //quiz complete section 
  function endQuiz() {
    clearInterval(setTimer);
  
    // remove questions when quiz is over
    var questionDisplay = document.getElementById("question-id");
    questionDisplay.style.display = "none";
  
    // remove display:none from CSS
    var displayFinalSection = document.getElementsByClassName("final-section");
    finalSection.classList.remove("final-section");
  
    // remove timer display
    var timerDisplay = document.getElementById("time-display");
    timerDisplay.style.display = "none";
  
    // the final score needs to be displayed
    var finalScoreSection = document.getElementById("score");
    var finalScoreDiv = document.createElement("div");
    finalScoreDiv.textContent = time;
    finalScoreSection.append(finalScoreDiv)
  }
  
  // refresh button 
      document.getElementById("refresh-btn").onclick = function () {
          location.href = "https://evanclevenger.github.io/Coding-quiz/";
      };
  
   // user input storage function
   function userInput() {
    if (input.value === "") {
      return alert ("Please enter valid input. Initials must be atleast 1 character");
    }
    
    var scores = {
      "initials": input.value,
      "score": time
  
    }
        // set variable to current localStorage values
          var storage = JSON.parse(localStorage.getItem("scores"))
  
          // check to see if storage is empty or not
          if ( storage === null  || storage === undefined) {
            storage = []
            storage.push(scores)
          }
          else {
            storage.push(scores)
          }
          
          // save value from quiz
          localStorage.setItem( "scores", JSON.stringify(storage));
  
          // set variable to new localStorage values
          var getStorage = JSON.parse(localStorage.getItem("scores"))
  
         
          // removing classes to achieve a certain page to display
          document.getElementsByClassName("highscore-page");
          highScoreSection.classList.remove("highscore-page");
          var resultDisplay = document.getElementById("result-section");
          resultDisplay.style.display = "none";
          var highScoreOl = document.getElementById("highscore-ol")
  
          // sorts storage values from high to low
          getStorage.sort(function(a, b) {
            return b.score - a.score ;
          });
         
         
          // use for loop to display continuous new scores in li elements
          for (let i = 0; i < getStorage.length; i++) {
            var highScoreLi = document.createElement("li")
            highScoreOl.append(highScoreLi);
           
            highScoreLi.textContent = getStorage[i].initials + " " + getStorage[i].score
            highScoreLi.className = "highscore-li-style"
          }
  
           // clear-scores quiz button will delete highscores from localStorage
            document.getElementById("clear-scores-btn").onclick = function () {
            localStorage.clear()
            highScoreOl.remove(highScoreLi)
  };
  }
  
  
  // button that starts the quiz
  submitBtn.addEventListener("click", quizStart);
  
  // button that saves the user input
  enterResultsBtn.addEventListener("click", userInput);
  
  // return quiz button will display the start quiz page
  document.getElementById("refresh-btn").onclick = function () {
    location.href = "https://github.com/EvanClevenger/Code-Quiz-Challenge-4";
  };