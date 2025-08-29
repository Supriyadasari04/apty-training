function cloneObject() {
  let obj = { a: 1, b: { c: 2 } };

  let copy = JSON.parse(JSON.stringify(obj));

  copy.b.c = 99;

  document.getElementById("originalOutput").textContent = JSON.stringify(obj);
  document.getElementById("cloneOutput").textContent = JSON.stringify(copy);
}