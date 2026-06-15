function carregarOrganizacoes(lista = organizacoes) {

    const container =
        document.getElementById("lista-organizacoes");

    container.innerHTML = "";

    lista.forEach(org => {

        const jogos = org.vagas
            .map(jogo => `<span>${jogo}</span>`)
            .join("");

        container.innerHTML += `

        <div class="card-org">

            <a href="../Orgs/${org.id}.html">

                <div class="logo-org-container">
                    <img src="${org.imagem}"
                    class="logo-org">
                </div>

            </a>

            <div class="info-org">

                <div class="titulo-busca">
                    Procura jogadores de
                </div>

                <div class="tags">
                    ${jogos}
                </div>

                <small>
                    Oportunidades:
                    ${org.oportunidades}
                </small>

                <small>
                    Jogadores contratados:
                    ${org.contratados}
                </small>

            </div>

            <button
                class="btn-portifolio"
                onclick="enviarPortifolio('${org.nome}')">

                Enviar Portfólio

            </button>

        </div>
        `;
    });
}

function filtrarOrganizacoes() {

    const pesquisa =
        document
        .getElementById("pesquisaOrg")
        .value
        .toLowerCase();

    const resultado = organizacoes.filter(org =>
        org.nome.toLowerCase()
        .includes(pesquisa)
    );

    carregarOrganizacoes(resultado);
}

function enviarPortifolio(nome) {

    alert(
        "Portfólio enviado para " + nome
    );
}

carregarOrganizacoes();