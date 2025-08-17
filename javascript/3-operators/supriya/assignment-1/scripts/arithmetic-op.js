function getValues() {
  const val1 = parseFloat(document.getElementById("val1").value);
  const val2 = parseFloat(document.getElementById("val2").value);
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
  document.getElementById("result").textContent = `++Value1 = ${val1}`;
}

function decrement() {
  let { val1 } = getValues();
  val1--;
  document.getElementById("result").textContent = `--Value1 = ${val1}`;
}
