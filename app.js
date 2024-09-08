function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas para facilitar a comparação.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o usuário digitou algo no campo de pesquisa.
    if (!campoPesquisa) {
        // Se nada foi digitado, exibe uma mensagem informando que nenhum anime foi encontrado.
        section.innerHTML = "<p>Esse anime não foi encontrado.</p>";
        return; // Interrompe a função.
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da sua lista de animes.
    for (let dado of dados) {
        // Converte o título, descrição e tags do anime atual para minúsculas para facilitar a comparação.
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente no título, descrição ou tags do anime.
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se o anime corresponder à pesquisa, adiciona um novo elemento HTML à string de resultados.
            resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
        }
    }

    // Verifica se algum resultado foi encontrado.
    if (!resultados) {
        // Se nenhum resultado foi encontrado, exibe uma mensagem informando que nada foi encontrado.
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atualiza o conteúdo da seção de resultados com os resultados encontrados (ou a mensagem de "não encontrado").
    section.innerHTML = resultados;
}
