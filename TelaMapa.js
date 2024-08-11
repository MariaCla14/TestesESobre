document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    let currentIndex = 0;

    function updateCarousel() {
        const newTransformValue = `translateX(-${currentIndex * 100}%)`;
        document.querySelector('.carousel-inner').style.transform = newTransformValue;
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('selected', index === currentIndex);
        });
        const description = slides[currentIndex].querySelector('.description').textContent;
        slides[currentIndex].querySelector('.description').textContent = description;
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    thumbnails.forEach((thumb) => {
        thumb.addEventListener('click', () => {
            currentIndex = parseInt(thumb.dataset.index);
            updateCarousel();
        });
    });

    updateCarousel(); 
});
