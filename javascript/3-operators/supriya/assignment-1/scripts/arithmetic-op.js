function getValues() {
const val1 = parseFloat(document.getElementById("val1").value) || 0;
  const val2 = parseFloat(document.getElementById("val2").value) || 0;
  return { val1, val2 };
}

function add() {
  const { val1, val2 } = getValues();
  document.getElementById("result").textContent = `${val1} + ${val2} = ${val1 + val2}`;
}

function subtract() {
  const { val1, val2 } = getValues();
  document.getElementById("result").textContent = `${val1} - ${val2} = ${val1 - val2}`;
}

function multiply() {
  const { val1, val2 } = getValues();
  document.getElementById("result").textContent = `${val1} * ${val2} = ${val1 * val2}`;
}

function divide() {
  const { val1, val2 } = getValues();
  if (val2 === 0) {
    document.getElementById("result").textContent = "Error: Division by zero!";
  } else {
    document.getElementById("result").textContent = `${val1} / ${val2} = ${val1 / val2}`;
  }
}

function modulus() {
  const { val1, val2 } = getValues();
  document.getElementById("result").textContent = `${val1} % ${val2} = ${val1 % val2}`;
}

function increment() {
  let { val1 } = getValues();
  val1++;
  document.getElementById("val1").value = val1;
  document.getElementById("result").textContent = `++Value1 = ${val1}`;
}

function decrement() {
  let { val1 } = getValues();
  val1--;
  document.getElementById("val1").value = val1;
  document.getElementById("result").textContent = `--Value1 = ${val1}`;
}

// Attach event listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addBtn").addEventListener("click", add);
  document.getElementById("subBtn").addEventListener("click", subtract);
  document.getElementById("mulBtn").addEventListener("click", multiply);
  document.getElementById("divBtn").addEventListener("click", divide);
  document.getElementById("modBtn").addEventListener("click", modulus);
  document.getElementById("incBtn").addEventListener("click", increment);
  document.getElementById("decBtn").addEventListener("click", decrement);
});
