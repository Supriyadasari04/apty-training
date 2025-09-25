"use strict";

const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");

level1.addEventListener(
  "click",
  () => {
    alert("Level 1 (Capture Phase)");
  },
  true 
);

level2.addEventListener("click", () => {
  alert("Level 2 (Bubble Phase)");
});

level3.addEventListener("click", () => {
  alert("Level 3 (Target Phase)");
});
