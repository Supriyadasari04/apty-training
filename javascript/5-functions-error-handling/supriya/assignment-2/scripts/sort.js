// Function Expression for sorting numbers
const sortArray = function(arr) {
  return arr.sort((a, b) => a - b);
};

function sortNumbers() {
  const input = document.getElementById("numbers").value;
  const numArray = input.split(",").map(n => Number(n.trim()));

  if (numArray.some(isNaN)) {
    document.getElementById("result").innerHTML = "<p>Please enter valid numbers.</p>";
    return;
  }

  const sortedArray = sortArray(numArray);

  // Create table dynamically
  let table = "<table><tr><th>Index</th><th>Value</th></tr>";
  sortedArray.forEach((val, index) => {
    table += `<tr><td>${index}</td><td>${val}</td></tr>`;
  });
  table += "</table>";

  document.getElementById("result").innerHTML = table;
}
