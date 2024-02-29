const day = document.getElementById("day");
const dayError = document.querySelector("#day + span.error");
const dayLabel = document.querySelector("#day + label");
const month = document.getElementById("month");
const monthError = document.querySelector("#month + span.error");
const year = document.getElementById("year");
const yearError = document.querySelector("#year + span.error");

const calc_year = document.getElementById("calc-years");
const calc_month = document.getElementById("calc-months");
const calc_day = document.getElementById("calc-days");
const button = document.getElementById("submit-btn");

const validateInput = (input, error, errorMessage) => {
  if (input.validity.valid) {
    error.textContent = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
    input.labels[0].className = "";
    input.className = "";
  } else {
    if (input.validity) {
      input.labels[0].className = "label-error";

      error.textContent = errorMessage;
    }
    input.className = "input-invalid";
    error.className = "error active";
  }
};

day.addEventListener("input", (event) => {
  validateInput(day, dayError, "Must be a valid day");
});

month.addEventListener("input", (event) => {
  validateInput(month, monthError, "Must be a valid month");
});

year.addEventListener("input", (event) => {
  validateInput(year, yearError, "Must be a valid year");
});

const animateNumbers = (element, finalNumber) => {
  let currentNumber = 0;
  const increment = Math.ceil(finalNumber / 100); // Adjust the increment value as needed

  const timer = setInterval(() => {
    currentNumber += increment;
    element.innerHTML = currentNumber;

    if (currentNumber >= finalNumber) {
      clearInterval(timer);
      element.innerHTML = finalNumber;
    }
  }, 50); // Adjust the interval value as needed
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  validateInput(day, dayError, "This field is required");
  validateInput(month, monthError, "This field is required");
  validateInput(year, yearError, "This field is required");
  let date = new Date();
  let current_year = date.getFullYear();
  let current_month = date.getMonth() + 1;
  let current_day = date.getDate();

  let birth_year = year.value;
  let birth_month = month.value;
  let birth_day = day.value;

  let age_year = current_year - birth_year;
  let age_month = current_month - birth_month;
  let age_day = current_day - birth_day;

  if (age_month < 0) {
    age_year--;
    age_month = 12 + age_month;
  }
  if (age_day < 0) {
    age_month--;
    age_day = 30 + age_day;
  }

  animateNumbers(calc_year, age_year);
  animateNumbers(calc_month, age_month);
  animateNumbers(calc_day, age_day);
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  validateInput(day, dayError, "This field is required");
  validateInput(month, monthError, "This field is required");
  validateInput(year, yearError, "This field is required");
  let date = new Date();
  let current_year = date.getFullYear();
  let current_month = date.getMonth() + 1;
  let current_day = date.getDate();

  let birth_year = year.value;
  let birth_month = month.value;
  let birth_day = day.value;

  let age_year = current_year - birth_year;
  let age_month = current_month - birth_month;
  let age_day = current_day - birth_day;

  if (age_month < 0) {
    age_year--;
    age_month = 12 + age_month;
  }
  if (age_day < 0) {
    age_month--;
    age_day = 30 + age_day;
  }

  calc_year.innerHTML = age_year;
  calc_month.innerHTML = age_month;
  calc_day.innerHTML = age_day;
});
