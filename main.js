
const contato = [];
function cadastrarContato() {
  const tbody = document.getElementById ('lista_contatos');
  const nomeContato = document.getElementById ('nome_contato').value;
  const telefoneContato = document.getElementById('telefone_contato').value;
  let linha = '';
  const verificaSeContatoExiste = contato.some (res => res.nome === nomeContato);

  if (nomeContato === '') { 
    alert(`Você precisa digitar o nome do contato!`);
    return;
  }
  
  if (telefoneContato === '') { 
    alert(`Você precisa digitar o número de telefone do contato!`);
    return;
  }
  
  if (verificaSeContatoExiste) {
    alert(`Contato ${nomeContato} já existe na lista!`);
    return;
  }

  contato.unshift ({nome: nomeContato, telefone: telefoneContato});

  for (i = 0; i < contato.length; i++) {
    linha += '<tr>';
    linha += `<td>${contato[i].nome}</td>`;
    linha += `<td>${contato[i].telefone}</td>`;
    linha += `</tr>`;
  }

  document.getElementById('nome_contato').value = '';
  document.getElementById('telefone_contato').value = '';

  return (tbody.innerHTML = linha);
}
