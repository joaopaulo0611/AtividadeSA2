let notas = JSON.parse(localStorage.getItem('notas')) || [];
const form = document.querySelector('form');
const table = document.querySelector('table');

function adicionarNota(event) {
  event.preventDefault();
  const data = document.getElementById('data').value;
  const titulo = document.getElementById('inputTitulo').value;
  const descricao = document.getElementById('descriçao').value;
  const status = document.querySelector('.status').value;

  const nota = { data, titulo, descricao, status };
  notas.push(nota);
  localStorage.setItem('notas', JSON.stringify(notas));
  form.reset();
  atualizarTabela();
}
function atualizarTabela() {
  table.innerHTML = `
    <thead>
      <tr>
        <th>Data</th>
        <th>Título</th>
        <th>Descrição</th>
        <th>Status</th>
      </tr>
    </thead>
  `;

  for (const nota of notas) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${nota.data}</td>
      <td>${nota.titulo}</td>
      <td>${nota.descricao}</td>
      <td>${nota.status}</td>
    `;
    table.appendChild(row);
  }
}
form.addEventListener('submit', adicionarNota);
atualizarTabela();

function editarNota(index) {
}

function editarNota(index) {
  const notaEditavel = notas[index];

  const novoTitulo = prompt('Novo Título:', notaEditavel.titulo);
  const novaDescricao = prompt('Nova Descrição:', notaEditavel.descricao);
  const novoStatus = prompt('Novo status: ', notaEditavel.status)

  // Atualizar a nota com as novas informações
  notaEditavel.titulo = novoTitulo;
  notaEditavel.descricao = novaDescricao;
  notaEditavel.status = novoStatus;

  localStorage.setItem('notas', JSON.stringify(notas));
  atualizarTabela();
}

function apagarNota(index) {
  notas.splice(index, 1);
  localStorage.setItem('notas', JSON.stringify(notas));
  atualizarTabela();
}

function atualizarTabela() {
  table.innerHTML = `
    <thead>
      <tr>
        <th>Data</th>
        <th>Título</th>
        <th>Descrição</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${nota.data}</td>
      <td>${nota.titulo}</td>
      <td>${nota.descricao}</td>
      <td>${nota.status}</td>
      <td>
        <button onclick="editarNota(${i})">Editar</button>
        <button onclick="apagarNota(${i})">Apagar</button>
      </td>
    `;
    table.appendChild(row);
  }
}



