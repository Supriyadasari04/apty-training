function getValues() {
const val1 = parseFloat(document.getElementById("val1").value) || 0;
  const val2 = parseFloat(document.getElementById("val2").value) || 0;
  return { val1, val2 }
}

function addAssign() {
  let { val1, val2 } = getValues();
  val1 += val2;
  document.getElementById("val1").value = val1;
  document.getElementById("result").textContent = `Value1 += Value2 → ${val1}`;
}

function subtractAssign() {
  let { val1, val2 } = getValues()
  val1 -= val2
  document.getElementById("result").textContent = `Value1 -= Value2 → ${val1}`
}

function multiplyAssign() {
  let { val1, val2 } = getValues()
  val1 *= val2
  document.getElementById("result").textContent = `Value1 *= Value2 → ${val1}`
}

function divideAssign() {
  let { val1, val2 } = getValues()
  if (val2 === 0) {
    document.getElementById("result").textContent = "Error: Division by zero"
  } else {
    val1 /= val2
    document.getElementById("result").textContent = `Value1 /= Value2 → ${val1}`
  }
}

function modulusAssign() {
  let { val1, val2 } = getValues()
  val1 %= val2
  document.getElementById("result").textContent = `Value1 %= Value2 → ${val1}`
}

function incrementAssign() {
  let { val1 } = getValues()
  val1++
  document.getElementById("result").textContent = `Value1++ → ${val1}`
}

function decrementAssign() {
  let { val1 } = getValues()
  val1--
  document.getElementById("result").textContent = `Value1-- → ${val1}`
}
