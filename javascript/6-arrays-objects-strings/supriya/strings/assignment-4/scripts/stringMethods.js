function sortString() {
  const input = document.getElementById("inputString").value;
  const sorted = input.split('').sort().join('');
  document.getElementById("result").textContent = sorted;
}