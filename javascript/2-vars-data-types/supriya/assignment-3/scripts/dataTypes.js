function showDataTypes() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  const log = (message) => {
    const p = document.createElement("p");
    p.textContent = message;
    output.appendChild(p);
  };

  let str = "Hello World";
  let num = 42;
  let bool = true;
  let undef;
  let nothing = null;
  let sym = Symbol("id");
  let obj = { name: "Supriya" };

  log(`String: Value = ${str}, Type = ${typeof str}`);
  log(`Number: Value = ${num}, Type = ${typeof num}`);
  log(`Boolean: Value = ${bool}, Type = ${typeof bool}`);
  log(`Undefined: Value = ${undef}, Type = ${typeof undef}`);
  log(`Null: Value = ${nothing}, Type = ${typeof nothing}`);
  log(`Symbol: Value = ${sym.toString()}, Type = ${typeof sym}`);
  log(`Object: Value = ${JSON.stringify(obj)}, Type = ${typeof obj}`);
}