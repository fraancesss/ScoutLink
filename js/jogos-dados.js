const jogosDisponiveis = [
  {
    nome: "Valorant",
    categoria: "fps",
    imagem: "../../img/jogos/vava.png", 
    descricao: "FPS tático competitivo da Riot Games."
  },
  {
    nome: "Fortnite",
    categoria: "battle-royale",
    imagem: "../../img/jogos/fort.png",
    descricao: "Battle Royale com construção e competição."
  },
  {
    nome: "CS2",
    categoria: "fps",
    imagem: "../../img/jogos/cs.png",
    descricao: "Counter-Strike 2, um dos maiores jogos competitivos do mundo."
  },
  {
    nome: "League of Legends",
    categoria: "moba",
    imagem: "../../img/jogos/lol.png",
    descricao: "MOBA competitivo da Riot Games."
  },
  {
    nome: "Rocket League",
    categoria: "esportes",
    imagem: "../../img/jogos/rock.png",
    descricao: "Futebol com carros em partidas competitivas."
  },
  {
    nome: "Overwatch 2",
    categoria: "hero-shooter",
    imagem: "../../img/jogos/over.png",
    descricao: "Hero shooter em equipes."
  }
];


let categoriaAtual = "todos";


function renderizarJogos(listaDeJogos) {
  const container = document.getElementById("container-jogos");
  container.innerHTML = ""; 

  if (listaDeJogos.length === 0) {
    container.innerHTML = `<div class="col-12 text-center text-muted py-4">Nenhum jogo encontrado.</div>`;
    return;
  }

  
  listaDeJogos.forEach(jogo => {
    container.innerHTML += `
      <div class="col">
        <div class="card-jogo-container text-center">
          <div class="card-jogo-imagem-box">
            <img src="${jogo.imagem}" class="img-fluid" alt="${jogo.nome}" onerror="this.src='https://placehold.co/150x200/404040/ffffff?text=${jogo.nome}'">
          </div>
          <div class="card-jogo-titulo">
            ${jogo.nome}
          </div>
        </div>
      </div>
    `;
  });
}


function filtrarJogos() {
  const textoBusca = document.getElementById("campo-busca").value.toLowerCase();

  const jogosFiltrados = jogosDisponiveis.filter(jogo => {
    
    const bateTexto = jogo.nome.toLowerCase().includes(textoBusca);
    
    const bateCategoria = (categoriaAtual === "todos" || jogo.categoria === categoriaAtual);

    return bateTexto && bateCategoria;
  });

  renderizarJogos(jogosFiltrados);
}


function filtrarPorCategoria(categoria, botaoClicado) {
  categoriaAtual = categoria;

  
  const botoes = document.querySelectorAll(".btn-group .btn");
  botoes.forEach(btn => btn.classList.remove("active"));


  botaoClicado.classList.add("active");

 
  filtrarJogos();
}


renderizarJogos(jogosDisponiveis);