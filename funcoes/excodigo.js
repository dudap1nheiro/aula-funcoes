Função que imprime informações sobre mim:
javascript
function informacoesSobreMim() {
  const nome = "Luzia";
  const idade = 25;
  const cidade = "Rio de Janeiro";
  const profissao = "desenvolvedora";

  console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
}

// Chamando a função para imprimir as informações sobre mim
informacoesSobreMim();


Função que recebe informações de uma pessoa e retorna uma mensagem unificada:
javascript
function unificarInformacoes(nome, idade, cidade, profissao) {
  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}

// Exemplo de uso da função
const mensagem = unificarInformacoes("Duda", 30, "São Paulo", "engenheira");
console.log(mensagem);