
let listaCampeonatos = ["Master Xangai 2025", "Master Sao Paulo 2023"];
let listaJogos = ["Valorant", "Fortnite"];



function mostrarCampeonatos() {
    let ul = document.getElementById("lista-campeonatos");
    ul.innerHTML = ""; 


    for (let i = 0; i < listaCampeonatos.length; i++) {
        ul.innerHTML += `
            <li class="list-group-item bg-secondary text-white d-flex justify-content-between align-items-center">
                ${listaCampeonatos[i]}
                <button class="btn btn-sm btn-danger" onclick="removerCampeonato(${i})">X</button>
            </li>
        `;
    }
}

function adicionarCampeonato() {
    let input = document.getElementById("novo-campeonato");
    
    listaCampeonatos.push(input.value); 
    input.value = "";                   
    mostrarCampeonatos();             
}

function removerCampeonato(posicao) {
    listaCampeonatos.splice(posicao, 1); 
    mostrarCampeonatos();               
 }
 


function mostrarJogos() {
    let ul = document.getElementById("lista-jogos");
    ul.innerHTML = "";

  
    for (let i = 0; i < listaJogos.length; i++) {
        ul.innerHTML += `
            <li class="list-group-item bg-secondary text-white d-flex justify-content-between align-items-center">
                ${listaJogos[i]}
                <button class="btn btn-sm btn-danger" onclick="removerJogo(${i})">X</button>
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




function salvarDescricao() {
    alert("Informações salvas!");
}

function logout() {
    window.location.href = "../Login/login.html";
}


mostrarCampeonatos();
mostrarJogos();