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

// Integração do EmailJS para o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact_form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = {
      nome: document.getElementById('nome').value,
      telefone: document.getElementById('telefone').value,
      email: document.getElementById('email').value || "Não informado",
      assunto: document.getElementById('assunto').value,
      mensagem: document.getElementById('mensagem').value
    };
    
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      alert('Mensagem enviada com sucesso!');
      form.reset();
    })
    .catch(error => {
      alert('Erro ao enviar mensagem');
      console.error('Error:', error);
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar';
    });
  });
});


// portfolio

function toggleDetails(card) {
  card.classList.toggle('open');
}
