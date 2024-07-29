const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => botao.addEventListener("click", filtrarLivros));

function filtrarLivros(e) {
  const categoria = e.target.value;
  const livrosFiltrados = categoria == "disponivel" ? filtrarPorQuantidade() : filtrarPorCategoria(categoria);
  exibirLivros(livrosFiltrados);

  if (categoria == "disponivel") {
    const valorTotal = livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
    exibirPrecoTotal(valorTotal);
  };
};

function filtrarPorQuantidade() {
  return livros.filter(livro => livro.quantidade > 0);
};

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
};

function exibirPrecoTotal(valor) {
  sectionPrecoTotal.innerHTML = `
    <p>O preço total é ${valor}</p>
  `;
};

