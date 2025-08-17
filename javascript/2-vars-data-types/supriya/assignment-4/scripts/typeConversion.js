const output = document.getElementById("output");

function clearOutput() {
  output.innerHTML = "";
}

function log(message) {
  const p = document.createElement("p");
  p.textContent = message;
  output.appendChild(p);
}

function convertString() {
  clearOutput();
  let value = "123";
  log("Original (String): " + value + " | typeof = " + typeof value);

  log("To Number: " + Number(value) + " | typeof = " + typeof Number(value));
  log("To Boolean: " + Boolean(value) + " | typeof = " + typeof Boolean(value));
  log("To Object: " + JSON.stringify(Object(value)) + " | typeof = " + typeof Object(value));
}

function convertNumber() {
  clearOutput();
  let value = 42;
  log("Original (Number): " + value + " | typeof = " + typeof value);

  log("To String: " + String(value) + " | typeof = " + typeof String(value));
  log("To Boolean: " + Boolean(value) + " | typeof = " + typeof Boolean(value));
  log("To Object: " + JSON.stringify(Object(value)) + " | typeof = " + typeof Object(value));
}

function convertBoolean() {
  clearOutput();
  let value = true;
  log("Original (Boolean): " + value + " | typeof = " + typeof value);

  log("To Number: " + Number(value) + " | typeof = " + typeof Number(value));
  log("To String: " + String(value) + " | typeof = " + typeof String(value));
  log("To Object: " + JSON.stringify(Object(value)) + " | typeof = " + typeof Object(value));
}

function convertUndefined() {
  clearOutput();
  let value;
  log("Original (Undefined): " + value + " | typeof = " + typeof value);

  log("To Number: " + Number(value) + " | typeof = " + typeof Number(value));
  log("To String: " + String(value) + " | typeof = " + typeof String(value));
  log("To Boolean: " + Boolean(value) + " | typeof = " + typeof Boolean(value));
  try {
    log("To Object: " + JSON.stringify(Object(value)) + " | typeof = " + typeof Object(value));
  } catch (error) {
    log("Error converting Undefined to Object: " + error);
  }
}

function convertNull() {
  clearOutput();
  let value = null;
  log("Original (Null): " + value + " | typeof = " + typeof value);

  log("To Number: " + Number(value) + " | typeof = " + typeof Number(value));
  log("To String: " + String(value) + " | typeof = " + typeof String(value));
  log("To Boolean: " + Boolean(value) + " | typeof = " + typeof Boolean(value));
  log("To Object: " + JSON.stringify(Object(value)) + " | typeof = " + typeof Object(value));
}

function convertSymbol() {
  clearOutput();
  let value = Symbol("id");
  log("Original (Symbol): " + value.toString() + " | typeof = " + typeof value);

  try {
    log("To Number: " + Number(value) + " | typeof = " + typeof Number(value));
  } catch (error) {
    log("Error converting Symbol to Number: " + error);
  }
  log("To String: " + String(value) + " | typeof = " + typeof String(value));
  log("To Boolean: " + Boolean(value) + " | typeof = " + typeof Boolean(value));
  log("To Object: " + JSON.stringify(Object(value)) + " | typeof = " + typeof Object(value));
}

function convertObject() {
  clearOutput();
  let value = { name: "Supriya" };
  log("Original (Object): " + JSON.stringify(value) + " | typeof = " + typeof value);

  log("To String: " + String(value) + " | typeof = " + typeof String(value));
  log("To Boolean: " + Boolean(value) + " | typeof = " + typeof Boolean(value));
  try {
    log("To Number: " + Number(value) + " | typeof = " + typeof Number(value));
  } catch (error) {
    log("Error converting Object to Number: " + error);
  }
}
