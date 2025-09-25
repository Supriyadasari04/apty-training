"use strict";

const cookieNameInput = document.getElementById("cookie-name");
const cookieValueInput = document.getElementById("cookie-value");
const setCookieBtn = document.getElementById("set-cookie");
const readCookieBtn = document.getElementById("read-cookie");
const deleteCookieBtn = document.getElementById("delete-cookie");
const cookieOutput = document.getElementById("cookie-output");

function setCookie(name, value, days = 7) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decoded = decodeURIComponent(document.cookie);
  const parts = decoded.split(";");
  for (let part of parts) {
    part = part.trim();
    if (part.indexOf(cname) === 0) {
      return part.substring(cname.length, part.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  setCookie(name, "", -1);
}

setCookieBtn.addEventListener("click", () => {
  setCookie(cookieNameInput.value, cookieValueInput.value);
  cookieOutput.textContent = "Cookie set";
});

readCookieBtn.addEventListener("click", () => {
  const value = getCookie(cookieNameInput.value);
  cookieOutput.textContent = value ? `Value: ${value}` : "Cookie not found";
});

deleteCookieBtn.addEventListener("click", () => {
  deleteCookie(cookieNameInput.value);
  cookieOutput.textContent = "Cookie deleted";
});
