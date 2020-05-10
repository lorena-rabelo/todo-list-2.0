// variáveis globais utilizadas para manipular o HTML

const input = document.getElementById('todoInput');
const form = document.querySelector('form');
const todoTasks = document.getElementById('todoTarefas');
const sample = document.getElementById('sample');  //só funcionou com ID 
const addTask = document.getElementById('todoSubmit');

// variáveis globais utilizadas para excluir todos e selecionar todos
const btnAllDone = document.querySelector('#todoMarcarTodos');
const btnRemoveAll = document.querySelector('#todoRemoverTodoss');

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

texto.addEventListener('click', checkItem);
// btnAllDone.addEventListener ('click', allDone);
// btnRemoveAll.addEventListener ('click', removeAll);


function createToDoItem(taskText) {
  const item = document.createElement('li');
  const texto = document.createElement('p');
  const trash = document.createElement('img');
  sample.remove();
  trash.src = "icon-trash.svg";
  texto.innerText = taskText;
  todoTasks.appendChild(item);
  item.appendChild(texto);
  item.appendChild(trash);
  form.reset();
};

//toggle(), se a classe existir naquele elemento, ele a remove, se não existir, ele a adiciona.
texto.addEventListener('click', function () {
  texto.classList.toggle('checked');
  console.log(texto);
})


// funções para tratar os itens da lista individualmente e coletivamente
function handleItem(e){
  const item = e.target;

  if(item.tagName == 'li'){
      checkItem(item);        // checa ou não a tarefa
  } 

  
}


function checkItem (item) {
  item.classList.toggle('checked');
}

function deleteItem (item) {
  
}

function deleteAll(){
  todoTasks.innerHTML = '';
  todoTasks.appendChild (sample);
}
