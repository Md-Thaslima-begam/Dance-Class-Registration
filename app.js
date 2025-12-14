class InputColorHandler {
  constructor(inputElement) {
    this.input = inputElement;
    this.handleInputColor();
  }

  handleInputColor() {
    this.input.addEventListener("input", () => {
      if (this.input.value.length >= 3) {
        this.input.classList.add("valid");
      } else {
        this.input.classList.remove("valid");
      }
    });
  }
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const registerBtn = document.getElementById("registerBtn");
const message = document.getElementById("message");
const output = document.getElementById("output");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

let users = [];

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

new InputColorHandler(nameInput);
new InputColorHandler(emailInput);

registerBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    message.textContent = "Please fill all fields.";
    message.style.color = "red";
    return;
  }

  const emailExists = users.some(user => user.email === email);

  if (emailExists) {
    message.textContent = "Email already exists!";
    message.style.color = "red";
  } else {
    users.push({ name, email });
    message.textContent = "Welcome!";
    message.style.color = "green";
    displayUsers();
  }

  nameInput.value = "";
  emailInput.value = "";
  nameInput.classList.remove("valid");
  emailInput.classList.remove("valid");
});

function displayUsers() {
  output.innerHTML = "";
  users.forEach(user => {
    const div = document.createElement("div");
    div.textContent = `${user.name} - ${user.email}`;
    output.appendChild(div);
  });
}
