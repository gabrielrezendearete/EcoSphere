/* Botões */
document.querySelectorAll(".botao-contato").forEach(botao => {
  botao.addEventListener("click", function () {
    document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
  });
});