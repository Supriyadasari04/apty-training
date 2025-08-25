function sumavg() {
  const input = document.getElementById("arr").value.trim();
  if (!input) {
    document.getElementById("final").textContent = "Please enter some numbers.";
    return;
  }
  const numArray = input.split(",").map(num => Number(num.trim()));
  if (numArray.some(isNaN)) {
    document.getElementById("final").textContent = "Please enter only valid numbers (comma-separated).";
    return;
  }
  let sum = 0;
  for (const num of numArray) {
    sum += num;
  }
  const average = sum / numArray.length;
  document.getElementById("final").innerHTML = 
    `Sum = ${sum}<br>Average = ${average}`;
}
