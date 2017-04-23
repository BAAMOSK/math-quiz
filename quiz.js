let quiz = [
  {
    question: "What is 1 + 3 =",
    choices: ["1","2","3","4","5"],
    correct: "4"
  },
  {
    question: "What is 4 + 1 =",
    choices: ["1","2","3","4","5"],
    correct: "5"
  },
  {
    question: "What is 20 + 10 =",
    choices: ["10","20","30","40","50"],
    correct: "30"
  }
];

const state = {
  currentQuestion: 0,
  questionNumber: 1,
  questionTotal: quiz.length,
  score: 0,
  quizView: "",
  choices: "",
  message: "hello",
  correct: "You got it right!",
  wrong: "You got it wrong"
};

let answerChoices = {
  answer1: quiz[state.currentQuestion].choices[0],
  answer2: quiz[state.currentQuestion].choices[1],
  answer3: quiz[state.currentQuestion].choices[2],
  answer4: quiz[state.currentQuestion].choices[3],
  answer5: quiz[state.currentQuestion].choices[4],
  correctAnswer: quiz[state.currentQuestion].correct
};

let quizView = "<div class=\"status\"><h3 class=\"current\">"+`Question ${state.questionNumber} of ${state.questionTotal}`+
"</h3><h3 class=\"score\">"+ `Score: ${state.score}</h3>` + "</div><h1 class=\"question\">"+`${quiz[state.currentQuestion].question}`+"</h1>" +
    `<div class="answers">
      <label><input type="radio" name="option" value="${answerChoices.answer1}">${answerChoices.answer1}</label>
      <label><input type="radio" name="option" value="${answerChoices.answer2}">${answerChoices.answer2}</label>
      <label><input type="radio" name="option" value="${answerChoices.answer3}">${answerChoices.answer3}</label>
      <label><input type="radio" name="option" value="${answerChoices.answer4}">${answerChoices.answer4}</label>
      <label><input type="radio" name="option" value="${answerChoices.answer5}">${answerChoices.answer5}</label>
    </div>
    <button class="submit">Submit</button>
    <p class="result">${state.message}</p>`; 

$(".container").on("click", "button", function() {
  $(".container").html(quizView);    
});
  
$(".submit").on("click", "button", function(event) {      
  event.preventDefault();
  let userChoice = $("input[type=\"radio\"]:checked").val();
  console.log(userChoice);      
  checkAnswer(userChoice);
  console.log(state.message);
  $(".container").append(state.message);
});  

function checkAnswer(userInput) {
  if(!userInput) {
    state.message = "You need to pick one answer!";
    return state.message;
  }
  if(userInput === answerChoices.correctAnswer) {
    state.score++;
    state.message = state.correct;
  } else {
    state.message = state.wrong;
  } 
}



