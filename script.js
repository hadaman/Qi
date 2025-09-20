let questions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let level = 1;
let achievements = [];
let allowClick = true;
let timer;
let timeLeft = 15;

async function loadQuestions() {
  const res = await fetch("questions.json");
  questions = await res.json();
  showQuestion();
  updateProgress();
  updateScore();
  updateStreak();
}

function showQuestion() {
  if (currentIndex >= questions.length) { showFinalReport(); return; }

  let q = questions[currentIndex];
  document.getElementById("question").innerText = (currentIndex + 1) + ". " + q.question;

  let optionsHtml = "";
  q.options.forEach((opt) => { optionsHtml += `<button class="option" onclick="checkAnswer(this, '${q.answer}')">${opt
