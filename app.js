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

// portfolio

function toggleDetails(card) {
  card.classList.toggle('open');
}

// Validação do formulário e envio para email
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const nomeInput = document.getElementById('nome');
  const telefoneInput = document.getElementById('telefone');
  const emailInput = document.getElementById('email');
  const mensagemInput = document.getElementById('mensagem');

  const erroNome = document.getElementById('erro-nome');
  const erroTelefone = document.getElementById('erro-telefone');
  const erroEmail = document.getElementById('erro-email');
  const erroMensagem = document.getElementById('erro-mensagem');

  function validarNome() {
    if (!nomeInput.value.trim()) {
      erroNome.textContent = 'Nome é obrigatório.';
      return false;
    }
    erroNome.textContent = '';
    return true;
  }

  function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ''); // Remove tudo que não é dígito
    telefone = telefone.replace(/^0/, ''); // Remove zero inicial (DDD Brasil não começa com 0)

    if (telefone.length > 10) {
      telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (telefone.length > 5) {
      telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (telefone.length > 2) {
      telefone = telefone.replace(/^(\d\d)(\d*)/, '($1) $2');
    } else if (telefone.length > 0) {
      telefone = telefone.replace(/^(\d*)/, '($1');
    }

    return telefone;
  }

  function validarTelefone() {
    if (!telefoneInput.value.trim()) {
      erroTelefone.textContent = 'Telefone é obrigatório.';
      return false;
    }
    const telefoneFormatado = formatarTelefone(telefoneInput.value);
    telefoneInput.value = telefoneFormatado; // Atualiza o valor com a máscara

    const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!regexTelefone.test(telefoneFormatado)) {
      erroTelefone.textContent = 'Formato de telefone inválido (DDD + 8 ou 9 dígitos).';
      return false;
    }
    erroTelefone.textContent = '';
    return true;
  }

  function validarEmail() {
    if (emailInput.value.trim()) {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(emailInput.value)) {
        erroEmail.textContent = 'Formato de email inválido.';
        return false;
      }
    }
    erroEmail.textContent = '';
    return true;
  }

  function validarMensagem() {
    if (!mensagemInput.value.trim()) {
      erroMensagem.textContent = 'Mensagem é obrigatória.';
      return false;
    }
    erroMensagem.textContent = '';
    return true;
  }

  // Adiciona listeners de input para validação dinâmica
  nomeInput.addEventListener('input', validarNome);
  telefoneInput.addEventListener('input', validarTelefone);
  emailInput.addEventListener('input', validarEmail);
  mensagemInput.addEventListener('input', validarMensagem);

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const isNomeValido = validarNome();
    const isTelefoneValido = validarTelefone();
    const isEmailValido = validarEmail();
    const isMensagemValida = validarMensagem();

    if (isNomeValido && isTelefoneValido && isEmailValido && isMensagemValida) {
      // Se todos os campos estiverem válidos, envia o formulário (seu código de envio EmailJS aqui)
      const mensagemSucesso = document.getElementById("mensagem-sucesso");
      const mensagemErro = document.getElementById("mensagem-erro");

      emailjs.sendForm("service_ibi01gb", "template_k3vkc3o", this).then(
        (response) => {
          console.log("SUCCESS!", response);
          mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
          mensagemSucesso.style.display = "block";
          mensagemErro.style.display = "none";
          form.reset();
          setTimeout(() => {
            mensagemSucesso.style.display = "none";
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          mensagemErro.textContent = "Ocorreu um erro ao enviar a mensagem.";
          mensagemErro.style.display = "block";
          mensagemSucesso.style.display = "none";
        }
      );
    } else {
      // Se algum campo for inválido, exibe a mensagem de erro geral (opcional)
      const mensagemErroGeral = document.getElementById("mensagem-erro");
      mensagemErroGeral.textContent = "Por favor, preencha todos os campos obrigatórios corretamente.";
      mensagemErroGeral.style.display = "block";
      setTimeout(() => {
        mensagemErroGeral.style.display = "none";
      }, 5000);
    }
  });
});
