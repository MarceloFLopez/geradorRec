// frontend.js

$(document).ready(function() {
  // Manipulação do formulário de receitas
  $('#receitaForm').submit(function(event) {
    event.preventDefault();

    // Captura dos valores dos inputs
    const nomePaciente = $('#nomePaciente').val();
    const idade = $('#idade').val();
    const endereco = $('#endereco').val();

    // Armazena os dados em localStorage para serem acessíveis na próxima página
    const dados = {
      nomePaciente: nomePaciente,
      idade: idade,
      endereco: endereco
    };
    localStorage.setItem('dadosPaciente', JSON.stringify(dados));

    // Redireciona para a página de visualização
    window.location.href = 'visualizar.html';
  });
});