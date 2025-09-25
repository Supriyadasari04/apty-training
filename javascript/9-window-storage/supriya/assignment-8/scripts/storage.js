"use strict";

const keyInput = document.getElementById("key-input");
const valueInput = document.getElementById("value-input");
const saveLocalBtn = document.getElementById("save-local");
const saveSessionBtn = document.getElementById("save-session");
const localOutput = document.getElementById("local-output");
const sessionOutput = document.getElementById("session-output");

function displayStorage() {
  localOutput.innerHTML = "";
  sessionOutput.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    localOutput.innerHTML += `<p>${key}: ${value}</p>`;
  }

  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    sessionOutput.innerHTML += `<p>${key}: ${value}</p>`;
  }
}

saveLocalBtn.addEventListener("click", () => {
  localStorage.setItem(keyInput.value, valueInput.value);
  displayStorage();
});

saveSessionBtn.addEventListener("click", () => {
  sessionStorage.setItem(keyInput.value, valueInput.value);
  displayStorage();
});

window.addEventListener("load", displayStorage);
