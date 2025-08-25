function rectangleCalculator(length = 5, width = 3) {
  const perimeter = 2 * (length + width);

  function calculateArea() {
    return length * width;
  }

  const area = calculateArea();

  return { perimeter, area };
}

function calculateRectangle() {
  const length = Number(document.getElementById("length").value) || undefined;
  const width = Number(document.getElementById("width").value) || undefined;

  const { perimeter, area } = rectangleCalculator(length, width);

  document.getElementById("result").innerHTML = `
    ✅ Perimeter: ${perimeter} <br>
    ✅ Area: ${area}
  `;
}
