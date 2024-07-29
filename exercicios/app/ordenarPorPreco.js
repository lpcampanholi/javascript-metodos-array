const btnOrdenarPorPreco = document.getElementById("preco");

btnOrdenarPorPreco.addEventListener("click", ordenar);

function ordenar() {
  livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
  exibirLivros(livrosOrdenados);
};
