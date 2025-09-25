"use strict";

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => {
  alert("Parent Div Clicked");
});

child.addEventListener("click", (e) => {
  alert("Child Div Clicked");
  e.stopPropagation();
});
