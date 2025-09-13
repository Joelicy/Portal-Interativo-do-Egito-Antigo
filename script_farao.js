
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
        question: "Qual era o título do rei do Egito Antigo?",
        answers: [
            {option: "A) Imperador", correct:false},
            {option: "B) Faraó", correct:true},
            {option: "C) Czar", correct:false},
            {option: "D) Sultão", correct:false},
        ]
    },
    {
        question: "Quem foi o faraó que mandou construir a Grande Pirâmide de Gizé?",
        answers: [
            {option: "A) Tutancâmon", correct:false},
            {option: "B) Ramsés II", correct:false},
            {option: "C) Quéops", correct:true},
            {option: "D) Akhenaton", correct:false},
        ]
    },
    {
        question: "Qual faraó é conhecido por ter começado a adoração exclusiva do deus Aton?",
        answers: [
            {option: "A) Ramsés III", correct:false},
            {option: "B) Tutancâmon", correct:false},
            {option: "C) Akhenaton", correct:true},
            {option: "D) Amenófis I", correct:false},
        ]
    },
    {
        question: "Qual faraó se tornou famoso por causa da descoberta de sua tumba intacta em 1922?",
        answers: [
            {option: "A) Ramsés II", correct:false},
            {option: "B) Akhenaton", correct:false},
            {option: "C) Tutancâmon", correct:true},
            {option: "D) Seti I", correct:false},
        ]
    },
    {
        question: "Qual era a esposa poderosa de Akhenaton, famosa por sua beleza?",
        answers: [
            {option: "A) Cleópatra", correct:false},
            {option: "B) Nefertiti", correct:true},
            {option: "C) Hatshepsut", correct:false},
            {option: "D) Anck-Su-Namun", correct:false},
        ]
    },
    {
        question: "Qual faraó foi uma mulher que governou como rei e se representava com barba postiça?",
        answers: [
            {option: "A) Nefertiti", correct:false},
            {option: "B) Hatshepsut", correct:true},
            {option: "C) Cleópatra", correct:false},
            {option: "D) Meritamun", correct:false},
        ]
    },
    {
        question: "Qual faraó teve um dos reinados mais longos da história egípcia?",
        answers: [
            {option: "A) Tutancâmon", correct:false},
            {option: "B) Ramsés II", correct:true},
            {option: "C) Djoser", correct:false},
            {option: "D) Snefru", correct:false},
        ]
    },
    {
        question: "Qual dinastia é geralmente considerada a primeira do Egito unificado?",
        answers: [
            {option: "A) 5ª", correct:false},
            {option: "B) 1ª", correct:true},
            {option: "C) 18ª", correct:false},
            {option: "D) 20ª", correct:false},
        ]
    },
    {
        question: "O que os faraós acreditavam ser em relação aos deuses?",
        answers: [
            {option: "A) Criadores dos deuses", correct:false},
            {option: "B) Maiores que os deuses", correct:false},
            {option: "C) Filhos dos deuses", correct:true},
            {option: "D) Deuses da chuva", correct:false},
        ]
    },
    {
        question: "Qual famosa rainha foi a última faraó do Egito antes da dominação romana?",
        answers: [
            {option: "A) Hatshepsut", correct:false},
            {option: "B) Cleópatra", correct:true},
            {option: "C) Nefertari", correct:false},
            {option: "D) Merneit", correct:false},
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