//efeito eda barra de navegação
window.addEventListener("scroll",function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 300)
})

//efeito de pre-carregamento
let loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
    this.setTimeout(function(){
        loader.style.display = 'none';
    }, 3600);
})

//efeito do button h2
let btn =document.querySelector(".button");

btn.onmousemove = function(e){
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px')
    btn.style.setProperty('--eixoY', y + 'px')
}


// Seleciona o botão, o trilho (track) e os itens
const nextButton = document.getElementById('nextButton');
const sliderTrack = document.querySelector('.banner .slider-track');
const sliderItems = document.querySelectorAll('.slider-track .slider-item');

const totalItems = sliderItems.length;
let currentItemIndex = 0; // Começa no primeiro item (índice 0)

// Adiciona um ouvinte de evento para o clique no botão
nextButton.addEventListener('click', () => {
    // Calcula o índice do próximo item, voltando ao início se necessário
    currentItemIndex = (currentItemIndex + 1) % totalItems;

    // Calcula o deslocamento necessário
    // Multiplica o índice atual pela largura de um item (100%)
    const offset = currentItemIndex * -100; // Negativo para mover para a esquerda

    // Aplica a transformação CSS para mover o trilho (track)
    sliderTrack.style.transform = `translateX(${offset}%)`;
});

// Opcional: Define a posição inicial explicitam