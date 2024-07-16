const login = document.querySelector("#login");
const loginForm = document.querySelector(".login--form");
const loginInput = document.querySelector(".login--form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// Handles user login submission
function onLoginSubmit(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}

// Greets the user and adds a logout button
function paintGreetings(username) {
  greeting.innerText = `Hi ${username}`;

  const greetingSmile = document.createElement("i");
  greetingSmile.classList.add("fa-regular", "fa-face-smile", "greeting--smile");
  greetingSmile.style.cursor = "default";

  const logout = document.createElement("i");
  logout.classList.add(
    "fa-solid",
    "fa-arrow-right-from-bracket",
    "greeting--logout"
  );
  logout.addEventListener("click", onLogoutClick);

  greeting.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);

  greeting.appendChild(greetingSmile);
  greeting.appendChild(logout);
}

// Handles user logout
function onLogoutClick() {
  localStorage.removeItem(USERNAME_KEY);
  location.reload();
}
