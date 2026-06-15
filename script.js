/* --- ЛОГІКА СЛАЙДЕРІВ (Новини та Реклама) --- */
function showSlide(sliderId, index) {
    const slider = document.getElementById(sliderId);
    if (!slider) return; // Перевірка, чи є слайдер на цій сторінці

    const slides = slider.getElementsByClassName('slide');
    let current = index;

    if (index >= slides.length) current = 0;
    if (index < 0) current = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[current].classList.add('active');
    slider.setAttribute('data-current', current);
}

function nextSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    let current = parseInt(slider.getAttribute('data-current') || 0);
    showSlide(sliderId, current + 1);
}

function prevSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    let current = parseInt(slider.getAttribute('data-current') || 0);
    showSlide(sliderId, current - 1);
}



/* --- АВТОМАТИЗАЦІЯ ПРИ ЗАВАНТАЖЕННІ --- */
document.addEventListener('DOMContentLoaded', () => {
    // Запускаємо авто-прокрутку для лівого та правого слайдерів
    if (document.getElementById('left-slider') || document.getElementById('right-slider')) {
        setInterval(() => {
            nextSlide('left-slider');
            nextSlide('right-slider');
        }, 5000); // 5 секунд
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const toastAd = document.getElementById('voteToastAd');
    const closeBtn = document.getElementById('closeToastBtn');

    if (toastAd) {
        // Завжди показуємо через 4 секунди
        setTimeout(() => {
            toastAd.classList.add('show-toast');
        }, 4000); 

        // Логіка кнопки "Закрити" (ховає тільки на поточний перегляд)
        closeBtn.addEventListener('click', () => {
            toastAd.classList.remove('show-toast');
        });
    }
});