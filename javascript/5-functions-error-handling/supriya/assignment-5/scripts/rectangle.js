// Function with default parameters
function areaRectangle(length = 5, width = 3) {
  return length * width;
}

function calculateArea() {
  const length = Number(document.getElementById("length").value);
  const width = Number(document.getElementById("width").value);

  // If no values entered, defaults are used
  const result = areaRectangle(
    length || undefined, 
    width || undefined
  );

  document.getElementById("result").textContent =
    `Area of rectangle: ${result}`;
}
