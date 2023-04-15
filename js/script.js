"use strict";

// Variables
let validSubmit = false;

// Elements
const formBtn = document.querySelector(".form-btn");
const successEl = document.querySelector(".success");
const inputBox = document.querySelectorAll(".input-container");
const emailInput = inputBox[2].children[0];

// Event-listeners
formBtn.addEventListener("click", checkform);

// Functions
// submit form
function checkform() {
  validSubmit = true;

  // check for empty inputs
  inputBox.forEach((input) => {
    if (input.children[0].value === "") {
      error(input);
      validSubmit = false;
    } else {
      noError(input);
    }
  });

  // check for valid email
  emailError();

  validSubmit ? submitSuccess() : successEl.classList.add("hidden");
}

// form sucessfully submitted
function submitSuccess() {
  // briefly clear and tnen show success message
  successEl.classList.add("hidden");
  setTimeout(function () {
    successEl.classList.remove("hidden");
    // clear errors
    inputBox.forEach((input) => {
      noError(input);
    });
    // clear inputs
    inputBox.forEach((input) => {
      input.children[0].value = "";
    });
  }, 300);
}

// error for empty item
function error(item) {
  item.classList.add("error");
  item.classList.remove("email-error");
}

// clear errors
function noError(item) {
  item.classList.remove("error");
  item.classList.remove("email-error");
}

// change emailInput text to black
function normalizeInput() {
  emailInput.style.color = "black";
}

// error if email is not empty but still incorrectly formatted
function emailError() {
  // if not empty
  if (emailInput.value !== "") {
    // if not valid
    if (!validateEmail(emailInput.value)) {
      inputBox[2].classList.add("email-error");
      inputBox[2].classList.remove("error");
      emailInput.style.color = "var(--red)";
      validSubmit = false;
    }
  }
}

// email validation
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
