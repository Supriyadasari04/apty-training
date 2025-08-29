function wordLengths() {
  const input = document.getElementById("inputText").value;
  const result = input.split(" ").map(word => word.length).join(" ");
  document.getElementById("output").textContent = `"${result}"`;
}