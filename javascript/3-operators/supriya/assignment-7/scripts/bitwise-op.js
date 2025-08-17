function getValues() {
  let v1 = Number(document.getElementById("value1").value)
  let v2 = Number(document.getElementById("value2").value)
  return { v1, v2 }
}

function bitwiseAnd() {
  let { v1, v2 } = getValues()
  document.getElementById("result").textContent = `${v1} & ${v2} = ${v1 & v2}`
}

function bitwiseOr() {
  let { v1, v2 } = getValues()
  document.getElementById("result").textContent = `${v1} | ${v2} = ${v1 | v2}`
}

function bitwiseXor() {
  let { v1, v2 } = getValues()
  document.getElementById("result").textContent = `${v1} ^ ${v2} = ${v1 ^ v2}`
}

function bitwiseNot() {
  let { v1 } = getValues()
  document.getElementById("result").textContent = `~${v1} = ${~v1}`
}

function leftShift() {
  let { v1, v2 } = getValues()
  document.getElementById("result").textContent = `${v1} << ${v2} = ${v1 << v2}`
}

function rightShift() {
  let { v1, v2 } = getValues()
  document.getElementById("result").textContent = `${v1} >> ${v2} = ${v1 >> v2}`
}
