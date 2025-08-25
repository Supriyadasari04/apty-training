function rectangleCalculator(length = 5, width = 3) {
  // Outer function: Perimeter
  const perimeter = 2 * (length + width);

  // Inner function: Area
  function calculateArea() {
    return length * width;
  }

  const area = calculateArea();

  return { perimeter, area };
}

function calculateRectangle() {
  const length = Number(document.getElementById("length").value) || undefined;
  const width = Number(document.getElementById("width").value) || undefined;

  // Call outer function with user input (or defaults if empty)
  const { perimeter, area } = rectangleCalculator(length, width);

  document.getElementById("result").innerHTML = `
    ✅ Perimeter: ${perimeter} <br>
    ✅ Area: ${area}
  `;
}
