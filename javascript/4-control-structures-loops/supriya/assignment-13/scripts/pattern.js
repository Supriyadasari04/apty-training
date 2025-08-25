function generatePyramid() {
  const rows = Number(document.getElementById("rows").value);
  let pattern = "";
  if (isNaN(rows) || rows <= 0) {
    document.getElementById("final").textContent = "Please enter a positive number.";
    return;
  }
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    pattern += spaces + stars + "\n";
  }
  document.getElementById("final").textContent = pattern;
}