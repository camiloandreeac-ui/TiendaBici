document.addEventListener('DOMContentLoaded', () => {
    console.log('Trailhead MTB Hub - Sitio Iniciado');

    // Menú Móvil Simple
    // Menú Móvil
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', () => {
            // Simple toggle for now
            const isHidden = mainNav.style.display === 'none' || getComputedStyle(mainNav).display === 'none';
            if (isHidden) {
                mainNav.style.display = 'flex';
                mainNav.style.flexDirection = 'column';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '70px';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.background = '#121212';
                mainNav.style.padding = '20px';
                mainNav.style.zIndex = '999';
            } else {
                mainNav.style.display = ''; // Reset to css default (none in mobile)
            }
        });
    }

    // Efecto Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Funciones Globales para Interacciones
function updateQty(btn, change) {
    const container = btn.parentElement;
    const input = container.querySelector('.qty-input');
    let currentValue = parseInt(input.value);

    const newValue = currentValue + change;

    if (newValue >= 1) {
        input.value = newValue;
    }
}

function addToCart() {
    // Simulación
    const btn = document.querySelector('.btn-primary');
    const originalText = btn.innerText;

    btn.innerText = "¡AÑADIDO!";
    btn.style.backgroundColor = "#4CAF50"; // Green

    setTimeout(() => {
        alert("Producto añadido al carrito. (Lógica de backend pendiente)");
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
    }, 500);
}
