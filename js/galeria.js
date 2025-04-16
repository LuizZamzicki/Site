function abrirImagem(img) {
  const modal = document.getElementById("modalImagem");
  const imagemExpandida = document.getElementById("imagemExpandida");
  imagemExpandida.src = img.src;
  modal.style.display = "flex";
}

function fecharImagem() {
  document.getElementById("modalImagem").style.display = "none";
}
