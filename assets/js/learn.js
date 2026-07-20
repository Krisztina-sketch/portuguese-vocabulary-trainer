const vocabulary = [
    {
        portuguese: "Olá",
        english: "Hello",
        example: "Olá! Como está?"
    },
    {
        portuguese: "Bom dia",
        english: "Good morning",
        example: "Bom dia! Tudo bem?"
    },
    {
        portuguese: "Obrigado",
        english: "Thank you",
        example: "Obrigado pela sua ajuda."
    },
    {
        portuguese: "Por favor",
        english: "Please",
        example: "Um café, por favor."
    },
    {
        portuguese: "Até logo",
        english: "See you later",
        example: "Até logo! Tenha um bom dia."
    }
];

let currentIndex = 0;

const portugueseWord = document.getElementById("portuguese-word");
const englishWord = document.getElementById("english-word");
const exampleSentence = document.getElementById("example-sentence");
const currentNumber = document.getElementById("current-number");
const totalNumber = document.getElementById("total-number");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

function displayWord() {
    const currentWord = vocabulary[currentIndex];

    portugueseWord.textContent = currentWord.portuguese;
    englishWord.textContent = currentWord.english;
    exampleSentence.textContent = currentWord.example;
    currentNumber.textContent = currentIndex + 1;
}

nextButton.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= vocabulary.length) {
        currentIndex = 0;
    }

    displayWord();
});

previousButton.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = vocabulary.length - 1;
    }

    displayWord();
});

totalNumber.textContent = vocabulary.length;
displayWord();