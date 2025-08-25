function calculate(operator) {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error (Divide by 0)";
      break;
    case "%":
      result = num2 !== 0 ? num1 % num2 : "Error (Divide by 0)";
      break;
    default:
      result = "Invalid Operator";
  }

  document.getElementById("result").textContent = `Result: ${result}`;
}
