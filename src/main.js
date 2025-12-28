const menuBurguir = document.getElementById('burguir');
const menu = document.getElementById('menu');
const arrowMenuClose = document.getElementById('close-menu');

menuBurguir.addEventListener('click', (evento) => {
  evento.preventDefault();
  menuBurguir.classList.toggle('hidden');
  menu.classList.toggle('hidden');
  arrowMenuClose.classList.toggle('hidden'); 
}); 

arrowMenuClose.addEventListener('click', (event) => {
  event.preventDefault();
  arrowMenuClose.classList.toggle('hidden');
  menu.classList.toggle('hidden');
  menuBurguir.classList.toggle('hidden'); 
}); 
