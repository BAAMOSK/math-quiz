//Question constructor
function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
//Validate Answer
Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};
//STATE
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
//Current Question
Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};
//Check for end
Quiz.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};

//This is nextQuestion function() {};
//Next Question -- Increment Score
//answer = user's choice
Quiz.prototype.guess = function(answer) {
  this.questionIndex++;
  if(this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
};
//QUIZ QUESTIONS
let questions = [
  new Question("What is my favorite color?", ["blue","green","purple","orange","flapjack"],"blue"),
  new Question("What is 4 + 3 =", ["1","2","3","4","5"],"5"),
  new Question("What is 13 + 13 =", ["21","42","26","84","88"],"26")
];

//Makes the quiz object
let quiz = new Quiz(questions);

//End of Quiz Result
function showScores() {
  let gameOver = `<h1>Result</h1>`;
  gameOver += `<h2 id="score">Your score is: ${quiz.score}</h2>`;
  $(".container").html(gameOver);
}

//Validate answer then go to next question
//Run nextQuestion Function
//--PURPOSE--
//Take SUBMIT button then make something happen
// function guess(usersChoice, correctAnswer) {
  
//   $('.submit').on('click', function() {
//     let choice = $('input[type="radio"]:checked').val();
//     console.log(choice);
//     //1 -- validate answer and increment questionIndex
//     quiz.guess(guess);
//     //populate shows next question
//     //2 -- then run this populate();
//   });
// };

//RENDER QUESTION
function populate() {
  let element = $("#question");

  if(quiz.isEnded()) {
    showScores();
  } else {
    //show question
    element.text(quiz.getQuestionIndex().text);
    //show choices
    let choices = quiz.getQuestionIndex().choices;
    //console.log(choices);
    for(let i = 0; i < choices.length; i++) {
      let element = `answer${i}`;
      $(`#${element}`).text(choices[i]);
      //guess("btn" + i, choices[i]);      
    }
  }  
}
$('.submit').on('click', function() {
  let index = Number($('input[type="radio"]:checked').val());
  // console.log(index);
  // console.log(typeof index);
  let userChoice = quiz.getQuestionIndex().choices[index];
  // console.log(typeof userChoice);
  //console.log(userChoice);
  let correctAnswer = quiz.getQuestionIndex().answer;
  console.log(userChoice);
  console.log(correctAnswer);
  //validate question
  function(userChoice, correctAnswer) {
    if(userChoice === correctAnswer) {
      quiz.score++;
      quiz.questionIndex++;
      populate();
    } else {
      console.log('wrong answer');
    }  
  }
  //console.log(quiz.guess);
});
//runs the render function
populate();
