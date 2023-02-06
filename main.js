$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
  });

  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');
  $('#telefone').mask('(00) 00000-0000');

  $('button').click(function () {
    const nome = $('#nome').val().split(' ').length >= 2;
    if (!nome) {
      alert('Por favor, preencha o seu nome completo');
      return;
    }
  });

});
