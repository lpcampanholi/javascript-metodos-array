const sectionLivros = document.querySelector(".lista_livros");
const sectionPrecoTotal = document.querySelector(".preco_total");

function exibirLivros(lista) {
  sectionPrecoTotal.innerHTML = ``;
  sectionLivros.innerHTML = ``;
  lista.forEach((livro) => {
    const disponibilidade = livro.quantidade > 0 ? "livro" : "livro indisponivel";
    sectionLivros.innerHTML += `
    <li class="${disponibilidade}">
    <img src="${livro.imagem}" alt="${livro.alt}">
    <h3>${livro.titulo}</h3>
    <p>${livro.autor}</p>
    <p>R$${livro.preco}</p>
    <span>Categoria: ${livro.categoria}</span>
    </li>
    `;
  });
};
