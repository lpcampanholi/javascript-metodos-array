function calcularValorTotalLivrosDisponiveis() {
  return livros.reduce((acc, atual) => acc + atual.preco, 0).toFixed(2);
};
