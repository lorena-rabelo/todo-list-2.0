// variáveis globais utilizadas para manipular o HTML
const input = document.getElementById('todoInput');
const form = document.querySelector('form');
const todoTasks = document.getElementById('todoLista');
const sample = document.getElementById('sample');  //só funcionou com ID 
const addTask = document.getElementById('todoSubmit');
const toDoContainer = document.querySelector('.todo__container');

// variáveis globais utilizadas para excluir todos e selecionar todos
const btnAllDone = document.querySelector('#todoMarcarTodos');
const btnRemoveAll = document.getElementById('todoRemoverTodos');
console.log()
// escutadores de eventos que utilizarei

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = input.value.trim();

  if (taskText !== '') {
    createToDoItem(taskText)
  } else {
    input.classList.add('empty');
    input.addEventListener('animationend', function (e) {
      input.classList.remove('empty');
    })
  };
  input.focus();

});


todoTasks.addEventListener('click', handleItem);
btnAllDone.addEventListener('click', allDone);
btnRemoveAll.addEventListener('click', deleteAll);


function createToDoItem(taskText) {
  const task = document.createElement('li');
  const texto = document.createElement('p');
  const trash = document.createElement('img');
  sample.style.display = 'none';
  trash.src = "icon-trash.svg";
  texto.innerText = taskText;
  todoTasks.appendChild(task);
  task.appendChild(texto);
  task.appendChild(trash);
  form.reset();
};

// funções para tratar os itens da lista individualmente e coletivamente
function handleItem(e) {
  const item = e.target;

  if (item.tagName == 'P') {       // IMPORTANTE!! tagName precisa passar o parâmetro MAIUSCULA
    console.log('rolou')
    checkItem(item)                // checa ou não a tarefa
  }
  if (item.tagName == 'IMG') {     // IMPORTANTE!! tagName precisa passar o parâmetro MAIUSCULA
    deleteItem(item);              // apaga individualmente    
    let tasks = document.querySelectorAll('li');
    if (sample.style.display = 'none' && tasks.length == 0) {
      sample.style.display = 'block';
    }
  }
}

function checkItem(item) {
  item.classList.toggle('checked')
}

function deleteItem(item) {
  item.parentNode.remove()
}

function deleteAll() {
  // todoTasks.remove();
  todoTasks.innerHTML = "";
  sample.style.display = 'block';
}

function allDone() {
  console.log('oeee')

  if (btnAllDone.innerText != 'Desmarcar todos') {
    let tasksText = document.querySelectorAll('p');
    console.log(tasksText)
    tasksText.forEach((item) => {
      item.classList.add('checked');
    })
    btnAllDone.innerText = 'Desmarcar todos'
  } else {
    let tasksText = document.querySelectorAll('p');
    console.log(tasksText)
    tasksText.forEach((item) => {
      item.classList.remove('checked');
    })
    btnAllDone.innerText = 'Marcar todos';
  }
}


//corrigir erros dos navegadores
//melhorar o estilo do check 
//fazer drag and drop 
// colocar margin bottom nos item da lista 
