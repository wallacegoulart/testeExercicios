const livros = require("./listaLivros.json");
const menorPreco = require("./menorPreco");

livros.forEach((_, atual) => {
  let menorValor = menorPreco(atual, livros);

  let aux = livros[atual];
  livros[atual] = livros[menorValor];
  livros[menorValor] = aux;
});

console.log(livros);
