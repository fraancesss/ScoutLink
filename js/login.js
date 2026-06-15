function validarLogin() {

  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const mensagem = document.getElementById("mensagem-sucesso");

  let formularioValido = true;

  email.classList.remove("is-invalid", "is-valid");
  senha.classList.remove("is-invalid", "is-valid");
  mensagem.classList.add("d-none");

  if (email.value.trim() === "") {
    email.classList.add("is-invalid");
    formularioValido = false;
  } else {
    email.classList.add("is-valid");
  }

  if (senha.value.trim() === "") {
    senha.classList.add("is-invalid");
    formularioValido = false;
  } else {
    senha.classList.add("is-valid");
  }

  if (!formularioValido) {
    return;
  }

  // Dados salvos no cadastro
  const emailSalvo = localStorage.getItem("emailUsuario");
  const senhaSalva = localStorage.getItem("senhaUsuario");

  // Verifica login
  if (email.value !== emailSalvo || senha.value !== senhaSalva) {

    email.classList.remove("is-valid");
    senha.classList.remove("is-valid");

    email.classList.add("is-invalid");
    senha.classList.add("is-invalid");

    alert("Email ou senha incorretos!");
    return;
  }

  mensagem.classList.remove("d-none");

  setTimeout(() => {
    window.location.href = "../Perfil/perfil.html";
  }, 1500);
}

function irCadastrar() {
  window.location.href = "../../paginas/Cadastro/cadastro.html";
}