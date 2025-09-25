"use strict";

let newWindow;

document.getElementById("open-btn").addEventListener("click", () => {
  newWindow = window.open("", "", "width=400,height=400");
  newWindow.document.write("<h1>New Window</h1>");
});

document.getElementById("close-btn").addEventListener("click", () => {
  if (newWindow && !newWindow.closed) {
    newWindow.close();
  }
});

document.getElementById("resize-btn").addEventListener("click", () => {
  if (newWindow && !newWindow.closed) {
    newWindow.resizeTo(800, 600);
  }
});
