// Array of objects with quiz questions
const quizQuestions = [

  {
    question : "How many sets of teeth does a human being have?",
    answers : ["One","Two","Three","Four"],
    correctAnswer : 1,
  },

  {
    question : "What is the total number of teeth in a primary dentition?",
    answers : ["20", "32","34","24"],
     correctAnswer : 0,
    
  },

  {question : "When does the first lower permanent molar tooth erupt?",
    answers : ["5-6 years","7-8 months","5-6 months","6-7 years"],
    correctAnswer : 0,
  },

  {
    question : "How many roots does an upper central incisor tooth have?",
    answers : ["Two","One","Four","Three"],
    correctAnswer : 1
    

  },

  {
    question: "How many teeth does the secondary dentition contain?",
    answers : ["20", "34","30","32"],
    correctAnswer : 3,
  }
]

// start button linked to script.js and landing page contents display set to none

  const start = document.querySelector("#start")
  start.addEventListener("click", quizStart)
  let questionsIndex = 0;
  let timerInterval;

function quizStart () {
  setTime()
  const startScreen = document.querySelector("#start-screen")
  startScreen.style.display = "none";
  quizDisplay()
  quizChoices()
 }
  
  
  // questions and choices display
  const questions = document.querySelector("#questions")
  questions.style.display = "block";

 function quizDisplay(){
    const startQuiz = document.querySelector("#question-title")
    startQuiz.textContent = quizQuestions[questionsIndex].question
  }
  



  function quizChoices (){  
  const startChoices = document.querySelector(".choices")
  startChoices.innerHTML ="";
  
  
  for (let answerIndex=0; answerIndex < 4; answerIndex++){
  const startChoices = document.querySelector(".choices")

    const button = document.createElement("button")
 
    button.textContent = quizQuestions[questionsIndex].answers[answerIndex]

    button.addEventListener("click", function(){userClick(answerIndex)})
    startChoices.appendChild(button)
    
  }
 
}

// timer
let secondsLeft = 75;

function setTime() {

    timerInterval = setInterval(function(){
    secondsLeft --;
    const timer = document.querySelector(".timer");
    timer.textContent= secondsLeft;

    if(secondsLeft === 0){
      gameEnd()
    }

  },1000)
  
};


// feedback for button click by user
function userClick(answerIndex){

  const feedbacktext = document.querySelector(".feedbacktext")
  if(answerIndex === quizQuestions[questionsIndex].correctAnswer){
 
    feedbacktext.textContent = "Correct";
  
  }
  
  else if (answerIndex !== quizQuestions[questionsIndex].correctAnswer){

    feedbacktext.textContent ="Wrong";
    
    if (secondsLeft > 10){
    secondsLeft -= 10;
    }
    else {
      secondsLeft =0;
    }
    }
    if (secondsLeft == 0){
      gameEnd()
    }
    

// delay to enable viewing of feedback
  setTimeout(function(){
    feedbacktext.textContent = "";
    questionsIndex++

 if (questionsIndex < quizQuestions.length){
  quizDisplay()
  quizChoices()
}

else{
  gameEnd()
    }

  if (secondsLeft === 0){
      gameEnd()
      }
  }, 1000);
}


// end of quiz and display of score
function gameEnd (){
  clearInterval(timerInterval)
      questions.style.display = "none";
      const gameEnd = document.querySelector("#end-screen")
      gameEnd.style.display="block";
      const finalScore = document.querySelector("#final-score");
      finalScore.textContent = secondsLeft;
      const timer = document.querySelector(".timer");
    timer.textContent= secondsLeft;
  }



// Storing user initials and displaying high scores

const submitBtn = document.querySelector("#submit")
const finalScore = document.querySelector("#final-score");

submitBtn.addEventListener("click", function(event){
  event.preventDefault();

  let initials = document.querySelector("#initials").value
  let final_score = finalScore.textContent
  localStorage.setItem("initials",JSON.stringify(initials))
  localStorage.setItem("final_score", JSON.stringify(final_score))
  window.location.href = "highscores.html";
  }
)




