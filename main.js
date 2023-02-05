$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
  });

  $('#nomeTarefa').keydown(function (event) {
    if (event.keyCode == 13) {
      $('button').click();
    }
  });

  $('button').click(function () {
    const nomeTarefa = $('#nomeTarefa').val();
    $('ul').prepend('<li>' + nomeTarefa + '</li>');
    $('#nomeTarefa').val('');
  });

  $(document).on('click', 'li', function () {
    $(this).toggleClass('tarefa-concluida');
  });
});
