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

  
  if (formularioValido) {
    mensagem.classList.remove("d-none");
  }
}

function irCadastrar() {
  window.location.href = "../../paginas/Cadastro/cadastro.html";
}