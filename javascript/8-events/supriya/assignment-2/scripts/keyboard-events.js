"use strict";
const keydownOutput = document.getElementById("keydown-output");
const keyupOutput = document.getElementById("keyup-output");

function formatKeyEvent(e) {
  const parts = [];
  if (e.ctrlKey) parts.push("Ctrl");
  if (e.shiftKey) parts.push("Shift");
  if (e.altKey) parts.push("Alt");
  if (e.metaKey) parts.push("Meta"); 
  parts.push(e.key);
  return parts.join(" + ");
}

window.addEventListener("keydown", (e) => {
  const text = formatKeyEvent(e);
  const p = document.createElement("p");
  p.textContent = text;
  keydownOutput.appendChild(p);
});

window.addEventListener("keyup", (e) => {
  const text = formatKeyEvent(e);
  const p = document.createElement("p");
  p.textContent = text;
  keyupOutput.appendChild(p);
});
