window.addEventListener('scroll', function() {
    const gearTop = document.getElementById('gearTop');
    const gearBottom = document.getElementById('gearBottom');
    const chain = document.getElementById('chainLinks');
    
    let scrollPos = window.pageYOffset;

    // 1. Обертаємо шестерні
    const rotation = scrollPos / 2;
    gearTop.style.transform = `rotate(${rotation}deg)`;
    gearBottom.style.transform = `rotate(${rotation}deg)`;

    // 2. Рухаємо фон ланцюга (імітація їзди)
    // Ми змінюємо позицію фону. Швидкість (0.5) можна підкрутити
    chain.style.backgroundPositionY = (scrollPos * 0.5) + "px";
});



