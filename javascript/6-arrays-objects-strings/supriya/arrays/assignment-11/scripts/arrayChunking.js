function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
function handleChunk() {
  const input = document.getElementById("arrayInput").value;
  const size = parseInt(document.getElementById("chunkSize").value);

  if (!input || isNaN(size) || size <= 0) {
    document.getElementById("results").textContent =
      "Please enter a valid array and a positive chunk size.";
    return;
  }

  const arr = input
    .split(",")
    .map((item) => item.trim())
    .map(Number);
  const chunked = chunkArray(arr, size);
  document.getElementById("results").textContent = JSON.stringify(chunked);
}