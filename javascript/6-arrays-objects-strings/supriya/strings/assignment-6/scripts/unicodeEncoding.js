
function getUnicodeValues() {
  const str = document.getElementById("input").value;
  const unicodeArray = Array.from(str).map((char) => char.charCodeAt(0));
  document.getElementById("output").textContent = JSON.stringify(unicodeArray);
}
