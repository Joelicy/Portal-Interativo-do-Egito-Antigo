
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
        question: "Qual é o nome da necrópole onde estão as três grandes pirâmides?",
        answers: [
            {option: "A) Saqqara", correct:false},
            {option: "B) Luxor", correct:false},
            {option: "C) Vale dos Reis", correct:false},
            {option: "D) Gizé", correct:true},
        ]
    },
    {
        question: "Qual pirâmide é considerada a maior do Egito?",
        answers: [
            {option: "A) Pirâmide de Miquerinos", correct:false},
            {option: "B) Pirâmide de Djoser", correct:false},
            {option: "C) Pirâmide Vermelha", correct:false},
            {option: "D) Pirâmide de Quéops", correct:true},
        ]
    },
    {
        question: "Qual estrutura tem corpo de leão e cabeça humana e guarda as pirâmides?",
        answers: [
            {option: "A) Templo de Hórus", correct:false},
            {option: "B) Obelisco de Karnak", correct:false},
            {option: "C) Colosso de Ramsés", correct:false},
            {option: "D) Esfinge de Gizé", correct:true},
        ]
    },
    {
        question: "Onde estão localizadas muitas tumbas de faraós, como a de Tutancâmon?",
        answers: [
            {option: "A) Alexandria", correct:false},
            {option: "B) Vale dos Reis", correct:true},
            {option: "C) Abul-Simbel", correct:false},
            {option: "D) Saqqara", correct:false},
        ]
    },
    {
        question: "Qual cidade abrigava o grande Templo de Karnak?",
        answers: [
            {option: "A) Cairo", correct:false},
            {option: "B) Luxor", correct:true},
            {option: "C) Tebas", correct:false},
            {option: "D) Gizé", correct:false},
        ]
    },
    {
        question: "Qual complexo funerário abriga a famosa pirâmide em degraus?",
        answers: [
            {option: "A) Gizé", correct:false},
            {option: "B) Luxor", correct:false},
            {option: "C) Saqqara", correct:true},
            {option: "D) Karnak", correct:false},
        ]
    },
    {
        question: "Qual templo foi esculpido na rocha pelo faraó Ramsés II?",
        answers: [
            {option: "A) Templo de Ísis", correct:false},
            {option: "B) Templo de Karnak", correct:false},
            {option: "C) Templo de Hórus", correct:false},
            {option: "D) Templo de Abu Simbel", correct:true},
        ]
    },
    {
        question: "Qual cidade abrigava o famoso Farol, uma das Sete Maravilhas do Mundo Antigo?",
        answers: [
            {option: "A) Gizé", correct:false},
            {option: "B) Tebas", correct:false},
            {option: "C) Alexandria", correct:true},
            {option: "D) Luxor", correct:false},
        ]
    },
    {
        question: "Qual era o principal rio que influenciou o desenvolvimento do Egito Antigo?",
        answers: [
            {option: "A) Nilo", correct:true},
            {option: "B) Jordão", correct:false},
            {option: "C) Eufrates", correct:false},
            {option: "D) Tigre", correct:false},
        ]
    },
    {
        question: "Que templo foi dedicado à deusa Ísis e localizado na Ilha de Philae?",
        answers: [
            {option: "A) Templo de Karnak", correct:false},
            {option: "B) Templo de Luxor", correct:false},
            {option: "C) Templo de Philae", correct:true},
            {option: "D) Templo de Abu Simbel", correct:false},
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