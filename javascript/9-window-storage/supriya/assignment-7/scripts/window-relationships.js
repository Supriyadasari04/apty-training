"use strict";

let childWindow;
document.getElementById("open-child").addEventListener("click", () => {
  childWindow = window.open("child.html", "childWindow", "width=400,height=400");
});

document.getElementById("send-to-child").addEventListener("click", () => {
  if (childWindow) {
    childWindow.postMessage("Hello from Parent", "*");
  }
});

window.addEventListener("message", (e) => {
  document.getElementById("child-message").textContent = "Child says: " + e.data;
});
