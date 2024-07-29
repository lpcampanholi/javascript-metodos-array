const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => botao.addEventListener("click", filtrarLivros));

function filtrarLivros(evento) {
  const categoria = evento.target.value;
  let livrosFiltrados = categoria == "disponivel" ? filtrarPorQuantidade() : filtrarPorCategoria(categoria);
  exibirLivrosNaTela(livrosFiltrados);
  if(categoria == "disponivel") {
    debugger;
    const valorTotal = calcularValorTotalLivrosDisponiveis();
    exibirTotalLivrosDisponiveis(valorTotal);
  };
};

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
};

function filtrarPorQuantidade() {
  return livros.filter(livro => livro.quantidade > 0);
};

function exibirTotalLivrosDisponiveis(valor) {
  sectionTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
  `;
};