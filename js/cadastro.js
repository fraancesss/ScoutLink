function validarCadastro() {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const senha = document.getElementById("senha");
  const mensagem = document.getElementById("mensagem-sucesso");

  const campos = [nome, email, telefone, senha];
  let formularioValido = true;

  campos.forEach(campo => {
    campo.classList.remove("is-valid", "is-invalid");
  });

  mensagem.classList.add("d-none");

  // Nome
  if (nome.value.trim() === "") {
    nome.classList.add("is-invalid");
    formularioValido = false;
  } else {
    nome.classList.add("is-valid");
  }
  

  // Email
  if (
    email.value.trim() === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".")
  ) {
    email.classList.add("is-invalid");
    formularioValido = false;
  } else {
    email.classList.add("is-valid");
  }

  // Telefone
  const telefoneNumeros = telefone.value.replace(/\D/g, "");

  if (telefoneNumeros.length < 10) {
    telefone.classList.add("is-invalid");
    formularioValido = false;
  } else {
    telefone.classList.add("is-valid");
  }

  // Senha
  if (senha.value.trim().length < 6) {
    senha.classList.add("is-invalid");
    formularioValido = false;
  } else {
    senha.classList.add("is-valid");
  }

  // Cadastro válido
  if (formularioValido) {

    localStorage.setItem("nomeUsuario", nome.value);
    localStorage.setItem("emailUsuario", email.value);
    localStorage.setItem("telefoneUsuario", telefone.value);
    localStorage.setItem("senhaUsuario", senha.value);

    mensagem.classList.remove("d-none");

    setTimeout(() => {
      window.location.href = "../Perfil/perfil.html";
    }, 1500);
  }
}

localStorage.setItem(
  "dataCadastro",
  new Date().toLocaleDateString("pt-BR")
);

function irEntrar() {
  window.location.href = "../../paginas/Login/login.html";
}