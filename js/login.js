
    function validarLogin() {
  let email = document.querySelector('input[type="email"]').value;
  let senha = document.querySelector('input[type="password"]').value;

  if(email === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Login realizado!");
}

function irCadastrar() {
      window.location.href = "../../paginas/Cadastro/cadastro.html";
    }
    