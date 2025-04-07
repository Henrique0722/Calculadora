// Função que adiciona um número ou operador ao display
function adicionar(valor) {
  // Pega o input com id "display" e adiciona o valor clicado (número ou operador)
  document.getElementById('display').value += valor;
}

  
  // Função que realiza o cálculo da operação no display
function calcular() {
  try {
    // Pega a expressão digitada no display, calcula e coloca o resultado no próprio display
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    // Se tiver erro (ex: operação inválida), mostra um alerta para o usuário
    alert('Erro na operação');
  }
}

 // Função que limpa o display
function limpar() {
  // Zera o valor do input "display", apagando tudo
  document.getElementById('display').value = '';
}

  