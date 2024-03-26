a) Função para somar dois números e retornar o resultado:
javascript
function somarNumeros(num1, num2) {
  const resultado = num1 + num2;
  return resultado;
}

// Invocando a função e imprimindo o resultado no console
console.log(somarNumeros(5, 3)); // Saída: 8


b) Função que compara dois números e retorna um booleano:
javascript
function compararNumeros(num1, num2) {
  return num1 >= num2;
}

// Exemplo de uso da função
console.log(compararNumeros(10, 5)); // Saída: true
console.log(compararNumeros(3, 8)); // Saída: false


c) Função para verificar se um número é par:
javascript
function ehPar(numero) {
  return numero % 2 === 0;
}

// Exemplo de uso da função
console.log(ehPar(4)); // Saída: true
console.log(ehPar(3)); // Saída: false


d) Função para imprimir o tamanho de uma mensagem e sua versão em letras maiúsculas:
javascript
function mostrarDetalhesDaMensagem(mensagem) {
  const tamanho = mensagem.length;
  const mensagemMaiuscula = mensagem.toUpperCase();
  console.log(`Tamanho da mensagem: ${tamanho}`);
  console.log(`Mensagem em letras maiúsculas: ${mensagemMaiuscula}`);
}

// Chamando a função com uma mensagem e imprimindo os detalhes no console
mostrarDetalhesDaMensagem("Olá, mundo!");