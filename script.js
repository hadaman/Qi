let questions = [];
let currentIndex = 0;
let score = 0;

async function loadQuestions() {
  const res = await fetch("questions.json");
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  if (currentIndex >= questions.length) {
    document.getElementById("quiz-container").innerHTML =
      `<h2>क्विज़ समाप्त! आपका स्कोर है: ${score}/${questions.length}</h2>`;
    return;
  }

  let q = questions[currentIndex];
  document.getElementById("question").innerText = (currentIndex + 1) + ". " + q.question;

  let optionsHtml = "";
  q.options.forEach((opt, i) => {
    optionsHtml += `<button class="option" onclick="checkAnswer('${opt}', '${q.answer}')">${opt}</button><br>`;
  });

  document.getElementById("options").innerHTML = optionsHtml;
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    alert("✅ सही जवाब!");
  } else {
    alert("❌ गलत! सही उत्तर है: " + correct);
  }
  currentIndex++;
  showQuestion();
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex++;
  showQuestion();
});

loadQuestions();
