const menuBtn = document.getElementById('menu-btn');
const menuItems = document.getElementById('menu-items');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  // 1. Mostrar/Ocultar el menú (Overlay)
  if (isMenuOpen) {
    // Abrir menú (Mobile)
    menuItems.classList.remove('opacity-0', 'pointer-events-none');
    
    // Animación de Burguer a "X"
    line1.classList.add('rotate-45', 'translate-y-2');
    line2.classList.add('opacity-0');
    line3.classList.add('-rotate-45', '-translate-y-2');
    
  } else {
    // Cerrar menú
    menuItems.classList.add('opacity-0', 'pointer-events-none');
    
    // Animación de "X" a Burguer
    line1.classList.remove('rotate-45', 'translate-y-2');
    line2.classList.remove('opacity-0');
    line3.classList.remove('-rotate-45', '-translate-y-2');
  }
}

// Evento Click
menuBtn.addEventListener('click', toggleMenu);

// Función extra: Cerrar menú al hacer click en un link (UX vital)
function closeMenu() {
  if (window.innerWidth < 768) { // Solo en móvil
    toggleMenu();
  }
}

