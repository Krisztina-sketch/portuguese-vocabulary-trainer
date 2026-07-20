const questions = [
    {
        question: "Olá",
        answers: ["Hello", "Goodbye", "Please", "Thanks"],
        correct: 0
    },
    {
        question: "Obrigado",
        answers: ["Sorry", "Thank you", "Coffee", "Water"],
        correct: 1
    },
    {
        question: "Bom dia",
        answers: ["Good night", "Good morning", "See you", "Welcome"],
        correct: 1
    },
    {
        question: "Por favor",
        answers: ["Please", "Help", "Friend", "Book"],
        correct: 0
    },
    {
        question: "Até logo",
        answers: ["See you later", "Hello", "Chair", "Good night"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionWord = document.getElementById("question-word");
const answerOptions = document.getElementById("answer-options");
const feedback = document.getElementById("feedback");
const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");
const nextButton = document.getElementById("next-question-button");

totalQuestions.textContent = questions.length;

function showQuestion() {
    feedback.textContent = "";
    nextButton.classList.add("d-none");

    const question = questions[currentQuestion];

    questionWord.textContent = question.question;
    questionNumber.textContent = currentQuestion + 1;
    answerOptions.innerHTML = "";

    question.answers.forEach(function (answer, index) {
        const button = document.createElement("button");

        button.className = "btn btn-outline-primary";
        button.textContent = answer;

        button.addEventListener("click", function () {
            checkAnswer(index);
        });

        answerOptions.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];
    const answerButtons = answerOptions.querySelectorAll("button");

    answerButtons.forEach(function (button) {
        button.disabled = true;
    });

    if (selectedAnswer === question.correct) {
        score = score + 1;

        feedback.textContent = "✅ Correct!";
        feedback.className = "text-success fw-bold mt-3";
    } else {
        const correctAnswer = question.answers[question.correct];

        feedback.textContent = `❌ Wrong answer. The correct answer is ${correctAnswer}.`;
        feedback.className = "text-danger fw-bold mt-3";
    }

    nextButton.classList.remove("d-none");
}

function showResults() {
    questionWord.textContent = "Quiz complete!";
    questionNumber.textContent = questions.length;

    answerOptions.innerHTML = "";

    feedback.textContent = `You scored ${score} out of ${questions.length}.`;
    feedback.className = "text-success fw-bold mt-3";

    nextButton.textContent = "Try Again";
    nextButton.classList.remove("d-none");

    localStorage.setItem("lastQuizScore", score);

    const savedBestScore = Number(
        localStorage.getItem("bestQuizScore")
    ) || 0;

    if (score > savedBestScore) {
        localStorage.setItem("bestQuizScore", score);
    }
}

nextButton.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion = currentQuestion + 1;
        showQuestion();
    } else if (nextButton.textContent === "Try Again") {
        currentQuestion = 0;
        score = 0;
        nextButton.textContent = "Next Question";
        showQuestion();
    } else {
        showResults();
    }
});

showQuestion();