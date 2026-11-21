const questions = document.querySelectorAll(".faq-question");

questions.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
  });
});

const burger = document.querySelector(".burger");
const header = document.querySelector(".header");

burger.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  burger.setAttribute("aria-expanded", isOpen);
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
  });
});

const form = document.querySelector(".form");
const formStatus = document.querySelector(".form-status");

function setError(input, message) {
  const field = input.closest(".field");
  field.querySelector(".error").textContent = message;
  field.classList.toggle("invalid", message !== "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = form.elements.name;
  const phoneInput = form.elements.phone;
  const problemInput = form.elements.problem;

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const problem = problemInput.value.trim();

  let isValid = true;
  formStatus.textContent = "";

  if (name.length < 2) {
    setError(nameInput, "Вкажіть ім'я (мінімум 2 символи)");
    isValid = false;
  } else {
    setError(nameInput, "");
  }

  if (phone.replace(/\D/g, "").length < 10) {
    setError(phoneInput, "Вкажіть телефон (мінімум 10 цифр)");
    isValid = false;
  } else {
    setError(phoneInput, "");
  }

  if (problem.length < 10) {
    setError(problemInput, "Опишіть проблему (мінімум 10 символів)");
    isValid = false;
  } else {
    setError(problemInput, "");
  }

  if (!isValid) {
    return;
  }

  formStatus.textContent = "Дякуємо! Передзвонимо за 15 хвилин";
  form.reset();
});
