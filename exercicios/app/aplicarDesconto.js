function aplicarDesconto(listaDeLivros) {
  const desconto = 0.3;
  const listaComDesconto = listaDeLivros.map(livro => {
    return {...livro, preco: (livro.preco - (livro.preco * desconto)).toFixed(2)};
  });
  return listaComDesconto;
};
