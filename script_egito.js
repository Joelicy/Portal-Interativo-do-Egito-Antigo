
// Efeito da barra de navegação
window.addEventListener("scroll", function() {
    let header = this.document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 50);
});

// Seleção de elementos do DOM para o quiz
const questionElement = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector("#btnReiniciar");
const btnBack = document.querySelector("#btnVoltar");

// --- Array de perguntas (AGORA DENTRO DESTE ARQUIVO) ---
const questions = [
    {
        question: "Qual rio foi essencial para o desenvolvimento da civilização egípcia?",
        answers: [
            {option: "a) Tigre", correct:false},
            {option: "b) Nilo", correct:true},
            {option: "c) Amazonas", correct:false},
            {option: "d) Danúbio", correct:false},
        ]
    },
    {
        question: "Quem foi o faraó conhecido por construir a Grande Pirâmide de Gizé?",
        answers: [
            {option: "a) Ramsés II", correct:false},
            {option: "b) Quéops", correct:true},
            {option: "c) Tutancâmon", correct:false},
            {option: "d) Akhenaton", correct:false},
        ]
    },
    {
        question: "Qual era a função principal das pirâmides?",
        answers: [
            {option: "a) Moradia dos faraós", correct:false},
            {option: "b) Túmulos dos faraós", correct:true},
            {option: "c) Locais de reuniões religiosas", correct:false},
            {option: "d) Prisões para escravos", correct:false},
        ]
    },
    {
        question: "Como os egípcios registravam sua escrita?",
        answers: [
            {option: "a) Alfabeto latino", correct:false},
            {option: "b) Códigos numéricos", correct:false},
            {option: "c) Hieróglifos", correct:true},
            {option: "d) Grego antigo", correct:false},
        ]
    },
    {
        question: "Qual destes deuses era associado ao submundo e à vida após a morte?",
        answers: [
            {option: "a) Rá", correct:false},
            {option: "b) Hórus", correct:false},
            {option: "c) Osíris", correct:true},
            {option: "d) Anúbis", correct:false},
        ]
    },
    {
        question: "Quem foi a famosa rainha egípcia conhecida por sua relação com Júlio César e Marco Antônio?",
        answers: [
            {option: "a) Nefertari", correct:false},
            {option: "b) Hatchepsut", correct:false},
            {option: "c) Cleópatra", correct:true},
            {option: "d) Isis", correct:false},
        ]
    },
    {
        question: "Qual material os egípcios usavam para fazer papel?",
        answers: [
            {option: "a) Algodão", correct:false},
            {option: "b) Couro", correct:false},
            {option: "c) Papiro", correct:true},
            {option: "d) Seda", correct:false},
        ]
    },
    {
        question: "Que estrutura é considerada uma das Sete Maravilhas do Mundo Antigo?",
        answers: [
            {option: "a) A Grande Pirâmide de Gizé", correct:true},
            {option: "b) O Coliseu", correct:false},
            {option: "c) O Farol de Alexandria", correct:false},
            {option: "d) O Mausoléu de Halicarnasso", correct:false},
        ]
    },
    {
        question: "Qual era o título do governante supremo do Egito?",
        answers: [
            {option: "a) Imperador", correct:false},
            {option: "b) Rei dos Reis", correct:false},
            {option: "c) Faraó", correct:true},
            {option: "d) Czar", correct:false},
        ]
    },
    {
        question: "Como os egípcios preservavam os corpos dos mortos?",
        answers: [
            {option: "a) Congelamento", correct:false},
            {option: "b) Incineração", correct:false},
            {option: "c) Mumificação", correct:true},
            {option: "d) Embalsamamento com vinagre", correct:false},
        ]
    },
];
// --- FIM do Array de perguntas ---

let currentIndex = 0;
let questionsCorrect = 0;

// Função para avançar para a próxima pergunta ou finalizar o quiz
function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

// Função para finalizar o quiz e exibir o resultado
function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length} perguntas!`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

// Função para carregar e exibir a pergunta atual
function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answersContainer.innerHTML = "";
    questionElement.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}">
                ${answer.option}
            </button>
        `;

        const button = div.querySelector(".answer");
        button.addEventListener("click", nextQuestion);

        answersContainer.appendChild(div);
    });
}

// Event listener para o botão "Reiniciar"
btnRestart.addEventListener("click", () => {
    currentIndex = 0;
    questionsCorrect = 0;
    content.style.display = "flex";
    contentFinish.style.display = "none";
    loadQuestion();
});

// Event listener para o botão "Voltar"
btnBack.addEventListener("click", () => {
    window.location.href = "quiz_frente.html"; // Redireciona para a página inicial
});

// Inicia o quiz carregando a primeira pergunta
loadQuestion();