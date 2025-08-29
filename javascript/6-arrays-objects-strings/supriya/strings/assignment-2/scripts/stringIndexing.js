function wordLengths() {
  const input = document.getElementById("inputText").value;
  const result = input.length === 0 ? null :input[0]+" "+input[input.length-1];
  document.getElementById("output").textContent = `"${result}"`;
}