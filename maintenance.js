(function() {
    // 1. Створюємо стилі (CSS) прямо в JS
    const style = document.createElement('style');
    style.innerHTML = `
        .maintenance-lock {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: #0a0a0a !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 2147483647 !important;
            backdrop-filter: blur(20px) !important;
            pointer-events: auto !important;
            color: #fff !important;
            font-family: 'Roboto', sans-serif !important;
        }
        .maintenance-content {
            text-align: center;
            padding: 40px;
            border-left: 6px solid #f0a500; /* --accent-brass */
            background: rgba(20, 20, 20, 0.95);
            border-radius: 12px;
            box-shadow: 0 0 50px rgba(240, 165, 0, 0.3);
            max-width: 500px;
            width: 90%;
        }
        .maintenance-gear {
            font-size: 5rem;
            animation: gear-spin 4s infinite linear;
            display: inline-block;
            margin-bottom: 20px;
        }
        @keyframes gear-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .maintenance-content h1 {
            font-family: 'Russo One', sans-serif !important;
            color: #f0a500 !important; /* --accent-brass */
            margin: 0 0 15px 0;
            text-transform: uppercase;
        }
        .maintenance-status {
            margin-top: 20px;
            font-family: 'Russo One', sans-serif;
            font-size: 0.8rem;
            color: #555;
        }
        .maintenance-status span { color: #ff4444; }
        body.maintenance-active { overflow: hidden !important; height: 100vh !important; }
    `;
    document.head.appendChild(style);

    // 2. Функція для створення та захисту вікна
    function enforceMaintenance() {
        let lock = document.getElementById('maintenance-lock');
        
        if (!lock) {
            // Створюємо HTML, якщо його немає
            lock = document.createElement('div');
            lock.id = 'maintenance-lock';
            lock.className = 'maintenance-lock';
            lock.innerHTML = `
                <div class="maintenance-content">
                    <div class="maintenance-gear">⚙️</div>
                    <h1>ТЕХНІЧНІ РОБОТИ</h1>
                    <p>Наразі ми проводимо калібрування механізмів. <br> Сайт AfterLight тимчасово недоступний.</p>
                    <div class="maintenance-status">СТАТУС: <span>MOD MAINTENANCE</span></div>
                </div>
            `;
            document.body.appendChild(lock);
        }

        // Блокуємо скрол
        document.body.classList.add('maintenance-active');
        document.body.style.overflow = 'hidden';
    }

    // 3. Запускаємо перевірку кожні 500 мс (захист від видалення через консоль)
    setInterval(enforceMaintenance, 500);
    
    // Блокуємо праву кнопку миші (щоб не відкривали "Дослідити елемент")
    document.addEventListener('contextmenu', e => e.preventDefault());
})();