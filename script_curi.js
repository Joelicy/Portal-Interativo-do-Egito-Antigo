// Efeito da barra de navegação
window.addEventListener("scroll", function() {
    let header = this.document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 50);
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os containers de slider
    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach(container => {
        const sliderTrack = container.querySelector('.slider-track');
        const slides = container.querySelectorAll('.product-slide');
        const prevButton = container.querySelector('.slider-button.prev');
        const nextButton = container.querySelector('.slider-button.next');

        let currentIndex = 0;
        let slidesPerPage = calculateSlidesPerPage(); // Quantos slides visíveis para ESTE slider

        // Função para calcular quantos slides devem ser exibidos por página
        function calculateSlidesPerPage() {
            if (window.innerWidth <= 480) {
                return 1;
            } else if (window.innerWidth <= 768) {
                return 2;
            } else {
                return 3;
            }
        }

        // Atualiza slidesPerPage ao redimensionar a janela
        window.addEventListener('resize', () => {
            slidesPerPage = calculateSlidesPerPage();
            // Garante que o currentIndex não exceda o limite após redimensionar
            if (currentIndex > (slides.length - slidesPerPage)) {
                currentIndex = slides.length - slidesPerPage;
            }
            if (currentIndex < 0) { // Garante que não vá para um índice negativo
                currentIndex = 0;
            }
            updateSliderPosition(); // Recalcula a posição ao redimensionar
        });

        function updateSliderPosition() {
            // Verifica se há slides antes de tentar acessar slides[0]
            if (slides.length === 0) {
                console.warn('Nenhum slide encontrado neste container:', container);
                return;
            }

            const slideWidth = slides[0].offsetWidth; // Largura de um slide
            const offset = -currentIndex * slideWidth;
            sliderTrack.style.transform = `translateX(${offset}px)`;

            // Remova a lógica de desabilitar os botões, já que eles sempre estarão ativos no modo loop.
            // prevButton.disabled = currentIndex === 0;
            // nextButton.disabled = currentIndex >= (slides.length - slidesPerPage);
        }

        prevButton.addEventListener('click', () => {
            // Se estiver no primeiro slide, vai para o último grupo de slides
            if (currentIndex === 0) {
                currentIndex = slides.length - slidesPerPage;
            } else {
                currentIndex--;
            }
            updateSliderPosition();
        });

        nextButton.addEventListener('click', () => {
            // Se estiver no último grupo de slides, volta para o primeiro
            if (currentIndex >= (slides.length - slidesPerPage)) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateSliderPosition();
        });

        // Inicializa a posição do slider
        updateSliderPosition();
    });
});