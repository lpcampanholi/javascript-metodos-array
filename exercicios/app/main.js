let livros = [];

async function buscarLivros() {
  const endPointApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
  const res = await fetch(endPointApi);
  livros = await res.json();
  exibirLivros(aplicarDesconto(livros));
};

buscarLivros();
