function calculate(a, b, operator) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    throw new Error("Invalid number input.");
  }

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
    case 'x':
      return a * b;
    case '/':
      if (b === 0) throw new Error("Cannot divide by zero.");
      return a / b;
    default:
      throw new Error("Unsupported operator.");
  }
}

function handleCalculation() {
  const num1 = document.getElementById("num1").value.trim();
  const num2 = document.getElementById("num2").value.trim();
  const operator = document.getElementById("operator").value;
  const resultBox = document.getElementById("result");

  try {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    const result = calculate(a, b, operator);
    resultBox.textContent = `Result: ${result}`;
  } catch (error) {
    resultBox.textContent = `Error: ${error.message}`;
  }
}