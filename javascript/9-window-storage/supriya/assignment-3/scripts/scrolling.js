"use strict";

const xInput = document.getElementById("x-input");
const yInput = document.getElementById("y-input");
const scrollBtn = document.getElementById("scroll-btn");
const upBtn = document.getElementById("up-btn");
const downBtn = document.getElementById("down-btn");

scrollBtn.addEventListener("click", () => {
  const x = parseInt(xInput.value, 10) || 0;
  const y = parseInt(yInput.value, 10) || 0;
  window.scrollTo(x, y);
});

upBtn.addEventListener("click", () => {
  window.scrollBy(0, -10);
});

downBtn.addEventListener("click", () => {
  window.scrollBy(0, 10);
});
