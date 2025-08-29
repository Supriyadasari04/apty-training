function swapValues() {
  let a = Number(document.getElementById("inputA").value);
  let b = Number(document.getElementById("inputB").value);
  document.getElementById(
    "results"
  ).innerHTML += `Before Swap: a = ${a}, b = ${b}<br>`;

  [a, b] = [b, a];

  document.getElementById(
    "results"
  ).innerHTML += `After Swap: a = ${a}, b = ${b}<br>`;
}