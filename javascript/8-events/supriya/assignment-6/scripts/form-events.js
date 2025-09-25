"use strict";

const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

username.addEventListener("input", () => {
  if (username.value.trim().length < 3) {
    usernameError.textContent = "Username must be at least 3 characters";
  } else {
    usernameError.textContent = "";
  }
});

email.addEventListener("input", () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
  } else {
    emailError.textContent = "";
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
  } else {
    passwordError.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  if (
    usernameError.textContent ||
    emailError.textContent ||
    passwordError.textContent
  ) {
    e.preventDefault();
  }
});
