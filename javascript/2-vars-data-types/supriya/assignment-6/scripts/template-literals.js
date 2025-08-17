function showTemplateLiterals() {
  const output = document.getElementById("output");
  output.innerHTML = ""; 

  let str = "Hello";
  let num = 42;
  let bool = true;
  let undef = undefined;
  let nul = null;
  let sym = Symbol("id");
  let obj = { name: "Alice", age: 25 };

  const results = [
    `String: The value is "${str}" and type is ${typeof str}`,
    `Number: The value is ${num} and type is ${typeof num}`,
    `Boolean: The value is ${bool} and type is ${typeof bool}`,
    `Undefined: The value is ${undef} and type is ${typeof undef}`,
    `Null: The value is ${nul} and type is ${typeof nul}`,
    `Symbol: The value is ${String(sym)} and type is ${typeof sym}`,
    `Object: The value is ${JSON.stringify(obj)} and type is ${typeof obj}`,
    `Full sentence: My name is ${obj.name}, I am ${obj.age} years old, status: ${bool}, code: ${num}, greeting: ${str}`
  ];

  results.forEach(line => {
    const p = document.createElement("p");
    p.textContent = line;
    output.appendChild(p);
  });
}
