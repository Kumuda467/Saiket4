const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Hyper Text Manipulation Language"
    ],
    answer: "Hyper Text Markup Language"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const resultBox = document.getElementById("result-box");

function loadQuestion() {
  questionEl.innerText = questions[current].question;
  optionsEl.innerHTML = "";

  questions[current].options.forEach(option => {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = option;

    radio.onclick = () => {
      nextBtn.disabled = false;
    };

    li.appendChild(radio);
    li.appendChild(document.createTextNode(option));
    optionsEl.appendChild(li);
  });

  nextBtn.disabled = true;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected && selected.value === questions[current].answer) {
    score++;
  }

  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").style.display = "none";
    resultBox.style.display = "block";
  }
});

loadQuestion();
