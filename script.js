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

/* --- КОПІЮВАННЯ IP З ЕФЕКТОМ ЕНЕРГІЇ --- */
function copyIP(event) {
    const ipValue = "afterlight.joinserver.xyz";
    const box = document.querySelector('.ip-box');
    const hint = document.getElementById('ip-hint');

    if (!box || !hint) return;

    // Створюємо ефект хвилі (Ripple)
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    box.appendChild(ripple);

    const rect = box.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = event.clientX - rect.left - size/2 + 'px';
    ripple.style.top = event.clientY - rect.top - size/2 + 'px';

    // Копіювання
    navigator.clipboard.writeText(ipValue).then(() => {
        box.classList.add('success');
        hint.classList.add('copied');
        const originalText = hint.innerText;
        hint.innerText = "IP СКОПІЙОВАНО!";

        setTimeout(() => {
            box.classList.remove('success');
            hint.classList.remove('copied');
            hint.innerText = originalText;
            ripple.remove();
        }, 2000);
    });
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