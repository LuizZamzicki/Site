function formatarTelefone(input) {
  let valor = input.value.replace(/\D/g, "");
  if (valor.length > 11) valor = valor.slice(0, 11);

  if (valor.length > 0) {
    valor = "(" + valor;
  }
  if (valor.length > 3) {
    valor = valor.slice(0, 3) + ") " + valor.slice(3);
  }
  if (valor.length > 10) {
    valor = valor.slice(0, 10) + "-" + valor.slice(10);
  } else if (valor.length > 9) {
    valor = valor.slice(0, 9) + "-" + valor.slice(9);
  }

  input.value = valor;
}

function validarFormulario() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    emailInput.focus();
    return false;
  }

  const telefoneInput = document.getElementById("telefone");p
  const telefone = telefoneInput.value;

  if (telefone.replace(/\D/g, "").length != 11) {
    console.log(telefone.replace(/\D/g, ""));
    console.log(telefone.replace(/\D/g, "").length);
    alert("Por favor, insira um telefone válido.");
    telefoneInput.focus();
    return false;
  }
  alert("E-mail enviado com sucesso!");
  return true;
}
