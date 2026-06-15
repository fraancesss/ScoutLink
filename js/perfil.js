// Listas iniciais
let listaCampeonatos = ["Master Shanghai 2025", "Master São Paulo 2023"];
let listaJogos = ["Valorant", "Fortnite"];

// ========================
// CARREGAR DADOS DO USUÁRIO
// ========================

window.onload = function () {

    let nome = localStorage.getItem("nomeUsuario");
    let email = localStorage.getItem("emailUsuario");
    let telefone = localStorage.getItem("telefoneUsuario");
    let descricao = localStorage.getItem("descricaoUsuario");

    if (nome) {
        document.getElementById("nome-usuario").innerText = nome;
    }

    if (email) {
        document.getElementById("email-usuario").innerText = email;
    }

    if (telefone) {
        document.getElementById("telefone-usuario").innerText = telefone;
    }

    if (descricao) {
        document.getElementById("descricao").value = descricao;
    }

    mostrarCampeonatos();
    mostrarJogos();
};

// ========================
// DESCRIÇÃO
// ========================

function salvarDescricao() {

    let descricao = document.getElementById("descricao").value;

    localStorage.setItem("descricaoUsuario", descricao);

    alert("Informações salvas!");
}

// ========================
// CAMPEONATOS
// ========================

function mostrarCampeonatos() {

    let ul = document.getElementById("lista-campeonatos");

    ul.innerHTML = "";

    for (let i = 0; i < listaCampeonatos.length; i++) {

        ul.innerHTML += `
            <li class="list-group-item bg-secondary text-white d-flex justify-content-between align-items-center">
                ${listaCampeonatos[i]}
                <button class="btn btn-sm btn-danger" onclick="removerCampeonato(${i})">
                    X
                </button>
            </li>
        `;
    }
}

function adicionarCampeonato() {

    let input = document.getElementById("novo-campeonato");

    if (input.value.trim() == "") {
        return;
    }

    listaCampeonatos.push(input.value);

    input.value = "";

    mostrarCampeonatos();
}

function removerCampeonato(posicao) {

    listaCampeonatos.splice(posicao, 1);

    mostrarCampeonatos();
}

// ========================
// JOGOS
// ========================

function mostrarJogos() {

    let ul = document.getElementById("lista-jogos");

    ul.innerHTML = "";

    for (let i = 0; i < listaJogos.length; i++) {

        ul.innerHTML += `
            <li class="list-group-item bg-secondary text-white d-flex justify-content-between align-items-center">
                ${listaJogos[i]}
                <button class="btn btn-sm btn-danger" onclick="removerJogo(${i})">
                    X
                </button>
            </li>
        `;
    }
}

function adicionarJogo() {

    let select = document.getElementById("novo-jogo");

    listaJogos.push(select.value);

    mostrarJogos();
}

function removerJogo(posicao) {

    listaJogos.splice(posicao, 1);

    mostrarJogos();
}

// ========================
// LOGOUT
// ========================

function logout() {

    window.location.href = "../Login/login.html";
}

function calcularRanking() {

    let vitorias =
        Number(document.getElementById("vitorias").value);

    let campeonatos =
        Number(document.getElementById("campeonatos-ganhos").value);

    let pontos =
        (vitorias * 10) +
        (campeonatos * 50);

    document.getElementById("resultado-ranking").innerHTML =
        "Pontuação do jogador: " + pontos;
}