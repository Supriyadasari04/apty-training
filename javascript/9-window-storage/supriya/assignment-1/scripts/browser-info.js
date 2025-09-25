"use strict";

const urlInput = document.getElementById("url-input");
const goBtn = document.getElementById("go-btn");
const backBtn = document.getElementById("back-btn");
const forwardBtn = document.getElementById("forward-btn");
const reloadBtn = document.getElementById("reload-btn");

goBtn.addEventListener("click", () => {
  let url = urlInput.value.trim();
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }
  window.location.href = url;
});

backBtn.addEventListener("click", () => {
  window.history.back();
});

forwardBtn.addEventListener("click", () => {
  window.history.forward();
});

reloadBtn.addEventListener("click", () => {
  window.location.reload();
});
