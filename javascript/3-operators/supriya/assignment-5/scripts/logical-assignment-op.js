function convertValue(val, type) {
  switch (type) {
    case "number":
      return Number(val)
    case "boolean":
      return val.toLowerCase() === "true"
    case "null":
      return null
    case "undefined":
      return undefined
    default:
      return val
  }
}

function getValues() {
  let val1 = document.getElementById("val1").value
  let type1 = document.getElementById("type1").value
  let val2 = document.getElementById("val2").value
  let type2 = document.getElementById("type2").value

  let converted1 = convertValue(val1, type1)
  let converted2 = convertValue(val2, type2)

  return { converted1, converted2 }
}

function showResult(op, res) {
  document.getElementById("result").textContent = `Result of ${op}: ${res}`
}

function logicalAndAssign() {
  let { converted1, converted2 } = getValues();
  converted1 &&= converted2;
  document.getElementById("val1").value = converted1;
  showResult("&&=", converted1);
}

function logicalOrAssign() {
  let { converted1, converted2 } = getValues()
  converted1 ||= converted2
  showResult("||=", converted1)
}

function logicalNullishAssign() {
  let { converted1, converted2 } = getValues()
  converted1 ??= converted2
  showResult("??=", converted1)
}
