/* Animações */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
const elements = document.querySelectorAll('.fade-in-element');
elements.forEach(el => observer.observe(el));

/* Botões */
document.querySelectorAll(".botao-contato").forEach(botao => {
  botao.addEventListener("click", function () {
    document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
  });
});

/* Mensagem de Confirmação */
const form = document.getElementById('form');
    const confirmationMessage = document.getElementById('confirmacao');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      confirmationMessage.style.display = 'block';
      form.reset();
      setTimeout(() => {
        confirmationMessage.style.display = 'none';
      }, 5000);
    });