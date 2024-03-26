a) Arrow function que recebe um parâmetro e imprime no console:
javascript
const imprimirParametro = (parametro) => {
  console.log(parametro);
}


b) Arrow function que recebe dois valores como parâmetros e chama a primeira função com o resultado da soma:
javascript
const calcularESomar = (valor1, valor2) => {
  const soma = valor1 + valor2;
  imprimirParametro(soma);
}


Agora, quanto à função para executar o teorema de Pitágoras:

javascript
function teoremaDePitagoras(cateto1, cateto2) {
  const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
  return hipotenusa;
}

// Invocando a função e imprimindo o resultado no console
console.log(teoremaDePitagoras(3, 4)); // Saída: 5