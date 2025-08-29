function escapeSpecialChars() {
  const input = document.getElementById("inputText").value;
  const escaped = input.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
  document.getElementById("output").textContent = escaped;
}