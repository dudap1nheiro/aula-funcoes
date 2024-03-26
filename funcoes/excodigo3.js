// Função de soma
function somar(num1, num2) {
    return num1 + num2;
  }
  
  // Função de subtração
  function subtrair(num1, num2) {
    return num1 - num2;
  }
  
  // Função de multiplicação
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  // Função de divisão
  function dividir(num1, num2) {
    return num1 / num2;
  }
  
  // Pedindo para o usuário inserir dois números
  const numero1 = 30;
  const numero2 = 3;
  
  // Realizando as operações e mostrando os resultados no console
  console.log("Números inseridos:", numero1, "e", numero2);
  console.log("Soma:", somar(numero1, numero2));
  console.log("Diferença:", subtrair(numero1, numero2));
  console.log("Multiplicação:", multiplicar(numero1, numero2));
  console.log("Divisão:", dividir(numero1, numero2));