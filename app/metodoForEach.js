const sectionLivros = document.getElementById("livros");
const sectionTotalLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis");

function exibirLivrosNaTela(listaDeLivros) {
  sectionLivros.innerHTML = ``;
  sectionTotalLivrosDisponiveis.innerHTML = ``;
  listaDeLivros.forEach((livro) => {
    const disponibilidade = livro.quantidade > 0 ? "livro__imagens": "livro__imagens indisponivel";
    const divLivro = document.createElement("div");
    divLivro.classList.add("livro");
    divLivro.innerHTML = `
      <img class="${disponibilidade}" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">${livro.titulo}</h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    `;
    sectionLivros.append(divLivro);
  });
};
