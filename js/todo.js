const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoUpdate = document.getElementById("todo-update");
const toDoClear = document.getElementById("todo-clear");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function crossOutToDo(event) {
  const li = event.target;
  li.classList.toggle("crossOut");
}

function deleteToDo(event) {
  const liDel = event.target.parentElement;
  liDel.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(liDel.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  li.addEventListener("click", crossOutToDo);

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoUpdate.addEventListener("click", () => {
  toDoForm.dispatchEvent(new Event("submit"));
});
toDoClear.addEventListener("click", clearToDoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function clearToDoList() {
  toDos = [];
  toDoList.innerText = "";
  saveToDos();
}
