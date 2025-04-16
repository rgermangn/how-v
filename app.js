// Menu hamburguer
function toggleMenu() {    
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
  }


function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

let currentSlide = 1;

function moveToSlide(index) {
  const items = document.querySelectorAll('.carousel-item');
  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.dot');

  currentSlide = index;

  items.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });

  const offset = (index * (items[0].offsetWidth + 30)) - ((track.offsetWidth - items[0].offsetWidth) / 2);
  track.style.transform = `translateX(-${offset}px)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Permitir clique na imagem para mudar de slide
document.querySelectorAll('.carousel-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    moveToSlide(index);
  });
});


// Inicializar o primeiro como ativo
moveToSlide(currentSlide);


