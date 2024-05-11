var currentQuestion = 0;

function showQuestion(questionIndex) {
  var questions = document.getElementsByClassName("question");
  for (var i = 0; i < questions.length; i++) {
    questions[i].style.display = "none";
  }
  questions[questionIndex].style.display = "block";

  var counter = document.getElementsByClassName("counter")[0];
  counter.innerHTML = (questionIndex + 1) + " / " + questions.length;
}

function nextQuestion() {
  var questions = document.getElementsByClassName("question");
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}