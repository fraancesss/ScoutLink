function validarCadastro() {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  let senha = document.getElementById('senha').value;

  if (nome === "" || email === "" || telefone === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (!email.includes("@")) {
    alert("Email inválido!");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve conter pelo menos 6 caracteres!");
    return;
  }

  if (telefone.length < 10) {
    alert("Telefone inválido!");
    return;
  }

  alert("Cadastro realizado com sucesso!");
}


function irEntrar() {
      window.location.href = "../paginas/Login/login.html";
    }