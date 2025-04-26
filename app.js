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
    
    // Melhor prática: carregar as credenciais de um arquivo .env ou variáveis de ambiente
    emailjs.sendForm('service_778o4kx', 'template_k3vkc3o', this)
      .then(function(response) {
        console.log('Success:', response);
        alert('Seu email foi enviado!');
        form.reset(); // Limpar o formulário após envio bem-sucedido
      }, function(error) {
        console.error('Error:', error);
        alert('Ops... Algo deu errado. Por favor, tente novamente.');
      });
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   const contactForm = document.querySelector('.contact_form form');
//
//   if (contactForm) {
//     contactForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//
//       emailjs.sendForm('service_778o4kx', 'template_k3vkc3o', this, 'IRTkKtAAwJi9o-y5x')
//         .then((result) => {
//           console.log('Sucesso:', result.text);
//           alert('Mensagem enviada com sucesso!');
//           this.reset();
//         }, (error) => {
//           console.error('Erro:', error.text);
//           alert('Houve um erro ao enviar a mensagem.');
//         });
//     });
//   } else {
//     console.log('Formulário de contato não encontrado.');
//   }
// });



// portfolio

function toggleDetails(card) {
  card.classList.toggle('open');
}
