// Array com os dados das organizações
const organizacoes = [
  {
    id: "FURIA",
    nome: "FURIA",
    imagem: "../../img/organizacoes/fufu.png",
    vagas: ["CS GO", "Fortnite", "Valorant"]
  },
  {
    id: "LOUD",
    nome: "LOUD",
    imagem: "../../img/organizacoes/loud.png",
    vagas: ["CS GO", "Fortnite", "Valorant"]
  },
  {
    id: "KRU",
    nome: "KRÜ",
    imagem: "../../img/organizacoes/kru.png",
    vagas: ["CS GO", "Fortnite", "Valorant"]
  },
  {
    id: "MIBR",
    nome: "MIBR",
    imagem: "../../img/organizacoes/mibr.png",
    vagas: ["CS GO", "Fortnite", "Valorant"]
  }
];


function carregarOrganizacoes() {
  const container = document.querySelector(".container.py-5");
  container.innerHTML = ""; 

  organizacoes.forEach(org => {
   
    const tagsHTML = org.vagas.map(jogo => `<span>${jogo}</span>`).join("");

   
    container.innerHTML += `
      <div class="card-org mb-4">
        <img src="${org.imagem}" alt="${org.nome}" class="logo-org" onerror="this.src='https://placehold.co/220x100/ffffff/000000?text=${org.nome}'">
        
        <div class="info-org">
          <h3>Procura-se jogadores de</h3>
          <div class="tags">
            ${tagsHTML}
          </div>
        </div>

        <button class="btn-portifolio" onclick="enviarPortifolio('${org.id}')">
          Enviar portfólio
        </button>
      </div>
    `;
  });
}


function enviarPortifolio(nomeDaOrg) {
 
  window.location.href = "sucesso.html"; 
}


carregarOrganizacoes();