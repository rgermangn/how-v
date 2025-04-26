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
    
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    // Coletando dados do formulário
    const data = {
      service_id: 'service_mw071o4',
      template_id: 'template_k3vkc3o',
      user_id: 'IRTkKtAAwJi9o-y5x',
      template_params: {
        'nome': document.getElementById('nome').value,
        'telefone': document.getElementById('telefone').value,
        'email': document.getElementById('email').value || "Não informado",
        'assunto': document.getElementById('assunto').value,
        'mensagem': document.getElementById('mensagem').value
      }
    };
    
    // Enviando o email usando a API do EmailJS
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        form.reset();
      } else {
        throw new Error('Falha no envio');
      }
    })
    .catch(error => {
      alert('Erro ao enviar mensagem: ' + error.message);
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
