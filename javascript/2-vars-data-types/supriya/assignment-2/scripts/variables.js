const output = document.getElementById("output");

function log(message, type = "success") {
  const p = document.createElement("p");
  p.textContent = message;
  p.className = type;
  output.appendChild(p);
}

function clearOutput() {
  output.innerHTML = "";
}

function testVar() {
  clearOutput();
  try {
    var a = 10;
    log("var a declared: " + a);

    var a = 20; 
    log("var a re-declared: " + a);

    a = 30; // 
    log("var a re-assigned: " + a);
  } catch (error) {
    log("Error with var: " + error, "error");
  }
}

function testLet() {
  clearOutput();
  try {
    let b = 10;
    log("let b declared: " + b);

    try {
      let b = 20; 
      log(
        "let b re-declared: " +
          b +
          "\n Note : let here is re-declared under different scope else re-declaration in same scope NOT allowed"
      );
    } catch (error) {
      log("Error re-declaring let: " + error, "error");
    }

    b = 30;
    log("let b re-assigned: " + b);
  } catch (error) {
    log("Error with let: " + error, "error");
  }
}

function testConst() {
  clearOutput();
  try {
    const c = 10;
    log("const c declared: " + c);

    try {
      const c = 20;
      log("const c re-declared: " + c +  "\n Note : const here is re-declared under different scope else re-declaration in same scope NOT allowed"
      );
    } catch (error) {
      log("Error re-declaring const: " + error, "error");
    }

    try {
      c = 30;
      log("const c re-assigned: " + c);
    } catch (error) {
      log("Error re-assigning const: " + error, "error");
    }
  } catch (error) {
    log("Error with const: " + error, "error");
  }
}
