function validarCadastro() {

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let senha = document.getElementById("senha").value;


  let nomeValido = /^[A-Za-zÀ-ú\s]+$/;

  if (!nomeValido.test(nome)) {
    alert("Nome deve conter apenas letras!");
    return;
  }


  let telefoneValido = /^[0-9]+$/;

  if (!telefoneValido.test(telefone)) {
    alert("Telefone deve conter apenas números!");
    return;
  }


  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um email válido!");
    return;
  }


  if (senha.length < 4) {
    alert("Senha muito curta!");
    return;
  }

  alert("Cadastro realizado com sucesso!");

}