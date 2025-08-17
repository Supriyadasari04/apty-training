const output = document.getElementById("output");

function clearOutput() {
  output.innerHTML = "";
}

function log(message) {
  const p = document.createElement("p");
  p.textContent = message;
  output.appendChild(p);
}

const str = "10";
const num = 5;
const bool = true;
const undef = undefined;
const nul = null;
const sym = Symbol("id");
const obj = { value: 100 };

function testAddition(base, baseLabel) {
  clearOutput();
  log(`Base Value: ${baseLabel} (${String(base)})`);

  const values = [
    [str, "String"],
    [num, "Number"],
    [bool, "Boolean"],
    [undef, "Undefined"],
    [nul, "Null"],
    [sym, "Symbol"],
    [obj, "Object"]
  ];

  values.forEach(([val, label]) => {
    try {
      const result = base + val;
      log(`${baseLabel} + ${label} → ${result} (typeof ${typeof result})`);
    } catch (error) {
      log(`${baseLabel} + ${label} → Error: ${error}`);
    }
  });
}

function coerceString() {
  testAddition(str, "String");
}

function coerceNumber() {
  testAddition(num, "Number");
}

function coerceBoolean() {
  testAddition(bool, "Boolean");
}

function coerceUndefined() {
  testAddition(undef, "Undefined");
}

function coerceNull() {
  testAddition(nul, "Null");
}

function coerceSymbol() {
  testAddition(sym, "Symbol");
}

function coerceObject() {
  testAddition(obj, "Object");
}
