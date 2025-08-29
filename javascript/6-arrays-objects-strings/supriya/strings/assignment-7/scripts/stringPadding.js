function padAndShow() {
  const input = document.getElementById("inputString").value;
  const padded = input.padStart(10, '0');
  document.getElementById("result").textContent = padded;
}