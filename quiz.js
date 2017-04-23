const state = {
    currentQuestion: 0,
    quizView: "",
    choices: ""
};

let quizView = "<div class=\"status\"><h3 class=\"current\">Question 1 of 5</h3><h3 class=\"score\">Score: 0</h3>"+
    "</div><h1 class=\"question\">This is the question</h1>" +
    `<div class="answers">
      <label><input type="radio" name"option" value="1">Choice 1</label>
      <label><input type="radio" name"option" value="2">Choice 2</label>
      <label><input type="radio" name"option" value="3">Choice 3</label>
      <label><input type="radio" name"option" value="4">Choice 4</label>
      <label><input type="radio" name"option" value="5">Choice 5</label>
    </div>` +
    "<button class=\"submit\">Submit</button>";

$(function() {
  $(".container").on("click", "button", function() {
    $(".container").html(quizView);
  });
});

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


