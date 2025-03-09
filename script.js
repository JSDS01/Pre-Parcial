document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider ul");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;
    const totalImages = slider.children.length;

    function updateCarousel() {
        const offset = -index * 100; // Mueve el carrusel
        slider.style.transform = `translateX(${offset}vw)`;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % totalImages; // Si llega al final, vuelve al inicio
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + totalImages) % totalImages; // Retrocede correctamente
        updateCarousel();
    });

    // Autoavance cada 5 segundos
    let autoSlide = setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarousel();
    }, 5000);

    // Pausar el autoavance cuando el usuario use los botones
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            index = (index + 1) % totalImages;
            updateCarousel();
        }, 5000);
    }

    nextBtn.addEventListener("click", resetAutoSlide);
    prevBtn.addEventListener("click", resetAutoSlide);
});

