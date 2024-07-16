const todoForm = document.querySelector(".todo--form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo--list");
const todoClearButton = document.querySelector(".todo--clear");

let todos = [];
const TODOS_KEY = "todos";
const savedTodos = localStorage.getItem(TODOS_KEY);

// Update 'todos' in Local Storage
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

// Save 'todos' array in Local Storage
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

// Display updated todo
function paintTodo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;

  const spanBullet = document.createElement("span");
  spanBullet.innerText = "•";
  spanBullet.classList.add("todo--list--bullet");

  const spanTodo = document.createElement("span");
  spanTodo.innerText = newTodo.text;
  spanTodo.classList.add("todo--list--todo");

  spanBullet.addEventListener("click", () =>
    crossOutTodo(spanBullet, spanTodo)
  );
  spanTodo.addEventListener("click", () => crossOutTodo(spanBullet, spanTodo));

  const buttonDelete = document.createElement("i");
  buttonDelete.classList.add("fa-solid", "fa-xmark");
  buttonDelete.addEventListener("click", deleteTodo);

  list.appendChild(spanBullet);
  list.appendChild(spanTodo);
  list.appendChild(buttonDelete);
  todoList.appendChild(list);
}

// Cross out todo item
function crossOutTodo(spanBullet, spanTodo) {
  spanTodo.classList.toggle("todo--list__crossOut");
}

// Delete todo item
function deleteTodo(event) {
  const listDelete = event.target.closest("li");
  if (listDelete) {
    listDelete.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(listDelete.id));
    saveTodos();
  }
}

// Clear all todo items
function clearTodoList() {
  todos = [];
  todoList.innerText = "";
  saveTodos();
}

todoClearButton.addEventListener("click", clearTodoList);
