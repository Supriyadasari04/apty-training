"use strict";

const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
    e.preventDefault(); 
    message.textContent = "Please fill in all fields before submitting.";
  } else {
    message.textContent = "Form submitted successfully!";
  }
});
