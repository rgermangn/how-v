// Menu hamburguer
function toggleMenu() {    
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
  }

  // Carrossel
  const container = document.getElementById('carousel-container');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function moveToSlide(index) {
  const percentage = index * -33.33;
  container.style.transform = `translateX(${percentage}%)`;
  currentIndex = index;

  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}


  // Swipe touch
  let startX = 0;

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (diffX > 50 && currentIndex < 2) {
      moveToSlide(currentIndex + 1);
    } else if (diffX < -50 && currentIndex > 0) {
      moveToSlide(currentIndex - 1);
    }
  });