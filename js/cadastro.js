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


  if (nome.value.trim() === "") {
    nome.classList.add("is-invalid");
    formularioValido = false;
  } else {
    nome.classList.add("is-valid");
  }


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


  const telefoneNumeros = telefone.value.replace(/\D/g, "");

  if (telefoneNumeros.length < 10) {
    telefone.classList.add("is-invalid");
    formularioValido = false;
  } else {
    telefone.classList.add("is-valid");
  }


  if (senha.value.trim().length < 6) {
    senha.classList.add("is-invalid");
    formularioValido = false;
  } else {
    senha.classList.add("is-valid");
  }


  if (formularioValido) {
    mensagem.classList.remove("d-none");

    setTimeout(() => {
      nome.value = "";
      email.value = "";
      telefone.value = "";
      senha.value = "";

      campos.forEach(campo => {
        campo.classList.remove("is-valid");
      });
    }, 4000);
  }
}

function irEntrar() {
  window.location.href = "../../paginas/Login/login.html";
}

if (formularioValido) {

 localStorage.setItem("nomeUsuario", nome);
 localStorage.setItem("emailUsuario", email);
localStorage.setItem("telefoneUsuario", telefone);

window.location.href = "../Perfil/perfil.html" 
}