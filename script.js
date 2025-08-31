document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.testimonials-carousel');
    const leftBtn = document.querySelector('.nav-btn-left');
    const rightBtn = document.querySelector('.nav-btn-right');

    const cardWidth = 300; // Largura do card + margem (ajuste se necessário)
    let scrollAmount = 0;

    // Função para rolagem automática
    function autoScroll() {
        scrollAmount += cardWidth;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0; // Volta ao início quando chega ao fim
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Rolagem manual com os botões
    leftBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });

    // Inicia a rolagem automática a cada 5 segundos
    setInterval(autoScroll, 5000);
});