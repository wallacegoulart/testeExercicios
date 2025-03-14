function menorPreco(posicaoInicial, arryLivros) {
  let menorValor = posicaoInicial;

  for (let atual = posicaoInicial; atual < arryLivros.length; atual++) {
    if (arryLivros[atual].preco < arryLivros[menorValor].preco) {
      menorValor = atual;
    }
  }
  return menorValor;
}

module.exports = menorPreco;
