
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
        question: "Onde o Rio Nilo está localizado?",
        answers: [
            {option: "A) América do Sul", correct:false},
            {option: "B) África", correct:true},
            {option: "C) Europa", correct:false},
            {option: "D) Ásia", correct:false},
        ]
    },
    {
        question: "O Rio Nilo é conhecido por ser:",
        answers: [
            {option: "A) O rio mais largo do mundo", correct:false},
            {option: "B) O mais profundo do mundo", correct:false},
            {option: "C) O mais poluído do mundo", correct:false},
            {option: "D) Um dos rios mais longos do mundo", correct:true},
        ]
    },
    {
        question: "O Rio Nilo foi muito importante para qual civilização antiga?",
        answers: [
            {option: "A) Grega", correct:false},
            {option: "B) Romana", correct:false},
            {option: "C) Egípcia", correct:true},
            {option: "D) Chinesa ", correct:false},
        ]
    },
    {
        question: "Qual é a principal utilidade do Rio Nilo para os egípcios antigos?",
        answers: [
            {option: "A) Praticar esportes", correct:false},
            {option: "B) Fornecer eletricidade", correct:false},
            {option: "C) Transporte e irrigação", correct:true},
            {option: "D) Pescar baleias", correct:false},
        ]
    },
    {
        question: "Em qual mar o Rio Nilo deságua?",
        answers: [
            {option: "A) Mar Vermelho", correct:false},
            {option: "B) Mar Negro", correct:false},
            {option: "C) Mar Mediterrâneo", correct:true},
            {option: "D) Mar Cáspio", correct:false},
        ]
    },
    {
        question: "Qual é uma das principais cidades cortadas pelo Rio Nilo?",
        answers: [
            {option: "A) Paris", correct:false},
            {option: "B) Londres", correct:false},
            {option: "C) Cairo", correct:true},
            {option: "D) Tóquio", correct:false},
        ]
    },
    {
        question: "Qual é uma das fontes do Rio Nilo?",
        answers: [
            {option: "A) Lago Vitória", correct:true},
            {option: "B) Lago Baikal", correct:false},
            {option: "C) Lago Titicaca", correct:false},
            {option: "D) Lago Ness", correct:false},
        ]
    },
    {
        question: "O Rio Nilo é formado principalmente por quantos afluentes principais?",
        answers: [
            {option: "A) 1", correct:false},
            {option: "B) 2", correct:true},
            {option: "C) 3", correct:false},
            {option: "D) 4", correct:false},
        ]
    },
    {
        question: "Em que direção o Rio Nilo corre?",
        answers: [
            {option: "A) Sul para norte", correct:true},
            {option: "B) Norte para sul", correct:false},
            {option: "C) Leste para oeste", correct:false},
            {option: "D) Oeste para leste", correct:false},
        ]
    },
    {
        question: "O que os egípcios antigos construíam perto do Rio Nilo para aproveitar sua cheia?",
        answers: [
            {option: "A) Castelos", correct:false},
            {option: "B) Campos de golfe", correct:false},
            {option: "C) Represas e canais de irrigação", correct:true},
            {option: "D) Arranha-céus", correct:false},
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