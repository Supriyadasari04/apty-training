"use strict";

const output = document.getElementById("output");

function displayDimensions() {
  output.innerHTML = `
    <p>Inner Width: ${window.innerWidth}</p>
    <p>Inner Height: ${window.innerHeight}</p>
    <p>Outer Width: ${window.outerWidth}</p>
    <p>Outer Height: ${window.outerHeight}</p>
    <p>Screen Width: ${screen.width}</p>
    <p>Screen Height: ${screen.height}</p>
    <p>Available Screen Width: ${screen.availWidth}</p>
    <p>Available Screen Height: ${screen.availHeight}</p>
  `;
}

window.addEventListener("resize", displayDimensions);
displayDimensions();
